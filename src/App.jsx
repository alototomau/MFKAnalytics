import React from "react";
import { motion } from "framer-motion";
import { Mail, BarChart3, Database, GraduationCap, BriefcaseBusiness, CheckCircle2, Sparkles, LayoutDashboard, Cloud, ArrowRight, Layers3, Users, Rocket, BookOpenCheck, Download, Building2, Quote, Star } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const linkedInUrl = "https://cr.linkedin.com/in/mauricio-montoya-huertas/en";
const cvUrl = "/Mauricio_Montoya_Huertas_CV.pdf";

const companyLogos = [
  { name: "Microsoft", logo: "/logos/microsoft.png" },
  { name: "TopBuild", logo: "/logos/topbuild.png" },
  { name: "IPB Inmobiliaria Piedras Blancas", logo: "/logos/ipb.png" },
  { name: "ESCATH", logo: "/logos/escath.png" },
  { name: "Rasa Floors", logo: "/logos/rasa-floors.png" },
  { name: "Holt Renfrew", logo: "/logos/holt-renfrew.png" },
  { name: "Greyhill Capital Partners", logo: "/logos/greyhill.png" },
  { name: "EOne Entertainment", logo: "/logos/eone.png" },
  { name: "Delbridge Solutions", logo: "/logos/delbridge.png" },
  { name: "TruData", logo: "/logos/tru-data.png" },
  { name: "Grupo Unicomer", logo: "/logos/unicomer.png" },
  { name: "Quadrant Technologies", logo: "/logos/quadrant.png" },
  { name: "Dataneoshore", logo: "/logos/dataneoshore.png" },
  { name: "Moody's", logo: "/logos/moodys.png" },
  { name: "Lionsgate", logoText: "Lionsgate" },
  { name: "Lyfestyles", logoText: "Lyfestyles" },
];
const companyLogoLoop = [...companyLogos, ...companyLogos];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "Executive BI Dashboards",
    category: "Power BI / Business Intelligence",
    description: "Executive KPIs, semantic models, DAX optimization and visual storytelling for leadership teams.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Microsoft Fabric Lakehouse",
    category: "Data Engineering / Fabric",
    description: "Medallion architecture, PySpark pipelines, Lakehouse, Warehouse and analytics-ready datasets.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Report Design & Data Storytelling",
    category: "Visualization / Design",
    description: "Clean, modern and business-oriented reports that make insights easier to understand and act on.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

const services = [
  "Power BI executive dashboards",
  "Semantic models, DAX and performance tuning",
  "Microsoft Fabric migrations",
  "ETL/ELT pipelines with Python and PySpark",
  "Lakehouse and Data Warehouse architecture",
  "Corporate training in Power BI, SQL and Fabric",
];

const stages = [
  { icon: Layers3, title: "01 · Discover", text: "Business context, data sources, KPIs, pain points and opportunities for automation." },
  { icon: LayoutDashboard, title: "02 · Design", text: "Dashboard UX, visual storytelling, dimensional models and decision-ready metrics." },
  { icon: Cloud, title: "03 · Build", text: "Fabric, Power BI, SQL, Python/PySpark, pipelines, semantic models, security and performance." },
  { icon: Users, title: "04 · Enable", text: "Training, documentation, knowledge transfer and adoption support for business teams." },
];

const certifications = [
  "Microsoft Certified: Fabric Data Engineer Associate",
  "Microsoft Certified: Fabric Analytics Engineer Associate",
  "Microsoft Certified: Power BI Data Analyst Associate PL-300",
  "Microsoft Certified Trainer - MCT",
  "Azure Fundamentals / Azure Data Fundamentals",
  "Google Data Analytics Certificate",
];

const recommendations = [
  { author: "Francisco López Rodríguez", role: "Actuary · Managed Mauricio directly", quote: "Mauricio has strong knowledge of data analytics tools and an excellent disposition for teamwork, along with the drive and commitment to make day-to-day work come out perfectly." },
  { author: "Pavan Srinivas Narayana", role: "Amazon · Artificial Intelligence | Data Engineering | NLP | LLM", quote: "I highly recommend Mauricio, who has demonstrated exceptional skill as a Data Engineer. His expertise in scalable data infrastructure, Azure Data Factory and PySpark has significantly improved operational efficiency." },
  { author: "Satya Sandeep Paramkusam", role: "Python | Java Developer · Quadrant Technologies", quote: "Mauricio has exceptional expertise in Data Engineering and Business Intelligence. His technical skills in Azure and Power BI, plus his commitment to continuous learning, make him a valuable asset." },
  { author: "Denis Martinez Ch", role: "Data Engineer · AWS | ITILv4 | Big Data | SQL | Python", quote: "Mauricio is responsible, studious, committed and collaborative, with strong ethical values. He continuously improves his knowledge in trending technologies and brings value in Business Intelligence and Big Data." },
  { author: "Juan Jose Calderon Calderon", role: "Information Technology Service Desk · CCSS", quote: "Mauricio stands out for solving problems efficiently and effectively. His technical skills, ethics, leadership and interpersonal abilities make him a valuable asset to any organization." },
  { author: "Fabián Richmond", role: "Director de Operaciones RH Business School", quote: "Mauricio is responsible, professional and committed to his work. He is passionate about teaching and consistently delivers excellent training experiences." },
  { author: "Alexander Bermúdez Muñoz", role: "Data Scientist | Data Analyst | Machine Learning | Python | SQL | Azure | AWS", quote: "Mauricio is a true change agent. He is always learning, always finding ways to make projects more complex, automated and valuable for the teams he works with." },
  { author: "Julio Solano", role: "Director · Grow Up Data Analytics", quote: "Mauricio is passionate about data, constantly improves his skills, puts learning into practice and proposes improvements. He is a strong resource for data teams." },
  { author: "Gabriel Oporto Quesada", role: "Data Analyst | Data Scientist | ETL | Power Platform", quote: "A person with a growth mindset." },
  { author: "Isaac Traña", role: "ASQ Six Sigma Black Belt | PMP | Lean | Scrum Master", quote: "Mauricio is passionate about BI and never settles for what he already knows. He continuously improves and brings collaboration, service and ideas to the team." },
];


function Header() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Recommendations", href: "#recommendations" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-[#f7fbff]/75 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#07111f] shadow-sm transition-transform group-hover:scale-105">
            <span className="text-sm font-black text-[#44d6ad]">MFK</span>
          </div>
          <div className="leading-tight">
            <p className="font-black tracking-tight text-[#445065]">MFK Analytics</p>
            <p className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#23b895] sm:block">Analytics Automation</p>
          </div>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white bg-white/65 p-1 shadow-sm lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-[#526074] transition hover:bg-[#d8fbf2] hover:text-[#07111f]">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={cvUrl} download className="hidden sm:block">
            <Button variant="outline" className="rounded-2xl border-[#44d6ad] bg-white/80 px-4 py-3 text-sm font-bold text-[#445065] hover:bg-white">
              <Download className="mr-2" size={16} /> CV
            </Button>
          </a>
          <a href="#contact">
            <Button className="rounded-2xl bg-[#07111f] px-4 py-3 text-sm font-bold text-white hover:bg-[#172033]">
              Book a Consultation
            </Button>
          </a>
        </div>
      </nav>

      <div className="flex gap-2 overflow-x-auto px-5 pb-3 lg:hidden">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 rounded-full border border-white bg-white/70 px-4 py-2 text-xs font-bold text-[#526074] shadow-sm">
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default function MauricioPortfolio() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#f4f1ea] text-[#1f2937]">
      <Header />
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#f7fbff] via-[#eefbf7] to-[#dbe7f8] pt-20">
        <motion.div animate={{ x: [0, 30, 0], y: [0, -22, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#5eead4]/30 blur-3xl" />
        <motion.div animate={{ x: [0, -28, 0], y: [0, 18, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#bfd2f3]/60 blur-3xl" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute right-[18%] top-32 h-24 w-24 rounded-[2rem] border border-white/60 bg-white/20 shadow-sm backdrop-blur" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_0.95fr] lg:px-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.div whileHover={{ scale: 1.03 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
              <Sparkles size={16} /> Analytics Automation · BI · Data Engineering
            </motion.div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#445065] md:text-7xl">
              Analytical Solutions <span className="block text-[#44d6ad]">for Growth.</span>
            </h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 224 }} transition={{ duration: 1, delay: 0.45 }} className="mt-7 h-1.5 rounded-full bg-[#44d6ad]" />
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#526074]">
              I help companies transform complex data into scalable analytics platforms, executive dashboards, semantic models and practical training programs that drive better decisions.
            </p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-9 flex flex-wrap gap-4">
              <a href="#services"><Button className="rounded-2xl bg-[#07111f] px-6 py-6 text-base font-bold text-white hover:bg-[#172033]">Explore Services <ArrowRight className="ml-2" size={18} /></Button></a>
              <a href={cvUrl} download><Button variant="outline" className="rounded-2xl border-[#44d6ad] bg-white/80 px-6 py-6 text-base font-bold text-[#445065] hover:bg-white"><Download className="mr-2" size={18} /> Download CV</Button></a>
              <a href={linkedInUrl} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl border-slate-300 bg-white/60 px-6 py-6 text-base text-[#445065] hover:bg-white"><span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded bg-[#44d6ad] text-xs font-black text-white">in</span> LinkedIn</Button></a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative min-h-[420px] max-lg:mx-auto max-lg:w-full max-sm:min-h-[520px]">
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.05, rotate: -1 }} className="absolute left-0 top-8 w-48 rounded-[2rem] max-sm:left-2 max-sm:top-6 max-sm:w-44 max-sm:left-2 max-sm:top-6 max-sm:w-44 bg-white/70 p-6 text-center shadow-xl backdrop-blur md:left-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow"><Building2 className="text-[#44d6ad]" /></div>
              <p className="text-sm leading-6 text-[#526074]">Enterprise analytics, reporting automation and Microsoft Fabric delivery.</p>
              <p className="mt-5 font-black text-[#445065]">Fabric</p>
            </motion.div>
            <motion.div animate={{ y: [0, 16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.05, rotate: 1 }} className="absolute right-4 top-0 w-52 rounded-[2rem] max-sm:right-2 max-sm:top-48 max-sm:w-44 max-sm:right-2 max-sm:top-40 max-sm:w-44 bg-white/60 p-6 text-center shadow-xl backdrop-blur">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow"><BarChart3 className="text-[#44d6ad]" /></div>
              <p className="text-sm leading-6 text-[#526074]">Dashboards that simplify decisions for executive and operational teams.</p>
              <p className="mt-5 font-black text-[#445065]">Power BI</p>
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.05 }} className="absolute bottom-0 right-16 w-56 rounded-[2rem] max-sm:bottom-2 max-sm:right-10 max-sm:w-48 max-sm:right-8 max-sm:bottom-4 max-sm:w-48 bg-white/70 p-6 text-center shadow-xl backdrop-blur">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow"><GraduationCap className="text-[#44d6ad]" /></div>
              <p className="text-sm leading-6 text-[#526074]">Hands-on training for teams that need practical analytics capabilities.</p>
              <p className="mt-5 font-black text-[#445065]">Training</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-5 md:grid-cols-4">
          {[[BriefcaseBusiness, "6+ years", "Analytics and data engineering"], [Database, "Fabric", "Lakehouse, Warehouse and models"], [BarChart3, "Power BI", "Dashboards, DAX and performance"], [GraduationCap, "Trainer", "Corporate training"]].map(([Icon, title, text]) => (
            <motion.div key={title} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 250 }}>
              <Card className="rounded-3xl border-white bg-white/80 shadow-sm backdrop-blur transition-shadow hover:shadow-xl">
                <CardContent className="p-6"><Icon className="mb-5 text-[#44d6ad]" size={30} /><h3 className="text-2xl font-black text-[#445065]">{title}</h3><p className="mt-2 text-sm text-[#526074]">{text}</p></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="overflow-hidden px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-[#44bfa0]">Trusted experience</p>
          <h2 className="mt-3 text-center text-4xl font-black text-[#445065] md:text-5xl">Companies and projects served</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[#526074]">
            Experience supporting analytics, reporting and data initiatives for organizations across consulting, retail, real estate, flooring, health, entertainment and enterprise services.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-[#f4f1ea] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-[#f4f1ea] to-transparent" />

          <motion.div animate={{ x: [0, -1180] }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} className="flex w-max gap-5">
            {companyLogoLoop.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                whileHover={{ scale: 1.07, y: -6 }}
                className="group flex h-24 w-56 items-center justify-center rounded-[2rem] border border-white bg-white/80 px-6 py-4 shadow-sm backdrop-blur transition-all hover:shadow-xl"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-h-14 max-w-[165px] object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="text-xl font-black tracking-wide text-[#445065] opacity-75 transition-opacity group-hover:opacity-100">
                    {company.logoText}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65 }} id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="text-sm font-bold uppercase tracking-[0.3em] text-[#44bfa0]">Consulting & Training</p><h2 className="mt-3 text-4xl font-black text-[#445065] md:text-5xl">Analytics delivery in clear stages</h2></div>
          <p className="text-lg leading-8 text-[#526074]">A practical approach to diagnose, design, build and enable analytics adoption for companies that need high-impact reporting or stronger internal data capabilities.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stages.map(({ icon: Icon, title, text }, index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -10, scale: 1.02 }}>
              <Card className="h-full rounded-[2rem] border-white bg-white/80 shadow-sm backdrop-blur transition-shadow hover:shadow-xl">
                <CardContent className="p-6"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d8fbf2]"><Icon className="text-[#23b895]" size={24} /></div><h3 className="text-xl font-black text-[#445065]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#526074]">{text}</p></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="bg-[#07111f] px-6 py-16 text-white lg:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.3em] text-[#44d6ad]">Services</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Power BI & Microsoft Fabric for business teams</h2></div><a href={linkedInUrl} target="_blank" rel="noreferrer" className="text-[#a9f5e2] hover:text-white">Connect on LinkedIn →</a></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <motion.div key={service} whileHover={{ x: 6, scale: 1.015 }} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-slate-100"><CheckCircle2 className="mt-1 shrink-0 text-[#44d6ad]" size={20} /><span>{service}</span></motion.div>)}</div>
        </motion.div>
      </section>

      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65 }} className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-10"><p className="text-sm font-bold uppercase tracking-[0.3em] text-[#44bfa0]">Portfolio</p><h2 className="mt-3 text-4xl font-black text-[#445065] md:text-5xl">Featured work</h2><p className="mt-4 max-w-2xl text-[#526074]">This section can evolve into real case studies with dashboard screenshots, Power BI demos and business outcomes.</p></div>
        <div className="grid gap-6 lg:grid-cols-3">{projects.map((project) => <motion.div key={project.title} whileHover={{ y: -10, scale: 1.015 }} transition={{ type: "spring", stiffness: 220 }}><Card className="overflow-hidden rounded-[2rem] border-white bg-white/85 shadow-sm transition-shadow hover:shadow-2xl"><motion.img whileHover={{ scale: 1.04 }} transition={{ duration: 0.35 }} src={project.image} alt={project.title} className="h-56 w-full object-cover" /><CardContent className="p-6"><p className="text-sm font-bold text-[#44bfa0]">{project.category}</p><h3 className="mt-2 text-2xl font-black text-[#445065]">{project.title}</h3><p className="mt-3 text-[#526074]">{project.description}</p></CardContent></Card></motion.div>)}</div>
      </motion.section>

      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65 }} id="experience" className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <motion.div whileHover={{ y: -8 }}><Card className="h-full rounded-[2rem] border-white bg-white/85 shadow-sm transition-shadow hover:shadow-xl"><CardContent className="p-8"><Rocket className="mb-5 text-[#44bfa0]" size={34} /><h2 className="text-3xl font-black text-[#445065]">Relevant experience</h2><div className="mt-6 space-y-5 text-[#526074]"><p><strong className="text-[#445065]">Delbridge:</strong> ETL, Microsoft Fabric, migrations, Lakehouse, Warehouse, semantic models and automation.</p><p><strong className="text-[#445065]">Tru Data:</strong> end-to-end data platforms, APIs, PySpark, Python, medallion architecture and data quality.</p><p><strong className="text-[#445065]">Microsoft:</strong> enterprise BI solutions, Azure Synapse, Microsoft Fabric and reporting process optimization.</p></div></CardContent></Card></motion.div>
        <motion.div whileHover={{ y: -8 }}><Card className="h-full rounded-[2rem] border-white bg-white/85 shadow-sm transition-shadow hover:shadow-xl"><CardContent className="p-8"><BookOpenCheck className="mb-5 text-[#44bfa0]" size={34} /><h2 className="text-3xl font-black text-[#445065]">Key certifications</h2><div className="mt-6 grid gap-3">{certifications.map((item) => <motion.div key={item} whileHover={{ x: 6 }} className="rounded-2xl bg-[#f4f1ea] px-4 py-3 text-[#526074]">{item}</motion.div>)}</div></CardContent></Card></motion.div>
      </motion.section>

      <section id="recommendations" className="relative overflow-hidden bg-gradient-to-br from-[#e8f7f4] via-[#f7fbff] to-[#dfe9f8] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.3em] text-[#44bfa0]">LinkedIn</p><h2 className="mt-3 text-4xl font-black text-[#445065] md:text-5xl">Professional recommendations</h2></div><p className="text-[#526074]">Real recommendations from people who worked with, studied with or managed Mauricio. Sensitive contact information is intentionally excluded.</p></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((rec, index) => (
              <motion.div key={rec.author} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.08 }} whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.4 : 0.4 }}>
                <Card className="h-full rounded-[2rem] border-white bg-white/75 shadow-sm backdrop-blur transition-shadow hover:shadow-2xl"><CardContent className="p-7"><div className="mb-5 flex items-center justify-between"><Quote className="text-[#44d6ad]" /><div className="flex gap-1">{[1,2,3,4,5].map((s) => <Star key={s} size={14} className="fill-[#44d6ad] text-[#44d6ad]" />)}</div></div><p className="text-base leading-7 text-[#526074]">“{rec.quote}”</p><div className="mt-6 border-t border-slate-200 pt-5 text-sm"><strong className="block text-[#445065]">{rec.author}</strong><span className="text-[#6b7280]">{rec.role}</span></div></CardContent></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <motion.section id="contact" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Card className="overflow-hidden rounded-[2.5rem] border-white bg-[#07111f] text-white shadow-xl">
          <CardContent className="grid gap-0 p-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#07111f] via-[#0b1b2d] to-[#10243a] p-8 md:p-10">
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#44d6ad]/20 blur-3xl" />
              <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[#bfd2f3]/10 blur-3xl" />
              <div className="relative">
                <p className="text-sm font-black uppercase tracking-[0.32em] text-[#44d6ad]">Let’s work together</p>
                <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">Request an analytics automation consultation</h2>
                <p className="mt-5 max-w-xl text-slate-200">
                  Tell me what you need: dashboards, automation, Microsoft Fabric, semantic models, data pipelines, training or analytics advisory.
                </p>

                <div className="mt-8 grid gap-3 text-sm text-slate-100">
                  {[
                    "Analytics automation, dashboards and executive reporting",
                    "Microsoft Fabric architecture and implementation",
                    "Corporate training for analytics teams",
                    "Data engineering, semantic models and automation"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#44d6ad]" size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={linkedInUrl} target="_blank" rel="noreferrer">
                    <Button className="rounded-2xl bg-[#44d6ad] px-5 py-5 font-bold text-slate-950 hover:bg-[#7ee7cb]">
                      Connect on LinkedIn
                    </Button>
                  </a>
                  <a href={cvUrl} download>
                    <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-5 py-5 text-white hover:bg-white/10">
                      <Download className="mr-2" size={18} /> Download CV
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 text-[#1f2937] md:p-10">
              <form
                action="https://formspree.io/f/meedrplp"
                method="POST"
                className="grid gap-4"
              >
                <input type="hidden" name="_subject" value="New consultation request from MFK Analytics website" />

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#445065]">Name</label>
                  <input name="name" required className="w-full rounded-2xl border border-slate-200 bg-[#f7fbff] px-4 py-3 outline-none transition focus:border-[#44d6ad] focus:ring-4 focus:ring-[#44d6ad]/15" placeholder="Your name" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#445065]">Work email</label>
                    <input name="email" type="email" required className="w-full rounded-2xl border border-slate-200 bg-[#f7fbff] px-4 py-3 outline-none transition focus:border-[#44d6ad] focus:ring-4 focus:ring-[#44d6ad]/15" placeholder="name@company.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#445065]">Company</label>
                    <input name="company" className="w-full rounded-2xl border border-slate-200 bg-[#f7fbff] px-4 py-3 outline-none transition focus:border-[#44d6ad] focus:ring-4 focus:ring-[#44d6ad]/15" placeholder="Company name" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#445065]">Service needed</label>
                  <select name="service" className="w-full rounded-2xl border border-slate-200 bg-[#f7fbff] px-4 py-3 outline-none transition focus:border-[#44d6ad] focus:ring-4 focus:ring-[#44d6ad]/15">
                    <option>Power BI / Analytics Dashboard</option>
                    <option>Microsoft Fabric / Lakehouse</option>
                    <option>Corporate Training</option>
                    <option>Data Engineering / Pipelines</option>
                    <option>Analytics Automation Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#445065]">Message</label>
                  <textarea name="message" required rows="5" className="w-full resize-none rounded-2xl border border-slate-200 bg-[#f7fbff] px-4 py-3 outline-none transition focus:border-[#44d6ad] focus:ring-4 focus:ring-[#44d6ad]/15" placeholder="Tell me about your project, timeline and goals." />
                </div>

                <Button type="submit" className="mt-2 rounded-2xl bg-[#07111f] px-6 py-5 text-base font-bold text-white hover:bg-[#172033]">
                  Request Consultation <ArrowRight className="ml-2" size={18} />
                </Button>

                <p className="text-xs leading-5 text-slate-500">
                  Messages are sent securely through Formspree to MFK Analytics.
                </p>
              </form>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <Analytics />
      <SpeedInsights />

      <footer className="border-t border-white px-6 py-8 text-center text-sm text-[#6b7280]">© {new Date().getFullYear()} MFK Analytics · Mauricio Montoya Huertas. Power BI, Microsoft Fabric and Data Engineering.</footer>
    </main>
  );
}
