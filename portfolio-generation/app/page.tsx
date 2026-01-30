'use client'

import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, Smartphone } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: 'The Couchers',
      description: 'Fully responsive e-commerce application with smooth product browsing and cart management',
      tech: ['React.js', 'JavaScript', 'CSS', 'Responsive Design'],
      icon: '🛍️',
      link: '#'
    },
    {
      title: 'APS Naturals',
      description: 'Live system focused on user and data management with real-time application workflows',
      tech: ['React.js', 'Node.js', 'Database', 'Real-time Data'],
      icon: '📊',
      link: '#'
    },
    {
      title: 'Employee Management System',
      description: 'Complete CRUD operations with Java backend, SQL database, and optimized queries',
      tech: ['Java', 'SQL', 'OOP', 'Database Design'],
      icon: '👥',
      link: '#'
    }
  ]

  const skills = [
    { category: 'Backend', items: ['Java', 'SQL', 'DSA', 'Database Design', 'Query Optimization'] },
    { category: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'] },
    { category: 'Tools & Version Control', items: ['Git', 'GitHub', 'Eclipse IDE', 'MySQL Workbench'] }
  ]

  const experience = [
    {
      role: 'Software Development Intern',
      company: 'Wipro Technologies',
      duration: 'Current',
      description: 'Developing and maintaining backend systems with Java and SQL. Implementing CRUD operations and database optimization.',
      highlights: ['CRUD Operations', 'Database Design', 'Code Optimization', 'Team Collaboration']
    }
  ]

  return (
    <div className="dark">
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-gradient-to-b from-background via-background to-background/80 backdrop-blur border-b border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  SJ
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-primary/20 text-primary transition"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop menu */}
              <div className="hidden md:flex gap-8">
                <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition font-medium">About</button>
                <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary transition font-medium">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition font-medium">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition font-medium">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition font-medium">Contact</button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="md:hidden pb-4 space-y-2">
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover:bg-primary/20 text-primary rounded transition">About</button>
                <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-4 py-2 hover:bg-primary/20 text-primary rounded transition">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 hover:bg-primary/20 text-primary rounded transition">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-2 hover:bg-primary/20 text-primary rounded transition">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:bg-primary/20 text-primary rounded transition">Contact</button>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Sahil Jamadar
              </h1>
              <p className="text-2xl font-semibold text-primary mb-4">
                Software Development Intern
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Wipro Technologies | B.Tech Graduate | Core Java & SQL Specialist
              </p>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                I'm passionate about building robust backend systems and scalable applications. Specialized in Core Java, SQL, and Data Structures with hands-on experience in full-stack development.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-bold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/40 to-accent/40 rounded-3xl blur-2xl"></div>
              <div className="relative bg-card/80 backdrop-blur border-2 border-primary/30 rounded-3xl p-10 hover:border-primary/60 transition-all">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30">
                    <div className="p-3 bg-primary rounded-lg">
                      <Code2 size={28} className="text-primary-foreground" />
                    </div>
                    <span className="font-bold text-lg">Backend Development</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30">
                    <div className="p-3 bg-secondary rounded-lg">
                      <Database size={28} className="text-secondary-foreground" />
                    </div>
                    <span className="font-bold text-lg">Database Design</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30">
                    <div className="p-3 bg-accent rounded-lg">
                      <Smartphone size={28} className="text-accent-foreground" />
                    </div>
                    <span className="font-bold text-lg">Full-Stack Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-gradient-to-b from-card/50 to-background border-y border-primary/20 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="bg-gradient-to-br from-card/50 to-card/30 border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/20 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition">{exp.role}</h3>
                      <p className="text-primary font-bold text-lg">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-primary-foreground font-semibold text-sm">{exp.duration}</span>
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.highlights.map((highlight, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-primary/30 to-secondary/20 text-primary rounded-full font-semibold text-sm border border-primary/40 hover:border-primary/80 transition">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                className="group relative bg-gradient-to-br from-card/50 to-card/30 border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/70 hover:shadow-2xl hover:shadow-primary/30 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition">{project.title}</h3>
                <p className="text-foreground text-base mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-primary/40 to-secondary/30 text-primary rounded-full text-xs font-bold border border-primary/50">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-primary font-bold opacity-70 group-hover:opacity-100 group-hover:gap-3 transition">
                  <span>View Project</span>
                  <ExternalLink size={18} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-gradient-to-b from-background via-card/30 to-background border-y border-primary/20 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, idx) => {
                const colors = [
                  { bg: 'from-primary/30 to-primary/10', border: 'border-primary/40', icon: 'bg-primary' },
                  { bg: 'from-secondary/30 to-secondary/10', border: 'border-secondary/40', icon: 'bg-secondary' },
                  { bg: 'from-accent/30 to-accent/10', border: 'border-accent/40', icon: 'bg-accent' }
                ]
                const color = colors[idx % colors.length]
                return (
                  <div key={idx} className={`bg-gradient-to-br ${color.bg} border-2 ${color.border} rounded-2xl p-8 hover:shadow-lg transition-all group`}>
                    <h3 className="text-2xl font-bold mb-6 group-hover:scale-105 transition-transform origin-left">{skillGroup.category}</h3>
                    <ul className="space-y-4">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 group/item">
                          <span className={`w-3 h-3 ${color.icon} rounded-full group-hover/item:scale-150 transition-transform`}></span>
                          <span className="font-semibold text-foreground group-hover/item:text-primary transition">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I recently completed my B.Tech from MIT College of Railway Engineering and Research, Barshi, with a strong foundation in Core Java, SQL, and Data Structures. My academic journey has equipped me with practical knowledge of object-oriented programming principles and database management.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently working as a Software Development Intern at Wipro Technologies, where I'm gaining hands-on experience in building backend-driven applications. I'm eager to grow as a Java Developer and contribute effectively to innovative organizations.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                My technical expertise spans Java, SQL, Data Structures, HTML, CSS, and JavaScript. I have hands-on experience with real-world projects including e-commerce applications and employee management systems, strengthening my understanding of complete application workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond work, I'm passionate about strategic problem-solving, continuous learning, and outdoor sports. I believe in writing clean, efficient, and maintainable code that makes a real impact. I'm always excited to explore new technologies and tackle challenging problems.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-primary-foreground rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-12 opacity-95 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:sahil@example.com" className="flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-xl font-bold hover:shadow-2xl hover:scale-110 transition-all">
                <Mail size={24} />
                Email Me
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-xl font-bold hover:bg-primary-foreground hover:text-primary transition-all hover:shadow-lg">
                <Github size={24} />
                GitHub
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-xl font-bold hover:bg-primary-foreground hover:text-primary transition-all hover:shadow-lg">
                <Linkedin size={24} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
            <p>© 2026 Sahil Jamadar. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
