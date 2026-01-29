import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-stone-800">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="serif text-5xl text-[#d4af37] mb-6">PRESTIGE</div>
            <p className="text-stone-400 leading-relaxed mb-8 font-light">
              Crafting architectural masterpieces since 2005. Where luxury meets legacy, 
              and dreams transform into extraordinary living spaces.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 border border-stone-700 hover:border-[#d4af37] flex items-center justify-center text-stone-400 hover:text-[#d4af37] transition-all group"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-8">Explore</h3>
            <ul className="space-y-4">
              {['About Us', 'Portfolio', 'Services', 'Testimonials', 'Careers', 'Press'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-stone-400 hover:text-white transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="md:col-span-3">
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-8">Projects</h3>
            <ul className="space-y-4">
              {['Celestial Towers', 'Royal Enclave', 'Grand Meridian', 'Upcoming Launches'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-stone-400 hover:text-white transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-8">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone-400 font-light">
                <MapPin className="w-4 h-4 text-[#d4af37] mt-1 flex-shrink-0" />
                <span className="text-sm">Tower A, Business Bay<br />BKC, Mumbai 400051</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400 font-light">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400 font-light">
                <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span className="text-sm">luxury@prestige.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-stone-500 text-sm font-light">
            © 2024 Prestige Developers. All rights reserved.
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-stone-500 hover:text-[#d4af37] transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-stone-500 hover:text-[#d4af37] transition-colors font-light">Terms of Service</a>
            <a href="#" className="text-stone-500 hover:text-[#d4af37] transition-colors font-light">RERA: P51700000001</a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    </footer>
  );
}
