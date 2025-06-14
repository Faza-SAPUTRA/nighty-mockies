import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Star, Filter, Search } from 'lucide-react';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Toothless's Midnight Delight",
      description: "Dark chocolate mochi as mysterious and powerful as the Night Fury himself. Rich, deep flavors that dance on your tongue like shadows in the night.",
      price: "Rp 25,000",
      category: "chocolate",
      character: "Toothless",
      rating: 4.9,
      image: "/api/placeholder/300/300",
      color: "from-gray-900 to-black"
    },
    {
      id: 2,
      name: "Light Fury's Strawberry Kiss",
      description: "Sweet strawberry mochi with the elegance and grace of the Light Fury. Delicate pink hues hide an explosion of berry goodness.",
      price: "Rp 23,000",
      category: "fruit",
      character: "Light Fury",
      rating: 4.8,
      image: "/api/placeholder/300/300",
      color: "from-pink-200 to-white"
    },
    {
      id: 3,
      name: "Stormfly's Spiky Matcha",
      description: "Bold matcha flavor as fierce and energetic as Stormfly herself. Green tea perfection with a kick that'll wake up your taste buds!",
      price: "Rp 24,000",
      category: "matcha",
      character: "Stormfly",
      rating: 4.7,
      image: "/api/placeholder/300/300",
      color: "from-green-400 to-green-600"
    },
    {
      id: 4,
      name: "Hookfang's Fiery Vanilla",
      description: "Warm vanilla mochi with a fiery twist, just like Hookfang's temperamental but loyal nature. Comfort food with attitude!",
      price: "Rp 22,000",
      category: "vanilla",
      character: "Hookfang",
      rating: 4.6,
      image: "/api/placeholder/300/300",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 5,
      name: "Meatlug's Rocky Red Velvet",
      description: "Sturdy and dependable red velvet mochi, as reliable as Meatlug herself. Rich, velvety texture that's pure comfort in every bite.",
      price: "Rp 26,000",
      category: "red-velvet",
      character: "Meatlug",
      rating: 4.8,
      image: "/api/placeholder/300/300",
      color: "from-red-600 to-red-800"
    },
    {
      id: 6,
      name: "Barf & Belch's Double Trouble Taro",
      description: "Two-headed dragon, double the fun! Purple taro mochi with dual textures - creamy and chunky, just like this chaotic duo.",
      price: "Rp 27,000",
      category: "taro",
      character: "Barf & Belch",
      rating: 4.5,
      image: "/api/placeholder/300/300",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 7,
      name: "Cloudjumper's Shadow Sesame",
      description: "Mysterious black sesame mochi as wise and ancient as Cloudjumper. Nutty, earthy flavors that tell stories of old.",
      price: "Rp 25,000",
      category: "sesame",
      character: "Cloudjumper",
      rating: 4.7,
      image: "/api/placeholder/300/300",
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 8,
      name: "Skullcrusher's Tropical Mango",
      description: "Bright tropical mango mochi as bold and adventurous as Skullcrusher. Sunshine in every bite, perfect for brave souls!",
      price: "Rp 24,000",
      category: "fruit",
      character: "Skullcrusher",
      rating: 4.6,
      image: "/api/placeholder/300/300",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 9,
      name: "Grump's Sleepy Coffee Mocha",
      description: "Rich coffee mocha mochi for those lazy afternoons, inspired by Grump's love for naps. Wake up your senses with this caffeinated delight!",
      price: "Rp 26,000",
      category: "coffee",
      character: "Grump",
      rating: 4.8,
      image: "/api/placeholder/300/300",
      color: "from-amber-700 to-brown-800"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Dragons' },
    { id: 'chocolate', name: 'Chocolate' },
    { id: 'fruit', name: 'Fruity' },
    { id: 'matcha', name: 'Matcha' },
    { id: 'vanilla', name: 'Vanilla' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'taro', name: 'Taro' },
    { id: 'sesame', name: 'Sesame' },
    { id: 'red-velvet', name: 'Red Velvet' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.character.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dragon Collection
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your dragon companion! Each mochi cookie is crafted with the spirit 
            and personality of legendary dragons from the Isle of Berk.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search dragons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <motion.div
                  className={`w-full h-full bg-gradient-to-br ${product.color} flex items-center justify-center relative`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-6xl">🍪</span>
                  
                  {/* Floating Animation */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  </motion.div>
                </motion.div>

                {/* Favorite Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                >
                  <Heart size={18} />
                </motion.button>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="text-yellow-400 fill-current" size={14} />
                  <span className="text-white text-sm font-medium">{product.rating}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200"
                    >
                      Meet Dragon
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🐉</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Dragons Found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

