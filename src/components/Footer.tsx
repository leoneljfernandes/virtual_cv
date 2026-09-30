import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-border bg-background py-12 mt-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Leonel Julián Fernandes</h4>
            <p className="text-xs text-muted-foreground">{t('footer.role')}</p>
          </div>
          
          <div className="space-y-2 md:text-center">
            <h4 className="font-semibold text-sm text-transparent select-none hidden md:block">Location</h4>
            <p className="text-xs text-muted-foreground">{t('hero.location')}</p>
          </div>

          <div className="space-y-4 md:text-right flex flex-col md:items-end">
            <h4 className="font-semibold text-sm text-transparent select-none hidden md:block">Social</h4>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:leo99.fernandes@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/leonel-julian-fernandes/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/leoneljfernandes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
