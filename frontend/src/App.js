import "@/App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  GraduationCap,
  Users,
  BookOpen,
  Newspaper,
  Link as LinkIcon,
  Brain,
  Dna,
  Clock,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

// Assets
const LOGO_URL = "https://customer-assets.emergentagent.com/job_3562437c-6e92-4176-9322-4b8de0ccb935/artifacts/kdmx089f_IMG_6048.png";
const BROCHURE_URL = "https://customer-assets.emergentagent.com/job_3562437c-6e92-4176-9322-4b8de0ccb935/artifacts/d7r9s7tl_IMG_6049.jpeg";
const PROJECT_LINK = "https://projects.dimes.unical.it/radioamica/";

// Data
const navItems = [
  { label: "Introduzione", href: "#intro" },
  { label: "Comitato Scientifico", href: "#committee" },
  { label: "Organizzazione Corsi", href: "#courses" },
  { label: "Studenti", href: "#students" },
  { label: "News", href: "#news" },
];

const committeeMembers = [
  { name: "Giancarlo Fortino", role: "Direttore del Master", affiliation: "Prof. Ordinario – IINF-05/A, DIMES - Università della Calabria", isDirector: true },
  { name: "Marcello Maggiolini", role: "Comitato Proponente", affiliation: "Prof. Ordinario – MEDS-02/A, DFSSN - Università della Calabria" },
  { name: "Stefania Catalano", role: "Comitato Proponente", affiliation: "Prof.ssa Ordinario – MEDS-02/B, DFSSN - Università della Calabria" },
  { name: "Antonella Guzzo", role: "Comitato Proponente", affiliation: "Prof.ssa Associato – IINF-05/A, DIMES - Università della Calabria" },
  { name: "Sandra Costanzo", role: "Comitato Proponente", affiliation: "Prof.ssa Ordinario – IINF-02/A, DIMES - Università della Calabria" },
  { name: "Antonello Vidiri", role: "Consiglio Scientifico", affiliation: "Direttore Dipartimento Ricerca e Tecnologie Avanzate, IRCSS Regina Elena, Roma" },
  { name: "Carlo Cosentino", role: "Consiglio Scientifico", affiliation: "Prof. Ordinario – IBIO-01/A, Università Magna Graecia di Catanzaro" },
  { name: "Valentina Corino", role: "Consiglio Scientifico", affiliation: "Prof.ssa Associato – IBIO-01/A, Politecnico di Milano e IRCSS Monzino" },
  { name: "Carlo Morabito", role: "Consiglio Scientifico", affiliation: "Prof. Ordinario – IIET-01/A, Università Mediterranea di Reggio-Calabria" },
  { name: "Francesco Calimeri", role: "Consiglio Scientifico", affiliation: "Prof. Associato – INFO-01/A, DEMACS - Università della Calabria" },
  { name: "Antonio Armentano", role: "Consiglio Scientifico", affiliation: "Dirigente II livello, Grande Ospedale Metropolitano di Reggio Calabria" },
];

const courses = [
  {
    id: "mod1",
    title: "Modulo 1 – Principi fondamentali dell'Intelligenza Artificiale e della Radiomica",
    submodules: [
      {
        id: "1.1",
        title: "Intelligenza Artificiale e Machine Learning",
        cfu: "4 CFU lezioni frontali + 1 CFU FAD",
        responsible: "Prof. Francesco Calimeri (DEMACS-Unical)",
        topics: [
          "Introduzione all'Intelligenza Artificiale e al Machine Learning",
          "Metodi e modelli per l'apprendimento automatico (classificazione, regressione, clustering)",
          "Reti neurali e deep learning",
          "Metodologie di validazione e metriche di performance"
        ]
      },
      {
        id: "1.2",
        title: "Elaborazione dei segnali/dati medici",
        cfu: "3 CFU lezioni frontali + 1,5 CFU FAD",
        responsible: "Proff. Carlo Morabito (UniMedRC) e Valentina Corino (Polimi)",
        topics: [
          "Introduzione all'elaborazione dei segnali biomedici",
          "Metodologie di analisi basate su trasformate uni- e bidimensionali",
          "Metodi probabilistici e statistici di analisi segnali, transformers"
        ]
      },
      {
        id: "1.3",
        title: "Radiomica e Indicatori Radiomici",
        cfu: "4 CFU lezioni frontali + 1 CFU FAD",
        responsible: "Prof.ssa Sandra Costanzo (DIMES-Unical)",
        topics: [
          "Introduzione alla Radiomica",
          "Metodologie di analisi di immagini mediche",
          "Definizione di indicatori radiomici per l'estrazione di features",
          "Tecniche di programmazione per la conversione di immagini mediche"
        ]
      },
      {
        id: "1.4",
        title: "Apprendimento federato multi-istituzione",
        cfu: "3 CFU lezioni frontali + 1,5 CFU FAD",
        responsible: "Prof.ssa Antonella Guzzo (DIMES-Unical)",
        topics: [
          "Apprendimento Federato: Generalità, classificazioni e aspetti sfidanti",
          "Casi di Studio su FL in sanità",
          "Sviluppo e addestramento di modelli federati in ambito medico"
        ]
      }
    ]
  },
  {
    id: "mod2",
    title: "Modulo 2 – Strumenti della Radiomica",
    submodules: [
      {
        id: "2.1",
        title: "Strumenti di Segmentazione ed Estrazione degli indicatori",
        cfu: "4 CFU lezioni frontali + 1 CFU FAD",
        responsible: "Dott. Antonello Vidiri e Dott.ssa Simona Marzi (IRCSS Regina Elena)",
        topics: [
          "Approcci alla segmentazione delle immagini mediche (TC - MRI - PET)",
          "Tecniche di pre-processing delle immagini",
          "Le famiglie di feature radiomiche",
          "Strategie di armonizzazione e creazione di dati sintetici"
        ]
      },
      {
        id: "2.2",
        title: "Creazione ed integrazione di Modelli di radiomica in ambito clinico",
        cfu: "4 CFU lezioni frontali + 1 CFU FAD",
        responsible: "Prof. Carlo Cosentino (UniCZ) e Dott. Antonello Vidiri",
        topics: [
          "Introduzione alla creazione di modelli per uso clinico",
          "Segmentazione di strutture di interesse",
          "Modelli AI per la predizione/classificazione (Explainability AI)",
          "Applicazione di modelli in ambito clinico"
        ]
      },
      {
        id: "2.3",
        title: "Applicazioni in differenti settori oncologici",
        cfu: "4 CFU lezioni frontali + 2 CFU FAD",
        responsible: "Dott. Antonio Armentano e Dott. Antonello Vidiri",
        topics: [
          "Radiomica per il tumore della mammella",
          "Radiomica per il tumore del polmone",
          "Radiomica per il tumore del cervello",
          "Radiomica per altri tumori (fegato, prostata, ecc.)"
        ]
      },
      {
        id: "2.4",
        title: "Radiogenomica ed applicazioni in differenti settori medici",
        cfu: "4 CFU lezioni frontali + 1 CFU FAD",
        responsible: "Proff. Marcello Maggiolini e Stefania Catalano",
        topics: [
          "Struttura e metodologie di analisi del DNA",
          "Next Generation Sequencing (NGS)",
          "Geni driver nella trasformazione neoplastica",
          "Applicazioni della radiogenomica nella medicina di precisione"
        ]
      }
    ]
  }
];

const students = [
  { name: "Nalia Mercedes Aguilera Rojas", degree: "Laurea Magistrale in Scienze della Nutrizione - UNICAL", position: "" },
  { name: "Caterina Alessio", degree: "Dottorato in Oncologia molecolare - Università Magna Græcia", position: "Dirigente Medico Radiologo - AOU Renato Dulbecco, Catanzaro" },
  { name: "Omar Almolla", degree: "M.Sc. in Plant Biotechnology - Università di Torino", position: "Bioinformatician, Centro Cardiologico Monzino, Milano" },
  { name: "Gaia Assunta Bertolino", degree: "PhD student at University of Cambridge", position: "" },
  { name: "Anna Ferrarelli", degree: "Specializzazione in Radiologia - Università di Catanzaro", position: "Dirigente Medico, AO Bianchi-Melacrino-Morelli, Reggio Calabria" },
  { name: "Michele Florio", degree: "Specializzazione in Radiologia - Università di Siena", position: "Direttore UOC Radiologia, A.O. di Cosenza" },
  { name: "Claudio Franzutti", degree: "Specializzazione in Radiodiagnostica - Università di Messina", position: "Dirigente Medico Radiologo, AO Bianchi-Melacrino-Morelli" },
  { name: "Stefania Galassi", degree: "Specializzazione in Radiodiagnostica - Università Sapienza, Roma", position: "Dirigente Medico, Ospedale Annunziata, Cosenza" },
  { name: "Emma Gangemi", degree: "Dottorato in Neuroscienze Sensori-Motorie - Sapienza", position: "Dirigente medico, IFO Roma" },
  { name: "Francesca Laganaro", degree: "Laurea Magistrale in Ingegneria Biomedica - Sapienza", position: "Ricercatore Sanitario, IFO Regina Elena, Roma" },
  { name: "Giulia Natale", degree: "Laurea Magistrale in Ingegneria Informatica (AI/ML) - UNICAL", position: "Analyst Consultant, Capgemini, Napoli" },
  { name: "Paolo Perrotta", degree: "Specializzazione in Radiodiagnostica - Università Magna Graecia", position: "Dirigente Medico, UOC Neuroradiologia, AO Cosenza" },
  { name: "Ennio Pietramala", degree: "Laurea Magistrale in Farmacia - UNICAL", position: "Tirocinante Centro Sanitario UNICAL" },
  { name: "Raffaella Sbano", degree: "Specializzazione in Radiodiagnostica - Università di Messina", position: "Dirigente Medico II livello, AO di Cosenza" },
  { name: "Lara Sceni", degree: "Laurea Magistrale in Fisica - UNICAL", position: "" },
  { name: "Lucio Taranto", degree: "Specializzazione in Radiodiagnostica - Università Magna Graecia", position: "Dirigente medico specialista, AO SS. Annunziata, Cosenza" },
];

// Navbar Component
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" data-testid="navbar-logo">
            <img src={LOGO_URL} alt="RADIOAMICA Logo" className="h-10 w-auto" />
            <span className="hidden sm:block font-heading font-bold text-slate-900 text-lg">RADIOAMICA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="navbar-link text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={PROJECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
              data-testid="nav-project-link"
            >
              Progetto <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
            data-testid="mobile-menu-button"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium"
                data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={PROJECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Progetto RADIOAMICA <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="hero-gradient network-pattern min-h-[80vh] flex items-center relative overflow-hidden" data-testid="hero-section">
    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cyan-500/30 blur-3xl floating" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl floating-delayed" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in-up">
          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-6" data-testid="hero-badge">
            Master di II Livello
          </Badge>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            <span className="text-cyan-400">RADIO</span>mica/r<span className="text-cyan-400">A</span>diogeno<span className="text-cyan-400">MI</span>ca
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-4 font-semibold text-slate-300">
              Cooperativa basata su intelligenza Artificiale
            </span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Formazione avanzata in Intelligenza Artificiale applicata all'imaging medico per medici, ricercatori e professionisti sanitari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 shadow-lg shadow-cyan-500/25"
              onClick={() => document.querySelector('#intro').scrollIntoView({ behavior: 'smooth' })}
              data-testid="hero-cta-scopri"
            >
              Scopri il Master
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white hover:bg-white/10 rounded-full px-8"
              onClick={() => document.querySelector('#courses').scrollIntoView({ behavior: 'smooth' })}
              data-testid="hero-cta-programma"
            >
              Programma Didattico
            </Button>
          </div>
          <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-slate-400 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> Didattica Online
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" /> 60 CFU
            </span>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end animate-fade-in-up animate-delay-200">
          <img 
            src={LOGO_URL} 
            alt="RADIOAMICA Logo" 
            className="w-64 sm:w-80 lg:w-96 drop-shadow-2xl"
            data-testid="hero-logo"
          />
        </div>
      </div>
    </div>
  </section>
);

// Introduzione Section
const IntroSection = () => (
  <section id="intro" className="py-16 lg:py-24 bg-slate-50" data-testid="intro-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-cyan-100 rounded-lg">
            <BookOpen className="w-6 h-6 text-cyan-600" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">
            Introduzione
          </h2>
        </div>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Master di II Livello - 1ª Edizione - Modalità Ibrida (Lezioni Online, Tesi in Presenza)
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          {/* Obiettivo */}
          <div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-cyan-500 rounded-full"></div>
              Obiettivo
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Il Master intende formare esperti capaci di acquisire e integrare conoscenze atte ad eseguire 
                analisi quantitative delle immagini mediche e costruire modelli predittivi che includano indicatori di 
                radiomica, clinico-laboratoristici ed istologici.
              </p>
              <p>
                In particolare, il Master si prefigge di fornire una formazione teorico-pratica di analisi avanzate delle 
                immagini mediante l'Intelligenza Artificiale (IA) a medici, ricercatori e scienziati di varie discipline 
                per renderli autonomi in attività medico-applicative e nello sviluppo di progetti di ricerca multidisciplinari.
              </p>
              <p>
                Considerata la crescente integrazione dell'imaging nei vari ambiti della medicina, il Master, mediante 
                l'approfondimento di tecniche dell'IA a supporto della segmentazione e dell'estrazione di variabili complesse, 
                intende fornire le competenze necessarie per applicare analisi di radiomica e radiogenomica basate sull'IA in 
                diversi ambiti oncologici quali quello polmonare, mammario, cerebrale, ecc.
              </p>
              <p>
                Inoltre, essendo il Master programmato nell'ambito del progetto POS RADIOAMICA finanziato dal Ministero della Salute, 
                gli studenti saranno coinvolti in alcune attività di ricerca e sviluppo nell'ambito del loro training-on-the-job 
                e della realizzazione dell'elaborato finale.
              </p>
            </div>
          </div>

          {/* Requisiti di accesso */}
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-3">Requisiti di Accesso</h3>
            <p className="text-slate-600 text-sm">
              Possono presentare domanda di ammissione coloro che siano in possesso di una delle seguenti lauree magistrali: 
              <span className="font-medium text-slate-800"> Medicina, Informatica, Ingegneria Informatica/Elettronica/Telecomunicazioni, 
              Matematica, Fisica, Statistica, Biologia, Farmacia, CTF.</span>
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Info Cards */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-4">Informazioni Generali</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Durata</span>
                <span className="font-semibold text-slate-900">12 mesi</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Avvio attività</span>
                <span className="font-semibold text-slate-900">Novembre 2025</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Conclusione</span>
                <span className="font-semibold text-slate-900">Ottobre 2026</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Numero allievi</span>
                <span className="font-semibold text-slate-900">Min 12 - Max 40</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Uditori</span>
                <span className="font-semibold text-slate-900">Max 6</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-600">Quota di iscrizione</span>
                <span className="font-bold text-cyan-600 text-lg">€ 3.000,00</span>
              </div>
            </div>
          </div>

          {/* CFU Table */}
          <div className="bg-slate-900 p-6 rounded-2xl text-white">
            <h3 className="font-heading font-bold text-lg mb-4">Crediti Formativi (CFU)</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Lezioni frontali (210 ore)</span>
                <Badge className="bg-cyan-500">30 CFU</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">FAD asincrona (100 ore)</span>
                <Badge className="bg-cyan-500">10 CFU</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Training on the job (300 ore)</span>
                <Badge className="bg-cyan-500">12 CFU</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Elaborato finale (200 ore)</span>
                <Badge className="bg-cyan-500">8 CFU</Badge>
              </div>
              <Separator className="bg-slate-700 my-2" />
              <div className="flex items-center justify-between font-bold">
                <span>Totale (1500 ore)</span>
                <Badge className="bg-indigo-500 text-base px-3 py-1">60 CFU</Badge>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
              <Brain className="w-8 h-8 text-cyan-500" />
              <div>
                <p className="font-semibold text-slate-900">AI & ML</p>
                <p className="text-sm text-slate-500">Deep Learning</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
              <Dna className="w-8 h-8 text-indigo-500" />
              <div>
                <p className="font-semibold text-slate-900">Radiogenomica</p>
                <p className="text-sm text-slate-500">NGS & DNA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attività didattiche note */}
      <div className="mt-12 bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="font-heading font-bold text-lg text-slate-900 mb-3">Modalità Didattica</h3>
        <p className="text-slate-600">
          Le attività d'aula (Moduli 1-2) si svolgeranno <strong>venerdì pomeriggio e sabato mattina</strong> per un totale 
          di massimo 6 ore al giorno. Tutte le lezioni verranno erogate in modalità online mediante la piattaforma 
          <strong> MS Teams</strong>. Per ciascun modulo saranno previste anche ore di attività e-learning asincrono. 
          Le attività del Modulo 3 (Training on the job) saranno svolte presso un ente convenzionato. 
          L'elaborato di tesi sarà supervisionato da un tutor docente del Master.
        </p>
      </div>
    </div>
  </section>
);

// Comitato Scientifico Section
const CommitteeSection = () => (
  <section id="committee" className="py-16 lg:py-24 bg-white" data-testid="committee-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Users className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">
            Comitato Scientifico
          </h2>
        </div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Un team di esperti accademici e professionisti del settore medico-scientifico
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {committeeMembers.map((member, index) => (
          <Card 
            key={index} 
            className={`card-hover ${member.isDirector ? 'border-cyan-500 bg-gradient-to-br from-cyan-50 to-white' : ''}`}
            data-testid={`committee-member-${index}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${member.isDirector ? 'bg-cyan-500' : 'bg-slate-700'}`}>
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant={member.isDirector ? "default" : "secondary"} className={member.isDirector ? "bg-cyan-500" : ""}>
                    {member.role}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">{member.affiliation}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// Organizzazione Corsi Section
const CoursesSection = () => (
  <section id="courses" className="py-16 lg:py-24 bg-slate-50" data-testid="courses-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-cyan-100 rounded-lg">
            <GraduationCap className="w-6 h-6 text-cyan-600" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">
            Organizzazione Corsi
          </h2>
        </div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Programma didattico strutturato in 2 moduli con 8 sotto-moduli tematici
        </p>
      </div>

      <div className="space-y-8">
        {courses.map((module) => (
          <Card key={module.id} className="overflow-hidden" data-testid={`course-module-${module.id}`}>
            <CardHeader className="bg-slate-900 text-white">
              <CardTitle className="text-xl font-heading">{module.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {module.submodules.map((submodule) => (
                  <AccordionItem key={submodule.id} value={submodule.id} className="border-b last:border-0">
                    <AccordionTrigger className="px-6 py-4 hover:bg-slate-50" data-testid={`accordion-trigger-${submodule.id}`}>
                      <div className="flex items-center gap-4 text-left">
                        <Badge variant="outline" className="shrink-0">{submodule.id}</Badge>
                        <span className="font-medium text-slate-900">{submodule.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="flex items-center gap-2 text-cyan-600">
                            <Award className="w-4 h-4" />
                            {submodule.cfu}
                          </span>
                          <span className="flex items-center gap-2 text-slate-600">
                            <Users className="w-4 h-4" />
                            {submodule.responsible}
                          </span>
                        </div>
                        <Separator />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Argomenti:</h4>
                          <ul className="space-y-2">
                            {submodule.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                <ChevronDown className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5 rotate-[-90deg]" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// Studenti Section
const StudentsSection = () => (
  <section id="students" className="py-16 lg:py-24 bg-white" data-testid="students-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <GraduationCap className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">
            Studenti
          </h2>
        </div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          I partecipanti alla 1ª edizione del Master a.a. 2025/26
        </p>
      </div>

      <ScrollArea className="h-[600px] rounded-xl border bg-slate-50 p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student, index) => (
            <Card key={index} className="student-card bg-white" data-testid={`student-card-${index}`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                    {student.name.split(' ').slice(-1)[0][0]}{student.name.split(' ')[0][0]}
                  </div>
                  <CardTitle className="text-base">{student.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-2">{student.degree}</p>
                {student.position && (
                  <p className="text-xs text-cyan-600 font-medium">{student.position}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  </section>
);

// News Section
const NewsSection = () => (
  <section id="news" className="py-16 lg:py-24 bg-slate-50" data-testid="news-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-cyan-100 rounded-lg">
            <Newspaper className="w-6 h-6 text-cyan-600" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">
            News
          </h2>
        </div>
      </div>

      <Card className="overflow-hidden max-w-4xl mx-auto shadow-xl" data-testid="news-workshop-card">
        <div className="grid md:grid-cols-2">
          <div className="relative overflow-hidden">
            <img 
              src={BROCHURE_URL} 
              alt="Workshop di apertura" 
              className="w-full h-full object-cover news-image"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <Badge className="w-fit mb-4 bg-cyan-500">Workshop di Apertura</Badge>
            <CardTitle className="text-2xl mb-4 font-heading">
              1ª Edizione Master RADIOAMICA
            </CardTitle>
            <CardDescription className="text-base mb-6">
              Workshop di apertura della 1° edizione del Master di II livello Radioamica a.a. 25/26
            </CardDescription>
            <div className="space-y-3 text-slate-600">
              <p className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-cyan-500" />
                <span>16 Gennaio 2026, ore 15:00</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>Centro Congressi "Beniamino Andreatta", Aula Stampa, Università della Calabria</span>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </section>
);

// Progetto RADIOAMICA Section
const ProjectSection = () => (
  <section id="project" className="py-16 lg:py-24 hero-gradient" data-testid="project-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            <LinkIcon className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
            Progetto RADIOAMICA
          </h2>
        </div>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          Scopri il progetto di ricerca che ha dato origine al Master
        </p>
        <div className="flex flex-col items-center gap-6">
          <img 
            src={LOGO_URL} 
            alt="RADIOAMICA Project Logo" 
            className="w-48 h-48 object-contain"
          />
          <a
            href={PROJECT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="project-external-link"
          >
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 shadow-lg shadow-cyan-500/25"
            >
              Visita il Sito del Progetto <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="footer-gradient py-12 border-t" data-testid="footer">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="RADIOAMICA Logo" className="h-10 w-auto" />
          <div>
            <p className="font-heading font-bold text-slate-900">Master RADIOAMICA</p>
            <p className="text-sm text-slate-500">Università della Calabria</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#intro" className="hover:text-cyan-600">Introduzione</a>
          <a href="#committee" className="hover:text-cyan-600">Comitato</a>
          <a href="#courses" className="hover:text-cyan-600">Corsi</a>
          <a href="#news" className="hover:text-cyan-600">News</a>
        </div>
      </div>
      <Separator className="my-8" />
      <p className="text-center text-sm text-slate-500">
        © 2026 Master RADIOAMICA - Università della Calabria. Tutti i diritti riservati.
      </p>
    </div>
  </footer>
);

// Main Landing Page
const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <CommitteeSection />
        <CoursesSection />
        <StudentsSection />
        <NewsSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
