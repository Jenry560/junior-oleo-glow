
import { Shield, Code, Link, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Link,
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: Code,
      url: "#",
      color: "hover:text-purple-400"
    },
    {
      name: "Email",
      icon: Zap,
      url: "mailto:junior@example.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title').split(' ')[0]} <span className="text-cyber">{t('contact.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glow-card p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.sendMessage')}</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t('contact.name')}
                  </label>
                  <Input 
                    placeholder={t('contact.namePlaceholder')}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t('contact.email')}
                  </label>
                  <Input 
                    type="email"
                    placeholder={t('contact.emailPlaceholder')}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {t('contact.subject')}
                </label>
                <Input 
                  placeholder={t('contact.subjectPlaceholder')}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {t('contact.message')}
                </label>
                <Textarea 
                  placeholder={t('contact.messagePlaceholder')}
                  rows={5}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white font-semibold py-4 rounded-xl cyber-glow"
              >
                {t('contact.send')}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="glow-card p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Junior de Oleo</h3>
                  <p className="text-white/70">{t('hero.specialist')}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                {t('contact.description2')}
              </p>
            </div>

            {/* Social Links */}
            <div className="glow-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">{t('contact.connectWithMe')}</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 ${link.color} transition-all duration-300 group`}
                  >
                    <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glow-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">{t('contact.availability')}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">{t('contact.status')}</span>
                  <span className="text-accent font-semibold flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                    {t('contact.available')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">{t('contact.response')}</span>
                  <span className="text-primary font-semibold">{t('contact.responseTime')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">{t('contact.location')}</span>
                  <span className="text-white/80">{t('contact.locationValue')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
