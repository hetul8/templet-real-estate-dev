import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-raamah-black pt-32 pb-12 px-8 md:px-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        <div className="flex flex-col gap-16 mb-32">
          {/* Massive Wordmark */}
           <div className="relative">
             <h1 className="serif text-[15vw] md:text-[12rem] text-raamah-gold leading-[0.8] tracking-tighter opacity-90 select-none pointer-events-none">
              RAAMAH
            </h1>
           </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/5 pb-16">
            <p className="text-white/50 max-w-md text-lg font-light leading-relaxed">
              Crafting architectural masterpieces since 2005. <br/>Where luxury meets legacy.
            </p>

             {/* Socials - Minimal */}
            <div className="flex gap-10">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/50 hover:text-raamah-gold transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links Grid - Simplified */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-12 mb-32">
          <div className="space-y-8">
            <h4 className="text-xs text-white uppercase tracking-[0.2em] opacity-50">Explore</h4>
            <ul className="space-y-6">
              {['About Us', 'Our Portfolio', 'Services', 'Latest News'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-raamah-gold transition-colors text-base font-light block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs text-white uppercase tracking-[0.2em] opacity-50">Projects</h4>
            <ul className="space-y-6">
              {['Celestial Towers', 'Royal Enclave', 'Grand Meridian'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-raamah-gold transition-colors text-base font-light block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 md:col-span-2">
             <h4 className="text-xs text-white uppercase tracking-[0.2em] opacity-50">Newsletter</h4>
             <div className="flex flex-col gap-4">
               <div className="relative group">
                 <input
                   type="email"
                   placeholder="Enter your email address"
                   className="bg-transparent w-full text-white border-b border-white/10 py-4 focus:outline-none focus:border-raamah-gold placeholder-white/30 font-light text-xl transition-colors"
                 />
                 <button className="absolute right-0 top-1/2 -translate-y-1/2 text-raamah-gold text-xs uppercase tracking-widest hover:text-white transition-colors">Subscribe</button>
               </div>
               <p className="text-xs text-white/40 mt-2">Join our exclusive circle for previews of upcoming projects.</p>
             </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-light uppercase tracking-wider">
          <div>© 2024 Raamah Developers. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
