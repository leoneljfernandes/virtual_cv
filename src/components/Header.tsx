import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      return 'dark';
    }
    return 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { href: '#inicio', label: t('nav.home') },
    { href: '#perfil', label: t('nav.profile') },
    { href: '#capacidades', label: t('nav.skills') },
    { href: '#experiencia', label: t('nav.experience') },
    { href: '#proyectos', label: t('nav.projects') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
        <div className="font-semibold text-sm tracking-tight flex items-center space-x-2">
          <div className="w-6 h-6 rounded-md bg-foreground text-background flex items-center justify-center font-bold text-xs">
            L
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="hover:text-foreground transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="text-muted-foreground hover:text-foreground transition-colors duration-150 flex items-center space-x-1"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs uppercase font-medium">{i18n.language}</span>
          </button>
          
          <button 
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
