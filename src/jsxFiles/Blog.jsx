import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiClock, FiTag, FiArrowRight } from 'react-icons/fi';

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

const FeaturedPost = ({ post }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/2">
          <img
            className="h-64 w-full object-cover md:h-full"
            src={post.image}
            alt={post.title}
          />
        </div>
        <div className="p-8 md:w-1/2">
          <div className="uppercase tracking-wide text-sm text-teal-600 font-semibold mb-1">
            {post.category}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <FiClock className="mr-1" />
            <span className="mr-4">{post.date}</span>
            <FiTag className="mr-1" />
            <span>{post.readTime}</span>
          </div>
          <p className="text-gray-600 mb-6">
            {post.excerpt}
          </p>
          <div className="mt-auto">
            <a
              href={post.url}
              className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
            >
              <span className="mr-2">Leer artículo completo</span>
              <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img
        className="h-48 w-full object-cover"
        src={post.image}
        alt={post.title}
      />
      <div className="p-6">
        <div className="uppercase tracking-wide text-xs text-teal-600 font-semibold mb-1">
          {post.category}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
        <div className="flex items-center text-gray-500 text-xs mb-3">
          <FiClock className="mr-1" />
          <span className="mr-3">{post.date}</span>
          <FiTag className="mr-1" />
          <span>{post.readTime}</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm">
          {post.excerpt}
        </p>
        <a
          href={post.url}
          className="inline-flex items-center text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors"
        >
          <span className="mr-2">Leer más</span>
          <FiArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const { t } = useTranslation();

  const featuredPost = {
    title: "Cómo diseñar una tokenomics efectiva para tu proyecto blockchain",
    excerpt: "La tokenomics es el fundamento económico de cualquier proyecto basado en blockchain. En este artículo, exploramos los principios clave para diseñar una economía de tokens que fomente la adopción y el valor a largo plazo.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Tokenomics",
    date: "15 Mayo, 2024",
    readTime: "10 min lectura",
    url: "/blog/disenando-tokenomics-efectiva"
  };

  const blogPosts = [
    {
      title: "5 estrategias de marketing pre-lanzamiento para tokens de seguridad",
      excerpt: "Preparar el terreno antes del lanzamiento es crucial para el éxito de un token de seguridad. Analizamos las mejores prácticas para generar interés y credibilidad.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      category: "Marketing",
      date: "10 Mayo, 2024",
      readTime: "8 min lectura",
      url: "/blog/estrategias-pre-lanzamiento-tokens"
    },
    {
      title: "El papel de las comunidades en el éxito de los NFTs",
      excerpt: "Las comunidades son el motor que impulsa el valor de los NFTs. Descubre cómo construir y mantener una comunidad comprometida alrededor de tu colección.",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      category: "NFTs",
      date: "2 Mayo, 2024",
      readTime: "7 min lectura",
      url: "/blog/comunidades-exito-nfts"
    },
    {
      title: "Regulación de activos tokenizados: panorama actual en España",
      excerpt: "El marco regulatorio para los activos tokenizados está evolucionando rápidamente. Analizamos la situación actual en España y cómo prepararse para cumplir con la normativa.",
      image: "https://images.unsplash.com/photo-1607944024060-0450380ddd33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      category: "Regulación",
      date: "25 Abril, 2024",
      readTime: "12 min lectura",
      url: "/blog/regulacion-activos-tokenizados-espana"
    },
    {
      title: "Cómo los influencers están transformando el marketing crypto",
      excerpt: "El marketing con influencers ha adquirido una nueva dimensión en el espacio blockchain. Exploramos casos de éxito y mejores prácticas para colaboraciones efectivas.",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      category: "Influencers",
      date: "18 Abril, 2024",
      readTime: "9 min lectura",
      url: "/blog/influencers-marketing-crypto"
    },
    {
      title: "Tendencias de marketing blockchain para 2024",
      excerpt: "El marketing en el sector blockchain evoluciona rápidamente. Analizamos las tendencias emergentes que dominarán las estrategias de marketing crypto en 2024.",
      image: "https://images.unsplash.com/photo-1639322537136-be61a6f506f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      category: "Tendencias",
      date: "5 Abril, 2024",
      readTime: "11 min lectura",
      url: "/blog/tendencias-marketing-blockchain-2024"
    },
    {
      title: "Casos de uso reales: tokenización de activos inmobiliarios",
      excerpt: "La tokenización está transformando el sector inmobiliario. Examinamos casos de éxito y el potencial de esta tecnología para democratizar la inversión inmobiliaria.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      category: "Tokenización",
      date: "28 Marzo, 2024",
      readTime: "10 min lectura",
      url: "/blog/tokenizacion-inmobiliaria-casos-reales"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Blog & Recursos"
        description="Conocimientos, tendencias y estrategias sobre marketing para activos tokenizados"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Artículo Destacado</h2>
            <FeaturedPost post={featuredPost} />
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Artículos Recientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} post={post} index={index} />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Anterior
              </a>
              <a href="#" className="px-4 py-2 border border-teal-600 rounded-md text-sm font-medium text-white bg-teal-600">
                1
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                2
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                3
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Siguiente
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Suscríbete a Nuestro Newsletter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Recibe las últimas noticias, tendencias y estrategias sobre marketing para activos tokenizados directamente en tu bandeja de entrada.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="px-6 py-3 bg-teal-600 text-white rounded-md font-medium hover:bg-teal-700 transition-colors">
                Suscribirse
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Nos comprometemos a respetar tu privacidad. No compartiremos tu información.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
