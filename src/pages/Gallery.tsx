import React from 'react';
import { ArrowLeft, Palette, Image, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  // Using Pexels placeholder images for the gallery
  const artworks = [
    {
      id: 1,
      title: 'Digital Landscape',
      description: 'A serene digital landscape featuring mountains and reflections',
      image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Digital Art',
      featured: true
    },
    {
      id: 2,
      title: 'Abstract Composition',
      description: 'Modern abstract artwork with vibrant colors and geometric shapes',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Abstract',
      featured: false
    },
    {
      id: 3,
      title: 'Portrait Study',
      description: 'Digital portrait exploring light and shadow techniques',
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Portrait',
      featured: true
    },
    {
      id: 4,
      title: 'Nature Illustration',
      description: 'Detailed botanical illustration with digital enhancement',
      image: 'https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Nature',
      featured: false
    },
    {
      id: 5,
      title: 'Concept Art',
      description: 'Futuristic concept art piece exploring sci-fi themes',
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Concept Art',
      featured: true
    },
    {
      id: 6,
      title: 'Typography Design',
      description: 'Creative typography design with modern aesthetic',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Typography',
      featured: false
    }
  ];

  const categories = ['All', 'Digital Art', 'Abstract', 'Portrait', 'Nature', 'Concept Art', 'Typography'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredArtworks = selectedCategory === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-2">
              <Palette className="text-purple-600" size={24} />
              <h1 className="text-xl font-bold text-slate-900">Digital Art Gallery</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            My Creative Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Exploring the intersection of technology and creativity through digital art, 
            design, and visual storytelling
          </p>
          <div className="flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200">
            <Star className="text-yellow-500" size={20} />
            <span className="text-slate-700 font-medium">Featured Works & Personal Projects</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-slate-900 text-white'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {artwork.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star size={12} />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Image className="text-white" size={16} />
                        <span className="text-white text-sm font-medium">{artwork.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{artwork.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{artwork.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-900 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Like What You See?</h3>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
              I'm always working on new creative projects and exploring different artistic styles. 
              Let's collaborate on something amazing!
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-slate-100 hover:scale-105"
            >
              <Palette size={20} />
              Let's Create Together
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;