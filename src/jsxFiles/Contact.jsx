import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const PageHeader = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-16 md:py-20">
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

const ContactInfo = ({ icon, title, content, link, isEmail, isPhone }) => {
  const element = link ? (
    <a
      href={link}
      className="text-gray-700 hover:text-teal-600 transition-colors"
      {...(isEmail && { 'aria-label': 'Email' })}
      {...(isPhone && { 'aria-label': 'Phone' })}
    >
      {content}
    </a>
  ) : (
    <span className="text-gray-700">{content}</span>
  );

  return (
    <div className="flex items-start mb-6">
      <div className="bg-teal-100 text-teal-600 p-3 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
        {element}
      </div>
    </div>
  );
};

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t('contactTitle')}
        description={t('contactDescription')}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      {t('nameLabel')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      {t('emailLabel')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="project" className="block text-gray-700 font-medium mb-2">
                      {t('projectLabel')}
                    </label>
                    <select
                      id="project"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="security-token">Token de Seguridad</option>
                      <option value="utility-token">Token de Utilidad</option>
                      <option value="nft">Colección NFT</option>
                      <option value="defi">Protocolo DeFi</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      {t('messageLabel')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-teal-600 text-white rounded-md font-medium hover:bg-teal-700 transition-colors"
                  >
                    <FiSend className="mr-2" />
                    {t('sendButton')}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h2>

                <ContactInfo
                  icon={<FiMapPin size={24} />}
                  title={t('address')}
                  content={t('addressValue')}
                />

                <ContactInfo
                  icon={<FiMail size={24} />}
                  title={t('email')}
                  content={t('emailValue')}
                  link="mailto:contacto@tokengardener.com"
                  isEmail
                />

                <ContactInfo
                  icon={<FiPhone size={24} />}
                  title={t('phone')}
                  content={t('phoneValue')}
                  link="tel:+34612345678"
                  isPhone
                />

                {/* Map or Image */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 mb-4">Ubicación</h3>
                  <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.7231635395997!2d-3.703497084307149!3d40.41668397936451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288272e272a7%3A0xcb6d483a9c2d3472!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1651253000000!5m2!1ses!2ses"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Token Gardener"
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios de marketing para activos tokenizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">¿Qué tipos de activos tokenizados pueden beneficiarse de vuestros servicios?</h3>
              <p className="text-gray-600">
                Ofrecemos servicios para todo tipo de activos tokenizados, incluyendo tokens de seguridad, tokens de utilidad, NFTs, tokens de gobernanza y proyectos DeFi. Adaptamos nuestra estrategia al tipo específico de token y sus objetivos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">¿Cuánto tiempo dura un proyecto típico de marketing?</h3>
              <p className="text-gray-600">
                La duración varía según el alcance del proyecto. Para lanzamientos de tokens, generalmente recomendamos comenzar al menos 3 meses antes. También ofrecemos servicios continuos post-lanzamiento para mantener y hacer crecer la comunidad.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">¿Ofrecéis servicios a proyectos internacionales?</h3>
              <p className="text-gray-600">
                Sí, trabajamos con proyectos de todo el mundo. Tenemos experiencia en adaptar estrategias para diferentes mercados y audiencias, con capacidad para comunicar en varios idiomas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">¿Cómo medís el éxito de vuestras campañas?</h3>
              <p className="text-gray-600">
                Utilizamos múltiples métricas según los objetivos del proyecto: crecimiento de comunidad, engagement, cobertura mediática, volumen de transacciones, interés de inversores, etc. Proporcionamos informes detallados con KPIs claramente definidos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
