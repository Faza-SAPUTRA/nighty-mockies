import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Star, Share2, ShoppingBag, MessageCircle } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const products = [
    {
      id: 1,
      name: "Toothless's Midnight Delight",
      shortDescription: "Dark chocolate mochi as mysterious as the Night Fury himself",
      fullDescription: "Meet Toothless in mochi form! This isn't just any chocolate cookie - it's a midnight adventure wrapped in the softest, chewiest texture you've ever experienced. Made with premium dark chocolate from the finest cocoa beans, each bite reveals layers of rich, complex flavors that dance on your tongue like Toothless soaring through the night sky. The deep, mysterious color mirrors our beloved Night Fury's sleek scales, while the intense chocolate flavor captures his powerful yet gentle spirit. Perfect for those brave enough to befriend a dragon!",
      price: "Rp 25,000",
      category: "chocolate",
      character: "Toothless",
      rating: 4.9,
      reviews: 127,
      image: "/api/placeholder/500/500",
      color: "from-gray-900 to-black",
      ingredients: ["Premium dark chocolate", "Glutinous rice flour", "Coconut milk", "Organic sugar", "Vanilla extract", "Dragon magic ✨"],
      nutritionFacts: {
        calories: "180 per piece",
        protein: "3g",
        carbs: "28g",
        fat: "7g",
        sugar: "15g"
      },
      story: "Legend says that Toothless himself approved this recipe during a midnight flight over Berk. The deep chocolate flavor represents his mysterious nature, while the soft texture mirrors his gentle heart beneath that fierce exterior.",
      tips: "Best enjoyed under starlight, just like Toothless prefers! Pair with warm milk for the ultimate cozy experience."
    },
    {
      id: 2,
      name: "Light Fury's Strawberry Kiss",
      shortDescription: "Sweet strawberry mochi with the elegance of the Light Fury",
      fullDescription: "Graceful and enchanting, just like the Light Fury herself! This delicate strawberry mochi captures the essence of pure elegance with its soft pink hue and incredibly smooth texture. Made with real strawberry puree and a hint of cream, each bite is like receiving a gentle kiss from the Light Fury. The subtle sweetness and fruity aroma will transport you to the Hidden World, where everything sparkles with magic and wonder. It's not just a cookie - it's a love letter to all things beautiful and pure.",
      price: "Rp 23,000",
      category: "fruit",
      character: "Light Fury",
      rating: 4.8,
      reviews: 98,
      image: "/api/placeholder/500/500",
      color: "from-pink-200 to-white",
      ingredients: ["Fresh strawberry puree", "Glutinous rice flour", "Heavy cream", "Organic cane sugar", "Rose water", "Fairy dust 🧚‍♀️"],
      nutritionFacts: {
        calories: "165 per piece",
        protein: "2g",
        carbs: "32g",
        fat: "4g",
        sugar: "18g"
      },
      story: "The Light Fury shared this recipe during her first visit to Berk, wanting to create something as pure and beautiful as her bond with Toothless. Each cookie is made with love and a touch of Hidden World magic.",
      tips: "Serve chilled for the most refreshing experience! Perfect with chamomile tea during sunset moments."
    },
    {
      id: 3,
      name: "Stormfly's Spiky Matcha",
      shortDescription: "Bold matcha flavor as fierce as Stormfly's spikes",
      fullDescription: "Fierce, bold, and absolutely unforgettable - just like Stormfly! This vibrant green matcha mochi packs a punch that'll wake up all your senses. Made with premium ceremonial-grade matcha powder imported directly from Japan, it delivers an earthy, slightly bitter flavor that's perfectly balanced with subtle sweetness. The intense green color matches Stormfly's beautiful scales, while the bold flavor represents her fearless spirit and unwavering loyalty. Don't let the cute appearance fool you - this cookie means business!",
      price: "Rp 24,000",
      category: "matcha",
      character: "Stormfly",
      rating: 4.7,
      reviews: 89,
      image: "/api/placeholder/500/500",
      color: "from-green-400 to-green-600",
      ingredients: ["Ceremonial grade matcha", "Glutinous rice flour", "Coconut cream", "Organic sugar", "Sea salt", "Warrior spirit 🗡️"],
      nutritionFacts: {
        calories: "170 per piece",
        protein: "4g",
        carbs: "26g",
        fat: "6g",
        sugar: "12g"
      },
      story: "Stormfly insisted on the strongest matcha possible for her signature cookie. She personally tested dozens of recipes until she found one that matched her fierce personality and unwavering determination.",
      tips: "Best enjoyed when you need an energy boost! The natural caffeine from matcha will give you Stormfly's legendary focus and determination."
    }
    // Add more products as needed...
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🐉</div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Dragon Not Found</h2>
          <Link to="/products" className="text-blue-400 hover:text-blue-300">
            Return to Dragon Collection
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order ${quantity}x ${product.name} (${product.price} each). Total: Rp ${(parseInt(product.price.replace(/[^\d]/g, '')) * quantity).toLocaleString('id-ID')}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Dragon Collection</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <motion.div
                className={`w-full h-full bg-gradient-to-br ${product.color} flex items-center justify-center relative`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-9xl"
                >
                  🍪
                </motion.span>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200 ${
                    isFavorite ? 'bg-red-500 text-white' : 'bg-background/50 text-foreground hover:bg-background/70'
                  }`}
                >
                  <Heart size={20} className={isFavorite ? 'fill-current' : ''} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-background/50 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background/70 transition-colors duration-200"
                >
                  <Share2 size={20} />
                </motion.button>
              </div>
            </div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center space-x-4 bg-card/50 backdrop-blur-sm rounded-xl p-4"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-foreground font-semibold">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </motion.div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Title and Price */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-foreground">{product.price}</span>
                <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  In Stock
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Dragon Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Quantity and Order */}
            <div className="space-y-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">Quantity</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-card text-foreground rounded-full flex items-center justify-center hover:bg-card/80 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-foreground w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-card text-foreground rounded-full flex items-center justify-center hover:bg-card/80 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-500 text-black py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-green-400 transition-colors duration-200"
              >
                <MessageCircle size={24} />
                <span>Order via WhatsApp</span>
              </motion.button>

              <div className="text-center">
                <span className="text-2xl font-bold text-foreground">
                  Total: Rp {(parseInt(product.price.replace(/[^\d]/g, '')) * quantity).toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-foreground font-semibold mb-3">Ingredients</h4>
                <ul className="space-y-1">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-muted-foreground text-sm">
                      • {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-foreground font-semibold mb-3">Nutrition Facts</h4>
                <div className="space-y-1">
                  {Object.entries(product.nutritionFacts).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground capitalize">{key}:</span>
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dragon Tips */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-800/30">
              <h4 className="text-foreground font-semibold mb-3 flex items-center space-x-2">
                <span>🐉</span>
                <span>Dragon Master's Tips</span>
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.tips}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

