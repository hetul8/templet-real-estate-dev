from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})

    try:
        page.goto("http://localhost:3000")

        # Wait for content to load (Hero section etc)
        page.wait_for_timeout(5000)

        # Scroll to bottom
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(2000) # Wait for animations

        # Take a screenshot of the full page (or specific sections)
        # It's better to take screenshots of the specific sections if we can find them,
        # but a full page screenshot or bottom viewport screenshot works.

        # 1. Screenshot Testimonials
        # Assuming Testimonials is somewhat visible or we scroll to it.
        # Let's try to locate the sections by text content or structure.

        # Scroll to "Client Stories" (Testimonials)
        testimonials = page.get_by_text("Client Stories")
        if testimonials.count() > 0:
            testimonials.scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/testimonials.png")
            print("Testimonials screenshot taken.")

        # Scroll to "Inquiries" (Contact)
        contact = page.get_by_text("Inquiries")
        if contact.count() > 0:
            contact.scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/contact.png")
            print("Contact screenshot taken.")

        # Scroll to "RAAMAH" (Footer)
        footer = page.get_by_text("RAAMAH", exact=False).last
        if footer.count() > 0:
            footer.scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/footer.png")
            print("Footer screenshot taken.")

    except Exception as e:
        print(f"Error: {e}")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
