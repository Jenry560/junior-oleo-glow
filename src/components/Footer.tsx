
import { Shield, Code, Link, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-['Orbitron']">
                JUNIOR DE OLEO
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
            <div className="space-y-2">
              {[
                { name: t('nav.about'), href: '#about' },
                { name: t('nav.skills'), href: '#skills' },
                { name: t('nav.projects'), href: '#projects' },
                { name: t('nav.contact'), href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/70 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.connect')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Link className="w-4 h-4 text-primary" />
                <span className="text-white/70">LinkedIn</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-white/70">GitHub</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-white/70">junior@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Junior de Oleo. {t('footer.rights')}
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-white/60 text-sm">{t('footer.madeWith')}</span>
            <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
            <span className="text-white/60 text-sm">{t('footer.forSecurity')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
