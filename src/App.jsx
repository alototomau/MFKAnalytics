import React, { useState } from "react";
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
  ["Home", "#home"], ["Services", "#services"], ["Work", "#work"],
  ["Experience", "#experience"], ["Recommendations", "#recommendations"], ["Contact", "#contact"],
];

const companyLogos = [
  ["Microsoft", "/logos/microsoft.png"], ["TopBuild", "/logos/topbuild.png"],
  ["IPB Inmobiliaria Piedras Blancas", "/logos/ipb.png"], ["ESCATH", "/logos/escath.png"],
  ["Delbridge Solutions", "/logos/delbridge.png"], ["TruData", "/logos/tru-data.png"],
  ["Grupo Unicomer", "/logos/unicomer.png"], ["Quadrant Technologies", "/logos/quadrant.png"],
  ["Dataneoshore", "/logos/dataneoshore.png"], ["Moody's", "/logos/moodys.png"],
];

const stages = [
  [Layers3, "01 · Discover", "Clarify business goals, data sources, KPIs, pain points and automation opportunities."],
  [LayoutDashboard, "02 · Design", "Define the analytics experience, dimensional model, governance and decision-ready metrics."],
  [Cloud, "03 · Build", "Deliver Fabric, Power BI, SQL, Python/PySpark, pipelines, semantic models and security."],
  [Users, "04 · Enable", "Transfer knowledge through documentation, training and practical adoption support."],
];

const services = [
  [BarChart3, "Executive analytics", "Decision-focused Power BI dashboards, KPI frameworks, storytelling and mobile-ready reporting."],
  [Database, "Data platforms", "Microsoft Fabric Lakehouse and Warehouse foundations, medallion architecture and trusted datasets."],
  [Cloud, "Automation & engineering", "Reliable ETL/ELT pipelines, APIs, Python, PySpark and repeatable reporting workflows."],
  [GraduationCap, "Corporate training", "Hands-on Power BI, SQL and Fabric programs tailored to your team and real business scenarios."],
];

const projects = [
  ["Executive BI Dashboards", "Power BI · Business Intelligence", "Executive KPIs, semantic models, DAX optimization and visual storytelling for leadership teams.", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82"],
  ["Microsoft Fabric Lakehouse", "Data Engineering · Fabric", "Medallion architecture, PySpark pipelines, Lakehouse, Warehouse and analytics-ready datasets.", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82"],
  ["Analytics Enablement", "Training · Adoption", "Practical workshops, reusable standards and guided implementation that help teams become self-sufficient.", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82"],
];

const recommendations = [
  ["Francisco López Rodríguez", "Actuary · Direct manager", "Mauricio combines strong analytics knowledge, teamwork and the commitment required to deliver excellent day-to-day results."],
  ["Pavan Srinivas Narayana", "AI · Data Engineering · NLP", "His expertise in scalable data infrastructure, Azure Data Factory and PySpark significantly improves operational efficiency."],
  ["Satya Sandeep Paramkusam", "Python · Java · Data Engineering", "Mauricio brings exceptional expertise in Data Engineering and Business Intelligence, together with strong Azure and Power BI skills."],
  ["Denis Martinez Ch", "Data Engineer · AWS · Big Data", "He is responsible, committed and collaborative, continuously improving his knowledge and adding value to data teams."],
  ["Fabián Richmond", "Director of Operations", "Mauricio is professional, committed and passionate about teaching, consistently delivering excellent training experiences."],
  ["Alexander Bermúdez Muñoz", "Data Scientist · Analytics", "Mauricio is a true change agent who constantly finds ways to make projects more automated and valuable."],
];

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-[#f7fbff]/90 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label="MFK Analytics home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#07111f] text-sm font-black text-[#44d6ad]">MFK</span>
          <span><strong className="block text-sm tracking-tight text-[#263247] sm:text-base">MFK Analytics</strong><small className="hidden uppercase tracking-[.18em] text-[#23b895] sm:block">Analytics Automation</small></span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white bg-white/75 p-1 shadow-sm lg:flex">
          {navItems.map(([label, href]) => <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-bold text-[#526074] transition hover:bg-[#d8fbf2] hover:text-[#07111f]">{label}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <a href="#contact"><Button className="rounded-2xl bg-[#07111f] px-4 text-white hover:bg-[#172033]">Book a consultation</Button></a>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-2xl border bg-white lg:hidden">{open ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>
        {open && <div className="absolute inset-x-4 top-16 rounded-3xl border bg-white p-3 shadow-2xl lg:hidden">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-bold text-[#526074] hover:bg-[#d8fbf2]">{label}</a>)}</div>}
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[.3em] text-[#23b895]">{eyebrow}</p><h2 className="mt-3 text-4xl font-black tracking-tight text-[#344054] md:text-5xl">{title}</h2>{text && <p className="mt-5 text-lg leading-8 text-[#667085]">{text}</p>}</div>;
}

export default function MauricioPortfolio() {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion ? {} : { variants: reveal, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.16 }, transition: { duration: 0.6 } };
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f3ed] text-[#1f2937]">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <div id="main-content">
        <section id="home" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#f7fbff] via-[#eefbf7] to-[#dbe7f8] pt-24">
          <div className="absolute left-[8%] top-28 h-72 w-72 rounded-full bg-[#5eead4]/25 blur-3xl"/><div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-[#bfd2f3]/60 blur-3xl"/>
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-24">
            <motion.div {...(reduceMotion ? {} : { initial:{opacity:0,y:25}, animate:{opacity:1,y:0}, transition:{duration:.7} })}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/75 px-4 py-2 text-sm font-bold text-teal-700 shadow-sm"><Sparkles size={16}/> Analytics Automation · BI · Data Engineering</div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-.045em] text-[#344054] sm:text-6xl md:text-7xl">Turn complex data into <span className="text-[#23b895]">clear business action.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#526074]">I design analytics platforms, executive dashboards, semantic models and practical training programs that help teams move faster with trusted data.</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href="#services"><Button className="rounded-2xl bg-[#07111f] px-6 py-6 text-base text-white hover:bg-[#172033]">Explore services <ArrowRight className="ml-2" size={18}/></Button></a><a href={cvUrl} download><Button variant="outline" className="rounded-2xl border-[#44d6ad] bg-white/80 px-6 py-6 text-base"><Download className="mr-2" size={18}/> Download CV</Button></a><a href={linkedInUrl} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl bg-white/65 px-6 py-6 text-base">LinkedIn <ExternalLink className="ml-2" size={16}/></Button></a></div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">{[["6+","Years in analytics"],["Fabric","Data platforms"],["Power BI","Decision systems"],["MCT","Corporate training"]].map(([a,b])=><div key={a} className="rounded-2xl border border-white bg-white/55 p-4 backdrop-blur"><strong className="block text-xl text-[#344054]">{a}</strong><span className="text-xs text-[#667085]">{b}</span></div>)}</div>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:content-center">{[[Building2,"Enterprise delivery","Scalable analytics and reporting automation."],[BarChart3,"Decision-ready BI","Dashboards built around business action."],[Database,"Trusted data","Governed models and reliable pipelines."],[GraduationCap,"Team enablement","Training that sticks after delivery."]].map(([Icon,title,text],i)=><motion.div key={title} whileHover={reduceMotion?{}:{y:-6}} className={`rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-lg backdrop-blur ${i===1||i===2?"sm:translate-y-8":""}`}><div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#d8fbf2]"><Icon className="text-[#23b895]"/></div><h3 className="text-xl font-black text-[#344054]">{title}</h3><p className="mt-2 leading-7 text-[#667085]">{text}</p></motion.div>)}</div>
          </div>
        </section>

        <section className="py-16"><div className="mx-auto max-w-7xl px-5 lg:px-10"><p className="text-center text-sm font-bold uppercase tracking-[.3em] text-[#98a2b3]">Experience supporting teams across industries</p><div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">{companyLogos.map(([name,logo])=><div key={name} className="flex h-24 items-center justify-center rounded-3xl border border-white bg-white/75 p-5 shadow-sm"><img src={logo} alt={`${name} logo`} loading="lazy" className="max-h-12 max-w-full object-contain"/></div>)}</div></div></section>

        <motion.section {...motionProps} id="services" className="scroll-mt-28 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><SectionHeading eyebrow="Consulting & Training" title="Analytics delivery from strategy to adoption" text="A focused engagement model for organizations that need stronger reporting, modern data foundations or practical internal capability."/><div className="mt-12 grid gap-5 md:grid-cols-2">{services.map(([Icon,title,text])=><Card key={title} className="rounded-[2rem] border-white bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><CardContent className="p-7"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#07111f]"><Icon className="text-[#44d6ad]" size={24}/></div><h3 className="mt-6 text-2xl font-black text-[#344054]">{title}</h3><p className="mt-3 leading-7 text-[#667085]">{text}</p></CardContent></Card>)}</div></div></motion.section>

        <section className="bg-[#07111f] py-20 text-white"><div className="mx-auto max-w-7xl px-5 lg:px-10"><SectionHeading eyebrow="Delivery model" title="Clear stages. Visible progress. Practical outcomes."/><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{stages.map(([Icon,title,text])=><div key={title} className="rounded-[2rem] border border-white/10 bg-white/[.06] p-6"><Icon className="text-[#44d6ad]"/><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></div>)}</div></div></section>

        <motion.section {...motionProps} id="work" className="scroll-mt-28 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><SectionHeading eyebrow="Selected capabilities" title="Work designed around measurable decisions" text="Representative delivery areas across analytics, data engineering and enablement."/><div className="mt-12 grid gap-6 lg:grid-cols-3">{projects.map(([title,category,text,image])=><Card key={title} className="group overflow-hidden rounded-[2rem] border-white bg-white/85 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"><img src={image} alt="" loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"/><CardContent className="p-6"><p className="text-sm font-black text-[#23b895]">{category}</p><h3 className="mt-2 text-2xl font-black text-[#344054]">{title}</h3><p className="mt-3 leading-7 text-[#667085]">{text}</p></CardContent></Card>)}</div></div></motion.section>

        <motion.section {...motionProps} id="experience" className="scroll-mt-28 py-20"><div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-10"><Card className="rounded-[2rem] border-white bg-white/85"><CardContent className="p-8"><Rocket className="text-[#23b895]" size={34}/><h2 className="mt-5 text-3xl font-black text-[#344054]">Relevant experience</h2><div className="mt-6 space-y-5 leading-7 text-[#667085]"><p><strong className="text-[#344054]">Delbridge:</strong> Microsoft Fabric, migrations, Lakehouse, Warehouse, semantic models and automation.</p><p><strong className="text-[#344054]">TruData:</strong> end-to-end data platforms, APIs, PySpark, Python, medallion architecture and data quality.</p><p><strong className="text-[#344054]">Microsoft:</strong> enterprise BI, Azure Synapse, Microsoft Fabric and reporting process optimization.</p></div></CardContent></Card><Card className="rounded-[2rem] border-white bg-white/85"><CardContent className="p-8"><BookOpenCheck className="text-[#23b895]" size={34}/><h2 className="mt-5 text-3xl font-black text-[#344054]">Certifications & credentials</h2><div className="mt-6 grid gap-3">{["Microsoft Certified: Fabric Data Engineer Associate","Microsoft Certified: Fabric Analytics Engineer Associate","Microsoft Certified: Power BI Data Analyst Associate (PL-300)","Microsoft Certified Trainer (MCT)","Azure Fundamentals · Azure Data Fundamentals","Google Data Analytics Certificate"].map(x=><div key={x} className="flex gap-3 rounded-2xl bg-[#f6f3ed] px-4 py-3 text-[#526074]"><CheckCircle2 className="shrink-0 text-[#23b895]" size={20}/>{x}</div>)}</div></CardContent></Card></div></motion.section>

        <section id="recommendations" className="scroll-mt-28 bg-gradient-to-br from-[#e8f7f4] via-[#f7fbff] to-[#dfe9f8] py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><SectionHeading eyebrow="Professional trust" title="Recommendations from colleagues and leaders"/><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{recommendations.map(([author,role,quote])=><Card key={author} className="h-full rounded-[2rem] border-white bg-white/75"><CardContent className="p-7"><div className="flex justify-between"><Quote className="text-[#23b895]"/><div className="flex">{[1,2,3,4,5].map(n=><Star key={n} size={14} className="fill-[#44d6ad] text-[#44d6ad]"/>)}</div></div><blockquote className="mt-5 leading-7 text-[#526074]">“{quote}”</blockquote><div className="mt-6 border-t pt-5"><strong className="block text-[#344054]">{author}</strong><span className="text-sm text-[#667085]">{role}</span></div></CardContent></Card>)}</div></div></section>

        <section id="contact" className="scroll-mt-28 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-10"><Card className="overflow-hidden rounded-[2.5rem] border-0 bg-[#07111f] text-white shadow-2xl"><CardContent className="grid p-0 lg:grid-cols-[.9fr_1.1fr]"><div className="relative overflow-hidden p-8 md:p-10"><div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#44d6ad]/20 blur-3xl"/><div className="relative"><p className="text-sm font-black uppercase tracking-[.3em] text-[#44d6ad]">Let’s work together</p><h2 className="mt-4 text-4xl font-black md:text-5xl">Build the analytics capability your team actually needs.</h2><p className="mt-5 leading-8 text-slate-300">Share your current challenge, timeline and desired outcome. You will receive a focused response about the best next step.</p><div className="mt-8 flex flex-wrap gap-3"><a href={linkedInUrl} target="_blank" rel="noreferrer"><Button className="rounded-2xl bg-[#44d6ad] px-5 py-5 font-bold text-slate-950 hover:bg-[#7ee7cb]">LinkedIn <ExternalLink className="ml-2" size={16}/></Button></a><a href={emailUrl}><Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-5 py-5 text-white hover:bg-white/10"><Mail className="mr-2" size={18}/> Email</Button></a></div></div></div><div className="bg-white p-6 text-[#1f2937] md:p-10"><form action="https://formspree.io/f/meedrplp" method="POST" className="grid gap-4"><input type="hidden" name="_subject" value="New consultation request from MFK Analytics website"/><label className="grid gap-2 text-sm font-bold text-[#344054]">Name<input name="name" required autoComplete="name" className="form-field" placeholder="Your name"/></label><div className="grid gap-4 md:grid-cols-2"><label className="grid gap-2 text-sm font-bold text-[#344054]">Work email<input name="email" type="email" required autoComplete="email" className="form-field" placeholder="name@company.com"/></label><label className="grid gap-2 text-sm font-bold text-[#344054]">Company<input name="company" autoComplete="organization" className="form-field" placeholder="Company name"/></label></div><label className="grid gap-2 text-sm font-bold text-[#344054]">Service needed<select name="service" className="form-field"><option>Power BI / Analytics Dashboard</option><option>Microsoft Fabric / Lakehouse</option><option>Corporate Training</option><option>Data Engineering / Pipelines</option><option>Analytics Automation Consulting</option><option>Other</option></select></label><label className="grid gap-2 text-sm font-bold text-[#344054]">Message<textarea name="message" required rows="5" className="form-field resize-none" placeholder="Tell me about your project, timeline and goals."/></label><Button type="submit" className="mt-2 rounded-2xl bg-[#07111f] px-6 py-5 text-base font-bold text-white hover:bg-[#172033]">Request consultation <ArrowRight className="ml-2" size={18}/></Button></form></div></CardContent></Card></div></section>
      </div>
      <footer className="border-t border-white px-6 py-8 text-center text-sm text-[#667085]">© {new Date().getFullYear()} MFK Analytics · Mauricio Montoya Huertas · Analytics Automation, Business Intelligence and Data Engineering.</footer>
      <Analytics/><SpeedInsights/>
    </main>
  );
}
