import { motion } from 'motion/react';
import { Building, Home, Wrench, Shield, Award, HeadphonesIcon } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Building,
      title: 'Ultra-Luxury Residences',
      description: 'Bespoke living spaces that redefine opulence. From penthouses to sky villas, each residence is a masterpiece.'
    },
    {
      icon: Home,
      title: 'Premium Villas',
      description: 'Independent estates crafted for those who appreciate privacy, exclusivity, and architectural brilliance.'
    },
    {
      icon: Wrench,
      title: 'Turnkey Solutions',
      description: 'Complete project execution with meticulous attention to every detail, from foundation to final furnishing.'
    },
    {
      icon: Shield,
      title: 'Investment Advisory',
      description: 'Strategic guidance on property investments with market insights and appreciation potential analysis.'
    },
    {
      icon: Award,
      title: 'Bespoke Design',
      description: 'Collaborate with renowned architects to customize your dream home down to the finest detail.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Concierge Services',
      description: 'Lifetime support and property management ensuring your investment remains pristine and valuable.'
    }
  ];

  return (
    <section id="services" className="relative py-32 md:py-48 px-8 md:px-16 bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
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
            Our Expertise
          </div>
          <h2 className="serif text-6xl md:text-8xl text-white leading-[1.1] mb-8">
            Comprehensive
            <span className="block text-[#d4af37]">Solutions</span>
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto font-light">
            From concept to completion, we orchestrate every aspect of luxury real estate development
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800/50">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
              className="bg-black p-12 group cursor-pointer relative overflow-hidden"
            >
              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-transparent"
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 mb-8"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#d4af37] to-[#f0d06c] flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl text-white mb-4 group-hover:text-[#d4af37] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-stone-400 leading-relaxed font-light mb-6">
                  {service.description}
                </p>

                {/* Bottom Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="h-px bg-[#d4af37]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
