import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Cloud,
  Code2,
  ExternalLink,
  GraduationCap,
  Languages,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Medal,
  Network,
  ServerCog,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "19", label: "Legacy systems modernized", icon: Network },
  { value: "289", label: "Vulnerabilities remediated", icon: ShieldCheck },
  { value: "22M+", label: "Public sessions supported", icon: Users },
  { value: "9", label: "AWS and Azure credentials", icon: Cloud },
];

const projects = [
  {
    eyebrow: "Cloud modernization",
    title: "NextGen Information Gateway",
    description:
      "Helped transition 19 legacy systems into a secure hybrid AWS environment and consolidate more than 28 databases while preserving mission-critical public access.",
    metrics: ["19 systems", "28+ databases", "AWS hybrid cloud"],
    icon: ServerCog,
  },
  {
    eyebrow: "Data engineering",
    title: "Child Welfare Outcomes",
    description:
      "Designed a Python, Pandas, and Jinja conversion module that replaced legacy Perl and powered state data pages for a congressionally mandated report.",
    metrics: ["Python and Pandas", "Legacy replacement", "Lead coverage"],
    icon: Code2,
  },
  {
    eyebrow: "Citizen experience",
    title: "Accessible digital services",
    description:
      "Shipped Spanish-language support, search, an AWS Connect contact center, and accessible web experiences for high-traffic federal programs.",
    metrics: ["Section 508", "AWS Connect", "Spanish localization"],
    icon: Users,
  },
];

const credentials = [
  ["AWS Solutions Architect", "Professional", "2025"],
  ["AWS Machine Learning Engineer", "Associate", "2025"],
  ["AWS Data Engineer", "Associate", "2025"],
  ["AWS SysOps Administrator", "Associate", "2025"],
  ["AWS AI Practitioner", "Foundational", "2024"],
  ["Azure Developer", "Associate", "2026"],
];

const skills = {
  "Cloud and delivery": [
    "AWS",
    "Azure",
    "AWS Connect",
    "DevOps",
    "Hybrid cloud",
  ],
  Engineering: [
    "Java",
    "C# / .NET",
    "Python",
    "React",
    "SQL",
    "Pandas",
    "Jinja",
  ],
  "Security and quality": [
    "FISMA / ATO",
    "Zero Trust",
    "NIST SP 800-37",
    "Section 508",
    "Vulnerability remediation",
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mustafasadiq.com/#person",
      name: "Mustafa Sadiq",
      url: "https://mustafasadiq.com",
      email: "mailto:mustafa.sadiq@outlook.com",
      jobTitle: "Software Application Engineer",
      description:
        "Software application engineer specializing in secure cloud modernization and accessible federal digital services.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buffalo-Niagara Falls",
        addressRegion: "NY",
        addressCountry: "US",
      },
      sameAs: ["https://www.linkedin.com/in/mustafasadiq/"],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Illinois Urbana-Champaign",
        },
        { "@type": "CollegeOrUniversity", name: "Rutgers University" },
      ],
      knowsAbout: [
        "AWS",
        "Microsoft Azure",
        "Cloud modernization",
        "Java",
        ".NET",
        "Python",
        "React",
        "Section 508 accessibility",
        "FISMA Authority to Operate",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mustafasadiq.com/#website",
      url: "https://mustafasadiq.com",
      name: "Mustafa Sadiq Portfolio",
      description:
        "Software engineering portfolio focused on secure, accessible public-impact digital services.",
      inLanguage: "en-US",
      author: { "@id": "https://mustafasadiq.com/#person" },
    },
  ],
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>

      <div className="site-notice">
        <div className="grid-container site-container">
          <ShieldCheck aria-hidden="true" />
          <p>
            <strong>Independent professional portfolio.</strong> Designed with
            U.S. Web Design System principles; not an official government
            website.
          </p>
        </div>
      </div>

      <header className="usa-header usa-header--basic site-header" id="top">
        <div className="usa-nav-container site-container">
          <div className="usa-navbar site-navbar">
            <a
              className="site-brand"
              href="#top"
              aria-label="Mustafa Sadiq, home"
            >
              <span className="site-brand__mark">MS</span>
              <span>
                <strong>Mustafa Sadiq</strong>
                <small>Software Application Engineer</small>
              </span>
            </a>
          </div>
          <nav className="usa-nav site-nav" aria-label="Main navigation">
            <ul className="usa-nav__primary site-nav__links">
              <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="#work">
                  Work
                </a>
              </li>
              <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="#credentials">
                  Credentials
                </a>
              </li>
            </ul>
            <Button asChild size="sm">
              <a href="mailto:mustafa.sadiq@outlook.com">
                <Mail aria-hidden="true" /> Contact
              </a>
            </Button>
          </nav>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#work">Work</a>
              <a href="#experience">Experience</a>
              <a href="#credentials">Credentials</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="grid-container site-container hero-grid">
            <div className="hero-copy">
              <Badge className="hero-tag">
                Available for impactful engineering work
              </Badge>
              <p className="hero-kicker">
                Cloud modernization · Security · Accessibility
              </p>
              <h1>
                I build secure digital systems that move public service forward.
              </h1>
              <p className="hero-lede">
                I modernize high-stakes federal platforms across AWS, Azure,
                Java, .NET, Python, and React—turning legacy complexity into
                reliable, accessible services.
              </p>
              <div className="usa-button-group hero-actions">
                <Button asChild size="lg">
                  <a href="#work">
                    Explore my work <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="inverse">
                  <a href="mailto:mustafa.sadiq@outlook.com">
                    <Mail aria-hidden="true" /> Get in touch
                  </a>
                </Button>
              </div>
              <div className="hero-meta">
                <span>
                  <MapPin aria-hidden="true" /> Buffalo-Niagara Falls, NY
                </span>
                <a
                  href="https://www.linkedin.com/in/mustafasadiq/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin aria-hidden="true" /> LinkedIn{" "}
                  <ExternalLink aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside
              className="usa-summary-box mission-panel"
              aria-labelledby="priorities-title"
            >
              <div className="usa-summary-box__body">
                <p className="panel-label">Engineering priorities</p>
                <h2 className="usa-summary-box__heading" id="priorities-title">
                  Mission outcomes, built into the system.
                </h2>
                <ul className="usa-list usa-list--unstyled priority-list">
                  <li>
                    <ShieldCheck aria-hidden="true" />
                    <span>
                      <strong>Secure by design</strong>FISMA, ATO, Zero Trust,
                      and remediation
                    </span>
                  </li>
                  <li>
                    <Users aria-hidden="true" />
                    <span>
                      <strong>Accessible to everyone</strong>Section 508 and
                      multilingual experiences
                    </span>
                  </li>
                  <li>
                    <Cloud aria-hidden="true" />
                    <span>
                      <strong>Cloud ready</strong>Resilient AWS and Azure
                      delivery
                    </span>
                  </li>
                  <li>
                    <LockKeyhole aria-hidden="true" />
                    <span>
                      <strong>Trusted delivery</strong>Public Trust and federal
                      program experience
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="impact-strip" aria-label="Career highlights">
          <div className="grid-container site-container impact-grid">
            {stats.map(({ value, label, icon: Icon }) => (
              <div className="impact-item" key={label}>
                <Icon aria-hidden="true" />
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="site-section">
          <div className="grid-container site-container">
            <SectionHeading
              eyebrow="Selected impact"
              title="Engineering outcomes for essential public services."
              description="Examples of how I combine full-stack engineering, security discipline, and user-centered delivery."
            />
            <div className="project-grid">
              {projects.map(
                (
                  { eyebrow, title, description, metrics, icon: Icon },
                  index,
                ) => (
                  <Card className="project-card" key={title}>
                    <CardHeader>
                      <div className="card-index">
                        <span className="card-icon">
                          <Icon aria-hidden="true" />
                        </span>
                        <span>0{index + 1}</span>
                      </div>
                      <CardDescription>{eyebrow}</CardDescription>
                      <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{description}</p>
                      <div className="tag-list">
                        {metrics.map((metric) => (
                          <Badge key={metric}>{metric}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="experience" className="site-section site-section--soft">
          <div className="grid-container site-container experience-layout">
            <SectionHeading
              eyebrow="Experience"
              title="One role. Multiple federal missions."
              description="At ICF, I work across programs where uptime, trust, accessibility, and compliance are product requirements."
            />
            <article className="experience-card">
              <header className="experience-card__header">
                <div>
                  <Badge>2022–present</Badge>
                  <h3>Software Application Engineer · I2</h3>
                  <p>ICF · Federal digital services</p>
                </div>
                <Cloud aria-hidden="true" />
              </header>
              <ol className="program-list">
                <li>
                  <span>01</span>
                  <div>
                    <h4>HHS · Child Welfare Information Gateway</h4>
                    <p>
                      Resident expert across seven Java applications; led
                      security remediation, modernization, search, localization,
                      reporting, and accessible launches.
                    </p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h4>U.S. Navy · Fee Assistance Management System</h4>
                    <p>
                      Delivered .NET features supporting military child-care
                      programs across all four service branches on a team rated
                      10/10 by the client.
                    </p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h4>HHS OIG · Text Analytics Portal</h4>
                    <p>
                      Built Python and React capabilities for a secure,
                      AWS-native NLP platform immediately ahead of its MVP
                      launch.
                    </p>
                  </div>
                </li>
              </ol>
            </article>
          </div>
        </section>

        <section className="site-section">
          <div className="grid-container site-container">
            <SectionHeading
              eyebrow="Technical toolkit"
              title="Full-stack range. Cloud-first judgment."
            />
            <div className="skills-panel">
              {Object.entries(skills).map(([group, items], index) => (
                <div className="skill-row" key={group}>
                  <div className="skill-row__title">
                    <span>0{index + 1}</span>
                    <h3>{group}</h3>
                  </div>
                  <div className="tag-list">
                    {items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="credentials" className="site-section site-section--ink">
          <div className="grid-container site-container">
            <SectionHeading
              eyebrow="Credentials"
              title="Cloud expertise, independently verified."
              description="A focused certification portfolio spanning architecture, development, operations, data, and machine learning."
            />
            <div className="credential-grid">
              {credentials.map(([name, level, year]) => (
                <Card className="credential-card" key={name}>
                  <CardHeader>
                    <Cloud aria-hidden="true" />
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{level}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span>{year}</span>
                    <CheckCircle2 aria-label="Verified credential" />
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="credential-note">
              Also certified in AWS Solutions Architect – Associate, AWS Cloud
              Practitioner, Azure Fundamentals, and GitHub Foundations.
            </p>
          </div>
        </section>

        <section className="site-section">
          <div className="grid-container site-container two-column">
            <Card className="education-card">
              <CardHeader>
                <GraduationCap aria-hidden="true" />
                <CardDescription>Education</CardDescription>
                <CardTitle>
                  Computer science, from fundamentals to applied AI.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="degree">
                  <div>
                    <h4>M.S. Computer Science</h4>
                    <p>University of Illinois Urbana-Champaign</p>
                  </div>
                  <Badge>2026 · 3.58 GPA</Badge>
                </div>
                <Separator />
                <div className="degree">
                  <div>
                    <h4>B.S. Computer Science</h4>
                    <p>Rutgers University · Summa Cum Laude</p>
                  </div>
                  <Badge>2022 · 4.00 GPA</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="recognition-card">
              <CardHeader>
                <Medal aria-hidden="true" />
                <CardDescription>Recognition</CardDescription>
                <CardTitle>Consistency recognized at every level.</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="recognition-number">43</div>
                <p>
                  written recognitions from colleagues, technical leads, and
                  directors—including Ruby and Silver honors.
                </p>
                <Separator />
                <p className="rating">
                  <strong>5 / 5</strong> Consistently Surpasses Expectations ·
                  2022–2025
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="site-section service-section">
          <div className="grid-container site-container service-grid">
            <article>
              <BookOpen aria-hidden="true" />
              <h3>Continuous learner</h3>
              <p>
                AWS re:Invent 2025 attendee with graduate study in applied ML,
                healthcare AI, cloud computing, and data systems.
              </p>
            </article>
            <article>
              <Languages aria-hidden="true" />
              <h3>Multilingual</h3>
              <p>
                Professional fluency in English and Urdu, plus hands-on
                Spanish-language product localization.
              </p>
            </article>
            <article>
              <Award aria-hidden="true" />
              <h3>Community minded</h3>
              <p>
                Hack mentor at Technica and volunteer judge for the University
                of Maryland Makethon.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="grid-container site-container contact-layout">
            <div>
              <p className="section-kicker">Let’s build what matters</p>
              <h2>Complex mission? I’m ready to help.</h2>
              <p>
                I’m interested in ambitious software engineering work at the
                intersection of cloud, security, data, and public impact.
              </p>
            </div>
            <div className="contact-actions">
              <Button asChild size="lg" variant="inverse">
                <a href="mailto:mustafa.sadiq@outlook.com">
                  <Mail aria-hidden="true" /> Start a conversation
                </a>
              </Button>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/mustafasadiq/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-label="Site information">
        <div className="grid-container site-container footer-primary">
          <div className="site-brand site-brand--inverse">
            <span className="site-brand__mark">MS</span>
            <span>
              <strong>Mustafa Sadiq</strong>
              <small>Software Application Engineer</small>
            </span>
          </div>
          <p>
            Independent professional portfolio. This is not an official U.S.
            government website.
          </p>
          <a href="#top">
            Back to top <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="footer-secondary">
          <div className="grid-container site-container">
            <span>Built with USWDS design principles</span>
            <span>Accessible · Secure · Mission focused</span>
          </div>
        </div>
      </footer>
    </>
  );
}
