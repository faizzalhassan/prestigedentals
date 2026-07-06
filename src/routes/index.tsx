import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Calendar, Phone, Sparkles, Shield, Award, Users, Star, MapPin, Clock, Heart,
  ArrowRight, ArrowUpRight, Smile, Menu, X, Zap, Check,
  Mail, Instagram, Facebook, Twitter,
} from "lucide-react";

function WhatsAppIcon({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zM12.02 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.02 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.51-8.413z"/>
    </svg>
  );
}

import heroTooth from "@/assets/hero-tooth.png";
import doctorImg from "@/assets/doctor.jpg";
import galReception from "@/assets/gallery-reception.jpg";
import galTreatment from "@/assets/gallery-treatment.jpg";
import galLounge from "@/assets/gallery-lounge.jpg";
import galEquipment from "@/assets/gallery-equipment.jpg";
import galConsult from "@/assets/gallery-consult.jpg";
import smile1 from "@/assets/smile-1.jpg";
import smile1b from "@/assets/smile-1-before.jpg";
import smile2 from "@/assets/smile-2.jpg";
import smile2b from "@/assets/smile-2-before.jpg";
import smileBraces from "@/assets/smile-braces-after.jpg";
import smileBracesB from "@/assets/smile-braces-before.jpg";
import p1 from "@/assets/patient-1.jpg";
import p2 from "@/assets/patient-2.jpg";
import p3 from "@/assets/patient-3.jpg";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [
      { property: "og:url", content: "/" },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfterSection />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ─────────────  NAV  ───────────── */
function Navbar({ scrolled, menuOpen, setMenuOpen }: { scrolled: boolean; menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(15,32,60,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-[105px]">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <div
              className="relative w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "var(--gradient-primary)", boxShadow: "0 6px 16px -6px rgba(15,111,255,0.5)" }}
            >
              <Sparkles className="text-white" size={16} strokeWidth={2.5} />
            </div>
            <span className="font-display font-semibold text-[15px] tracking-tight">Prestige</span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium text-white transition hover:-translate-y-0.5"
              style={{ background: "var(--gradient-primary)", boxShadow: "0 8px 20px -8px rgba(15,111,255,0.55)" }}
            >
              <Calendar size={14} /> Book
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-1">
            <ThemeToggle />

          <button
            className="lg:hidden p-2 rounded-full hover:bg-accent-soft transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-4 top-16 rounded-2xl bg-white/95 backdrop-blur-xl border border-border shadow-luxe overflow-hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-4 flex flex-col gap-0.5">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-accent-soft text-sm font-medium"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Calendar size={14} /> Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─────────────  HERO  ───────────── */
function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[640px] flex items-center pt-6 lg:pt-8 bg-hero overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full animate-blob" style={{ background: "radial-gradient(circle, rgba(34,199,242,0.35), transparent 70%)" }} />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full animate-blob" style={{ background: "radial-gradient(circle, rgba(15,111,255,0.25), transparent 70%)", animationDelay: "3s" }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-[105px] grid lg:grid-cols-2 gap-8 items-center w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Accepting new patients · Same-week appointments
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.03em] font-medium">
            Premium dental care <br />
            <span className="text-gradient">designed around</span> <br />
            your smile.
          </h1>
          <p className="mt-4 text-sm lg:text-base text-muted-foreground max-w-md leading-relaxed">
            A serene, technology-first clinic where craftsmanship meets comfort. From routine care to complete smile makeovers — done with precision.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <a href="#contact" className="btn-primary btn-primary-hover text-sm">
              <Calendar size={16} /> Book Appointment <ArrowRight size={14} />
            </a>
            <a href="#services" className="btn-ghost hover:bg-white text-sm">
              View services
            </a>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3 max-w-sm">
            {[
              { k: "15+", v: "Years" },
              { k: "5k+", v: "Patients" },
              { k: "4.9★", v: "Google" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-xl font-semibold text-gradient">{s.k}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[340px] lg:h-[460px] hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[320px] h-[320px] rounded-full" style={{ background: "radial-gradient(circle, rgba(34,199,242,0.35), transparent 70%)", filter: "blur(40px)" }} />
            <img src={heroTooth} alt="Premium 3D tooth illustration" className="relative w-[340px] h-[340px] lg:w-[400px] lg:h-[400px] object-contain animate-float-slow drop-shadow-2xl" width={400} height={400} />
          </div>

          <div className="absolute top-4 left-0 glass-strong rounded-2xl p-3 animate-float-med" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: "var(--gradient-primary)" }}>
                <Star size={14} fill="white" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Google Rating</div>
                <div className="font-display font-semibold text-sm leading-none mt-0.5">4.9 / 5.0</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-0 glass-strong rounded-2xl p-3 animate-float-med" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-primary bg-accent-soft">
                <Users size={14} />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Happy patients</div>
                <div className="font-display font-semibold text-sm leading-none mt-0.5">5,000+</div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -right-2 glass-strong rounded-xl p-2.5 animate-float-med" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-1.5">
              <Shield size={13} className="text-primary" />
              <span className="text-[11px] font-medium">ADA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  ABOUT  ───────────── */
function About() {
  return (
    <section id="about" className="relative lg:h-screen py-16 lg:py-0 lg:pt-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-[105px] grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
        <div className="relative">
          <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_30px_80px_-30px_rgba(15,32,60,0.35)]">
            <img src={doctorImg} alt="Dr. Marvi Qamar, lead cosmetic dentist" className="w-full h-[380px] lg:h-[460px] object-cover" width={800} height={1000} loading="lazy" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(15,32,60,0.25) 100%)" }} />
          </div>
          <div className="absolute -bottom-5 -right-5 glass-strong rounded-2xl px-4 py-3 hidden sm:block">
            <div className="flex items-center gap-2.5">
              <Award className="text-primary" size={18} />
              <div>
                <div className="text-[10px] text-muted-foreground">Award-winning</div>
                <div className="font-display font-semibold text-xs">Top Cosmetic Dentist 2024</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full" style={{ background: "var(--gradient-primary)", filter: "blur(30px)", opacity: 0.4 }} />
        </div>

        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">Meet the Doctor</span>
          <h2 className="mt-2 font-display text-2xl lg:text-4xl leading-[1.05] tracking-tight">
            Dr. Marvi Qamar,<br /><span className="text-gradient">craftsman of smiles.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            With 15+ years transforming smiles across three continents, Dr. Qamar blends fine-art aesthetics with digital dentistry to deliver results that look natural and last a lifetime.
          </p>

          <div className="mt-4 space-y-2">
            {["Diplomate, American Board of Cosmetic Dentistry",
              "Trained in digital smile design at NYU",
              "Invisalign Diamond Provider",
              "Guest lecturer, International Aesthetic Congress",
            ].map((c) => (
              <div key={c} className="flex items-start gap-2 text-xs lg:text-sm">
                <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                  <Check size={10} className="text-white" strokeWidth={3} />
                </div>
                <span>{c}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {[
              { k: "15+", v: "Years experience", i: Award },
              { k: "5k+", v: "Patients treated", i: Users },
              { k: "98%", v: "Success rate", i: Heart },
            ].map((s) => (
              <div key={s.v} className="card-luxe p-3 hover:-translate-y-1 hover:shadow-luxe">
                <s.i className="text-primary mb-1.5" size={16} />
                <div className="font-display text-lg font-semibold text-gradient">{s.k}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  SERVICES  ───────────── */
const services = [
  { icon: Smile, title: "Cosmetic Dentistry", desc: "Bespoke smile design using digital previews before treatment." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "In-clinic Zoom whitening — 6 shades brighter in 45 minutes." },
  { icon: Shield, title: "Dental Implants", desc: "Titanium and zirconia implants placed with 3D-guided precision." },
  { icon: Zap, title: "Invisalign & Ortho", desc: "Clear aligner therapy for adults and teens with iTero scans." },
  { icon: Heart, title: "General Dentistry", desc: "Comprehensive check-ups, hygiene and fillings for the whole family." },
  { icon: Award, title: "Porcelain Veneers", desc: "Ultra-thin hand-crafted veneers matched to your facial harmony." },
  { icon: Sparkles, title: "Smile Makeover", desc: "Full mouth reconstruction combining multiple disciplines." },
  { icon: Shield, title: "Root Canal Therapy", desc: "Painless microscopic endodontics with same-day crowns." },
];

function Services() {
  return (
    <section id="services" className="relative lg:h-screen py-16 lg:py-0 lg:pt-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-[105px] w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">What we do</span>
            <h2 className="mt-2 font-display text-2xl lg:text-4xl leading-[1.05] tracking-tight">
              A complete practice, <span className="text-gradient">under one roof.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Every treatment is planned digitally, executed by specialists, and delivered in a calm, private environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s, i) => (
            <div key={s.title} className="group card-luxe p-4 hover:-translate-y-2 hover:shadow-luxe cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(15,111,255,0.06), rgba(34,199,242,0.08))" }} />
              <div className="relative">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110" style={{ background: "var(--gradient-primary)", boxShadow: "0 10px 24px -8px rgba(15,111,255,0.5)" }}>
                  <s.icon size={16} className="text-white" />
                </div>
                <h3 className="font-display text-sm font-medium mb-1.5">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                  Learn more <ArrowUpRight size={12} />
                </div>
              </div>
              {i === 0 && <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(34,199,242,0.5), transparent 70%)" }} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────  BEFORE / AFTER  ───────────── */
const transformations = [
  { before: smile1b, after: smile1, alt: "Veneers smile transformation", title: "Porcelain Veneers", sub: "12 units · 2 visits" },
  { before: smile2b, after: smile2, alt: "Whitening transformation", title: "Whitening + Bonding", sub: "1 session · 45 min" },
  { before: smileBracesB, after: smileBraces, alt: "Braces transformation", title: "Braces", sub: "18 months treatment" },
];

function BeforeAfterSection() {
  return (
    <section className="relative lg:h-screen py-16 lg:py-0 lg:pt-24 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-[105px] w-full">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">Real transformations</span>
          <h2 className="mt-2 font-display text-2xl lg:text-4xl leading-[1.05] tracking-tight">
            Drag to reveal <span className="text-gradient">the difference.</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Every smile below was designed and delivered in our studio.</p>
        </div>
      </div>

      <div className="relative overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-5 px-5 lg:px-[max(105px,calc((100vw-1280px)/2+105px))] snap-x snap-mandatory">
          {transformations.map((t) => (
            <div key={t.title} className="snap-center flex-shrink-0 w-[260px] sm:w-[320px] lg:w-[360px]">
              <div className="relative h-[360px] lg:h-[420px] rounded-[1.75rem] overflow-hidden card-luxe p-1.5">
                <BeforeAfter before={t.before} after={t.after} alt={t.alt} />
              </div>
              <div className="mt-3 px-1 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-medium text-sm">{t.title}</h3>
                  <p className="text-xs text-muted-foreground">{t.sub}</p>
                </div>
                <Sparkles size={16} className="text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────  GALLERY (Bento)  ───────────── */
function Gallery() {
  return (
    <section id="gallery" className="relative lg:h-screen py-16 lg:py-0 lg:pt-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-[105px] w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">The Clinic</span>
            <h2 className="mt-2 font-display text-2xl lg:text-4xl leading-[1.05] tracking-tight">
              A space designed <br className="hidden sm:block" /><span className="text-gradient">to disarm anxiety.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">Every corner considered — from the light temperature to the scent of the reception.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[110px] md:auto-rows-[140px]">
          <GalleryCard src={galReception} alt="Marble reception with ambient lighting" label="Reception" className="col-span-2 row-span-2" />
          <GalleryCard src={galTreatment} alt="Modern white dental treatment room" label="Treatment Room" className="col-span-2 row-span-2" />
          <GalleryCard src={galLounge} alt="Boutique-style waiting lounge" label="Waiting Lounge" className="col-span-2 row-span-1" />
          <GalleryCard src={galEquipment} alt="Precision dental equipment" label="Equipment" className="col-span-1 row-span-1" />
          <GalleryCard src={galConsult} alt="Consultation room with natural light" label="Consultation" className="col-span-1 row-span-1" />
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ src, alt, label, className }: { src: string; alt: string; label: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl ${className}`} style={{ boxShadow: "0 20px 40px -20px rgba(15,32,60,0.2)" }}>
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(11,18,32,0.7) 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-strong text-xs font-medium">
          <MapPin size={12} /> {label}
        </div>
      </div>
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40 pointer-events-none" />
    </div>
  );
}

/* ─────────────  TESTIMONIALS  ───────────── */
const testimonials = [
  { img: p1, name: "Sarah Whitfield", treat: "Porcelain Veneers", quote: "I've never felt more myself. The team walked me through a digital preview before we started — it looked exactly like the final result." },
  { img: p2, name: "James Okafor", treat: "Invisalign", quote: "Nine months, zero disruption to my work life. The clinic feels more like a design studio than a dental office." },
  { img: p3, name: "Mia Tanaka", treat: "Whitening + Cleaning", quote: "Genuinely the most calming healthcare experience I've had. My teeth are six shades brighter and I'm still smiling." },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative lg:h-screen py-16 lg:py-0 lg:pt-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(15,111,255,0.15), transparent 70%)", filter: "blur(40px)" }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-[105px] w-full">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">Loved by patients</span>
          <h2 className="mt-2 font-display text-2xl lg:text-4xl leading-[1.05] tracking-tight">
            824 verified <span className="text-gradient">5-star reviews.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={t.name} className="card-luxe p-5 hover:-translate-y-2 hover:shadow-luxe transition duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex gap-0.5 text-primary mb-3">
                {[...Array(5)].map((_, k) => <Star key={k} size={13} fill="currentColor" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed text-[13px]">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-2.5 pt-4 border-t border-border">
                <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full object-cover" width={64} height={64} loading="lazy" />
                <div>
                  <div className="font-medium text-xs">{t.name}</div>
                  <div className="text-[11px] text-muted-foreground">{t.treat}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────  CTA  ───────────── */
function CTA() {
  return (
    <section id="contact" className="relative lg:h-screen py-16 lg:py-0 lg:pt-24 flex items-center overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 lg:px-[105px] w-full">
        <div className="relative rounded-[2rem] overflow-hidden p-8 sm:p-10 lg:p-14 text-center" style={{ background: "var(--gradient-cta)" }}>
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/20 blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium mb-4">
              <Sparkles size={12} /> Limited slots this month
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl text-white leading-[1.05] tracking-tight max-w-3xl mx-auto">
              Your perfect smile <br /> starts today.
            </h2>
            <p className="mt-3 text-sm text-white/85 max-w-lg mx-auto">
              Book a complimentary consultation. Meet the doctor, tour the clinic, and preview your new smile — no obligation.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5 justify-center">
              <a href="tel:+15550130198" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary text-sm font-medium transition hover:-translate-y-0.5 shadow-xl">
                <Calendar size={16} /> Book your appointment
              </a>
              <a href="tel:+15550130198" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md text-white text-sm font-medium border border-white/30 hover:bg-white/25 transition">
                <Phone size={16} /> Call (555) 013-0198
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  FOOTER  ───────────── */
function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-[105px] grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <Sparkles className="w-4 h-4 text-white" size={16} />
            </div>
            <div>
              <div className="font-display font-semibold text-[15px]">Prestige</div>
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Dental Clinic</div>
            </div>
          </a>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Award-winning cosmetic and family dentistry, designed around you.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Facebook, Twitter].map((I, i) => (
              <a key={i} href="#" aria-label="Social" className="w-9 h-9 rounded-full glass hover:bg-primary hover:text-white transition flex items-center justify-center">
                <I size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-medium text-sm mb-4">Navigation</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-primary transition">{n.label}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-medium text-sm mb-4">Clinic Hours</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Clock size={14} /> Mon – Fri · 8am – 7pm</li>
            <li className="flex items-center gap-2"><Clock size={14} /> Saturday · 9am – 4pm</li>
            <li className="flex items-center gap-2"><Clock size={14} /> Sunday · Closed</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-medium text-sm mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0" /> 128 Marina Blvd, Suite 400, San Francisco</li>
            <li className="flex items-center gap-2"><Phone size={14} /> <a href="tel:+15550130198" className="hover:text-primary">(555) 013-0198</a></li>
            <li className="flex items-center gap-2"><Mail size={14} /> <a href="mailto:hello@prestigedental.com" className="hover:text-primary">hello@prestigedental.com</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-border mx-auto max-w-7xl px-5 lg:px-[105px] flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Prestige Dental Clinic. All rights reserved.</div>
        <div className="flex gap-5"><a href="#" className="hover:text-primary">Privacy</a><a href="#" className="hover:text-primary">Terms</a><a href="#" className="hover:text-primary">Accessibility</a></div>
      </div>
    </footer>
  );
}

/* ─────────────  FLOATING ACTIONS  ───────────── */
function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href="https://wa.me/15550130198" target="_blank" rel="noopener" aria-label="WhatsApp" className="w-13 h-13 p-3.5 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition" style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}>
        <WhatsAppIcon size={22} />
      </a>
      <a href="tel:+15550130198" aria-label="Call now" className="w-13 h-13 p-3.5 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition" style={{ background: "var(--gradient-primary)" }}>
        <Phone size={22} />
      </a>
    </div>
  );
}
