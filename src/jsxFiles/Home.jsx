import React from 'react';
import Hero from './Hero.jsx';
import ServicesSection from './ServicesSection.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiBriefcase, FiBarChart2, FiCheck } from 'react-icons/fi';

const StatCard = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className="text-teal-600 mb-2">{icon}</div>
      <h4 className="text-3xl font-bold text-gray-800 mb-1">{value}</h4>
      <p className="text-gray-600 text-center">{label}</p>
    </div>
  );
};

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Listo para hacer crecer tu proyecto de activos tokenizados?
        </motion.h2>
        <motion.p
          className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Nuestro equipo de expertos está listo para ayudarte a diseñar e implementar la estrategia de marketing perfecta para tu token o NFT.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="/contact" className="inline-block bg-white text-teal-700 py-3 px-8 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-300">
            {t('getStarted')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={<FiBriefcase size={32} />}
            value="50+"
            label="Proyectos Blockchain Exitosos"
          />
          <StatCard
            icon={<FiBarChart2 size={32} />}
            value="$30M+"
            label="En Recaudación de Fondos"
          />
          <StatCard
            icon={<FiCheck size={32} />}
            value="100%"
            label="Especialización en Activos Tokenizados"
          />
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Token Gardener transformó por completo nuestra estrategia de marketing. Su conocimiento de la industria blockchain y su enfoque innovador nos ayudó a destacar en un mercado saturado.",
      author: "Carlos Vélez",
      position: "CEO, BlockSecure Token",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Nuestra colección NFT se agotó en menos de 24 horas gracias a la estrategia de pre-lanzamiento diseñada por Token Gardener. Su experiencia en el espacio crypto es inigualable.",
      author: "Ana Morales",
      position: "Fundadora, ArtChain NFT",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
