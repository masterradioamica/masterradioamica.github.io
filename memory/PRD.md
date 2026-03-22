# Master RADIOAMICA - Website PRD

## Original Problem Statement
Creare un sito web per il Master universitario di II livello "RADIOmica/rAdiogenoMIca Cooperativa basata su intelligenza Artificiale" (RADIOAMICA). Erogazione didattica online.

Menu richiesto: Introduzione, Comitato Scientifico, Organizzazione Corsi, Studenti, Progetto RADIOAMICA (link esterno), News.

## User Personas
- **Medici e Ricercatori**: Professionisti interessati a formazione avanzata in AI applicata all'imaging medico
- **Studenti universitari**: Laureati magistrali in cerca di specializzazione in radiomica/radiogenomica
- **Professionisti sanitari**: Radiologi, oncologi e professionisti che vogliono integrare l'AI nella pratica clinica

## Core Requirements
- [x] Landing page informativa
- [x] Navigazione smooth scroll tra sezioni
- [x] Sezione Introduzione con descrizione del Master
- [x] Comitato Scientifico (11 membri con ruoli e affiliazioni)
- [x] Organizzazione Corsi (2 moduli, 8 sotto-moduli con CFU e docenti)
- [x] Studenti (16 partecipanti 1ª edizione)
- [x] News (Workshop 16 gennaio 2026)
- [x] Link esterno Progetto RADIOAMICA
- [x] Design responsive mobile-first
- [x] Menu mobile hamburger

## What's Been Implemented (Jan 2026)
- Complete landing page with 7 sections
- Glassmorphism navbar with smooth scroll navigation
- Hero section with gradient background and CTA buttons
- Committee cards with avatar initials
- Accordion-based course organization
- Scrollable students section
- News section with workshop brochure
- External project link section
- Footer with navigation links
- Responsive design for all screen sizes

## Tech Stack
- React 19 with react-router-dom
- Tailwind CSS with custom theme
- Shadcn/UI components (Accordion, Card, Badge, Button, ScrollArea)
- Lucide React icons
- Google Fonts (Manrope, Inter)

## P0/P1/P2 Features Remaining
### P0 (Critical) - None, MVP complete
### P1 (High)
- Form di contatto/iscrizione
- Sezione FAQ
### P2 (Medium)
- Calendario eventi
- Download materiali/brochure
- Multilingua (Inglese)

## Next Tasks
1. Aggiungere form di contatto se richiesto dall'utente
2. Integrare sezione FAQ sulle iscrizioni
3. Possibile integrazione CMS per gestione news
