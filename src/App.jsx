import './index.css'

const data = {
  name: "Andrea D'Elia",
  email: 'deliaandrea2001@gmail.com',
  phone: '+39 366 275 9122',
  address: '60020 Agugliano, Italy',
  dob: '21/11/2001',
  profile:
    "Ambitious and detail-oriented Master’s student in Molecular Biology at Università Politecnica delle Marche, with a strong academic background in scientific research and data analysis. Having studied project management methodologies extensively, I am now seeking my first professional opportunity as a Project Manager. I bring strong organizational, analytical, and problem-solving skills, combined with adaptability and a passion for leading projects to successful outcomes.",
  education: [
    {
      title: 'Master’s Degree in Molecular Biology (ongoing)',
      place: 'Università Politecnica delle Marche, Ancona, Italy',
      year: '',
    },
    {
      title: 'Bachelor’s Degree in Biological Sciences (2024)',
      place: 'Università Politecnica delle Marche, Ancona, Italy',
      year: '2024',
    },
    {
      title: 'High School Diploma in Enogastronomy and Hospitality (2020)',
      place: 'IIS A. Panzini, Senigallia, Italy',
      year: '2020',
    },
  ],
  skills: {
    projectManagement: [
      'Knowledge of project lifecycle, planning, execution, and monitoring',
      'Familiarity with Agile and Waterfall methodologies',
      'Ability to set priorities, manage timelines, and allocate resources',
      'Strong stakeholder communication and team coordination',
    ],
    technical: [
      'Microsoft Office Suite – Advanced, professional use',
      'Python – Basic programming and automation',
      'Data Analysis – Basic experience in interpretation and reporting',
    ],
    soft: [
      'Strong problem-solving and critical thinking abilities',
      'Effective time management and organizational skills',
      'Leadership potential with ability to motivate teams',
      'Stress management and resilience under pressure',
      'Excellent written and oral communication',
    ],
    additional: [
      'Academic research and structured reporting',
      'Adaptability and quick learning in new environments',
      'Continuous personal and professional development',
    ],
  },
  languages: [
    { name: 'Italian', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
  ],
}

const Section = ({ title, children, id }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    {children}
  </section>
)

const Header = () => (
  <header className="header">
    <div className="container header__content">
      <div>
        <h1 className="title">{data.name}</h1>
      </div>
      <div className="contact">
        <a href={`mailto:${data.email}`} className="btn">Email</a>
        <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="btn btn--secondary">Chiama</a>
        <a href="/Andrea_cv.pdf" className="btn btn--outline" download>
          Scarica CV
        </a>
      </div>
    </div>
  </header>
)

const About = () => (
  <Section title="Profilo" id="profilo">
    <p className="lead">{data.profile}</p>
    <ul className="inline-list">
      <li><strong>Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a></li>
      <li><strong>Telefono:</strong> <a href={`tel:${data.phone.replace(/\s/g, '')}`}>{data.phone}</a></li>
      <li><strong>Indirizzo:</strong> {data.address}</li>
      <li><strong>Data di nascita:</strong> {data.dob}</li>
    </ul>
  </Section>
)

const Education = () => (
  <Section title="Formazione" id="formazione">
    <div className="cards">
      {data.education.map((ed, idx) => (
        <article key={idx} className="card">
          <h3 className="card__title">{ed.title}</h3>
          <p className="card__meta">{ed.place}{ed.year ? ` · ${ed.year}` : ''}</p>
        </article>
      ))}
    </div>
  </Section>
)

const SkillGroup = ({ title, items }) => (
  <div className="skill-group">
    <h3>{title}</h3>
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
)

const Skills = () => (
  <Section title="Competenze" id="competenze">
    <div className="skills-grid">
      <SkillGroup title="Project Management" items={data.skills.projectManagement} />
      <SkillGroup title="Tecniche" items={data.skills.technical} />
      <SkillGroup title="Soft Skills" items={data.skills.soft} />
      <SkillGroup title="Altre Competenze" items={data.skills.additional} />
    </div>
  </Section>
)

const Languages = () => (
  <Section title="Lingue" id="lingue">
    <ul className="inline-list">
      {data.languages.map((lng, i) => (
        <li key={i}><strong>{lng.name}</strong>: {lng.level}</li>
      ))}
    </ul>
  </Section>
)

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <nav className="footer__nav">
        <a href="#profilo">Profilo</a>
        <a href="#formazione">Formazione</a>
        <a href="#competenze">Competenze</a>
        <a href="#lingue">Lingue</a>
      </nav>
      <p className="footer__copy">© {new Date().getFullYear()} {data.name}</p>
    </div>
  </footer>
)

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <About />
        <Education />
        <Skills />
        <Languages />
      </main>
      <Footer />
    </>
  )
}
