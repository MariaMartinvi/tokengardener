import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiTrendingUp, FiTarget, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Button from './Button.jsx';

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-14 h-14 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="pt-2">
        <Button variant="ghost" className="px-0">
          {/* Arrow icon */}
          <span className="mr-2">Leer más</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FiTrendingUp size={24} />,
      title: t('preLaunch'),
      description: t('preLaunchDesc'),
      delay: 0.1
    },
    {
      icon: <FiTarget size={24} />,
      title: t('launchStrategy'),
      description: t('launchStrategyDesc'),
      delay: 0.2
    },
    {
      icon: <FiUsers size={24} />,
      title: t('communityManagement'),
      description: t('communityManagementDesc'),
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('ourServices')}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-teal-600 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Ofrecemos soluciones de marketing especializadas para impulsar el éxito de tu proyecto de activos tokenizados en cada etapa de su desarrollo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/services" variant="primary" size="lg">
            {t('learnMore')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
