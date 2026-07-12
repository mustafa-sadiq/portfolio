import {
  ArrowDown,
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
  Sparkles,
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
  { value: "19", label: "legacy systems modernized", icon: Network },
  { value: "289", label: "vulnerabilities remediated", icon: ShieldCheck },
  { value: "22M+", label: "public sessions supported", icon: Users },
  { value: "9", label: "AWS & Azure credentials", icon: Cloud },
];

const projects = [
  {
    eyebrow: "Cloud modernization",
    title: "NextGen Information Gateway",
    description:
      "Helped transition 19 legacy systems into a secure hybrid AWS environment and consolidate more than 28 databases—while preserving mission-critical public access.",
    metrics: ["19 systems", "28+ databases", "AWS hybrid cloud"],
    icon: ServerCog,
  },
  {
    eyebrow: "Data engineering",
    title: "Child Welfare Outcomes",
    description:
      "Designed a Python, Pandas, and Jinja conversion module that replaced legacy Perl and powered state data pages for a congressionally mandated report.",
    metrics: [
      "Python + Pandas",
      "Legacy replacement",
      "Technical lead coverage",
    ],
    icon: Code2,
  },
  {
    eyebrow: "Citizen experience",
    title: "Accessible digital services",
    description:
      "Shipped Spanish-language support, search, an AWS Connect contact center, and fully accessible web experiences for high-traffic federal programs.",
    metrics: ["Section 508", "AWS Connect", "Spanish i18n"],
    icon: Sparkles,
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
  "Cloud & delivery": ["AWS", "Azure", "AWS Connect", "DevOps", "Hybrid cloud"],
  Engineering: [
    "Java",
    "C# / .NET",
    "Python",
    "React",
    "SQL",
    "Pandas",
    "Jinja",
  ],
  "Security & quality": [
    "FISMA / ATO",
    "Zero Trust",
    "NIST SP 800-37",
    "Section 508",
    "Vulnerability remediation",
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
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="nav-shell">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Mustafa Sadiq, home">
            <span>MS</span>
            <strong>Mustafa Sadiq</strong>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#credentials">Credentials</a>
          </div>
          <Button asChild size="sm" variant="outline">
            <a href="mailto:mustafa.sadiq@outlook.com">
              <Mail /> Let&apos;s talk
            </a>
          </Button>
        </nav>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="status">
            <span /> Available for impactful engineering work
          </div>
          <p className="hero-kicker">
            SOFTWARE APPLICATION ENGINEER · CLOUD MODERNIZATION
          </p>
          <h1>
            I build secure digital systems that move public service forward.
          </h1>
          <p className="hero-lede">
            I modernize high-stakes federal platforms across AWS, Azure, Java,
            .NET, Python, and React—turning legacy complexity into reliable,
            accessible services.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#work">
                Explore my work <ArrowDown />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:mustafa.sadiq@outlook.com">
                <Mail /> Get in touch
              </a>
            </Button>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin /> Buffalo–Niagara Falls, NY
            </span>
            <a
              href="https://www.linkedin.com/in/mustafasadiq/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin /> LinkedIn <ExternalLink />
            </a>
          </div>
        </div>

        <aside className="profile-orb glass-card" aria-label="Profile summary">
          <div className="orb-grid" aria-hidden="true" />
          <div className="monogram">MS</div>
          <Badge>
            <LockKeyhole /> Public Trust
          </Badge>
          <h2>Engineering for mission-critical outcomes.</h2>
          <p>
            Four+ years delivering secure, compliant federal systems for HHS and
            the U.S. Navy.
          </p>
          <Separator />
          <div className="profile-foot">
            <span>
              <CheckCircle2 /> Exceptional FY25 CPARS
            </span>
            <span>
              <Award /> 43 peer recognitions
            </span>
          </div>
        </aside>
      </section>

      <section className="stats container" aria-label="Career highlights">
        {stats.map(({ value, label, icon: Icon }) => (
          <div className="stat" key={label}>
            <Icon />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="work" className="section container">
        <SectionHeading
          eyebrow="Selected impact"
          title="Work measured in outcomes, not output."
          description="A few examples of how I combine engineering depth, security discipline, and user focus."
        />
        <div className="project-grid">
          {projects.map(
            ({ eyebrow, title, description, metrics, icon: Icon }, index) => (
              <Card className="project-card" key={title}>
                <CardHeader>
                  <div className="project-top">
                    <span className="project-icon">
                      <Icon />
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  <CardDescription className="card-eyebrow">
                    {eyebrow}
                  </CardDescription>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="project-description">{description}</p>
                  <div className="metric-list">
                    {metrics.map((metric) => (
                      <Badge key={metric}>{metric}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </section>

      <section id="experience" className="section container split-section">
        <SectionHeading
          eyebrow="Experience"
          title="One role. Multiple missions."
          description="At ICF, I work across federal programs where uptime, trust, accessibility, and compliance are part of the product."
        />
        <div className="timeline">
          <Card className="experience-card">
            <CardHeader>
              <div className="experience-title">
                <div>
                  <Badge>2022 — Present</Badge>
                  <CardTitle>Software Application Engineer · I2</CardTitle>
                  <CardDescription>
                    ICF · Federal digital services
                  </CardDescription>
                </div>
                <Cloud />
              </div>
            </CardHeader>
            <CardContent className="experience-programs">
              <div>
                <span>01</span>
                <div>
                  <h3>HHS · Child Welfare Information Gateway</h3>
                  <p>
                    Resident expert across seven Java applications; led security
                    remediation, modernization, search, localization, reporting,
                    and accessible launches.
                  </p>
                </div>
              </div>
              <div>
                <span>02</span>
                <div>
                  <h3>U.S. Navy · Fee Assistance Management System</h3>
                  <p>
                    Delivered .NET features supporting military child-care
                    programs used across all four service branches on a team
                    rated 10/10 by the client.
                  </p>
                </div>
              </div>
              <div>
                <span>03</span>
                <div>
                  <h3>HHS OIG · Text Analytics Portal</h3>
                  <p>
                    Built Python and React capabilities for a secure, AWS-native
                    NLP platform immediately ahead of its MVP launch.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Full-stack range. Cloud-first judgment."
        />
        <Card className="skills-card">
          {Object.entries(skills).map(([group, items], index) => (
            <div className="skill-row" key={group}>
              <div>
                <span>0{index + 1}</span>
                <h3>{group}</h3>
              </div>
              <div>
                {items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </Card>
      </section>

      <section
        id="credentials"
        className="section container credential-section"
      >
        <SectionHeading
          eyebrow="Credentials"
          title="Deep cloud expertise, independently verified."
          description="A focused certification portfolio spanning architecture, development, operations, data, and machine learning."
        />
        <div className="credential-grid">
          {credentials.map(([name, level, year]) => (
            <Card className="credential-card" key={name}>
              <CardHeader>
                <div className="credential-icon">
                  <Cloud />
                </div>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{level}</CardDescription>
              </CardHeader>
              <CardContent>
                <span>{year}</span>
                <CheckCircle2 />
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="credential-note">
          Also certified in AWS Solutions Architect – Associate, AWS Cloud
          Practitioner, Azure Fundamentals, and GitHub Foundations.
        </p>
      </section>

      <section className="section container two-column">
        <Card className="education-card">
          <CardHeader>
            <GraduationCap />
            <CardDescription className="card-eyebrow">
              Education
            </CardDescription>
            <CardTitle>
              Computer science, from fundamentals to applied AI.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="degree">
              <div>
                <h3>M.S. Computer Science</h3>
                <p>University of Illinois Urbana-Champaign</p>
              </div>
              <Badge>2026 · 3.58 GPA</Badge>
            </div>
            <Separator />
            <div className="degree">
              <div>
                <h3>B.S. Computer Science</h3>
                <p>Rutgers University · Summa Cum Laude</p>
              </div>
              <Badge>2022 · 4.00 GPA</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="recognition-card">
          <CardHeader>
            <Medal />
            <CardDescription className="card-eyebrow">
              Recognition
            </CardDescription>
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
              <span>5 / 5</span> Consistently Surpasses Expectations · 2022–2025
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="section container extras">
        <div>
          <BookOpen />
          <span>Continuous learner</span>
          <p>
            AWS re:Invent 2025 attendee with graduate study in applied ML,
            healthcare AI, cloud computing, and data systems.
          </p>
        </div>
        <div>
          <Languages />
          <span>Multilingual</span>
          <p>
            Professional fluency in English and Urdu, plus hands-on
            Spanish-language product localization.
          </p>
        </div>
        <div>
          <Users />
          <span>Community minded</span>
          <p>
            Hack mentor at Technica and volunteer judge for the University of
            Maryland Makethon.
          </p>
        </div>
      </section>

      <section id="contact" className="contact container">
        <div className="contact-glow" aria-hidden="true" />
        <div>
          <span className="eyebrow">Let&apos;s build what matters</span>
          <h2>
            Complex mission?
            <br />
            I&apos;m ready to help.
          </h2>
          <p>
            I&apos;m interested in ambitious software engineering work at the
            intersection of cloud, security, data, and public impact.
          </p>
        </div>
        <div className="contact-actions">
          <Button asChild size="lg">
            <a href="mailto:mustafa.sadiq@outlook.com">
              <Mail /> Start a conversation
            </a>
          </Button>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/mustafasadiq/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <ArrowRight />
          </a>
        </div>
      </section>

      <footer className="footer container">
        <div className="brand">
          <span>MS</span>
          <strong>Mustafa Sadiq</strong>
        </div>
        <p>Software Application Engineer · Buffalo–Niagara Falls, NY</p>
        <a href="#top">
          Back to top <ArrowDown />
        </a>
      </footer>
    </main>
  );
}
