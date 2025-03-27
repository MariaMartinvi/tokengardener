import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Token Gardener</h3>
            <p className="text-gray-400 mb-4">
              Especialistas en marketing para activos tokenizados, ayudando a proyectos blockchain a crecer y prosperar.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('caseStudies')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#pre-launch" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('preLaunchMarketing')}
                </Link>
              </li>
              <li>
                <Link to="/services#token-launch" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('tokenLaunch')}
                </Link>
              </li>
              <li>
                <Link to="/services#content" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('contentMarketing')}
                </Link>
              </li>
              <li>
                <Link to="/services#social-media" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('socialMedia')}
                </Link>
              </li>
              <li>
                <Link to="/services#influencer" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('influencerMarketing')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-teal-500" />
                <span className="text-gray-400">{t('addressValue')}</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-teal-500" />
                <a href="mailto:contacto@tokengardener.com" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('emailValue')}
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-teal-500" />
                <a href="tel:+34612345678" className="text-gray-400 hover:text-teal-500 transition-colors">
                  {t('phoneValue')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('allRightsReserved')}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">
              {t('privacyPolicy')}
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-teal-500 transition-colors text-sm">
              {t('termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
