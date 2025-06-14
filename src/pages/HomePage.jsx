import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Sparkles, Zap, Shield, Award, Users, Clock, Flame, Crown, Gift } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Toothless's Midnight Delight",
      description: "Dark chocolate mochi as mysterious as the Night Fury himself",
      price: "Rp 25,000",
      image: "/api/placeholder/300/300",
      character: "Toothless"
    },
    {
      id: 2,
      name: "Light Fury's Strawberry Kiss",
      description: "Sweet strawberry mochi with the elegance of the Light Fury",
      price: "Rp 23,000",
      image: "/api/placeholder/300/300",
      character: "Light Fury"
    },
    {
      id: 3,
      name: "Stormfly's Spiky Matcha",
      description: "Bold matcha flavor as fierce as Stormfly's spikes",
      price: "Rp 24,000",
      image: "/api/placeholder/300/300",
      character: "Stormfly"
    }
  ];

  const whyChooseUs = [
    {
      icon: Crown,
      title: "Rasa Raja Naga",
      description: "Setiap gigitan adalah petualangan rasa yang tak terlupakan, dibuat dengan resep rahasia dari Pulau Berk!"
    },
    {
      icon: Shield,
      title: "Kualitas Terjamin",
      description: "Bahan premium pilihan yang sudah disetujui langsung oleh para pelatih naga terbaik!"
    },
    {
      icon: Zap,
      title: "Energi Naga",
      description: "Boost energi instant seperti terbang bersama Toothless! Cocok untuk petualangan harian kamu."
    },
    {
      icon: Heart,
      title: "Dibuat dengan Cinta",
      description: "Setiap mochi dibuat dengan kasih sayang seperti ikatan antara Hiccup dan Toothless."
    }
  ];

  const testimonials = [
    {
      name: "Hiccup Haddock",
      role: "Dragon Trainer",
      text: "Gila sih! Rasanya beneran kayak lagi terbang bareng Toothless. Mochi-nya lembut banget, bikin nagih!",
      rating: 5,
      avatar: "🧑‍🦰"
    },
    {
      name: "Astrid Hofferson",
      role: "Warrior Princess",
      text: "Aku yang biasanya galak, jadi meleleh pas nyoba Light Fury's Strawberry Kiss. Sweet banget kayak first kiss!",
      rating: 5,
      avatar: "👩‍🦳"
    },
    {
      name: "Fishlegs Ingerman",
      role: "Dragon Expert",
      text: "Secara ilmiah, ini adalah mochi terenak yang pernah ada! Teksturnya perfect, rasanya mind-blowing!",
      rating: 5,
      avatar: "🤓"
    }
  ];

  const specialOffers = [
    {
      icon: Gift,
      title: "Paket Dragon Squad",
      description: "Beli 5 mochi dapat 1 gratis! Perfect buat sharing sama geng kamu.",
      highlight: "HEMAT 20%"
    },
    {
      icon: Flame,
      title: "Midnight Special",
      description: "Order setelah jam 9 malam dapat diskon 15% untuk semua varian dark!",
      highlight: "DISKON 15%"
    },
    {
      icon: Star,
      title: "First Timer Bonus",
      description: "Customer baru langsung dapat voucher 10rb untuk pembelian selanjutnya!",
      highlight: "VOUCHER 10K"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4">
                  <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
                    Nighty
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                    Mockie
                  </span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Embark on a magical culinary adventure with our premium mochi cookies, 
                inspired by the legendary dragons of Berk
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="group bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Explore Dragons</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="border-2 border-foreground text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  <Sparkles className="text-foreground" size={16 + Math.random() * 8} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-foreground rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kenapa Harus Nighty Mockie?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bukan cuma mochi biasa, ini adalah pengalaman kuliner yang bakal bikin kamu ketagihan!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-border/60 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Dragons
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each mochi cookie is crafted with love and inspired by the unique personality 
              of our favorite dragon friends
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-border/60 transition-all duration-300"
              >
                <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center"
                  >
                    <span className="text-4xl">🍪</span>
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-foreground">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-foreground text-background px-4 py-2 rounded-full font-semibold hover:bg-foreground/90 transition-colors duration-200"
                  >
                    <Heart size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View All Dragons</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-gradient-to-r from-accent/30 to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Promo Gila-Gilaan! 🔥
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jangan sampai ketinggalan promo spektakuler yang bikin dompet happy dan perut kenyang!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {offer.highlight}
                </div>
                
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <offer.icon className="text-primary" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{offer.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{offer.description}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                >
                  Ambil Promo!
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kata Mereka yang Udah Nyoba
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jangan percaya sama kita aja, dengerin testimoni dari para dragon trainer yang udah merasakan keajaibannya!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-border/60 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Dragon Squad! 🐉
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Gabung sama ribuan dragon lovers lainnya dan dapetin update terbaru, promo eksklusif, dan tips rahasia dari para dragon master!
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "5000+", label: "Happy Dragons", icon: Users },
              { number: "50+", label: "Varian Rasa", icon: Award },
              { number: "24/7", label: "Dragon Magic", icon: Clock },
              { number: "100%", label: "Pure Happiness", icon: Heart }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-foreground mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-4xl">🐉</span>
              <Heart className="text-red-500 fill-current" size={32} />
              <span className="text-4xl">🍪</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Dragon Adventure?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Jangan cuma jadi penonton! Saatnya kamu merasakan sendiri keajaiban mochi cookies yang udah bikin ribuan orang jatuh cinta. Your perfect dragon companion is just one click away!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors duration-200"
              >
                <span>Mulai Petualangan Sekarang!</span>
                <Zap size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

