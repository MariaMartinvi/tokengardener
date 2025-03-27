import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

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

const CaseStudyCard = ({ image, title, description, results, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <h4 className="font-bold text-gray-800 mb-2">Resultados</h4>
        <ul className="space-y-2 mb-6">
          {results.map((result, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-teal-600 mr-2">✓</span>
              <span className="text-gray-600">{result}</span>
            </li>
          ))}
        </ul>

        <button className="flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors">
          <span className="mr-2">Ver caso completo</span>
          <FiArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      title: t('caseStudy1'),
      description: t('caseStudy1Desc'),
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      results: [
        "Recaudación de $5M en la fase inicial",
        "Cobertura en más de 20 medios especializados",
        "Crecimiento de comunidad de 0 a 15,000 miembros",
        "ROI de marketing de 300%"
      ]
    },
    {
      title: t('caseStudy2'),
      description: t('caseStudy2Desc'),
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      results: [
        "Sold-out en las primeras 24 horas",
        "Incremento del 500% en el valor del suelo",
        "Presencia en las principales plataformas NFT",
        "Colaboraciones con 10 influencers clave"
      ]
    },
    {
      title: t('caseStudy3'),
      description: t('caseStudy3Desc'),
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      results: [
        "Aumento de usuarios activos en un 300%",
        "Mejora en la retención de usuarios del 15% al 45%",
        "Incremento del TVL (Total Value Locked) de $2M a $10M",
        "Posicionamiento como referente en su nicho"
      ]
    },
    {
      title: "Campaña de Marketing para ICO",
      description: "Estrategia integral para la captación de inversores y promoción de una ICO en el sector financiero tokenizado, superando el objetivo inicial en un 150%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      results: [
        "Superación del hard cap en un 150%",
        "Participación de más de 5,000 inversores",
        "Generación de 3,500 leads cualificados",
        "25 artículos en medios especializados"
      ]
    },
    {
      title: "Expansión Internacional de Token de Utilidad",
      description: "Adaptación y localización de la estrategia de marketing para la expansión de un token de utilidad a mercados de Asia y Latinoamérica.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      results: [
        "Entrada exitosa en 5 nuevos mercados",
        "Traducción y adaptación cultural de materiales a 7 idiomas",
        "Incremento del 250% en usuarios internacionales",
        "Acuerdos con exchanges locales en cada región"
      ]
    },
    {
      title: "Relanzamiento de Plataforma DAO",
      description: "Estrategia de rebranding y relanzamiento para una plataforma DAO que buscaba revitalizar su imagen y atraer nuevos miembros a su gobernanza.",
      image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      results: [
        "Aumento del 400% en la participación de votaciones",
        "Crecimiento de miembros de la DAO de 500 a 3,000",
        "Incremento del valor del token de gobernanza en un 120%",
        "Mejora significativa en reconocimiento de marca"
      ]
    }
  ];

  return (
    <div>
      <PageHeader
        title={t('caseStudiesTitle')}
        description={t('caseStudiesDescription')}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                index={index}
                title={caseStudy.title}
                description={caseStudy.description}
                image={caseStudy.image}
                results={caseStudy.results}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl font-light italic mb-8 max-w-3xl mx-auto">
            "Token Gardener entendió perfectamente nuestras necesidades y diseñó una estrategia que impulsó nuestro token más allá de nuestras expectativas. Su conocimiento del ecosistema blockchain fue invaluable para nuestro éxito."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src="https://randomuser.me/api/portraits/men/76.jpg"
              alt="CEO Testimonio"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="font-bold">Miguel Hernández</p>
              <p className="text-teal-300">CEO, CryptoFinance Token</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Quieres ser nuestro próximo caso de éxito?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contáctanos hoy para discutir cómo podemos ayudarte a alcanzar tus objetivos de marketing para activos tokenizados.
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

export default CaseStudies;
