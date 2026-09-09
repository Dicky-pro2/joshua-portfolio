'use client';

import {
  ArrowRight,
  BadgeCheck,
  Brush,
  Camera,
  ChevronLeft,
  ChevronRight,
  Layers3,
  Mail,
  Menu,
  MonitorSmartphone,
  PackageCheck,
  Palette,
  PenTool,
  Phone,
  Sparkles,
  Video,
  X,
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  coverImage?: string;
  galleryImages: string[];
  altText: string;
  featured: boolean;
  order: number;
  theme: string;
};

type GalleryItem = {
  id: string;
  title: string;
  category: string;
  project: string;
  image?: string;
  altText: string;
  ratio: string;
  theme: string;
};

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const services = [
  {
    title: 'Brand Identity',
    description: 'Distinct identity systems built to make brands recognizable and memorable.',
    icon: BadgeCheck,
  },
  {
    title: 'Logo Design',
    description: 'Sharp, flexible marks for businesses, organisations and personal brands.',
    icon: PenTool,
  },
  {
    title: 'Social Media Design',
    description: 'Scroll-stopping graphics for campaigns, announcements and daily content.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Flyers and Posters',
    description: 'Bold promotional layouts for events, launches and public communication.',
    icon: Layers3,
  },
  {
    title: 'Marketing Collateral',
    description: 'Business cards, brochures and print-ready pieces with a consistent voice.',
    icon: PackageCheck,
  },
  {
    title: 'Product Visuals',
    description: 'Clean visuals and mockup presentations that help products feel real.',
    icon: Camera,
  },
  {
    title: 'Mockup Presentation',
    description: 'Refined brand applications that show how an identity lives in the world.',
    icon: Palette,
  },
  {
    title: 'Basic Video Editing',
    description: 'Simple edits and brand-aware motion pieces for social and campaign use.',
    icon: Video,
  },
];

const projects: Project[] = [
  {
    id: 'chard',
    title: 'CHARD Brand',
    slug: 'chard-brand',
    category: 'Brand Identity & Packaging',
    summary: 'A brand identity and packaging presentation with a confident product-led visual system.',
    galleryImages: [],
    altText: 'CHARD brand identity and packaging project preview',
    featured: true,
    order: 1,
    theme: 'from-[#f4b942] via-[#ff8a3d] to-[#c347a6]',
  },
  {
    id: 'wiltes-energy',
    title: 'WILTES ENERGY',
    slug: 'wiltes-energy',
    category: 'Brand Identity & Marketing Collateral',
    summary: 'A clean identity direction supported by business and marketing collateral.',
    galleryImages: [],
    altText: 'WILTES ENERGY brand identity and marketing collateral project preview',
    featured: true,
    order: 2,
    theme: 'from-[#7147d9] via-[#c347a6] to-[#f4b942]',
  },
  {
    id: 'julies',
    title: "Julie’s Brand",
    slug: 'julies-brand',
    category: 'Cleaning Brand Identity & Campaign Design',
    summary: 'A practical cleaning brand identity extended into campaign-ready visuals.',
    galleryImages: [],
    altText: "Julie’s cleaning brand identity and campaign design project preview",
    featured: true,
    order: 3,
    theme: 'from-[#ff8a3d] via-[#f4b942] to-[#7147d9]',
  },
  {
    id: 'gidifix',
    title: 'GIDIFIX Brand',
    slug: 'gidifix-brand',
    category: 'Brand Identity & Logo System',
    summary: 'A brand identity and logo system presented with bold, adaptable applications.',
    galleryImages: [],
    altText: 'GIDIFIX brand identity and logo system project preview',
    featured: true,
    order: 4,
    theme: 'from-[#c347a6] via-[#7147d9] to-[#f4b942]',
  },
];

const galleryItems: GalleryItem[] = [
  { id: 'logo-01', title: 'Logo Direction', category: 'Logos', project: 'Brand mark exploration', altText: 'Joshua Francis Iwule logo design preview', ratio: 'aspect-[4/5]', theme: 'from-[#f4b942] to-[#ff8a3d]' },
  { id: 'mockup-01', title: 'Mockup System', category: 'Mockups', project: 'Brand application preview', altText: 'Joshua Francis Iwule mockup presentation preview', ratio: 'aspect-[5/4]', theme: 'from-[#7147d9] to-[#c347a6]' },
  { id: 'flyer-01', title: 'Campaign Flyer', category: 'Flyers', project: 'Event and promotion layout', altText: 'Joshua Francis Iwule flyer design preview', ratio: 'aspect-[3/4]', theme: 'from-[#ff8a3d] to-[#c347a6]' },
  { id: 'social-01', title: 'Social Graphic', category: 'Social Media', project: 'Digital campaign creative', altText: 'Joshua Francis Iwule social media graphic preview', ratio: 'aspect-square', theme: 'from-[#c347a6] to-[#7147d9]' },
  { id: 'branding-01', title: 'Brand Kit', category: 'Branding', project: 'Identity presentation', altText: 'Joshua Francis Iwule branding work preview', ratio: 'aspect-[6/5]', theme: 'from-[#f4b942] to-[#7147d9]' },
  { id: 'mockup-02', title: 'Product Visual', category: 'Mockups', project: 'Packaging and product scene', altText: 'Joshua Francis Iwule product visual preview', ratio: 'aspect-[4/3]', theme: 'from-[#101318] via-[#f4b942] to-[#c347a6]' },
  { id: 'flyer-02', title: 'Poster Design', category: 'Flyers', project: 'Public-facing announcement', altText: 'Joshua Francis Iwule poster design preview', ratio: 'aspect-[2/3]', theme: 'from-[#7147d9] to-[#ff8a3d]' },
  { id: 'branding-02', title: 'Identity Layout', category: 'Branding', project: 'Brand presentation spread', altText: 'Joshua Francis Iwule identity layout preview', ratio: 'aspect-[7/5]', theme: 'from-[#c347a6] via-[#f4b942] to-[#080a0d]' },
];

const filters = ['All', 'Logos', 'Mockups', 'Flyers', 'Social Media', 'Branding'];
const tools = ['CorelDRAW', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'CapCut'];
const skills = [
  'Brand Identity Design',
  'Logo Design',
  'Layout and Composition',
  'Photo Manipulation',
  'Social Media Design',
  'Print Design',
  'Video Editing',
  'Creative Direction',
];

const email = 'iwulejoshua@gmail.com';
const phonePrimary = '+2349076773587';
const phoneDisplay = '+234 907 677 3587';
const whatsappMessage = encodeURIComponent(
  'Hello Joshua, I found your portfolio and I would like to discuss a design project with you.',
);

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function PreviewPanel({
  title,
  category,
  theme,
  image,
  alt,
  className = '',
}: {
  title: string;
  category: string;
  theme: string;
  image?: string;
  alt: string;
  className?: string;
}) {
  if (image) {
    return (
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex h-full min-h-[260px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101318] p-6 ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${theme} opacity-70`} />
      <div className="absolute inset-[1px] rounded-[1.68rem] bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_25%),linear-gradient(135deg,rgba(8,10,13,0.28),rgba(8,10,13,0.9))]" />
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/20" />
      <div className="absolute bottom-7 right-7 grid h-24 w-24 place-items-center rounded-full border border-white/20 bg-black/20 text-sm font-semibold text-white/75">
        JFI
      </div>
      <div className="relative mt-auto max-w-[75%]">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/70">{category}</p>
        <p className="mt-3 font-heading text-3xl font-black leading-none text-white sm:text-4xl">{title}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [projectIndex, setProjectIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);
  const reduceMotion = useReducedMotion();
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured).sort((a, b) => a.order - b.order),
    [],
  );
  const filteredGallery = useMemo(
    () =>
      activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers = navItems.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 },
      );
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeProject || activeGalleryItem ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, activeProject, activeGalleryItem]);

  useEffect(() => {
    if (!activeProject && !activeGalleryItem) return;
    modalCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
        setActiveGalleryItem(null);
      }
      if (activeProject && event.key === 'ArrowRight') {
        setProjectIndex((index) => (index + 1) % featuredProjects.length);
        setActiveProject(featuredProjects[(projectIndex + 1) % featuredProjects.length]);
      }
      if (activeProject && event.key === 'ArrowLeft') {
        const nextIndex = (projectIndex - 1 + featuredProjects.length) % featuredProjects.length;
        setProjectIndex(nextIndex);
        setActiveProject(featuredProjects[nextIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, activeGalleryItem, featuredProjects, projectIndex]);

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.7, ease: 'easeOut' },
  };

  const openProject = (project: Project) => {
    const index = featuredProjects.findIndex((item) => item.id === project.id);
    setProjectIndex(index);
    setActiveProject(project);
  };

  const moveProject = (direction: number) => {
    const nextIndex = (projectIndex + direction + featuredProjects.length) % featuredProjects.length;
    setProjectIndex(nextIndex);
    setActiveProject(featuredProjects[nextIndex]);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-[#f4b942] selection:text-[#080a0d]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/10 bg-[#080a0d]/78 shadow-2xl shadow-black/25 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Primary navigation">
          <button onClick={() => scrollToSection('home')} className="group flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942]" aria-label="Go to home section">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#f4b942]/40 bg-[#f4b942] font-heading text-sm font-black text-[#080a0d] shadow-[0_0_34px_rgba(244,185,66,0.24)]">JFI</span>
            <span className="hidden text-sm font-semibold text-[#f7f3ea] sm:inline">Joshua Portfolio</span>
          </button>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4b942] ${
                  activeSection === item.id ? 'text-[#f7f3ea]' : 'text-[#a9adb5] hover:text-[#f7f3ea]'
                }`}
              >
                {activeSection === item.id && <motion.span layoutId="activeNav" className="absolute inset-0 rounded-full bg-white/10" />}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </div>
          <button onClick={() => scrollToSection('contact')} className="group hidden min-h-11 items-center gap-2 rounded-full bg-[#f4b942] px-5 text-sm font-bold text-[#080a0d] transition hover:bg-[#ffd36f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942] lg:flex">
            Let’s Work Together <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </button>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-[#f7f3ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942] lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#080a0d]/96 px-5 py-6 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f4b942] font-heading text-sm font-black text-[#080a0d]">JFI</span>
              <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-[#f7f3ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942]" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-12 grid gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => scrollToSection(item.id), 80);
                  }}
                  className="min-h-14 rounded-2xl border border-white/10 px-5 text-left font-heading text-2xl font-bold text-[#f7f3ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_18%,rgba(244,185,66,0.17),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(113,71,217,0.18),transparent_25%),linear-gradient(180deg,#080a0d_0%,#0b0d12_55%,#080a0d_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:72px_72px]" />
        <motion.div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]" {...reveal}>
          <div>
            <p className="mb-6 inline-flex rounded-full border border-[#f4b942]/30 bg-[#f4b942]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f4b942]">
              Same Vision. New Identity.
            </p>
            <h1 className="max-w-4xl font-heading text-[clamp(3.4rem,10vw,9rem)] font-black leading-[0.82] text-[#f7f3ea]">
              Joshua Francis Iwule
            </h1>
            <p className="mt-6 font-heading text-[clamp(1.4rem,3vw,2.5rem)] font-bold text-[#f4b942]">
              Graphic Designer & Brand Identity Designer
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c9ccd2]">
              I transform ideas into bold visual identities. From logos to full brand systems, I create designs that tell stories, connect with people and make brands unforgettable.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => scrollToSection('projects')} className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b942] px-6 font-bold text-[#080a0d] transition hover:bg-[#ffd36f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942]">
                View Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 font-bold text-[#f7f3ea] transition hover:border-[#f4b942]/60 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942]">
                Let’s Work Together
              </button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-[#f4b942]/30 via-[#c347a6]/20 to-[#7147d9]/30 blur-3xl" />
            <div className="relative aspect-square rounded-[42%_58%_50%_50%/48%_40%_60%_52%] border border-[#f4b942]/35 bg-[#101318]/75 p-4 shadow-[0_24px_90px_rgba(0,0,0,.45)]">
              <div className="relative h-full overflow-hidden rounded-[inherit] border border-white/10 bg-[#080a0d]">
                <img
                  src="/joshua-francis-iwule-portrait.png"
                  alt="Portrait of Joshua Francis Iwule"
                  loading="eager"
                  className="h-full w-full object-cover object-[48%_32%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,13,0)_45%,rgba(8,10,13,.38)_100%)]" />
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Creative Brand Designer', 'Visual Storyteller', 'Available for new projects'].map((label) => (
                <span key={label} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-center text-sm text-[#d9dbe0] backdrop-blur">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="px-5 py-24 sm:px-8 lg:px-10">
        <motion.div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]" {...reveal}>
          <div>
            <p className="section-kicker">About and Services</p>
            <h2 className="section-title">Designing Identities for a Brighter Tomorrow</h2>
            <p className="mt-6 text-lg leading-8 text-[#c9ccd2]">
              Joshua Francis Iwule is a modern and creative graphic designer with a passion for transforming ideas into compelling visual experiences. Since 2019, he has worked across logo and brand identity design, flyers, posters, social media graphics, business cards, brochures, event designs and product visuals. He works with individuals, businesses, organisations and brands, creating designs that communicate clearly and leave a lasting impression.
            </p>
            <p className="mt-6 inline-flex rounded-full border border-[#f4b942]/30 bg-[#f4b942]/10 px-5 py-3 font-semibold text-[#f4b942]">
              Deliver fast, think creatively and pay attention to every detail.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map(({ title, description, icon: Icon }) => (
              <motion.article key={title} className="group rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-[#f4b942]/40 hover:bg-white/[0.07]" whileHover={reduceMotion ? undefined : { y: -4 }}>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#f4b942]/12 text-[#f4b942]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#f7f3ea]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#a9adb5]">{description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="px-5 py-24 sm:px-8 lg:px-10">
        <motion.div className="mx-auto max-w-7xl" {...reveal}>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Featured Projects</p>
              <h2 className="section-title">Selected Work</h2>
            </div>
            <p className="max-w-xl text-[#a9adb5]">Branding, flyers, mockups and visual systems presented with enough space to be appreciated.</p>
          </div>
          <div className="grid auto-rows-[minmax(360px,auto)] gap-5 lg:grid-cols-6">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className={`group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101318] p-3 ${index === 0 || index === 3 ? 'lg:col-span-4' : 'lg:col-span-2'} ${index === 1 || index === 2 ? 'lg:row-span-1' : ''}`}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
              >
                <button onClick={() => openProject(project)} className="block flex-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942]" aria-label={`View ${project.title}`}>
                  <PreviewPanel title={project.title} category={project.category} theme={project.theme} image={project.coverImage} alt={project.altText} />
                  <div className="px-3 pb-4 pt-5">
                    <h3 className="font-heading text-2xl font-bold text-[#f7f3ea]">{project.title}</h3>
                    <p className="mt-2 text-sm text-[#f4b942]">{project.category}</p>
                    <p className="mt-3 text-sm leading-6 text-[#a9adb5]">{project.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#f7f3ea]">
                      View Project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="gallery" className="px-5 py-24 sm:px-8 lg:px-10">
        <motion.div className="mx-auto max-w-7xl" {...reveal}>
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="section-kicker">Design Gallery</p>
              <h2 className="section-title">More Designs, More Possibilities</h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Gallery filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942] ${
                    activeFilter === filter ? 'border-[#f4b942] bg-[#f4b942] text-[#080a0d]' : 'border-white/10 bg-white/[0.04] text-[#d5d7dc] hover:border-[#f4b942]/50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => (
                <motion.button
                  layout
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                  onClick={() => setActiveGalleryItem(item)}
                  className="mb-5 block w-full break-inside-avoid rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-3 text-left transition hover:border-[#f4b942]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942]"
                >
                  <div className={item.ratio}>
                    <PreviewPanel title={item.title} category={item.category} theme={item.theme} image={item.image} alt={item.altText} className="min-h-0" />
                  </div>
                  <div className="px-2 py-4">
                    <p className="font-heading text-xl font-bold text-[#f7f3ea]">{item.title}</p>
                    <p className="mt-1 text-sm text-[#a9adb5]">{item.project}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className="px-5 py-24 sm:px-8 lg:px-10">
        <motion.div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#101318]/70 p-6 shadow-2xl shadow-black/20 sm:p-10" {...reveal}>
          <p className="section-kicker">Tools & Skills</p>
          <h2 className="section-title">What I design and edit with</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {tools.map((tool) => (
              <div key={tool} className="rounded-[1.25rem] border border-white/10 bg-[#080a0d]/60 p-5">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-[#f4b942]/12 font-heading font-black text-[#f4b942]">{tool.slice(0, 2).toUpperCase()}</div>
                <p className="font-heading text-lg font-bold text-[#f7f3ea]">{tool}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#d5d7dc]">{skill}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="px-5 py-24 sm:px-8 lg:px-10">
        <motion.div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-[#f4b942]/25 bg-[#101318] p-7 shadow-[0_28px_100px_rgba(0,0,0,.36)] sm:p-12 lg:p-16" {...reveal}>
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f4b942]/18 blur-3xl" />
          <div className="absolute -bottom-28 left-16 h-72 w-72 rounded-full bg-[#7147d9]/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="font-heading text-[clamp(2.7rem,7vw,6.8rem)] font-black leading-[0.9] text-[#f7f3ea]">
                Let’s Create Something Great Together.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c9ccd2]">
                Whether you need a new visual identity, campaign design, social media graphics or creative support, let’s discuss how we can bring your idea to life.
              </p>
            </div>
            <div className="grid gap-3">
              <a href={`mailto:${email}`} className="contact-link"><Mail className="h-5 w-5" aria-hidden="true" /> Send an Email</a>
              <a href={`https://wa.me/2349076773587?text=${whatsappMessage}`} className="contact-link"><Sparkles className="h-5 w-5" aria-hidden="true" /> Chat on WhatsApp</a>
              <a href={`tel:${phonePrimary}`} className="contact-link"><Phone className="h-5 w-5" aria-hidden="true" /> Call Joshua</a>
              <div className="mt-5 rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-[#c9ccd2]">
                <p>{phoneDisplay}</p>
                <p>+234 810 126 0606</p>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#f4b942] font-heading text-sm font-black text-[#080a0d]">JFI</div>
            <p className="font-heading text-xl font-bold text-[#f7f3ea]">Joshua Francis Iwule</p>
            <p className="mt-1 text-sm text-[#a9adb5]">Graphic Designer & Brand Identity Designer</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="min-h-11 rounded-full border border-white/10 px-4 text-sm text-[#d5d7dc] hover:border-[#f4b942]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942]">
                {item.label}
              </button>
            ))}
          </div>
          <div className="text-sm leading-7 text-[#a9adb5] md:text-right">
            <p>{email}</p>
            <p>{phoneDisplay}</p>
            <p>© {new Date().getFullYear()} Joshua Portfolio</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {activeProject && (
          <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/78 p-4 backdrop-blur-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <motion.div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[1.6rem] border border-white/10 bg-[#101318] p-4 shadow-2xl" initial={reduceMotion ? false : { y: 24, scale: 0.98 }} animate={reduceMotion ? undefined : { y: 0, scale: 1 }} exit={reduceMotion ? undefined : { y: 20, scale: 0.98 }}>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h3 id="project-modal-title" className="font-heading text-2xl font-bold text-[#f7f3ea]">{activeProject.title}</h3>
                  <p className="text-sm text-[#f4b942]">{activeProject.category}</p>
                </div>
                <button ref={modalCloseRef} onClick={() => setActiveProject(null)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-[#f7f3ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942]" aria-label="Close project modal">
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="aspect-[16/10] min-h-[300px]">
                <PreviewPanel title={activeProject.title} category={activeProject.category} theme={activeProject.theme} image={activeProject.coverImage} alt={activeProject.altText} />
              </div>
              <p className="mt-5 text-[#c9ccd2]">{activeProject.summary}</p>
              <div className="mt-6 flex justify-between gap-3">
                <button onClick={() => moveProject(-1)} className="modal-nav"><ChevronLeft className="h-5 w-5" aria-hidden="true" /> Previous</button>
                <button onClick={() => moveProject(1)} className="modal-nav">Next <ChevronRight className="h-5 w-5" aria-hidden="true" /></button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeGalleryItem && (
          <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/78 p-4 backdrop-blur-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-labelledby="gallery-modal-title">
            <motion.div className="max-h-[92vh] w-full max-w-4xl overflow-auto rounded-[1.6rem] border border-white/10 bg-[#101318] p-4 shadow-2xl" initial={reduceMotion ? false : { y: 24, scale: 0.98 }} animate={reduceMotion ? undefined : { y: 0, scale: 1 }} exit={reduceMotion ? undefined : { y: 20, scale: 0.98 }}>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h3 id="gallery-modal-title" className="font-heading text-2xl font-bold text-[#f7f3ea]">{activeGalleryItem.title}</h3>
                  <p className="text-sm text-[#f4b942]">{activeGalleryItem.category}</p>
                </div>
                <button ref={modalCloseRef} onClick={() => setActiveGalleryItem(null)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-[#f7f3ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4b942]" aria-label="Close gallery lightbox">
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="aspect-[16/11] min-h-[300px]">
                <PreviewPanel title={activeGalleryItem.title} category={activeGalleryItem.project} theme={activeGalleryItem.theme} image={activeGalleryItem.image} alt={activeGalleryItem.altText} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
