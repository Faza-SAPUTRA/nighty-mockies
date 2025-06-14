import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, ShoppingBag, MessageCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Products', path: '/products', icon: ShoppingBag },
    { name: 'Contact', path: '/contact', icon: MessageCircle },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                <span className="text-background font-bold text-sm">NM</span>
              </div>
              <span className="text-foreground font-bold text-xl">Nighty Mockie</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`relative flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 py-2 px-4 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive(item.path)
                      ? 'text-foreground bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;

