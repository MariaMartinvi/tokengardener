import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiShield, FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
    >
      <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FiShield size={24} />,
      title: t('expertise'),
      description: t('expertiseDesc')
    },
    {
      icon: <FiBriefcase size={24} />,
      title: t('tailoredStrategy'),
      description: t('tailoredStrategyDesc')
    },
    {
      icon: <FiCheckCircle size={24} />,
      title: t('proven'),
      description: t('provenDesc')
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('whyChooseUs')}
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
            Nos especializamos exclusivamente en marketing para activos tokenizados, aportando conocimiento experto y resultados probados a tu proyecto blockchain.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
