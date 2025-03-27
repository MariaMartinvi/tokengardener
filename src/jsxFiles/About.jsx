import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';

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

const TeamMember = ({ image, name, position, bio, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-teal-600 font-medium mb-4">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Maria Martín",
      position: "CEO & CTO",
      bio: "Experta en SEO. Cofundadora de Tiendeo, empresa que fue adquirida por el Grupo Shopfully en 2022.",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      name: "Eva Martín",
      position: "CMO y ventas",
      bio: "Publicidad y CRMs. Cofundadora de Tiendeo, empresa que fue adquirida por el Grupo Shopfully en 2022.",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Chatgpt",
      position: "Full stack developer",
      bio: t('teamDesc3'),
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div>
      <PageHeader
        title={t('aboutTitle')}
        description={t('aboutDescription')}
      />

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-50 p-8 rounded-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('ourMission')}</h2>
              <div className="w-16 h-1 bg-teal-600 mb-6"></div>
              <p className="text-gray-600">{t('missionDesc')}</p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('ourVision')}</h2>
              <div className="w-16 h-1 bg-teal-600 mb-6"></div>
              <p className="text-gray-600">{t('visionDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('ourValues')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<FiHeart size={24} />}
              title={t('integrity')}
              description={t('integrityDesc')}
            />
            <ValueCard
              icon={<FiTarget size={24} />}
              title={t('innovation')}
              description={t('innovationDesc')}
            />
            <ValueCard
              icon={<FiEye size={24} />}
              title={t('excellence')}
              description={t('excellenceDesc')}
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('ourTeam')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo combina experiencia en marketing, conocimiento blockchain y pasión por la tecnología para ayudar a tu proyecto a alcanzar sus objetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                index={index}
                name={member.name}
                position={member.position}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
