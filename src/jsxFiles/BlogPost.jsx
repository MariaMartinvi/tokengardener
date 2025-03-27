import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogData'; // Import the blog data

const BlogPost = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const post = blogPosts.find((p) => p.url.endsWith(slug)); // Match the slug with the blog post URL

  if (!post) {
    return <div className="container mx-auto px-4 py-16 text-center text-gray-600">Post no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Título del post */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>

      {/* Fecha y tiempo de lectura */}
      <div className="flex items-center text-gray-500 text-sm mb-6">
        <span className="mr-4">{post.date}</span>
        <span>•</span>
        <span className="ml-4">{post.readTime}</span>
      </div>

      {/* Imagen destacada */}
      <div className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-w-lg h-auto rounded-lg shadow-md mx-auto"
        />
      </div>

      {/* Contenido del post */}
      <div className="max-w-3xl text-gray-800 text-lg leading-relaxed">
        <p className="whitespace-pre-line">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;