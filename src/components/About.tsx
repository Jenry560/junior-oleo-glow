
import { Shield, Eye, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Shield,
      title: t('about.defensiveSecurity'),
      description: t('about.defensiveDesc')
    },
    {
      icon: Eye,
      title: t('about.threatAnalysis'),
      description: t('about.threatDesc')
    },
    {
      icon: Zap,
      title: t('about.quickResponse'),
      description: t('about.quickDesc')
    }
  ];

  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('about.title').split(' ')[0]} <span className="text-cyber">{t('about.title').split(' ')[1]}</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>{t('about.intro1')}</p>
              <p>{t('about.intro2')}</p>
              <p>{t('about.intro3')}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-white/60 text-sm">{t('about.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-white/60 text-sm">{t('about.certifications')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-white/60 text-sm">{t('about.experience')}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glow-card p-6 group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
