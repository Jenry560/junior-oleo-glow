
import { Shield, Code, Eye, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.dashboard.title'),
      description: t('projects.dashboard.description'),
      tech: ["React", "Python", "ELK Stack", "Docker"],
      icon: Shield,
      gradient: "from-blue-500 to-purple-600",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: t('projects.scanner.title'),
      description: t('projects.scanner.description'),
      tech: ["Python", "Nmap", "OpenVAS", "PostgreSQL"],
      icon: Eye,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: t('projects.incident.title'),
      description: t('projects.incident.description'),
      tech: ["Node.js", "MongoDB", "Redis", "Socket.io"],
      icon: Code,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1518770660439-4636190af475"
    }
  ];

  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('projects.title').split(' ')[0]} <span className="text-cyber">{t('projects.title').split(' ')[1]}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glow-card p-0 overflow-hidden group animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                <img 
                  src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-primary text-sm rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                  >
                    <Link className="w-4 h-4 mr-2" />
                    {t('projects.demo')}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-white/30 text-white/80 hover:bg-white/10"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    {t('projects.code')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white font-semibold px-8 py-4 rounded-xl cyber-glow"
          >
            {t('projects.viewMore')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
