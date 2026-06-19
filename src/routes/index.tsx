import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/ardinash-logo.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Phone, Mail, MapPin, Instagram, Check, Clock, Shield, Zap,
  FileCheck, ThumbsUp, Building2, RefreshCw, Receipt, Users,
  FileText, Briefcase, ArrowRight, Sparkles, MessageCircle, X,
  Award, BarChart3, Landmark, ScrollText, IdCard, Target, DollarSign,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ardinash Consultancy — Growing Wealth. Building Futures." },
      { name: "description", content: "Zimbabwe's trusted partner for company registration, ZIMRA tax clearance, VAT, NSSA, PAYE and PRAZ compliance. We comply, you grow." },
      { property: "og:title", content: "Ardinash Consultancy — Growing Wealth. Building Futures." },
      { property: "og:description", content: "Register your Private Limited Company in Zimbabwe in as little as 3 days. Full compliance, hassle-free." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const logo = logoAsset.url;
const PHONE_1 = "+263775403888";
const PHONE_2 = "+263714213372";
const WA_NUMBER = "263775403888";
const EMAIL = "ardinashconsultancy@gmail.com";

const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const services = [
  { icon: Building2, title: "Company Registration", desc: "Private Limited Company setup with CIPZ — Certificate of Incorporation, CR5 & CR6, MoA & AoA." },
  { icon: RefreshCw, title: "Company Re-registration", desc: "Bring legacy entities into full compliance with the Companies & Other Business Entities Act." },
  { icon: Receipt, title: "ZIMRA & Tax Clearance", desc: "ZIMRA registration, Tax Clearance Certificate and TIN issuance — handled end-to-end." },
  { icon: FileText, title: "VAT Registration & Returns", desc: "VAT onboarding plus ongoing monthly returns so you never miss a deadline." },
  { icon: Users, title: "NSSA & PAYE", desc: "Employer registration and returns for NSSA and PAYE, fully aligned to statutory schedules." },
  { icon: Briefcase, title: "PRAZ & Vendor Number", desc: "PRAZ registration and Vendor Number setup to unlock government and corporate tenders." },
];

const skills = [
  { icon: Landmark, title: "CIPZ Filings", desc: "Deep working knowledge of Companies & Other Business Entities Act compliance." },
  { icon: BarChart3, title: "Tax Strategy", desc: "ZIMRA, VAT, PAYE, NSSA — registration, returns and clearance, done right." },
  { icon: ScrollText, title: "Statutory Drafting", desc: "Memorandum & Articles of Association, CR5/CR6, board resolutions." },
  { icon: Award, title: "Tender Readiness", desc: "PRAZ and Vendor Number setup so you can bid for government & corporate tenders." },
  { icon: Shield, title: "Compliance Audits", desc: "Health-check your business and close gaps before they cost you." },
  { icon: Briefcase, title: "Bank Account Setup", desc: "Hands-on assistance opening your business banking with leading Zim banks." },
];

const packages = [
  {
    name: "Basic Registration",
    price: "120",
    tagline: "Get your company on the map",
    turnaround: "3 Working Days",
    featured: false,
    features: ["Certificate of Incorporation", "CR5 & CR6 Forms", "Memorandum of Association", "Articles of Association"],
  },
  {
    name: "Registration + Tax",
    price: "140",
    tagline: "Registered and tax-ready",
    turnaround: "5 Working Days",
    featured: true,
    features: ["Everything in Basic", "ZIMRA Registration", "Tax Clearance Certificate", "TIN Certificate"],
  },
  {
    name: "Full Package",
    price: "160",
    tagline: "Registration + Tax + Bank Account",
    turnaround: "7 Working Days",
    featured: false,
    features: ["Complete Company Registration", "ZIMRA Tax Clearance & TIN", "Bank Account Setup Assistance", "Priority Support"],
  },
];

const whyUs = [
  { icon: Shield, title: "Reliable & Trustworthy", desc: "We ensure accuracy and full confidentiality on every filing." },
  { icon: Zap, title: "Fast Turnaround", desc: "Your certificate, on time — as fast as 3 working days." },
  { icon: FileCheck, title: "Professional Support", desc: "We guide you through the entire registration process." },
  { icon: ThumbsUp, title: "Hassle-Free Service", desc: "We handle the paperwork so you don't have to." },
];

type ContactCtx = { label: string; message: string } | null;

function ContactDialog({ ctx, onClose }: { ctx: ContactCtx; onClose: () => void }) {
  if (!ctx) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl bg-card p-7 shadow-elegant">
        <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-secondary">
          <X className="h-4 w-4" />
        </button>
        <div className="text-xs font-semibold tracking-[0.3em] text-accent">GET IN TOUCH</div>
        <h3 className="mt-2 font-display text-2xl font-bold text-primary">{ctx.label}</h3>
        <p className="mt-2 text-sm text-muted-foreground">Choose how you'd like to reach us — we'll respond within minutes during business hours.</p>

        <div className="mt-6 space-y-3">
          <a
            href={waLink(ctx.message)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl border border-border bg-gradient-to-r from-[oklch(0.65_0.16_155)] to-[oklch(0.55_0.18_158)] p-4 text-white shadow-card transition hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20"><MessageCircle className="h-5 w-5" /></div>
              <div className="text-left">
                <div className="font-semibold">WhatsApp</div>
                <div className="text-xs text-white/85">Fastest — pre-filled message</div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={`tel:${PHONE_1}`}
            className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition hover:bg-secondary/40"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-white"><Phone className="h-5 w-5" /></div>
              <div className="text-left">
                <div className="font-semibold text-primary">Call {PHONE_1}</div>
                <div className="text-xs text-muted-foreground">Primary line</div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </a>

          <a
            href={`tel:${PHONE_2}`}
            className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition hover:bg-secondary/40"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-white"><Phone className="h-5 w-5" /></div>
              <div className="text-left">
                <div className="font-semibold text-primary">Call {PHONE_2}</div>
                <div className="text-xs text-muted-foreground">Alternate line</div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </a>

          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(ctx.label)}&body=${encodeURIComponent(ctx.message)}`}
            className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition hover:bg-secondary/40"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><Mail className="h-5 w-5" /></div>
              <div className="text-left">
                <div className="font-semibold text-primary">Email us</div>
                <div className="text-xs text-muted-foreground">{EMAIL}</div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [ctx, setCtx] = useState<ContactCtx>(null);
  const open = (label: string, message: string) => setCtx({ label, message });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Ardinash Consultancy" className="h-10 w-10 rounded-md object-contain" />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-primary">ARDINASH</div>
              <div className="text-[10px] tracking-[0.25em] text-muted-foreground">CONSULTANCY</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="text-muted-foreground transition hover:text-primary">Services</a>
            <a href="#skills" className="text-muted-foreground transition hover:text-primary">Expertise</a>
            <a href="#packages" className="text-muted-foreground transition hover:text-primary">Packages</a>
            <a href="#requirements" className="text-muted-foreground transition hover:text-primary">Requirements</a>
            <a href="#team" className="text-muted-foreground transition hover:text-primary">Team</a>
            <a href="#why" className="text-muted-foreground transition hover:text-primary">Why Us</a>
            <a href="#contact" className="text-muted-foreground transition hover:text-primary">Contact</a>
          </nav>
          <button
            onClick={() => open("Talk to us", "Hi Ardinash, I'd like to learn more about your services.")}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition hover:shadow-elegant hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" /> Talk to us
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_oklch(0.65_0.2_258_/_0.35),_transparent_50%)]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> ZIMBABWE'S TRUSTED COMPLIANCE PARTNER
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl">
              Build Today.<br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Grow Tomorrow.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-blue-100/90">
              We register your Private Limited Company, handle ZIMRA tax clearance and keep your business 100% compliant — so you can focus on growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#packages" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-glow transition hover:scale-[1.03]">
                See Packages <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => open("Get a Quote", "Hi Ardinash, I'd like a quote. Here's what I need: ")}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Get a Quote
              </button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-blue-100/80">
              <div><div className="font-display text-3xl font-bold text-white">3 Days</div>Fastest turnaround</div>
              <div><div className="font-display text-3xl font-bold text-white">100%</div>CIPZ Compliant</div>
              <div><div className="font-display text-3xl font-bold text-white">ZIG</div>Accepted</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl gradient-primary opacity-30 blur-3xl" />
            <div className="relative rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-elegant">
              <div className="rounded-2xl bg-white p-6 shadow-card">
                <img src={logo} alt="Ardinash logo" className="mx-auto h-32 w-32 object-contain" />
                <div className="mt-4 text-center">
                  <div className="font-display text-2xl font-bold text-primary">ARDINASH</div>
                  <div className="text-[10px] tracking-[0.3em] text-accent">— CONSULTANCY —</div>
                  <div className="mt-2 text-[10px] tracking-widest text-muted-foreground">GROWING WEALTH. BUILDING FUTURES.</div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-lg gradient-primary p-3 text-center text-xs font-semibold text-white">COMPLIANCE</div>
                  <div className="rounded-lg gradient-primary p-3 text-center text-xs font-semibold text-white">TAX</div>
                  <div className="col-span-2 rounded-lg gradient-gold p-3 text-center text-sm font-bold text-gold-foreground">GROWTH</div>
                </div>
              </div>
              <p className="mt-5 text-center text-sm italic text-blue-100">"We comply. You grow."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold tracking-[0.3em] text-accent">OUR SERVICES</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Everything your business needs <span className="gradient-text">under one roof</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Tap any service to get started — we'll open WhatsApp or a call, your choice.</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <button
                key={title}
                onClick={() => open(title, `Hi Ardinash, I'm interested in: ${title}. Can you share details and pricing?`)}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-left shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full gradient-primary opacity-0 blur-3xl transition group-hover:opacity-30" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-white shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                    Enquire now <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS / EXPERTISE */}
      <section id="skills" className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.2_258_/_0.45),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="text-xs font-semibold tracking-[0.3em] text-blue-300">OUR EXPERTISE</div>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                The skills behind <span className="text-blue-300">every filing.</span>
              </h2>
              <p className="mt-5 text-blue-100/90">
                Years of hands-on experience with CIPZ, ZIMRA, NSSA and PRAZ — translated into clean, on-time work for your business.
              </p>
              <button
                onClick={() => open("Free Consultation", "Hi Ardinash, I'd like a free consultation about my business compliance.")}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-glow transition hover:scale-[1.03]"
              >
                Book a free consultation <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:col-span-2">
              {skills.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/15"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm text-blue-100/85">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="relative overflow-hidden bg-secondary/40 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.55_0.18_258_/_0.1),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold tracking-[0.3em] text-accent">PRIVATE LIMITED COMPANY</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Registration Packages</h2>
            <p className="mt-4 text-muted-foreground">Transparent pricing. CIPZ fees included. <span className="font-semibold text-primary">ZIG accepted.</span></p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 transition hover:-translate-y-1 ${
                  p.featured
                    ? "gradient-primary border-transparent text-white shadow-elegant scale-[1.02]"
                    : "border-border bg-card shadow-card hover:shadow-elegant"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold px-4 py-1 text-xs font-bold tracking-wider text-gold-foreground shadow-card">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`font-display text-2xl font-bold ${p.featured ? "text-white" : "text-primary"}`}>{p.name}</h3>
                <p className={`mt-1 text-sm ${p.featured ? "text-blue-100" : "text-muted-foreground"}`}>{p.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`text-sm font-semibold ${p.featured ? "text-blue-200" : "text-muted-foreground"}`}>USD</span>
                  <span className="font-display text-6xl font-bold">{p.price}</span>
                </div>
                <div className={`mt-2 inline-flex items-center gap-2 text-sm ${p.featured ? "text-blue-100" : "text-muted-foreground"}`}>
                  <Clock className="h-4 w-4" /> Turnaround: {p.turnaround}
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${p.featured ? "text-blue-200" : "text-accent"}`} />
                      <span className={p.featured ? "text-white" : "text-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => open(
                    `${p.name} — USD ${p.price}`,
                    `Hi Ardinash, I'd like to start the "${p.name}" package (USD ${p.price}, ${p.turnaround}). What are the next steps?`,
                  )}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                    p.featured
                      ? "bg-white text-primary hover:scale-[1.02]"
                      : "gradient-primary text-white hover:shadow-glow"
                  }`}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_oklch(0.55_0.18_258_/_0.08),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="text-xs font-semibold tracking-[0.3em] text-accent">WHAT WE NEED FROM YOU</div>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                Private Limited Company <span className="gradient-text">Requirements</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Send the details below via WhatsApp or Email and we'll get the ball rolling on your registration.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl gradient-gold px-5 py-3 text-gold-foreground shadow-card">
                <DollarSign className="h-5 w-5" />
                <div>
                  <div className="text-[10px] font-semibold tracking-widest">DEPOSIT</div>
                  <div className="font-display text-xl font-bold leading-none">USD 80 to start</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => open(
                    "Private Ltd Company Registration",
                    "Hi Ardinash, I'd like to register a Private Limited Company. Here are my details:\n\n• Proposed Names (5):\n1.\n2.\n3.\n4.\n5.\n\n• Director 1 — Full name, ID/Passport, Gender, DOB, Email, Phone:\n• Director 2 — Full name, ID/Passport, Gender, DOB, Email, Phone:\n\n• Shareholders & %:\n• Business Address (physical & postal):\n• Business Objective:\n",
                  )}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" /> Send Details
                </button>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("Private Ltd Company Registration")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary"
                >
                  <Mail className="h-4 w-4" /> Email us
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ScrollText, title: "Company Names", desc: "At least 5 name options for search & reservation." },
                  { icon: Users, title: "Directors", desc: "Minimum 2 (18+). Full names, ID/Passport, gender, DOB, email." },
                  { icon: IdCard, title: "Shareholders", desc: "Can be the same as directors. Include % shareholding." },
                  { icon: MapPin, title: "Business Address", desc: "Physical & postal address (must be Zimbabwe-based)." },
                  { icon: Target, title: "Business Objective", desc: "Main services or operations of the business." },
                  { icon: Phone, title: "Contact Info", desc: "Active phone number & email for both directors." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-primary">{title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT */}
      <section id="team" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold tracking-[0.3em] text-accent">MANAGEMENT</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Led by people who <span className="gradient-text">get it done</span>
            </h2>
          </div>
          <div className="mt-14 grid place-items-center">
            <div className="w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
              <div className="gradient-hero p-8 text-center text-white">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/15 backdrop-blur ring-4 ring-white/20">
                  <span className="font-display text-3xl font-bold">PJ</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">Prince Jenami</h3>
                <div className="mt-1 text-xs font-semibold tracking-[0.3em] text-blue-200">MANAGING DIRECTOR</div>
              </div>
              <div className="space-y-3 p-6">
                <a href="tel:+263716369775" className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition hover:bg-secondary/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary text-white"><Phone className="h-4 w-4" /></div>
                  <div>
                    <div className="text-[10px] font-semibold tracking-widest text-muted-foreground">DIRECT LINE</div>
                    <div className="font-semibold text-primary">+263 71 636 9775</div>
                  </div>
                </a>
                <button
                  onClick={() => open("Message MD — Prince Jenami", "Hi Prince, I'd like to discuss a private business matter regarding Ardinash Consultancy services.")}
                  className="flex w-full items-center gap-3 rounded-xl gradient-primary p-4 text-left text-white transition hover:shadow-glow"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20"><MessageCircle className="h-4 w-4" /></div>
                  <div>
                    <div className="text-[10px] font-semibold tracking-widest text-blue-200">MESSAGE</div>
                    <div className="font-semibold">Reach out to the MD</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold tracking-[0.3em] text-accent">WHY CHOOSE US</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              We handle the compliance.<br /><span className="gradient-text">You focus on growing.</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-gradient-to-b from-card to-secondary/30 p-7 text-center shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary text-white shadow-glow">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl gradient-hero p-12 text-center shadow-elegant md:p-16">
          <h3 className="font-display text-3xl font-bold text-white md:text-5xl">
            Register Today. <span className="text-blue-300">Build Tomorrow.</span>
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">Start your business the right way. Quickly. Professionally. Hassle-free.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => open("Register My Company", "Hi Ardinash, I'd like to register my Private Limited Company. Please advise on next steps.")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-glow transition hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> Start Now
            </button>
            <button
              onClick={() => open("General Enquiry", "Hi Ardinash, I have a question about your services.")}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> Contact us
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="h-12 w-12 rounded-md bg-white object-contain p-1" />
                <div>
                  <div className="font-display text-xl font-bold">ARDINASH</div>
                  <div className="text-[10px] tracking-[0.25em] text-blue-200">CONSULTANCY</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-blue-100">Growing wealth. Building futures. Your trusted partner in compliance.</p>
            </div>

            <button
              onClick={() => open("Phone Enquiry", "Hi Ardinash, I'd like to discuss your services.")}
              className="flex gap-4 text-left transition hover:opacity-90"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs font-semibold tracking-widest text-blue-200">CALL</div>
                <div className="text-sm">{PHONE_1}</div>
                <div className="text-sm">{PHONE_2}</div>
              </div>
            </button>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-xs font-semibold tracking-widest text-blue-200">EMAIL</div>
                <a href={`mailto:${EMAIL}`} className="text-sm hover:text-blue-200">{EMAIL}</a>
                <a href="https://instagram.com/ardinash_investments" className="mt-1 flex items-center gap-1.5 text-sm text-blue-200 hover:text-white">
                  <Instagram className="h-3.5 w-3.5" /> @ardinash_investments
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs font-semibold tracking-widest text-blue-200">LOCATION</div>
                <p className="text-sm">32 Clarendon,<br />Belvedere, Harare<br />Zimbabwe</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-blue-200 md:flex-row">
            <p>© {new Date().getFullYear()} Ardinash Consultancy. All rights reserved.</p>
            <p className="tracking-[0.3em]">BELIEVE · PLAN · ACHIEVE</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <button
        onClick={() => open("Quick Chat", "Hi Ardinash, I'd like to chat about your services.")}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.65_0.16_155)] to-[oklch(0.5_0.18_158)] text-white shadow-elegant transition hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <ContactDialog ctx={ctx} onClose={() => setCtx(null)} />
    </div>
  );
}
