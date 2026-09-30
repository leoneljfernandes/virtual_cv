import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="w-full flex flex-col items-center justify-center min-h-[80vh] px-4 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-foreground">
          {t('hero.title')}
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground mt-4">
          <span className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            leo99.fernandes@gmail.com
          </span>
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            +54 9 11 3357 3444
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {t('hero.location')}
          </span>
        </div>

        <div className="flex items-center justify-center space-x-4 pt-6">
          <a 
            href="https://github.com/leoneljfernandes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-foreground text-background rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <FaGithub className="w-4 h-4 mr-2" />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/leonel-julian-fernandes/?isSelfProfile=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 border border-border bg-background text-foreground rounded-md text-sm font-medium hover:bg-muted transition-colors"
          >
            <FaLinkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-12 flex justify-center"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-border bg-muted/30 overflow-hidden flex items-center justify-center shadow-sm relative">
            <img
              src={`${import.meta.env.BASE_URL}photo.webp`}
              alt="Leonel"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
