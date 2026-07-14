import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  LayoutDashboard,
  Mail,
  Menu,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const linkedInUrl = "https://cr.linkedin.com/in/mauricio-montoya-huertas/en";
const cvUrl = "/Mauricio_Montoya_Huertas_CV.pdf";
const emailUrl = "mailto:contact@mfkanalytics.io?subject=Analytics%20consultation";

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Method", "#method"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

const services = [
  [BarChart3, "Executive analytics", "Power BI dashboards, KPI systems, DAX optimization and reporting experiences built for leadership decisions."],
  [Database, "Data platforms", "Microsoft Fabric Lakehouse and Warehouse foundations with trusted models, pipelines and governed datasets."],
  [Cloud, "Automation engineering", "Reliable ETL and ELT workflows using APIs, Python, PySpark and repeatable reporting operations."],
  [GraduationCap, "Corporate enablement", "Practical Power BI, SQL and Fabric training tailored to the team's real data and adoption goals."],
];

const stages = [
  [Layers3, "Discover", "Clarify business goals, data sources, stakeholders, quality issues and the decisions the system must support."],
  [LayoutDashboard, "Design", "Define the analytics experience, dimensional model, governance rules and decision-ready metrics."],
  [Cloud, "Build", "Deliver Fabric, Power BI, SQL, Python, PySpark, semantic models, security and documentation."],
  [Users, "Enable", "Transfer ownership through practical training, reusable standards and adoption support."],
];

const projects = [
  ["Executive BI systems", "Power BI / Business Intelligence", "Leadership dashboards, semantic models and KPI storytelling for faster operating reviews.", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82"],
  ["Microsoft Fabric foundations", "Data Engineering / Fabric", "Lakehouse, Warehouse, medallion architecture, PySpark pipelines and analytics-ready datasets.", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82"],
  ["Analytics enablement", "Training / Adoption", "Workshops, documentation and reusable standards that help teams become self-sufficient.", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82"],
];

const projectFallbacks = [
  "from-[#e7fbf5] via-white to-[#e8eefc]",
  "from-[#eef4ff] via-white to-[#dff8ef]",
  "from-[#ecfeff] via-white to-[#eef4ff]",
];

const recommendations = [
  ["Francisco Lopez Rodriguez", "Actuary / Direct manager", "Mauricio combines strong analytics knowledge, teamwork and the commitment required to deliver excellent day-to-day results."],
  ["Pavan Srinivas Narayana", "AI / Data Engineering / NLP", "His expertise in scalable data infrastructure, Azure Data Factory and PySpark significantly improves operational efficiency."],
  ["Satya Sandeep Paramkusam", "Python / Java / Data Engineering", "Mauricio brings exceptional expertise in Data Engineering and Business Intelligence, together with strong Azure and Power BI skills."],
  ["Denis Martinez Ch", "Data Engineer / AWS / Big Data", "He is responsible, committed and collaborative, continuously improving his knowledge and adding value to data teams."],
  ["Fabian Richmond", "Director of Operations", "Mauricio is professional, committed and passionate about teaching, consistently delivering excellent training experiences."],
  ["Alexander Bermudez Munoz", "Data Scientist / Analytics", "Mauricio is a true change agent who constantly finds ways to make projects more automated and valuable."],
];

const credentials = [
  "Microsoft Certified: Fabric Data Engineer Associate",
  "Microsoft Certified: Fabric Analytics Engineer Associate",
  "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
  "Microsoft Certified Trainer (MCT)",
  "Azure Fundamentals and Azure Data Fundamentals",
  "Google Data Analytics Certificate",
];

const metrics = [
  ["6+", "Years in analytics"],
  ["Fabric", "Modern data platforms"],
  ["Power BI", "Decision systems"],
  ["MCT", "Corporate training"],
];

const cardClass = "border-slate-200/80 bg-white/85 shadow-sm shadow-slate-200/60 backdrop-blur";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-[#f8fafc]/90 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="MFK Analytics home">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#07111f] text-sm font-black text-[#44d6ad]">MFK</span>
          <span className="min-w-0">
            <strong className="block truncate text-sm font-black tracking-tight text-[#101828] sm:text-base">MFK Analytics</strong>
            <span className="hidden text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#168f78] sm:block">Analytics automation</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-[#e7fbf5] hover:text-[#07111f]">
              {label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button as="a" href="#contact" className="hidden rounded-full bg-[#07111f] px-4 py-2.5 text-white hover:bg-[#172033] sm:inline-flex">
            Book a consultation
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <div id="mobile-navigation" className="absolute inset-x-4 top-16 rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl lg:hidden">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#e7fbf5]">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-2xl bg-[#07111f] px-4 py-3 text-center font-semibold text-white">
              Book a consultation
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text, align = "left", inverted = false }) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-xs font-black uppercase tracking-[0.24em] ${inverted ? "text-[#44d6ad]" : "text-[#168f78]"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${inverted ? "text-white" : "text-[#101828]"}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-8 sm:text-lg ${inverted ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

function MotionSection({ children, className = "", ...props }) {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : {
        initial: false,
        whileInView: { y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.35, ease: "easeOut" },
      };

  return (
    <motion.section {...motionProps} className={className} {...props}>
      {children}
    </motion.section>
  );
}

function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export default function MauricioPortfolio() {
  const reduceMotion = useReducedMotion();
  const heroCards = useMemo(
    () => [
      [Building2, "Enterprise delivery", "Scalable analytics systems for operating teams."],
      [ShieldCheck, "Trusted data", "Governed models, quality checks and clear ownership."],
      [BarChart3, "Decision-ready BI", "Dashboards shaped around action, not vanity metrics."],
      [GraduationCap, "Team enablement", "Training that keeps value moving after delivery."],
    ],
    [],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />

      <div id="main-content">
        <section id="home" className="relative scroll-mt-24 overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,#dff8ef_0,#f8fafc_36%,#eef4ff_100%)] pt-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#44d6ad] to-transparent" aria-hidden="true" />
          <Container className="grid min-w-0 gap-10 py-14 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:py-24">
            <motion.div className="min-w-0" {...(reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } })}>
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#bdeee0] bg-white/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#168f78] shadow-sm sm:text-sm">
                <Sparkles size={15} aria-hidden="true" />
                BI / Fabric / Data engineering
              </div>
              <h1 className="max-w-4xl break-words text-4xl font-black leading-[1.02] tracking-tight text-[#101828] sm:text-5xl lg:text-6xl">
                Premium analytics systems for teams that need decisions, not more noise.
              </h1>
              <p className="mt-6 max-w-2xl break-words text-base leading-8 text-slate-600 sm:text-lg">
                MFK Analytics designs Power BI dashboards, Microsoft Fabric foundations, semantic models and practical training programs that turn complex data into clear business action.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button as="a" href="#services" className="rounded-full bg-[#07111f] px-5 py-3 text-base text-white hover:bg-[#172033]">
                  Explore services <ArrowRight className="ml-2" size={18} aria-hidden="true" />
                </Button>
                <Button as="a" href={cvUrl} download variant="outline" className="rounded-full border-[#9cebd6] bg-white px-5 py-3 text-base text-[#07111f] hover:bg-[#e7fbf5]">
                  <Download className="mr-2" size={18} aria-hidden="true" /> Download CV
                </Button>
                <Button as="a" href={linkedInUrl} target="_blank" rel="noreferrer" variant="outline" className="rounded-full border-slate-200 bg-white/70 px-5 py-3 text-base text-[#07111f] hover:bg-white">
                  LinkedIn <ExternalLink className="ml-2" size={16} aria-hidden="true" />
                </Button>
              </div>
              <dl className="mt-9 grid w-full max-w-2xl min-w-0 grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-4">
                {metrics.map(([value, label]) => (
                  <div key={value} className="min-w-0 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</dt>
                    <dd className="mt-2 text-xl font-black text-[#101828]">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              {heroCards.map(([Icon, title, text], index) => (
                <Card key={title} as="article" className={`${cardClass} rounded-3xl p-6 ${index === 1 || index === 2 ? "sm:translate-y-6" : ""}`}>
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#e7fbf5]">
                    <Icon className="text-[#168f78]" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-black text-[#101828]">{title}</h2>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <MotionSection id="services" className="scroll-mt-28 py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Consulting and training" title="Analytics delivery from strategy to adoption" text="A focused engagement model for organizations that need stronger reporting, modern data foundations or practical internal capability." />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {services.map(([Icon, title, text]) => (
                <Card key={title} as="article" className={`${cardClass} rounded-3xl transition hover:-translate-y-1 hover:shadow-lg`}>
                  <CardContent className="p-6 sm:p-7">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#07111f]">
                      <Icon className="text-[#44d6ad]" size={24} aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-2xl font-black text-[#101828]">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </MotionSection>

        <section id="method" className="scroll-mt-28 bg-[#07111f] py-16 text-white sm:py-20">
          <Container>
            <SectionHeading inverted eyebrow="Delivery model" title="Clear stages. Visible progress. Practical outcomes." text="Every engagement is structured to reduce ambiguity, show progress early and leave the team with reusable systems." />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stages.map(([Icon, title, text], index) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="text-[#44d6ad]" aria-hidden="true" />
                    <span className="text-sm font-black text-white/40">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <MotionSection id="work" className="scroll-mt-28 py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Selected capabilities" title="Work designed around measurable decisions" text="Representative delivery areas across analytics, data engineering and enablement." />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {projects.map(([title, category, text, image], index) => (
                <Card key={title} as="article" className={`${cardClass} group overflow-hidden rounded-3xl`}>
                  <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${projectFallbacks[index]}`}>
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,17,31,0.08),rgba(68,214,173,0.16))]" aria-hidden="true" />
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                      className="relative h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm font-black text-[#168f78]">{category}</p>
                    <h3 className="mt-2 text-2xl font-black text-[#101828]">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </MotionSection>

        <MotionSection id="experience" className="scroll-mt-28 border-y border-slate-200 bg-white py-16 sm:py-20">
          <Container className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <Card as="section" className={`${cardClass} rounded-3xl`}>
              <CardContent className="p-6 sm:p-8">
                <Rocket className="text-[#168f78]" size={34} aria-hidden="true" />
                <h2 className="mt-5 text-3xl font-black text-[#101828]">Relevant experience</h2>
                <div className="mt-6 space-y-5 leading-7 text-slate-600">
                  <p><strong className="text-[#101828]">Delbridge:</strong> Microsoft Fabric migrations, Lakehouse, Warehouse, semantic models and automation.</p>
                  <p><strong className="text-[#101828]">TruData:</strong> end-to-end data platforms, APIs, PySpark, Python, medallion architecture and data quality.</p>
                  <p><strong className="text-[#101828]">Microsoft:</strong> enterprise BI, Azure Synapse, Microsoft Fabric and reporting process optimization.</p>
                </div>
              </CardContent>
            </Card>
            <Card as="section" className={`${cardClass} rounded-3xl`}>
              <CardContent className="p-6 sm:p-8">
                <BookOpenCheck className="text-[#168f78]" size={34} aria-hidden="true" />
                <h2 className="mt-5 text-3xl font-black text-[#101828]">Certifications and credentials</h2>
                <ul className="mt-6 grid gap-3">
                  {credentials.map((credential) => (
                    <li key={credential} className="flex gap-3 rounded-2xl bg-[#f8fafc] px-4 py-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#168f78]" size={20} aria-hidden="true" />
                      <span>{credential}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Container>
        </MotionSection>

        <section id="recommendations" className="scroll-mt-28 bg-[linear-gradient(135deg,#e7fbf5_0%,#f8fafc_48%,#eef4ff_100%)] py-16 sm:py-20">
          <Container>
            <SectionHeading align="center" eyebrow="Professional trust" title="Recommendations from colleagues and leaders" />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recommendations.map(([author, role, quote]) => (
                <Card key={author} as="figure" className={`${cardClass} h-full rounded-3xl`}>
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <Quote className="text-[#168f78]" aria-hidden="true" />
                      <div className="flex" aria-label="Five star recommendation">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <Star key={value} size={14} className="fill-[#44d6ad] text-[#44d6ad]" aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="mt-5 leading-7 text-slate-700">"{quote}"</blockquote>
                    <figcaption className="mt-6 border-t border-slate-200 pt-5">
                      <strong className="block text-[#101828]">{author}</strong>
                      <span className="text-sm text-slate-500">{role}</span>
                    </figcaption>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="scroll-mt-28 py-16 sm:py-20">
          <Container>
            <div className="overflow-hidden rounded-[2rem] bg-[#07111f] text-white shadow-2xl shadow-slate-300/70">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#44d6ad]">Let's work together</p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Build the analytics capability your team actually needs.</h2>
                  <p className="mt-5 leading-8 text-slate-300">Share your current challenge, timeline and desired outcome. You will receive a focused response about the best next step.</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button as="a" href={linkedInUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#44d6ad] px-5 py-3 font-bold text-slate-950 hover:bg-[#7ee7cb]">
                      LinkedIn <ExternalLink className="ml-2" size={16} aria-hidden="true" />
                    </Button>
                    <Button as="a" href={emailUrl} variant="outline" className="rounded-full border-white/20 bg-white/5 px-5 py-3 text-white hover:bg-white/10">
                      <Mail className="mr-2" size={18} aria-hidden="true" /> Email
                    </Button>
                  </div>
                </div>

                <div className="bg-white p-5 text-slate-900 sm:p-8 lg:p-10">
                  <form action="https://formspree.io/f/meedrplp" method="POST" className="grid gap-4">
                    <input type="hidden" name="_subject" value="New consultation request from MFK Analytics website" />
                    <label className="grid gap-2 text-sm font-bold text-[#101828]">
                      Name
                      <input name="name" required autoComplete="name" className="form-field" placeholder="Your name" />
                    </label>
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="grid gap-2 text-sm font-bold text-[#101828]">
                        Work email
                        <input name="email" type="email" required autoComplete="email" className="form-field" placeholder="name@company.com" />
                      </label>
                      <label className="grid gap-2 text-sm font-bold text-[#101828]">
                        Company
                        <input name="company" autoComplete="organization" className="form-field" placeholder="Company name" />
                      </label>
                    </div>
                    <label className="grid gap-2 text-sm font-bold text-[#101828]">
                      Service needed
                      <select name="service" className="form-field">
                        <option>Power BI / Analytics Dashboard</option>
                        <option>Microsoft Fabric / Lakehouse</option>
                        <option>Corporate Training</option>
                        <option>Data Engineering / Pipelines</option>
                        <option>Analytics Automation Consulting</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="grid gap-2 text-sm font-bold text-[#101828]">
                      Message
                      <textarea name="message" required rows="5" className="form-field min-h-32 resize-y" placeholder="Tell me about your project, timeline and goals." />
                    </label>
                    <Button type="submit" className="mt-2 rounded-full bg-[#07111f] px-6 py-3 text-base font-bold text-white hover:bg-[#172033]">
                      Request consultation <ArrowRight className="ml-2" size={18} aria-hidden="true" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} MFK Analytics. Mauricio Montoya Huertas. Analytics automation, business intelligence and data engineering.</p>
      </footer>
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
