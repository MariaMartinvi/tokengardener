import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from './Button.jsx';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('heroTitle')}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('heroSubtitle')}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button to="/contact" size="lg">
                {t('getStarted')}
              </Button>
              <Button to="/services" variant="outline" size="lg">
                {t('learnMore')}
              </Button>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-full h-96 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="relative w-40 h-40">
                    {/* Stylized Token Icon */}
                    <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse"
                      style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-2 rounded-full bg-white opacity-40" />
                    <div className="absolute inset-4 rounded-full bg-white opacity-70" />
                    <div className="absolute inset-0 flex justify-center items-center">
                      <span className="text-6xl font-bold">TG</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white opacity-20" />
                <div className="absolute bottom-20 right-12 w-24 h-24 rounded-full bg-white opacity-15" />
                <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-white opacity-10" />
                <div className="absolute bottom-10 left-1/4 w-20 h-20 rounded-full bg-white opacity-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
