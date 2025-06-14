import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, Heart } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = `Hi Nighty Mockie! I'm interested in your dragon cookies. My name is ${formData.name || '[Name]'} and I'd like to know more about your products.`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name} - Nighty Mockie Inquiry`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:hello@nightymockie.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick response, instant ordering",
      value: "+62 812-3456-7890",
      action: handleWhatsAppContact,
      color: "from-green-500 to-green-600",
      buttonText: "Chat Now"
    },
    {
      icon: Mail,
      title: "Email",
      description: "For detailed inquiries",
      value: "hello@nightymockie.com",
      action: () => window.location.href = 'mailto:hello@nightymockie.com',
      color: "from-blue-500 to-blue-600",
      buttonText: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call us directly",
      value: "+62 812-3456-7890",
      action: () => window.location.href = 'tel:+6281234567890',
      color: "from-purple-500 to-purple-600",
      buttonText: "Call Now"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 5:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Contact Our Dragon Trainers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to embark on a delicious adventure? Our friendly dragon trainers are here 
            to help you choose the perfect mochi companion and answer all your questions!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-border/60 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center`}>
                    <method.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                    <p className="text-muted-foreground/80 text-sm mb-4">{method.value}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={method.action}
                      className={`bg-gradient-to-r ${method.color} text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-200`}
                    >
                      {method.buttonText}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Business Hours</h3>
              </div>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="text-foreground font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="text-red-400" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Visit Our Dragon Lair</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Jl. Dragon Valley No. 123<br />
                Berk District, Jakarta 12345<br />
                Indonesia
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-400 transition-colors duration-200"
              >
                View on Map
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
            
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground font-semibold mb-2">
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-semibold mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-200 resize-none"
                  placeholder="Tell us about your dragon cookie dreams..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-foreground text-background py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-foreground/90 transition-colors duration-200"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>

            {/* Quick WhatsApp */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Need immediate assistance? Chat with us on WhatsApp!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppContact}
                  className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 mx-auto hover:bg-green-400 transition-colors duration-200"
                >
                  <MessageCircle size={20} />
                  <span>Quick WhatsApp</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long do the mochi cookies stay fresh?",
                answer: "Our dragon cookies stay fresh for up to 5 days when stored in an airtight container at room temperature. For best taste, we recommend enjoying them within 2-3 days!"
              },
              {
                question: "Do you offer custom dragon flavors?",
                answer: "Absolutely! We love creating new dragon adventures. Contact us with your flavor ideas and we'll work our magic to bring your dream dragon cookie to life!"
              },
              {
                question: "Can I order for special events?",
                answer: "Yes! We offer special packaging and bulk orders for birthdays, parties, and events. Contact us at least 3 days in advance for custom orders."
              },
              {
                question: "Are your cookies suitable for vegetarians?",
                answer: "Most of our dragon cookies are vegetarian-friendly! Check the ingredients list for each flavor, or contact us for specific dietary requirements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center bg-gradient-to-r from-card/50 to-secondary/50 backdrop-blur-sm rounded-2xl p-12 border border-border"
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
            Join thousands of happy customers who have discovered the magic of Nighty Mockie. 
            Your perfect dragon companion is just a message away!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppContact}
            className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-colors duration-200"
          >
            Start Your Adventure Now! 🚀
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

