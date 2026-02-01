'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Luxury Residences',
    budget: '5-10 Cr',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', interest: 'Luxury Residences', budget: '5-10 Cr', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative z-30 py-40 md:py-64 px-8 md:px-16 bg-black">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-px bg-[#d4af37] mb-8"
            />

            <div className="text-xs tracking-[0.5em] uppercase text-[#d4af37] mb-8">
              Connect With Us
            </div>

            <h2 className="serif text-6xl md:text-7xl text-white mb-12 leading-[1.1]">
              Begin Your
              <span className="block text-[#d4af37]">Journey</span>
            </h2>

            <p className="text-xl text-stone-400 leading-relaxed mb-16 font-light">
              Schedule a private consultation with our specialists.
              Experience luxury living firsthand through exclusive property tours.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: 'Head Office',
                  content: 'Tower A, Business Bay\nBandra Kurla Complex, Mumbai 400051'
                },
                {
                  icon: Phone,
                  title: 'Reach Us',
                  content: '+91 98765 43210\n+91 98765 43211 (WhatsApp)'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'luxury@raamah.com\nsales@raamah.com'
                },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  content: 'Monday - Saturday: 10:00 AM - 8:00 PM\nSunday: By Appointment'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#f0d06c] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-xs text-[#d4af37] mb-2 tracking-wider">{item.title}</div>
                    <div className="text-stone-300 text-sm whitespace-pre-line font-light">{item.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-zinc-950 border border-stone-800 p-12"
                >
                  <div className="space-y-8">
                    <div>
                      <label className="block text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-stone-700 focus:border-[#d4af37] outline-none text-white py-3 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border-b border-stone-700 focus:border-[#d4af37] outline-none text-white py-3 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-transparent border-b border-stone-700 focus:border-[#d4af37] outline-none text-white py-3 transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4">
                          Interest
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full bg-transparent border-b border-stone-700 focus:border-[#d4af37] outline-none text-white py-3 transition-colors"
                        >
                          <option className="bg-black">Luxury Residences</option>
                          <option className="bg-black">Premium Villas</option>
                          <option className="bg-black">Commercial Spaces</option>
                          <option className="bg-black">Investment Advisory</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-transparent border-b border-stone-700 focus:border-[#d4af37] outline-none text-white py-3 transition-colors"
                        >
                          <option className="bg-black">5-10 Cr</option>
                          <option className="bg-black">10-20 Cr</option>
                          <option className="bg-black">20+ Cr</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4">
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full bg-transparent border-b border-stone-700 focus:border-[#d4af37] outline-none text-white py-3 resize-none transition-colors"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#d4af37] to-[#f0d06c] text-black py-5 flex items-center justify-center gap-3 group relative overflow-hidden"
                    >
                      <span className="text-xs tracking-[0.3em] uppercase font-medium">Submit Inquiry</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-zinc-950 border border-[#d4af37] p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <CheckCircle className="w-10 h-10 text-black" />
                  </motion.div>

                  <h3 className="serif text-4xl text-white mb-4">Thank You</h3>
                  <p className="text-stone-400 mb-2">Your inquiry has been received.</p>
                  <p className="text-sm text-[#d4af37]">Our luxury advisor will contact you within 24 hours</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
