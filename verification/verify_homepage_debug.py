from playwright.sync_api import sync_playwright

def verify_homepage_debug():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.on("console", lambda msg: print(f"Console log: {msg.text}"))
        page.on("pageerror", lambda err: print(f"Page Error: {err}"))

        try:
            page.goto("http://localhost:3000")
            page.wait_for_timeout(5000)
            page.screenshot(path="verification/homepage_debug.png")
            print("Screenshot taken")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homepage_debug()
