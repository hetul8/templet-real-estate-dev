import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Vikram Malhotra',
      title: 'CEO, Tech Innovations',
      location: 'Celestial Towers, Mumbai',
      rating: 5,
      text: 'Unparalleled craftsmanship and attention to detail. Every corner of our penthouse speaks of luxury and sophistication. This is what true premium living feels like.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      name: 'Priya Deshmukh',
      title: 'Entrepreneur',
      location: 'Royal Enclave, Bangalore',
      rating: 5,
      text: 'From design consultation to final handover, the experience was seamless. Our villa is an architectural masterpiece that exceeds all expectations.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    },
    {
      name: 'Rajesh Khanna',
      title: 'Investment Banker',
      location: 'Grand Meridian, Gurgaon',
      rating: 5,
      text: 'Not just a home, but a statement. The quality, location, and amenities are world-class. Best investment decision we\'ve made.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
    }
  ];

  return (
    <section className="relative z-20 py-40 md:py-64 px-8 md:px-16 bg-zinc-950">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-[#d4af37] mx-auto mb-8"
          />

          <div className="text-xs tracking-[0.5em] uppercase text-[#d4af37] mb-8">
            Client Stories
          </div>
          <h2 className="serif text-6xl md:text-8xl text-white leading-[1.1]">
            Words of
            <span className="block text-[#d4af37]">Appreciation</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-black border border-stone-800 p-10 group-hover:border-[#d4af37]/50 transition-all">
                {/* Quote Icon */}
                <div className="absolute -top-6 -left-6 opacity-20">
                  <Quote className="w-20 h-20 text-[#d4af37]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-stone-300 leading-relaxed mb-10 font-light italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-8 border-t border-stone-800">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white mb-1">{testimonial.name}</div>
                    <div className="text-xs text-stone-500">{testimonial.title}</div>
                    <div className="text-xs text-[#d4af37] mt-1">{testimonial.location}</div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
