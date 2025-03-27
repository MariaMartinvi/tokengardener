import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiClock, FiTag, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogData'; // Import blog posts data

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
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
          <div className="mt-auto">
            <Link
              to={post.url}
              className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
            >
              <span className="mr-2">Leer artículo completo</span>
              <FiArrowRight />
            </Link>
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
        <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
        <Link
          to={post.url}
          className="inline-flex items-center text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors"
        >
          <span className="mr-2">Leer más</span>
          <FiArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const { t } = useTranslation();

  const featuredPost = {
    title: "Cómo diseñar una tokenomics efectiva para tu proyecto blockchain",
    excerpt:
      "La tokenomics es el fundamento económico de cualquier proyecto basado en blockchain. En este artículo, exploramos los principios clave para diseñar una economía de tokens que fomente la adopción y el valor a largo plazo.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Tokenomics",
    date: "15 Mayo, 2024",
    readTime: "10 min lectura",
    url: "/blog/disenando-tokenomics-efectiva",
  };

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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Artículo Destacado
            </h2>
            <FeaturedPost post={featuredPost} />
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Artículos Recientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} post={post} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;