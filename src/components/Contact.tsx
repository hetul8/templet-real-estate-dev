'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative z-30 py-40 md:py-64 px-8 md:px-16 bg-raamah-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">

          {/* Left Column: Context & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs tracking-[0.4em] uppercase text-raamah-gold mb-8">
                Inquiries
              </div>
              <h2 className="serif text-5xl md:text-7xl text-white leading-[1.1] mb-12">
                Craft Your <br />
                <span className="text-raamah-gold italic">Legacy</span>
              </h2>
              <p className="text-white/70 text-lg font-light leading-relaxed max-w-md mb-16">
                We invite you to experience the extraordinary. Schedule a private consultation
                to discuss your vision with our senior advisors.
              </p>

              <div className="space-y-10">
                <div>
                  <div className="text-xs tracking-widest text-white/50 uppercase mb-3">Headquarters</div>
                  <p className="text-white text-xl serif">Tower A, Business Bay, Mumbai</p>
                </div>
                <div>
                  <div className="text-xs tracking-widest text-white/50 uppercase mb-3">Direct Line</div>
                  <p className="text-white text-xl serif">+91 98765 43210</p>
                </div>
                <div>
                  <div className="text-xs tracking-widest text-white/50 uppercase mb-3">Email</div>
                  <p className="text-white text-xl serif">luxury@raamah.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Minimalist Form */}
          <div className="lg:col-span-7 pt-12">
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-16">
                    <div className="group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-6 text-3xl text-white placeholder-white/30 outline-none focus:border-raamah-gold transition-colors font-light"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <div className="group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                          className="w-full bg-transparent border-b border-white/10 py-6 text-2xl text-white placeholder-white/30 outline-none focus:border-raamah-gold transition-colors font-light"
                        />
                      </div>
                      <div className="group">
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          required
                          value={formState.phone}
                          onChange={e => setFormState({...formState, phone: e.target.value})}
                          className="w-full bg-transparent border-b border-white/10 py-6 text-2xl text-white placeholder-white/30 outline-none focus:border-raamah-gold transition-colors font-light"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <textarea
                        placeholder="Tell us about your requirements..."
                        rows={1}
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-6 text-2xl text-white placeholder-white/30 outline-none focus:border-raamah-gold transition-colors resize-none font-light"
                      />
                    </div>

                    <div className="pt-12 flex justify-end">
                      <button
                        type="submit"
                        className="group flex items-center gap-6 text-white text-sm tracking-[0.3em] uppercase hover:text-raamah-gold transition-colors"
                      >
                        Submit Request
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 rounded-full border border-raamah-gold flex items-center justify-center mb-8">
                      <Check className="w-8 h-8 text-raamah-gold" />
                    </div>
                    <h3 className="serif text-4xl text-white mb-4">Request Received</h3>
                    <p className="text-white/50">We will be in touch shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
