import { useState } from 'react';

// Replace with your own Formspree endpoint: create a free form at https://formspree.io
// and paste the URL it gives you (e.g. https://formspree.io/f/abcdwxyz) below.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjeqwqe';

const skillGroups = [
  {
    category: 'Mobile',
    items: ['Flutter', 'Dart', 'Firebase', 'React native'],
  },
  {
    category: 'Web Development',
    items: ['React', 'Next.js', 'TypeScript', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'REST APIs','Python'],
  },
  {
    category: 'Tools',
    items: ['Git/GitHub'],
  },
  {
    category: 'Systems Management',
    items: ['SDMS', 'CAMIS', 'TMIS'],
  },
];

const projects = [
  {
    title: 'Rwanda Resilience Hub (RRH)',
    description:
      'Final-year thesis project: a full-stack flood risk prediction and early-warning platform for the Sebeya River Basin. Combines a Random Forest ML model (98.3% accuracy, zero dangerous misclassifications) with simulated IoT sensors and a physical ESP32 hardware prototype, delivering real-time risk alerts through a web dashboard and mobile app.',
    tech: ['FastAPI', 'PostgreSQL', 'React', 'React Native', 'scikit-learn', 'ESP32/IoT'],
    featured: true,
  },
  {
    title: 'Asset Management System',
    description:
      'A full-stack system to track and manage organisational devices, including device registration, real-time status tracking, and reporting dashboards.',
    tech: ['Node.js', 'Next.js', 'TypeScript', 'MDB UI'],
  },
  {
    title: 'Weather & Safe Zones Flutter App',
    description:
      'A cross-platform mobile app integrating Firebase for real-time data sync, displaying live weather conditions and nearby safe zones with a responsive UI.',
    tech: ['Flutter', 'Dart', 'Firebase'],
  },
];

const experience = [
  {
    role: 'School Data Manager',
    org: 'GS Nyabitare',
    period: '2021 – 2026',
    description:
      'Managed and administered school information systems, including SDMS, CAMIS, and TMIS, overseeing data accuracy, system uptime, and day-to-day administration.',
  },
  {
    role: 'Software Developer Intern',
    org: 'Rwanda Tea Board (RTB)',
    period: 'Feb 2025 – June 2025',
    description:
      'Contributed to software projects within a structured internship program, collaborating with the development team on system design and feature implementation.',
  },
];

const education = [
  {
    degree: 'BSc in Computer and Software Engineering',
    org: 'University of Rwanda (UR)',
    period: '2022 – 2026',
    description:
      'Relevant coursework: Software Engineering, Data Structures, Networking, Mobile Development, Database Systems.',
  },
];

const certificates = [
  {
    name: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco',
    year: '2023',
  },
  {
    name: 'Drone Skills Training',
    issuer: 'GIZ Rwanda and University of Rwanda',
    year: '2025',
  },
];

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('sending');
    const form = event.target;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="app-shell">
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#top" className="brand">YT</a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>
          <a className="btn btn-primary btn-small" href="#contact">Get in touch</a>
        </div>
      </nav>

      <header id="top" className="hero-section">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer · Full-Stack &amp; Mobile Developer</p>
            <h1>Hi, I’m <span>Yvette TUYIZERE</span>.</h1>
            <p className="hero-description">
              I build full-stack web applications and cross-platform mobile apps with
              Flutter and Firebase, turning real organisational needs into reliable,
              easy-to-use software — from an asset management system to a mobile app
              with live weather and safe zone data.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Contact</a>
              <a className="btn btn-secondary" href="#projects">See my work</a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <svg className="deco deco-circle" viewBox="0 0 200 200" aria-hidden="true">
              <circle cx="100" cy="100" r="98" fill="none" stroke="var(--border)" strokeWidth="2" />
            </svg>
            <div className="deco deco-dots" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
            <svg className="deco deco-squiggle" viewBox="0 0 40 70" aria-hidden="true">
              <path d="M4 2 Q20 12 4 22 Q-12 32 4 42 Q20 52 4 62"
                    fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <svg className="deco deco-plus" viewBox="0 0 28 28" aria-hidden="true">
              <path d="M14 2 V26 M2 14 H26" stroke="var(--violet)" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <svg className="deco deco-cube" viewBox="0 0 44 44" aria-hidden="true">
              <path d="M22 3 L40 13 V33 L22 43 L4 33 V13 Z M22 3 V23 M22 23 L40 13 M22 23 L4 13"
                    fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
            <img className="hero-photo" src="/profile.jpeg" alt="Yvette Tuyizere" />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about-section">
          <div className="container section-content">
            <div>
              <h2>About</h2>
              <p>
                I'm a final-year Computer and Software Engineering student at the University
                of Rwanda, focused on building polished, reliable products across web and
                mobile. My work spans full-stack systems built with Node.js, Next.js, and
                TypeScript, and cross-platform mobile apps built with Flutter and Firebase.
              </p>
              <p>
                I enjoy turning real organisational problems, like tracking devices or
                surfacing live safety information, into interfaces that are clear, responsive,
                and easy to use.
              </p>
            </div>
            <div className="about-grid">
              <div className="info-card">
                <h3>What I do</h3>
                <p>Build full-stack web systems and cross-platform mobile apps with real-time data and clean, responsive UI.</p>
              </div>
              <div className="info-card">
                <h3>How I work</h3>
                <p>Collaborative and detail-oriented, with a focus on system design, maintainable code, and shipping features that work.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-header">
              <h2>Skills</h2>
              <p>Technologies and tools I use to design, build, and ship software.</p>
            </div>
            <div className="skills-groups">
              {skillGroups.map((group) => (
                <div key={group.category} className="skill-group-card">
                  <h3>{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-header">
              <h2>Featured work</h2>
              <p>A couple of real-world projects that show how I approach product problems end to end.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={project.featured ? 'project-card project-card-featured' : 'project-card'}
                >
                  {project.featured && <span className="featured-badge">Featured</span>}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container">
            <div className="section-header">
              <h2>Experience</h2>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <div key={item.role} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h3>{item.role}</h3>
                    <p className="timeline-org">{item.org} · {item.period}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section education-section">
          <div className="container">
            <div className="education-grid">
              <div>
                <div className="section-header">
                  <h2>Education</h2>
                </div>
                {education.map((item) => (
                  <div key={item.degree} className="info-card education-card">
                    <h3>{item.degree}</h3>
                    <p className="timeline-org">{item.org} · {item.period}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className="section-header">
                  <h2>Certificates</h2>
                </div>
                <div className="certificate-list">
                  {certificates.map((cert) => (
                    <div key={cert.name} className="info-card certificate-card">
                      <h3>{cert.name}</h3>
                      <p className="timeline-org">{cert.issuer} · {cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <h2>Contact</h2>
              <p>Open to internship, junior software engineering, and freelance opportunities. Let's connect.</p>
              <dl>
                <dt>Email</dt>
                <dd><a href="mailto:yvettetuyizere@gmail.com">yvettetuyizere@gmail.com</a></dd>
                <dt>Phone</dt>
                <dd><a href="tel:+250784013585">+250784013585</a></dd>
                <dt>GitHub</dt>
                <dd><a href="https://github.com/yvettetuyizere" target="_blank" rel="noreferrer">github.com/yvettetuyizere</a></dd>
                <dt>LinkedIn</dt>
                <dd><a href="https://www.linkedin.com/in/tuyizere-yvette/" target="_blank" rel="noreferrer">linkedin.com/in/tuyizere-yvette</a></dd>
                <dt>Location</dt>
                <dd>Kigali, Rwanda</dd>
              </dl>

              <div className="stats-strip">
                <div className="stat-item">
                  <p className="stat-number">2+</p>
                  <p className="stat-label">Real-world projects shipped</p>
                </div>
                <div className="stat-item">
                  <p className="stat-number">5</p>
                  <p className="stat-label">Years in systems &amp; software</p>
                </div>
                <div className="stat-item">
                  <p className="stat-number">2026</p>
                  <p className="stat-label">BSc graduation, University of Rwanda</p>
                </div>
              </div>
            </div>
            <aside className="contact-card">
              <p>Have a project in mind, or want to talk about a role? Send me a message and I'll reply by email.</p>
              {formStatus === 'success' ? (
                <p className="form-success">Thanks! Your message has been sent — I'll get back to you soon.</p>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required />

                  <label htmlFor="email">Your email</label>
                  <input id="email" name="email" type="email" required />

                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required />

                  <button className="btn btn-primary" type="submit" disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? 'Sending…' : 'Send message'}
                  </button>

                  {formStatus === 'error' && (
                    <p className="form-error">Something went wrong. Please try again, or email me directly at yvettetuyizere@gmail.com.</p>
                  )}
                </form>
              )}
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        <p>© 2026 Yvette Tuyizere · Software Engineer</p>
      </footer>
    </div>
  );
}

export default App;
