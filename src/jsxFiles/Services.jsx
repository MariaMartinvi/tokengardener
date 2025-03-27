import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FiTrendingUp,
  FiTarget,
  FiEdit,
  FiUsers,
  FiMessageCircle,
  FiDollarSign,
  FiGlobe,
  FiSearch
} from 'react-icons/fi';

const PageHeader = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-white mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
        <motion.p
          className="text-xl text-teal-100 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

const ServiceItem = ({ id, icon, title, description, index }) => {
  return (
    <motion.div
      id={id}
      className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="md:col-span-2">
        <div className="bg-teal-600 p-8 rounded-lg text-white h-full flex flex-col justify-center">
          <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <div className="w-12 h-1 bg-white mb-4"></div>
          <p className="text-teal-100">
            Soluciones especializadas adaptadas a las necesidades específicas de tu proyecto blockchain.
          </p>
        </div>
      </div>
      <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-bold text-gray-800 mb-2">¿Qué incluye?</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">✓</span>
              <span className="text-gray-600">Análisis del mercado y competencia</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">✓</span>
              <span className="text-gray-600">Estrategia personalizada para tu token</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">✓</span>
              <span className="text-gray-600">Implementación y seguimiento continuo</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">✓</span>
              <span className="text-gray-600">Reportes de resultados mensuales</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "pre-launch",
      icon: <FiTrendingUp size={24} color="white" />,
      title: t('preLaunchMarketing'),
      description: t('preLaunchMarketingDesc')
    },
    {
      id: "token-launch",
      icon: <FiTarget size={24} color="white" />,
      title: t('tokenLaunch'),
      description: t('tokenLaunchDesc')
    },
    {
      id: "content",
      icon: <FiEdit size={24} color="white" />,
      title: t('contentMarketing'),
      description: t('contentMarketingDesc')
    },
    {
      id: "social-media",
      icon: <FiUsers size={24} color="white" />,
      title: t('socialMedia'),
      description: t('socialMediaDesc')
    },
    {
      id: "influencer",
      icon: <FiMessageCircle size={24} color="white" />,
      title: t('influencerMarketing'),
      description: t('influencerMarketingDesc')
    },
    {
      id: "investor",
      icon: <FiDollarSign size={24} color="white" />,
      title: t('investorRelations'),
      description: t('investorRelationsDesc')
    },
    {
      id: "pr-media",
      icon: <FiGlobe size={24} color="white" />,
      title: t('prMedia'),
      description: t('prMediaDesc')
    },
    {
      id: "seo",
      icon: <FiSearch size={24} color="white" />,
      title: t('seoStrategy'),
      description: t('seoStrategyDesc')
    }
  ];

  return (
    <div>
      <PageHeader
        title={t('servicesTitle')}
        description={t('servicesDescription')}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              index={index}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Listo para potenciar el marketing de tu activo tokenizado?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contáctanos hoy para discutir cómo podemos ayudarte a alcanzar tus objetivos de marketing blockchain.
          </p>
          <a
            href="/contact"
            className="inline-block bg-teal-600 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-teal-700 transition-colors duration-300"
          >
            {t('contact')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
