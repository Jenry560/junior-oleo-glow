
const Skills = () => {
  const skillCategories = [
    {
      title: "Seguridad Ofensiva",
      skills: [
        { name: "Penetration Testing", level: 90 },
        { name: "Vulnerability Assessment", level: 95 },
        { name: "Social Engineering", level: 85 },
        { name: "Web Application Security", level: 88 }
      ]
    },
    {
      title: "Seguridad Defensiva",
      skills: [
        { name: "SOC Operations", level: 92 },
        { name: "Incident Response", level: 88 },
        { name: "Threat Hunting", level: 85 },
        { name: "Digital Forensics", level: 80 }
      ]
    },
    {
      title: "Herramientas & Tecnologías",
      skills: [
        { name: "Kali Linux", level: 95 },
        { name: "Metasploit", level: 88 },
        { name: "Burp Suite", level: 90 },
        { name: "Wireshark", level: 85 }
      ]
    }
  ];

  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Habilidades <span className="text-cyber">Técnicas</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Competencias especializadas en ciberseguridad, desde análisis de vulnerabilidades 
            hasta respuesta a incidentes y operaciones SOC.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="glow-card p-8 animate-fade-in-up"
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div 
                        className="skill-bar h-full transition-all duration-1000 ease-out"
                        style={{'--skill-width': `${skill.level}%`} as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Certificaciones <span className="text-cyber">Profesionales</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "CISSP", "CEH", "OSCP", "Security+"
            ].map((cert, index) => (
              <div 
                key={index} 
                className="glow-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{cert}</span>
                </div>
                <h4 className="text-white font-semibold">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
