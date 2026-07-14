import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BarChart3, BookOpenCheck, Building2, CheckCircle2, Cloud, Database, Download, ExternalLink, GraduationCap, Languages, Mail, Menu, Quote, Rocket, ShieldCheck, Sparkles, Star, Users, X } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const baseUrl = "https://www.mfkanalytics.io";
const linkedInUrl = "https://cr.linkedin.com/in/mauricio-montoya-huertas/en";
const cvUrl = "/Mauricio_Montoya_Huertas_CV.pdf";
const emailUrl = "mailto:contact@mfkanalytics.io?subject=Analytics%20consultation";
const languages = ["en", "es"];
const latamZones = ["America/Bogota", "America/Costa_Rica", "America/El_Salvador", "America/Guatemala", "America/Lima", "America/Managua", "America/Mexico_City", "America/Panama", "America/Santiago", "America/Tegucigalpa"];
const icons = { analytics: BarChart3, data: Database, automation: Cloud, training: GraduationCap };
const cardClass = "border-slate-200/80 bg-white/85 shadow-sm shadow-slate-200/60 backdrop-blur";
const images = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
];

const copy = {
  en: {
    path: "/en",
    htmlLang: "en",
    langName: "English",
    seoTitle: "MFK Analytics | Power BI, Fabric and Analytics Automation Consulting",
    seoDescription: "Premium analytics consulting for Power BI, Fabric, data engineering, automation and corporate analytics training.",
    nav: ["Home", "Services", "Method", "Work", "Experience", "Contact"],
    skip: "Skip to content",
    brand: "Analytics automation",
    cta: "Book a consultation",
    heroKicker: "BI / Fabric / Data engineering",
    heroTitle: "Premium analytics systems for teams that need decisions, not more noise.",
    heroText: "MFK Analytics designs Power BI dashboards, Fabric foundations, semantic models and practical training programs that turn complex data into clear business action.",
    explore: "Explore services",
    download: "Download CV",
    metrics: [["6+", "Years in analytics"], ["Fabric", "Modern data platforms"], ["Power BI", "Decision systems"], ["MCT", "Corporate training"]],
    heroCards: [[Building2, "Enterprise delivery", "Scalable analytics systems for operating teams."], [ShieldCheck, "Trusted data", "Governed models, quality checks and clear ownership."], [BarChart3, "Decision-ready BI", "Dashboards shaped around action, not vanity metrics."], [GraduationCap, "Team enablement", "Training that keeps value moving after delivery."]],
    servicesHead: ["Consulting and training", "Analytics delivery from strategy to adoption", "A focused engagement model for organizations that need stronger reporting, modern data foundations or practical internal capability."],
    services: [["analytics", "Executive analytics", "Power BI dashboards, KPI systems, DAX optimization and reporting experiences built for leadership decisions."], ["data", "Data platforms", "Fabric Lakehouse and Warehouse foundations with trusted models, pipelines and governed datasets."], ["automation", "Automation engineering", "Reliable ETL and ELT workflows using APIs, Python, PySpark and repeatable reporting operations."], ["training", "Corporate enablement", "Practical Power BI, SQL and Fabric training tailored to the team's real data and adoption goals."]],
    methodHead: ["Delivery model", "Clear stages. Visible progress. Practical outcomes.", "Every engagement is structured to reduce ambiguity, show progress early and leave the team with reusable systems."],
    stages: [["01", "Discover", "Clarify goals, sources, stakeholders, quality issues and the decisions the system must support."], ["02", "Design", "Define the analytics experience, dimensional model, governance rules and decision-ready metrics."], ["03", "Build", "Deliver BI, SQL, Python, PySpark, semantic models, security and documentation."], ["04", "Enable", "Transfer ownership through practical training, reusable standards and adoption support."]],
    workHead: ["Selected capabilities", "Work designed around measurable decisions", "Representative portfolio areas across analytics, data engineering and enablement."],
    projects: [["Executive BI systems", "Power BI / Business Intelligence", "Leadership dashboards, semantic models and KPI storytelling for faster operating reviews."], ["Fabric foundations", "Data Engineering / Fabric", "Lakehouse, Warehouse, medallion architecture, PySpark pipelines and analytics-ready datasets."], ["Analytics enablement", "Training / Adoption", "Workshops, documentation and reusable standards that help teams become self-sufficient."]],
    experienceTitle: "Relevant experience",
    experience: [["Enterprise analytics delivery", "Data platform migrations, Lakehouse, Warehouse, semantic models and automation."], ["Modern data platforms", "End-to-end data platforms, APIs, PySpark, Python, medallion architecture and data quality."], ["BI and reporting optimization", "Enterprise BI, cloud analytics warehouses and reporting process optimization."]],
    credentialsTitle: "Certifications and credentials",
    recHead: ["Professional trust", "Recommendations from colleagues and leaders"],
    recLabel: "Five star recommendation",
    recommendations: [["Francisco Lopez Rodriguez", "Actuary / Direct manager", "Mauricio combines strong analytics knowledge, teamwork and the commitment required to deliver excellent results."], ["Pavan Srinivas Narayana", "AI / Data Engineering / NLP", "His expertise in scalable data infrastructure and PySpark improves operational efficiency."], ["Alexander Bermudez Munoz", "Data Scientist / Analytics", "Mauricio is a true change agent who finds ways to make projects more automated and valuable."]],
    contact: ["Let's work together", "Build the analytics capability your team actually needs.", "Share your current challenge, timeline and desired outcome. You will receive a focused response about the best next step.", "Email", "Request consultation"],
    fields: ["Name", "Your name", "Work email", "name@company.com", "Company", "Company name", "Service needed", "Message", "Tell me about your project, timeline and goals."],
    options: ["Power BI / Analytics Dashboard", "Fabric / Lakehouse", "Corporate Training", "Data Engineering / Pipelines", "Analytics Automation Consulting", "Other"],
    subject: "New consultation request from MFK Analytics website",
    footer: "Analytics automation, business intelligence and data engineering.",
  },
  es: {
    path: "/es",
    htmlLang: "es",
    langName: "Español",
    seoTitle: "MFK Analytics | Consultoría en Power BI, Fabric y Automatización Analítica",
    seoDescription: "Consultoría premium en Power BI, Fabric, ingeniería de datos, automatización y capacitación corporativa en analítica.",
    nav: ["Inicio", "Servicios", "Método", "Portfolio", "Experiencia", "Contacto"],
    skip: "Saltar al contenido",
    brand: "Automatización analítica",
    cta: "Agenda una consulta",
    heroKicker: "BI / Fabric / Ingeniería de datos",
    heroTitle: "Sistemas analíticos premium para equipos que necesitan decisiones, no más ruido.",
    heroText: "MFK Analytics diseña dashboards en Power BI, bases modernas en Fabric, modelos semánticos y capacitación práctica para convertir datos complejos en acciones claras.",
    explore: "Ver servicios",
    download: "Descargar CV",
    metrics: [["6+", "Años en analítica"], ["Fabric", "Plataformas modernas"], ["Power BI", "Sistemas de decisión"], ["MCT", "Capacitación corporativa"]],
    heroCards: [[Building2, "Entrega empresarial", "Sistemas analíticos escalables para equipos operativos."], [ShieldCheck, "Datos confiables", "Modelos gobernados, controles de calidad y ownership claro."], [BarChart3, "BI para decidir", "Dashboards enfocados en acciones, no en métricas decorativas."], [GraduationCap, "Habilitación de equipos", "Capacitación para sostener el valor después de la entrega."]],
    servicesHead: ["Consultoría y capacitación", "Entrega analítica desde la estrategia hasta la adopción", "Un modelo de trabajo enfocado para organizaciones que necesitan reportes más sólidos, bases modernas de datos o capacidad interna práctica."],
    services: [["analytics", "Analítica ejecutiva", "Dashboards en Power BI, sistemas de KPIs, optimización DAX y experiencias de reporte para decisiones de liderazgo."], ["data", "Plataformas de datos", "Bases en Fabric Lakehouse y Warehouse con modelos confiables, pipelines y datasets gobernados."], ["automation", "Automatización analítica", "Flujos ETL y ELT confiables con APIs, Python, PySpark y operaciones de reporting repetibles."], ["training", "Habilitación corporativa", "Capacitación práctica en Power BI, SQL y Fabric adaptada a los datos reales y objetivos del equipo."]],
    methodHead: ["Modelo de entrega", "Etapas claras. Progreso visible. Resultados prácticos.", "Cada proyecto se estructura para reducir ambigüedad, mostrar avances temprano y dejar sistemas reutilizables en manos del equipo."],
    stages: [["01", "Descubrir", "Aclarar objetivos, fuentes, stakeholders, problemas de calidad y decisiones a soportar."], ["02", "Diseñar", "Definir la experiencia analítica, modelo dimensional, reglas de gobierno y métricas listas para decidir."], ["03", "Construir", "Entregar BI, SQL, Python, PySpark, modelos semánticos, seguridad y documentación."], ["04", "Habilitar", "Transferir ownership con capacitación práctica, estándares reutilizables y soporte de adopción."]],
    workHead: ["Capacidades seleccionadas", "Trabajo diseñado alrededor de decisiones medibles", "Áreas de portfolio en analítica, ingeniería de datos y habilitación."],
    projects: [["Sistemas ejecutivos de BI", "Power BI / Business Intelligence", "Dashboards de liderazgo, modelos semánticos y narrativa de KPIs para revisiones más rápidas."], ["Bases en Fabric", "Ingeniería de datos / Fabric", "Lakehouse, Warehouse, arquitectura medallion, pipelines en PySpark y datasets listos para analítica."], ["Habilitación analítica", "Capacitación / Adopción", "Workshops, documentación y estándares reutilizables para que los equipos sean más autosuficientes."]],
    experienceTitle: "Experiencia relevante",
    experience: [["Entrega analítica empresarial", "Migraciones de plataformas de datos, Lakehouse, Warehouse, modelos semánticos y automatización."], ["Plataformas modernas de datos", "Plataformas de datos end-to-end, APIs, PySpark, Python, arquitectura medallion y calidad de datos."], ["Optimización de BI y reporting", "BI empresarial, data warehouses en la nube y optimización de procesos de reporting."]],
    credentialsTitle: "Certificaciones y credenciales",
    recHead: ["Confianza profesional", "Recomendaciones de colegas y líderes"],
    recLabel: "Recomendación de cinco estrellas",
    recommendations: [["Francisco Lopez Rodriguez", "Actuario / Jefe directo", "Mauricio combina conocimiento analítico sólido, trabajo en equipo y compromiso para entregar excelentes resultados."], ["Pavan Srinivas Narayana", "AI / Data Engineering / NLP", "Su experiencia en infraestructura de datos escalable y PySpark mejora la eficiencia operativa."], ["Alexander Bermudez Munoz", "Data Scientist / Analytics", "Mauricio es un verdadero agente de cambio que automatiza y aumenta el valor de los proyectos."]],
    contact: ["Trabajemos juntos", "Construye la capacidad analítica que tu equipo realmente necesita.", "Comparte tu reto actual, fecha objetivo y resultado esperado. Recibirás una respuesta enfocada sobre el mejor siguiente paso.", "Correo", "Solicitar consulta"],
    fields: ["Nombre", "Tu nombre", "Correo laboral", "nombre@empresa.com", "Empresa", "Nombre de la empresa", "Servicio requerido", "Mensaje", "Cuéntame sobre tu proyecto, tiempos y objetivos."],
    options: ["Dashboard Power BI / Analítica", "Fabric / Lakehouse", "Capacitación corporativa", "Ingeniería de datos / Pipelines", "Consultoría en automatización analítica", "Otro"],
    subject: "Nueva solicitud de consultoría desde el sitio de MFK Analytics",
    footer: "Automatización analítica, business intelligence e ingeniería de datos.",
  },
};

const credentials = ["Fabric Data Engineer Associate", "Fabric Analytics Engineer Associate", "Power BI Data Analyst Associate (PL-300)", "Microsoft Certified Trainer (MCT)", "Azure Fundamentals and Azure Data Fundamentals", "Google Data Analytics Certificate"];
const navTargets = ["#home", "#services", "#method", "#work", "#experience", "#contact"];

function getLanguage() {
  const pathLanguage = window.location.pathname.split("/").find((part) => languages.includes(part));
  if (pathLanguage) return pathLanguage;
  const stored = window.localStorage.getItem("mfk-language");
  if (languages.includes(stored)) return stored;
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  if (browserLanguages.some((language) => language?.toLowerCase().startsWith("es"))) return "es";
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  return latamZones.some((zone) => timeZone.startsWith(zone)) ? "es" : "en";
}

function syncMeta(language) {
  const page = copy[language];
  const canonical = `${baseUrl}${page.path}`;
  document.documentElement.lang = page.htmlLang;
  document.title = page.seoTitle;
  const meta = (selector, value) => document.querySelector(selector)?.setAttribute("content", value);
  meta('meta[name="description"]', page.seoDescription);
  meta('meta[property="og:title"]', page.seoTitle);
  meta('meta[property="og:description"]', page.seoDescription);
  meta('meta[property="og:url"]', canonical);
  meta('meta[name="twitter:title"]', page.seoTitle);
  meta('meta[name="twitter:description"]', page.seoDescription);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
}

function Header({ page, language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const other = language === "en" ? "es" : "en";
  const switchLanguage = () => {
    setLanguage(other);
    setOpen(false);
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-[#f8fafc]/90 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="MFK Analytics home">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#07111f] text-sm font-black text-[#44d6ad]">MFK</span>
          <span className="min-w-0"><strong className="block truncate text-sm font-black tracking-tight text-[#101828] sm:text-base">MFK Analytics</strong><span className="hidden text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#168f78] sm:block">{page.brand}</span></span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm lg:flex">
          {page.nav.map((label, index) => <a key={label} href={navTargets[index]} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-[#e7fbf5] hover:text-[#07111f]">{label}</a>)}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" aria-label={`${page.langName}: ${copy[other].langName}`} onClick={switchLanguage} className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-black uppercase text-slate-700 shadow-sm transition hover:bg-[#e7fbf5]"><Languages size={17} aria-hidden="true" /> {other}</button>
          <Button as="a" href="#contact" className="hidden rounded-full bg-[#07111f] px-4 py-2.5 text-white hover:bg-[#172033] sm:inline-flex">{page.cta}</Button>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden">{open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}</button>
        </div>
        {open && <div id="mobile-navigation" className="absolute inset-x-4 top-16 rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl lg:hidden">{page.nav.map((label, index) => <a key={label} href={navTargets[index]} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#e7fbf5]">{label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-2xl bg-[#07111f] px-4 py-3 text-center font-semibold text-white">{page.cta}</a></div>}
      </nav>
    </header>
  );
}

function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Heading({ data, center = false, inverted = false }) {
  return <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className={`text-xs font-black uppercase tracking-[0.24em] ${inverted ? "text-[#44d6ad]" : "text-[#168f78]"}`}>{data[0]}</p><h2 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${inverted ? "text-white" : "text-[#101828]"}`}>{data[1]}</h2>{data[2] && <p className={`mt-5 text-base leading-8 sm:text-lg ${inverted ? "text-slate-300" : "text-slate-600"}`}>{data[2]}</p>}</div>;
}

function MotionSection({ children, className = "", ...props }) {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion ? {} : { initial: false, whileInView: { y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.35, ease: "easeOut" } };
  return <motion.section {...motionProps} className={className} {...props}>{children}</motion.section>;
}

export default function MauricioPortfolio() {
  const reduceMotion = useReducedMotion();
  const [language, setLanguage] = useState(() => (typeof window === "undefined" ? "en" : getLanguage()));
  const page = copy[language];

  useEffect(() => {
    window.localStorage.setItem("mfk-language", language);
    if (window.location.pathname !== page.path) window.history.replaceState({}, "", `${page.path}${window.location.hash}`);
    syncMeta(language);
  }, [language, page.path]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900">
      <a href="#main-content" className="skip-link">{page.skip}</a>
      <Header page={page} language={language} setLanguage={setLanguage} />
      <div id="main-content">
        <section id="home" className="relative scroll-mt-24 overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,#dff8ef_0,#f8fafc_36%,#eef4ff_100%)] pt-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#44d6ad] to-transparent" aria-hidden="true" />
          <Container className="grid min-w-0 gap-10 py-14 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:py-24">
            <motion.div className="min-w-0" {...(reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } })}>
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#bdeee0] bg-white/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#168f78] shadow-sm sm:text-sm"><Sparkles size={15} aria-hidden="true" />{page.heroKicker}</div>
              <h1 className="max-w-4xl break-words text-4xl font-black leading-[1.02] tracking-tight text-[#101828] sm:text-5xl lg:text-6xl">{page.heroTitle}</h1>
              <p className="mt-6 max-w-2xl break-words text-base leading-8 text-slate-600 sm:text-lg">{page.heroText}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button as="a" href="#services" className="rounded-full bg-[#07111f] px-5 py-3 text-base text-white hover:bg-[#172033]">{page.explore} <ArrowRight className="ml-2" size={18} aria-hidden="true" /></Button><Button as="a" href={cvUrl} download variant="outline" className="rounded-full border-[#9cebd6] bg-white px-5 py-3 text-base text-[#07111f] hover:bg-[#e7fbf5]"><Download className="mr-2" size={18} aria-hidden="true" /> {page.download}</Button><Button as="a" href={linkedInUrl} target="_blank" rel="noreferrer" variant="outline" className="rounded-full border-slate-200 bg-white/70 px-5 py-3 text-base text-[#07111f] hover:bg-white">LinkedIn <ExternalLink className="ml-2" size={16} aria-hidden="true" /></Button></div>
              <dl className="mt-9 grid w-full max-w-2xl min-w-0 grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-4">{page.metrics.map(([value, label]) => <div key={value} className="min-w-0 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm"><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</dt><dd className="mt-2 text-xl font-black text-[#101828]">{value}</dd></div>)}</dl>
            </motion.div>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2">{page.heroCards.map(([Icon, title, text], index) => <Card key={title} as="article" className={`${cardClass} rounded-3xl p-6 ${index === 1 || index === 2 ? "sm:translate-y-6" : ""}`}><div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#e7fbf5]"><Icon className="text-[#168f78]" aria-hidden="true" /></div><h2 className="text-xl font-black text-[#101828]">{title}</h2><p className="mt-2 leading-7 text-slate-600">{text}</p></Card>)}</div>
          </Container>
        </section>

        <MotionSection id="services" className="scroll-mt-28 py-16 sm:py-20"><Container><Heading data={page.servicesHead} /><div className="mt-10 grid gap-5 md:grid-cols-2">{page.services.map(([iconKey, title, text]) => { const Icon = icons[iconKey]; return <Card key={title} as="article" className={`${cardClass} rounded-3xl transition hover:-translate-y-1 hover:shadow-lg`}><CardContent className="p-6 sm:p-7"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#07111f]"><Icon className="text-[#44d6ad]" size={24} aria-hidden="true" /></div><h3 className="mt-6 text-2xl font-black text-[#101828]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></CardContent></Card>; })}</div></Container></MotionSection>

        <section id="method" className="scroll-mt-28 bg-[#07111f] py-16 text-white sm:py-20"><Container><Heading data={page.methodHead} inverted /><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{page.stages.map(([number, title, text]) => <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"><div className="flex items-center justify-between gap-4"><Users className="text-[#44d6ad]" aria-hidden="true" /><span className="text-sm font-black text-white/40">{number}</span></div><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></article>)}</div></Container></section>

        <MotionSection id="work" className="scroll-mt-28 py-16 sm:py-20"><Container><Heading data={page.workHead} /><div className="mt-10 grid gap-6 lg:grid-cols-3">{page.projects.map(([title, category, text], index) => <Card key={title} as="article" className={`${cardClass} group overflow-hidden rounded-3xl`}><div className={`relative h-52 overflow-hidden bg-gradient-to-br ${["from-[#e7fbf5] via-white to-[#e8eefc]", "from-[#eef4ff] via-white to-[#dff8ef]", "from-[#ecfeff] via-white to-[#eef4ff]"][index]}`}><img src={images[index]} alt="" loading="lazy" decoding="async" onError={(event) => { event.currentTarget.style.display = "none"; }} className="relative h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div><CardContent className="p-6"><p className="text-sm font-black text-[#168f78]">{category}</p><h3 className="mt-2 text-2xl font-black text-[#101828]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></CardContent></Card>)}</div></Container></MotionSection>

        <MotionSection id="experience" className="scroll-mt-28 border-y border-slate-200 bg-white py-16 sm:py-20"><Container className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"><Card as="section" className={`${cardClass} rounded-3xl`}><CardContent className="p-6 sm:p-8"><Rocket className="text-[#168f78]" size={34} aria-hidden="true" /><h2 className="mt-5 text-3xl font-black text-[#101828]">{page.experienceTitle}</h2><div className="mt-6 space-y-5 leading-7 text-slate-600">{page.experience.map(([title, text]) => <p key={title}><strong className="text-[#101828]">{title}:</strong> {text}</p>)}</div></CardContent></Card><Card as="section" className={`${cardClass} rounded-3xl`}><CardContent className="p-6 sm:p-8"><BookOpenCheck className="text-[#168f78]" size={34} aria-hidden="true" /><h2 className="mt-5 text-3xl font-black text-[#101828]">{page.credentialsTitle}</h2><ul className="mt-6 grid gap-3">{credentials.map((credential) => <li key={credential} className="flex gap-3 rounded-2xl bg-[#f8fafc] px-4 py-3 text-slate-700"><CheckCircle2 className="mt-0.5 shrink-0 text-[#168f78]" size={20} aria-hidden="true" /><span>{credential}</span></li>)}</ul></CardContent></Card></Container></MotionSection>

        <section id="recommendations" className="scroll-mt-28 bg-[linear-gradient(135deg,#e7fbf5_0%,#f8fafc_48%,#eef4ff_100%)] py-16 sm:py-20"><Container><Heading data={page.recHead} center /><div className="mt-10 grid gap-5 md:grid-cols-3">{page.recommendations.map(([author, role, quote]) => <Card key={author} as="figure" className={`${cardClass} h-full rounded-3xl`}><CardContent className="p-6"><div className="flex items-center justify-between gap-4"><Quote className="text-[#168f78]" aria-hidden="true" /><div className="flex" aria-label={page.recLabel}>{[1, 2, 3, 4, 5].map((value) => <Star key={value} size={14} className="fill-[#44d6ad] text-[#44d6ad]" aria-hidden="true" />)}</div></div><blockquote className="mt-5 leading-7 text-slate-700">"{quote}"</blockquote><figcaption className="mt-6 border-t border-slate-200 pt-5"><strong className="block text-[#101828]">{author}</strong><span className="text-sm text-slate-500">{role}</span></figcaption></CardContent></Card>)}</div></Container></section>

        <section id="contact" className="scroll-mt-28 py-16 sm:py-20"><Container><div className="overflow-hidden rounded-[2rem] bg-[#07111f] text-white shadow-2xl shadow-slate-300/70"><div className="grid lg:grid-cols-[0.9fr_1.1fr]"><div className="p-6 sm:p-8 lg:p-10"><p className="text-xs font-black uppercase tracking-[0.24em] text-[#44d6ad]">{page.contact[0]}</p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{page.contact[1]}</h2><p className="mt-5 leading-8 text-slate-300">{page.contact[2]}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button as="a" href={linkedInUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#44d6ad] px-5 py-3 font-bold text-slate-950 hover:bg-[#7ee7cb]">LinkedIn <ExternalLink className="ml-2" size={16} aria-hidden="true" /></Button><Button as="a" href={emailUrl} variant="outline" className="rounded-full border-white/20 bg-white/5 px-5 py-3 text-white hover:bg-white/10"><Mail className="mr-2" size={18} aria-hidden="true" /> {page.contact[3]}</Button></div></div><div className="bg-white p-5 text-slate-900 sm:p-8 lg:p-10"><form action="https://formspree.io/f/meedrplp" method="POST" className="grid gap-4"><input type="hidden" name="_subject" value={page.subject} /><input type="hidden" name="language" value={language} /><label className="grid gap-2 text-sm font-bold text-[#101828]">{page.fields[0]}<input name="name" required autoComplete="name" className="form-field" placeholder={page.fields[1]} /></label><div className="grid gap-4 md:grid-cols-2"><label className="grid gap-2 text-sm font-bold text-[#101828]">{page.fields[2]}<input name="email" type="email" required autoComplete="email" className="form-field" placeholder={page.fields[3]} /></label><label className="grid gap-2 text-sm font-bold text-[#101828]">{page.fields[4]}<input name="company" autoComplete="organization" className="form-field" placeholder={page.fields[5]} /></label></div><label className="grid gap-2 text-sm font-bold text-[#101828]">{page.fields[6]}<select name="service" className="form-field">{page.options.map((option) => <option key={option}>{option}</option>)}</select></label><label className="grid gap-2 text-sm font-bold text-[#101828]">{page.fields[7]}<textarea name="message" required rows="5" className="form-field min-h-32 resize-y" placeholder={page.fields[8]} /></label><Button type="submit" className="mt-2 rounded-full bg-[#07111f] px-6 py-3 text-base font-bold text-white hover:bg-[#172033]">{page.contact[4]} <ArrowRight className="ml-2" size={18} aria-hidden="true" /></Button></form></div></div></div></Container></section>
      </div>
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500"><p>&copy; {new Date().getFullYear()} MFK Analytics. Mauricio Montoya Huertas. {page.footer}</p></footer>
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
