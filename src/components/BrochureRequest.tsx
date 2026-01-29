'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Mail, Phone, MessageSquare } from 'lucide-react';
import { Property } from '../App';

interface BrochureRequestProps {
  property: Property;
}

export function BrochureRequest({ property }: BrochureRequestProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email' as 'whatsapp' | 'sms' | 'email',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', preferredContact: 'email' });
    }, 5000);
  };

  return (
    <div className="max-w-4xl">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-16">
              <h2 className="serif text-5xl md:text-6xl text-stone-900 mb-6">
                Request Documentation
              </h2>
              <p className="text-xl text-stone-600">
                Receive comprehensive property information for {property.name}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label className="block text-sm tracking-wider text-stone-500 mb-3">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none text-stone-900 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm tracking-wider text-stone-500 mb-3">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none text-stone-900 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm tracking-wider text-stone-500 mb-3">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none text-stone-900 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Delivery Method */}
              <div>
                <label className="block text-sm tracking-wider text-stone-500 mb-6">
                  PREFERRED DELIVERY
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'email', icon: Mail, label: 'Email' },
                    { id: 'whatsapp', icon: MessageSquare, label: 'WhatsApp' },
                    { id: 'sms', icon: Phone, label: 'SMS' }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: method.id as any })}
                      className={`p-6 border transition-all ${formData.preferredContact === method.id
                          ? 'border-stone-900 bg-stone-50'
                          : 'border-stone-200 hover:border-stone-300'
                        }`}
                    >
                      <method.icon className="w-6 h-6 mx-auto mb-3 text-stone-900" />
                      <div className="text-sm text-stone-900">{method.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-5 hover:bg-stone-800 transition-colors mt-12"
              >
                <span className="text-xs tracking-[0.2em] uppercase">Submit Request</span>
              </button>
            </form>

            {/* Info */}
            <div className="mt-16 pt-16 border-t border-stone-200">
              <h3 className="text-sm tracking-wider text-stone-500 mb-8">DOCUMENTATION INCLUDES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'High-resolution photography and floor plans',
                  'Detailed specifications and finishes',
                  'Location analysis and connectivity data',
                  'Pricing structure and payment options'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-stone-400 mt-2.5 rounded-full" />
                    <span className="text-stone-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-12"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="serif text-5xl text-stone-900 mb-6">
              Request Received
            </h2>

            <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">
              Your documentation for {property.name} will be delivered to your{' '}
              {formData.preferredContact} shortly.
            </p>

            <div className="bg-stone-100 p-12 max-w-2xl mx-auto">
              <h3 className="text-sm tracking-wider text-stone-500 mb-8">WHAT'S INCLUDED</h3>
              <div className="space-y-4 text-left">
                {[
                  'Complete property documentation',
                  'Floor plans and specifications',
                  'Location and market analysis',
                  'Pricing and payment options',
                  'Virtual tour access link'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-stone-900" />
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-500 mt-12">
              Our team will contact you within 24 hours to schedule a viewing.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
