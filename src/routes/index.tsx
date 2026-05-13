import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  MapPin,
  Sofa,
  Building2,
  Castle,
  ChefHat,
  BedDouble,
  Tv,
  Briefcase,
  Compass,
  Hammer,
  KeyRound,
  Lightbulb,
  Brush,
  Users,
  Lamp,
  Star,
} from "lucide-react";

import logo from "@/assets/logo.png";
import living1 from "@/assets/projects/living-1.jpeg";
import living2 from "@/assets/projects/living-2.jpeg";
import living3 from "@/assets/projects/living-3.jpeg";
import bedroom1 from "@/assets/projects/bedroom-1.jpeg";
import bedroom2 from "@/assets/projects/bedroom-2.jpeg";
import bedroom3 from "@/assets/projects/bedroom-3.jpeg";
import bedroom4 from "@/assets/projects/bedroom-4.jpeg";
import bedroom5 from "@/assets/projects/bedroom-5.jpeg";
import patio from "@/assets/projects/patio.jpeg";
import staircase from "@/assets/projects/staircase.jpeg";
import consoleImg from "@/assets/projects/console.jpeg";
import kitchen from "@/assets/projects/kitchen.jpeg";
import kitchen2 from "@/assets/projects/kitchen-2.jpeg";
import dining from "@/assets/projects/dining.jpeg";
import boutique1 from "@/assets/projects/boutique-1.jpeg";
import boutique2 from "@/assets/projects/boutique-2.jpeg";
import boutique3 from "@/assets/projects/boutique-3.jpeg";
import villaExterior from "@/assets/projects/villa-exterior.jpeg";
import triptych from "@/assets/projects/triptych.png";
import foyerMural from "@/assets/projects/foyer-mural.png";
import bathMosaic from "@/assets/projects/bath-mosaic.png";
import walnutHeadboard from "@/assets/projects/bedroom-walnut-headboard.png";
import studyNiche from "@/assets/projects/study-niche.png";
import sageGalley from "@/assets/projects/sage-galley.png";
import tealLiving from "@/assets/projects/teal-living.png";
import blueVelvetBed from "@/assets/projects/blue-velvet-bed.png";
import aquaWardrobe from "@/assets/projects/aqua-wardrobe.png";
import blushBedroom from "@/assets/projects/blush-bedroom.png";
import upKidsRoom from "@/assets/projects/upload-kids-room.png";
import upTwinStudy from "@/assets/projects/upload-twin-study.png";
import upBlueVelvetBedroom from "@/assets/projects/upload-blue-velvet-bedroom.png";
import upMintGuest from "@/assets/projects/upload-mint-guestroom.png";
import upMintPanel from "@/assets/projects/upload-mint-panel-bedroom.png";
import upTropicalDining from "@/assets/projects/upload-tropical-dining.png";
import upRoseTufted from "@/assets/projects/upload-rose-tufted-bed.png";
import upMarbleDining from "@/assets/projects/upload-marble-dining.png";
import upCozyLiving from "@/assets/projects/upload-cozy-living.png";
import upTealKitchen from "@/assets/projects/upload-teal-kitchen.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VDesigns Interiors — Luxury Interior Design Studio, Kerala" },
      {
        name: "description",
        content:
          "Premium residential, commercial and villa interior design by VDesigns Interiors, Perinthalmanna, Kerala. 7+ years, 20+ projects across India.",
      },
      { property: "og:image", content: living1 },
    ],
  }),
  component: Index,
});

const projects = [
  { src: living1, title: "Serene Apartment Living", category: "Living Spaces", caption: "Designed for comfort." },
  { src: bedroom1, title: "Heritage Master Suite", category: "Luxury Bedroom", caption: "Crafted for timeless living." },
  { src: kitchen, title: "Sage Modular Kitchen", category: "Modular Kitchen", caption: "Form meets function." },
  { src: staircase, title: "Open-Plan Villa Hall", category: "Villa Projects", caption: "Architectural calm." },
  { src: patio, title: "Koi Pond Courtyard", category: "Residential", caption: "Stillness, designed." },
  { src: bedroom2, title: "Quiet Guest Bedroom", category: "Residential", caption: "Minimal luxury." },
  { src: living2, title: "Editorial Living Room", category: "Living Spaces", caption: "Light as material." },
  { src: consoleImg, title: "Brass & Black Console", category: "Custom Furniture", caption: "Bespoke detail." },
  { src: villaExterior, title: "Contemporary Villa Facade", category: "Architecture", caption: "Light, brick, geometry." },
  { src: living3, title: "Classic Wainscot Living", category: "Living Spaces", caption: "Refined symmetry." },
  { src: bedroom4, title: "Walnut Master Bedroom", category: "Luxury Bedroom", caption: "Warmth in detail." },
  { src: bedroom3, title: "Boudoir Nightstand", category: "Bedroom Detail", caption: "Quiet brass glow." },
  { src: bedroom5, title: "Tufted Headboard Suite", category: "Luxury Bedroom", caption: "Texture and light." },
  { src: dining, title: "Mirror-Wall Dining", category: "Dining Room", caption: "Reflective elegance." },
  { src: kitchen2, title: "Sage & Oak Galley Kitchen", category: "Modular Kitchen", caption: "Daily rituals, refined." },
  { src: boutique1, title: "NOVE Boutique Lounge", category: "Commercial", caption: "Retail as experience." },
  { src: boutique2, title: "Boutique Showroom", category: "Commercial", caption: "Sculpted retail space." },
  { src: boutique3, title: "Boutique Display Wall", category: "Commercial", caption: "Curated brass detail." },
  { src: foyerMural, title: "Tropical Foyer & Pooja Niche", category: "Entryway", caption: "Heritage meets botanical." },
  { src: bathMosaic, title: "Mosaic Powder Bath", category: "Bathroom", caption: "Pattern as architecture." },
  { src: walnutHeadboard, title: "Walnut & Linen Bedside", category: "Bedroom Detail", caption: "Quiet brass, soft light." },
  { src: studyNiche, title: "Backlit Study Niche", category: "Home Office", caption: "Warm glow, focused work." },
  { src: sageGalley, title: "Sage & Teak Galley Kitchen", category: "Modular Kitchen", caption: "Calm utility." },
  { src: tealLiving, title: "Teal Velvet Drawing Room", category: "Living Spaces", caption: "Color with conviction." },
  { src: blueVelvetBed, title: "Cobalt Velvet Master Suite", category: "Luxury Bedroom", caption: "Bold and serene." },
  { src: aquaWardrobe, title: "Aqua Lacquer Wardrobe Bedroom", category: "Bedroom", caption: "Coastal calm." },
  { src: blushBedroom, title: "Blush & Cove-Lit Bedroom", category: "Luxury Bedroom", caption: "Soft layered light." },
  { src: triptych, title: "Penthouse Triptych — Living, Bath, Dining", category: "Luxury Apartment", caption: "Three rooms, one language." },
  { src: upKidsRoom, title: "Coral Twin Kids Bedroom", category: "Kids Room", caption: "Playful, layered, joyful." },
  { src: upTwinStudy, title: "Symmetrical Twin Study Suite", category: "Kids Room", caption: "Mirror-balanced calm." },
  { src: upBlueVelvetBedroom, title: "Sapphire Velvet Master Bedroom", category: "Luxury Bedroom", caption: "Drama with restraint." },
  { src: upMintGuest, title: "Mint & Teak Guest Bedroom", category: "Bedroom", caption: "Botanical serenity." },
  { src: upMintPanel, title: "Mint Panelled Master Suite", category: "Luxury Bedroom", caption: "Architectural wall craft." },
  { src: upTropicalDining, title: "Tropical Mural Dining Room", category: "Dining Room", caption: "Warm brass, cool palms." },
  { src: upRoseTufted, title: "Rose Tufted Master Bedroom", category: "Luxury Bedroom", caption: "Soft tactile romance." },
  { src: upMarbleDining, title: "Arched Cabinetry Marble Dining", category: "Dining Room", caption: "Heirloom modernism." },
  { src: upCozyLiving, title: "Quiet Compact Living Room", category: "Living Spaces", caption: "Warm everyday calm." },
  { src: upTealKitchen, title: "Teal Tile Modular Kitchen", category: "Modular Kitchen", caption: "Bold backsplash, clean lines." },
];

const services = [
  { icon: Sofa, title: "Residential Interiors", copy: "Homes that reflect personality, comfort and quiet luxury." },
  { icon: Building2, title: "Commercial Interiors", copy: "Workspaces and retail with brand-driven precision." },
  { icon: Castle, title: "Luxury Villa Interiors", copy: "Whole-villa concepts with a cohesive architectural voice." },
  { icon: ChefHat, title: "Modular Kitchen Design", copy: "Ergonomic, durable kitchens built for everyday rituals." },
  { icon: BedDouble, title: "Bedroom Design", copy: "Restful suites layered in texture, tone and warmth." },
  { icon: Tv, title: "Living Space Design", copy: "Social spaces composed for light, scale and ease." },
  { icon: Briefcase, title: "Office Interiors", copy: "Productive environments with editorial restraint." },
  { icon: Compass, title: "Space Planning", copy: "Functional flow, derived from how you actually live." },
  { icon: Hammer, title: "Renovation & Remodeling", copy: "Reimagine existing structures with a contemporary lens." },
  { icon: KeyRound, title: "Turnkey Solutions", copy: "Concept to keys — managed end to end by one team." },
  { icon: Lightbulb, title: "Interior Consultation", copy: "Strategic design guidance for any stage of your build." },
  { icon: Brush, title: "Custom Furniture & Styling", copy: "Bespoke pieces designed for your specific space." },
  { icon: Users, title: "Public Space Interiors", copy: "Civic and hospitality interiors with quiet authority." },
  { icon: Lamp, title: "Lighting & Material", copy: "Material palettes and lighting plans, intentionally curated." },
];

const processSteps = [
  "Consultation",
  "Planning",
  "Concept Design",
  "3D Visualization",
  "Material Selection",
  "Execution",
  "Site Supervision",
  "Styling & Finishing",
  "Final Reveal",
];

const testimonials = [
  { name: "Vipin Menon", quote: "We recently had our home's interior designed by VDesigns, and the experience was absolutely fantastic. The final result looked exactly like the 3D designs shown earlier. Highly recommended." },
  { name: "Aswathy Govind", quote: "The kitchen and bedroom exceeded all our expectations. Even during maternity leave, Vismaya continued supporting the project. Exceptional professionalism and aesthetics." },
  { name: "Divya Menon", quote: "Even though we were in Germany, communication through WhatsApp was seamless and every detail was executed perfectly." },
  { name: "Suhaib", quote: "One of the best interior designers in Perinthalmanna. Professional team, on-time delivery, and outstanding design quality." },
  { name: "Lekshmi T P", quote: "Vismaya and the team gave us a beautiful home far beyond our expectations." },
  { name: "Noorudeen Veetykadan", quote: "Dedicated, reliable, and highly creative team with strong supervision and excellent knowledge of modern interiors." },
  { name: "Jyothsna Poylath Variem", quote: "Creative solutions, smooth communication, and beautiful execution within budget and timeline." },
  { name: "Ramit T", quote: "Very good work, finished in time. Excellent responsiveness, quality and professionalism." },
  { name: "Karthikeyan Radhakrishnan", quote: "Very good designs and work. Punctual, professional and a pleasure to work with on our kitchen." },
  { name: "Lal", quote: "Versatile and thoughtful interiors — very classy. The team's professionalism really stood out." },
  { name: "Viswajith Murali", quote: "100% professional service from start to finish." },
  { name: "Praveen K", quote: "Nice work on the bedroom, living room and home decor. Highly recommend the team." },
  { name: "Anagha MV", quote: "Excellent service and beautiful bedroom design. True professionals." },
  { name: "Anuj Kaushik", quote: "Outstanding quality of finish — every detail was thoughtfully resolved." },
  { name: "Phani Kamada", quote: "Responsive, punctual, professional and great value. A genuinely well-run studio." },
  { name: "Vijil Sathyan", quote: "Top marks on responsiveness, punctuality, quality, professionalism and value." },
  { name: "Sandhra Madhu M", quote: "A team that delivers on every parameter — quality, value and trust." },
  { name: "Aneesh M", quote: "One of the best interior designers in Perinthalmanna. Truly five-star work." },
];

const reasons = [
  "Client-first approach",
  "On-time project delivery",
  "Personalized design solutions",
  "End-to-end execution",
  "Transparent communication",
  "Budget-conscious luxury",
  "Attention to detail",
  "Modern & timeless aesthetics",
  "Strong site supervision",
  "Trusted across Kerala & India",
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="VDesigns" className="h-9 w-9 rounded-full object-cover bg-white" />
          <span className="font-display text-lg tracking-wide">VDesigns<span className="text-muted-foreground"> Interiors</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {[
            ["Work", "#work"],
            ["Studio", "#about"],
            ["Services", "#services"],
            ["Process", "#process"],
            ["Journal", "#testimonials"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a key={l} href={h} className="hover:text-muted-foreground transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors"
        >
          Book Consultation <ArrowUpRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-background">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={living1} alt="VDesigns interior hero" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-12 mx-auto max-w-[1500px]">
        <div className="hidden md:flex items-center justify-between text-xs tracking-[0.3em] uppercase text-foreground/70 mb-12">
          <span>Est. 2021 — Perinthalmanna, Kerala</span>
          <span>Minimal · Functional · Timeless</span>
        </div>
        <Reveal>
          <h1 className="font-display text-[12vw] md:text-[7.5vw] leading-[0.95] tracking-tight max-w-[15ch] text-balance">
            Designing spaces<br />
            that feel like <em className="italic font-light">better living.</em>
          </h1>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-end">
          <Reveal delay={0.15}>
            <p className="text-base md:text-lg text-foreground/80 max-w-md text-pretty">
              Luxury residential, commercial and public interior solutions crafted with precision, elegance and quiet functionality.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#work" className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 text-sm tracking-wide hover:bg-foreground/85 transition">
                View Projects <ArrowUpRight className="size-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-foreground px-7 py-4 text-sm tracking-wide hover:bg-foreground hover:text-background transition">
                Book Consultation
              </a>
            </div>
          </Reveal>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-foreground/60 z-10">
        Scroll
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Residential", "Commercial", "Villa", "Modular Kitchen", "Bedroom", "Living", "Office", "Renovation", "Turnkey"];
  const all = [...items, ...items, ...items];
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-background">
      <div className="marquee flex whitespace-nowrap gap-16 font-display text-3xl md:text-5xl">
        {all.map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className="italic font-light">{t}</span>
            <span className="text-muted-foreground">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    ["20+", "Projects Completed"],
    ["07+", "Years of Practice"],
    ["100%", "Client Satisfaction"],
    ["Pan-India", "Service Reach"],
  ];
  return (
    <section className="px-6 lg:px-12 py-20 lg:py-28 mx-auto max-w-[1500px] grid grid-cols-2 md:grid-cols-4 gap-10">
      {stats.map(([n, l]) => (
        <Reveal key={l}>
          <div>
            <div className="font-display text-5xl md:text-6xl">{n}</div>
            <div className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">{l}</div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 lg:px-12 py-24 lg:py-40 mx-auto max-w-[1500px]">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">— The Studio</div>
            <img src={living3} alt="VDesigns interior detail" className="w-full aspect-[4/5] object-cover" />
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pl-10">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance">
              We don't simply decorate spaces. We design <em className="italic font-light">experiences</em> people feel every single day.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-base md:text-lg text-muted-foreground max-w-xl">
              Founded in 2021 by <span className="text-foreground">Vismaya N</span>, our studio is dedicated to creating thoughtful and inspiring interior spaces that blend functionality with timeless aesthetics. With a passion for creativity and detail, we believe every space should reflect personality, comfort and elegance.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
              From concept to completion, we focus on delivering designs that are modern, meaningful and tailored to each client's vision — across Kerala and India.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-6 text-sm">
              {["Concept Planning", "Architectural Detailing", "Material Curation", "Site Supervision", "Custom Furniture", "Final Styling"].map((s) => (
                <div key={s} className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="font-mono text-xs text-muted-foreground">/ 0{(["Concept Planning","Architectural Detailing","Material Curation","Site Supervision","Custom Furniture","Final Styling"].indexOf(s)+1)}</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="px-6 lg:px-12 py-24 lg:py-32 mx-auto max-w-[1500px]">
      <div className="flex items-end justify-between mb-16 lg:mb-24">
        <Reveal>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">— Selected Work</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-[14ch]">
              Interiors crafted with quiet conviction.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="hidden md:block text-sm text-muted-foreground max-w-xs">
            A curated archive of recently completed residential, commercial and villa projects across Kerala and India.
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {projects.map((p, i) => {
          const layoutPool = [
            "col-span-12 md:col-span-7 aspect-[4/3]",
            "col-span-12 md:col-span-5 aspect-[3/4]",
            "col-span-12 md:col-span-5 aspect-square",
            "col-span-12 md:col-span-7 aspect-[4/3]",
            "col-span-12 md:col-span-6 aspect-[4/3]",
            "col-span-12 md:col-span-6 aspect-[4/3]",
            "col-span-12 md:col-span-8 aspect-[16/10]",
            "col-span-12 md:col-span-4 aspect-[3/4]",
          ];
          const layoutClass = layoutPool[i % layoutPool.length];
          return (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.1 }}
              className={`group relative overflow-hidden bg-muted ${layoutClass}`}
            >
              <img
                src={p.src}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 lg:p-8 text-background translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] tracking-[0.3em] uppercase opacity-80">{p.category}</div>
                <div className="mt-2 font-display text-2xl md:text-3xl">{p.title}</div>
                <div className="mt-1 text-xs italic opacity-80">{p.caption}</div>
              </figcaption>
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-background mix-blend-difference">
                / {String(i + 1).padStart(2, "0")}
              </div>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-foreground text-background py-24 lg:py-40">
      <div className="px-6 lg:px-12 mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6">— Capabilities</div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                A full studio.<br /><em className="italic font-light">One vision.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.2}>
              <p className="text-lg opacity-80 max-w-lg">
                From a single room consultation to a complete turnkey villa, every engagement is led personally and delivered with the same uncompromising attention to detail.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.05 }}
                className="group relative border-t border-background/15 px-2 py-10 cursor-default"
              >
                <div className="flex items-start justify-between">
                  <Icon className="size-7 opacity-80 transition-transform duration-500 group-hover:-translate-y-1" />
                  <span className="font-mono text-[10px] opacity-50">/ {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="mt-10 font-display text-2xl md:text-3xl">{s.title}</div>
                <p className="mt-3 text-sm opacity-65 max-w-xs">{s.copy}</p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-background scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="px-6 lg:px-12 py-24 lg:py-40 mx-auto max-w-[1500px]">
      <Reveal>
        <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">— Process</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-[18ch]">
          Every project moves through a <em className="italic font-light">carefully crafted</em> journey of precision and creativity.
        </h2>
      </Reveal>

      <div className="mt-20 overflow-x-auto -mx-6 lg:mx-0 scroll-smooth">
        <div className="flex gap-6 px-6 lg:px-0 min-w-max">
          {processSteps.map((step, i) => (
            <Reveal key={step} delay={i * 0.05}>
              <div className="w-[260px] border-t border-foreground pt-6">
                <div className="font-mono text-xs text-muted-foreground">STEP / {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-12 font-display text-3xl">{step}</div>
                <div className="mt-4 text-sm text-muted-foreground">
                  {[
                    "We start by listening. Your lifestyle, references and quiet preferences shape the brief.",
                    "Layouts, zoning and structural feasibility — translated into a workable plan.",
                    "A distinct design language tailored to your space and personality.",
                    "Photoreal walkthroughs so you experience the home before it's built.",
                    "Curated palettes of finishes, fabrics, stone and wood.",
                    "On-ground execution with our trusted craftsmen and vendors.",
                    "Daily site supervision to maintain quality and timelines.",
                    "Furniture, lighting and styling — composed for the final image.",
                    "Final reveal and editorial photoshoot of your completed home.",
                  ][i]}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="bg-secondary px-6 lg:px-12 py-24 lg:py-40">
      <div className="mx-auto max-w-[1500px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">— Why VDesigns</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.98] tracking-tight">
              Your dream space deserves more than decoration. It deserves <em className="italic font-light">thoughtful design.</em>
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid sm:grid-cols-2 gap-x-10">
            {reasons.map((r, i) => (
              <Reveal key={r} delay={i * 0.04}>
                <li className="flex items-baseline gap-4 border-b border-border py-5">
                  <span className="font-mono text-xs text-muted-foreground">/ {String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg">{r}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="px-6 lg:px-12 py-24 lg:py-40 mx-auto max-w-[1500px]">
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">— Voices</div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">In their words.</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-foreground text-foreground" />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">5.0 · Client Satisfaction</div>
          </div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.08}>
            <figure className="bg-background p-8 lg:p-10 h-full flex flex-col">
              <div className="flex mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-3.5 fill-foreground text-foreground" />
                ))}
              </div>
              <blockquote className="font-display text-xl lg:text-2xl leading-snug flex-1 text-balance">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                — {t.name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <img src={staircase} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative px-6 lg:px-12 py-32 lg:py-48 mx-auto max-w-[1500px] text-center">
        <Reveal>
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">— Begin</div>
          <h2 className="font-display text-6xl md:text-[10vw] md:leading-[0.9] leading-[0.95] tracking-tight text-balance">
            Ready to transform <em className="italic font-light">your space?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918075264926" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-5 text-sm tracking-wide hover:opacity-90 transition">
              <MessageCircle className="size-4" /> WhatsApp Us
            </a>
            <a href="https://www.instagram.com/vdesign__interiorstudio/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white px-8 py-5 text-sm tracking-wide hover:opacity-90 transition" style={{ background: "linear-gradient(45deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)" }}>
              <Instagram className="size-4" /> Instagram
            </a>
            <a href="tel:+918075264926" className="inline-flex items-center gap-2 border border-foreground px-8 py-5 text-sm tracking-wide hover:bg-foreground hover:text-background transition">
              Call +91 80752 64926
            </a>
            <a href="mailto:vdesigninteriors440@gmail.com" className="inline-flex items-center gap-2 border border-foreground px-8 py-5 text-sm tracking-wide hover:bg-foreground hover:text-background transition">
              Email the Studio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border px-6 lg:px-12 pt-20 pb-10 mx-auto max-w-[1500px]">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="VDesigns" className="h-10 w-10 rounded-full bg-white object-cover" />
            <div className="font-display text-2xl">VDesigns Interiors</div>
          </div>
          <p className="mt-6 font-display text-3xl md:text-4xl leading-tight max-w-md text-balance">
            Crafting interiors that inspire <em className="italic font-light">better living.</em>
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Studio</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5" /> Perinthalmanna, Malappuram, Kerala</li>
            <li className="flex items-center gap-2"><Phone className="size-4" /> <a href="tel:+918075264926" className="hover:text-muted-foreground">+91 80752 64926</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="size-4" /> <a href="https://wa.me/918075264926" className="hover:text-muted-foreground">WhatsApp</a></li>
            <li className="flex items-center gap-2"><Mail className="size-4" /> <a href="mailto:vdesigninteriors440@gmail.com" className="hover:text-muted-foreground break-all">vdesigninteriors440@gmail.com</a></li>
            <li className="flex items-center gap-2"><Instagram className="size-4" /> <a href="https://www.instagram.com/vdesign__interiorstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground">@vdesign__interiorstudio</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            {["Work", "Studio", "Services", "Process", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-muted-foreground">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Services</div>
          <ul className="space-y-3 text-sm">
            {["Residential", "Commercial", "Villa", "Modular Kitchen", "Turnkey"].map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-6 border-t border-border flex flex-wrap justify-between gap-4 text-xs text-muted-foreground tracking-wide">
        <div>© {new Date().getFullYear()} VDesigns Interiors. All rights reserved.</div>
        <div>Designed in Kerala — for clients across India.</div>
      </div>
    </footer>
  );
}

function FloatingSocial() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <a
        href="https://www.instagram.com/vdesign__interiorstudio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        className="inline-flex items-center gap-2 rounded-full text-white pl-4 pr-5 py-3.5 shadow-lg hover:scale-105 transition-transform"
        style={{ background: "linear-gradient(45deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)" }}
      >
        <Instagram className="size-5" />
        <span className="text-sm font-medium tracking-wide">Instagram</span>
      </a>
      <a
        href="https://wa.me/918075264926?text=Hi%20VDesigns%2C%20I%27d%20like%20to%20book%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3.5 shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="size-5" />
        <span className="text-sm font-medium tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Work />
      <Services />
      <Process />
      <Why />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingSocial />
    </main>
  );
}
