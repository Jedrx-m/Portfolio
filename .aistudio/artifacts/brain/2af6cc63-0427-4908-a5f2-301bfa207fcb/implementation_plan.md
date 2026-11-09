# Minimalist Futuristic IT Portfolio Website

A high-performance, minimalist futuristic developer portfolio tailored for Full-Stack Software and Cloud Engineering, featuring dark mode with cyberpunk cyan and emerald glows, interactive floating glass hover previews for projects, dedicated PDF resume integration, and an isolated configuration file (`src/portfolio.config.ts`) for zero-friction maintenance.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed during clarification and are locked into the system design:
>
> - **Aesthetic Palette**: Cyberpunk Cyan (`#06b6d4` / `#22d3ee`) and Electric Emerald (`#10b981` / `#34d399`) terminal glow over deep obsidian void (`#030712` / `#090d16`).
> - **Specialization**: Full-Stack Software and Cloud Engineering (distributed architectures, cloud infrastructure, event-driven backends, modern frontend craft).
> - **Project Preview Mechanism**: Interactive floating glass preview card that smoothly follows cursor motion across project rows and tiles with spring physics (`motion/react`), displaying instant high-resolution project visuals and metrics.
> - **Single-File Data Configuration**: All portfolio data, project case studies, tech stacks, experience timeline, and resume URL/PDF assets are isolated in `src/portfolio.config.ts`. Adding new projects or swapping the resume PDF requires editing only this single file.

---

## 1. Overview & Core Concept

- **What It Does**: Provides an ultra-clean, futuristic IT portfolio for an elite full-stack and cloud engineer. Visitors can explore featured case studies with high-tech cursor-tracking glass preview cards, inspect cloud architecture diagrams, filter works by domain, view live interactive terminal credentials, and download/preview the user's latest resume via a high-priority navigation button and dedicated interactive resume modal.
- **Target Audience / Persona**: Tech leads, VP of Engineering recruiters, cloud architects, open-source collaborators, and clients seeking elite engineering execution.
- **Key Value**: Delivers visceral high-tech polish and responsiveness without AI cliches (zero static pill capsules, zero fake status dots, zero code comment headers), backed by an architecture where content updates require zero React/HTML/CSS editing.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Arrival & Hero Immersion**:
   - The user arrives on a deep obsidian canvas with subtle cybernetic background grid lines and an ambient radial cyan/emerald backlight.
   - Clean top navigation strictly following the 3-Zone Top Bar Contract: Brand title (`Jed Mariano`), concise text nav links (`Projects`, `Architecture`, `Experience`, `Contact`), and a high-contrast dedicated `Resume PDF` action button with quick download and view options.
   - Split-screen hero featuring a headline with optical dark-mode tracking, live cloud infrastructure stats, and quick-action terminal prompts.

2. **Interactive Project Showcase with Cursor-Tracking Hover Preview**:
   - Visitors can browse projects in a dual layout: **Interactive Matrix (List view)** and **Architectural Grid (Card view)** with filter tabs (`All`, `Cloud & Distributed`, `Full-Stack Apps`, `Developer Tooling`).
   - In both views, hovering over any project card or title dynamically summons a floating glass preview card tracking the cursor with spring physics.
   - The preview seamlessly crossfades project screenshots, tags, architectural summaries, and direct GitHub / Live Demo links.
   - Clicking opens an in-depth case study modal featuring system architecture, key challenges, metrics, and technology stack.

3. **Resume Integration & Export**:
   - Prominently featured in Zone 3 of the top bar and mirrored in the footer.
   - Clicking opens an interactive **Resume Drawer/Modal** with instant PDF download (`Download PDF`), live print preview, and categorized skills matrix.

4. **Architecture & Engineering Proof Section**:
   - Interactive system architecture spotlights with interactive node highlights (e.g., event-driven microservices, real-time sync, edge caching).

---

### Visual Identity & Theme

- **Aesthetic Direction**: Minimalist Futuristic / Cyberpunk Terminal Glow. High-tech negative space, sleek hairline borders (`border-slate-800`), glassmorphism (`backdrop-blur-md bg-slate-900/60`), and restrained cyan-to-emerald gradient accents.
- **Color Palette (60-30-10 Budget)**:
  - **60% Dominant Canvas**: Deep Void Obsidian (`#030712`, `#080c14`).
  - **30% Structural Surfaces**: Glass surfaces (`rgba(15, 23, 42, 0.7)`), hairline dividers (`rgba(51, 65, 85, 0.4)`), muted secondary typography (`#94a3b8`).
  - **10% Accent Budget**: Cyberpunk Cyan (`#06b6d4`, `#22d3ee`) and Electric Emerald (`#10b981`, `#34d399`) strictly applied to focus states, active tabs, CTA buttons, and interactive card highlights.
- **Typography**:
  - Headings: `Plus Jakarta Sans` / `Outfit` geometric display type with tight tracking (`tracking-tight`) and balanced headlines (`text-wrap: balance`).
  - Body & Subtitles: `Plus Jakarta Sans` / `DM Sans` at 15px with relaxed line height (1.6) and optical dark compensation.
  - Telemetry & Metrics: Monospace tabular numerals (`JetBrains Mono` / `font-mono tabular-nums`).
- **Anti-Slop Discipline**:
  - No static pill capsules: Metadata (dates, technologies, domains) formatted as clean unboxed text separated by subtle typographic dots (`·`).
  - No pseudo-technical comment headers (`// 01 ARCHITECTURE` is banned; clean editorial `01. Distributed Cloud Architecture` is used).
  - No decorative pulsing dots on static text; icons reserved strictly for real actions.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Framework Choice — React 19 + Vite + Tailwind CSS v4 + Motion**
  - *Chosen Approach*: Leverage the pre-configured React 19 + Vite + Tailwind v4 + Motion stack.
  - *Why*: Delivers near-instant HMR, ultra-light bundle footprint, smooth spring-based cursor tracking (`motion/react`), and frictionless deployment without the overhead of heavy SSR frameworks for a client portfolio.
  - *Alternatives Considered*: Next.js App Router (unnecessary server runtime overhead for a single-file-configured static/dynamic portfolio).

- **Decision 2: Single-File Architecture Maintenance (`src/portfolio.config.ts`)**
  - *Chosen Approach*: Fully typed TypeScript configuration object containing profile metadata, social links, resume configuration, projects array, skills taxonomy, and contact info.
  - *Why*: TypeScript ensures autocomplete and compile-time validation when adding projects (preventing broken image links or missing fields), while non-technical edits can be done simply by editing values in `portfolio.config.ts`.
  - *Alternatives Considered*: External JSON file (lacks TypeScript compile-time linting, making typos in image keys harder to detect).

- **Decision 3: Floating Cursor-Tracking Glass Preview**
  - *Chosen Approach*: A portal-based or fixed positioned container powered by mouse move listeners with spring damping (`useSpring`), transitioning opacity and scale when active.
  - *Why*: Creates an engaging, tactile feel reminiscent of modern high-end design agencies and senior engineer portfolios, while gracefully falling back to inline previews on touch/mobile devices.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────┐
│               src/portfolio.config.ts                   │
│   (Single source of truth: Profile, Projects, Resume)   │
└───────────────────────────┬─────────────────────────────┘
                            │ imports
┌───────────────────────────▼─────────────────────────────┐
│                       src/App.tsx                       │
│    (State: activeFilter, hoveredProject, isResumeOpen)  │
└───────┬───────────────────┬───────────────────┬─────────┘
        │                   │                   │
┌───────▼─────────┐ ┌───────▼─────────┐ ┌───────▼─────────┐
│     Navbar      │ │ ProjectShowcase │ │   ResumeModal   │
│ - 3-Zone Header │ │ - Matrix/Grid   │ │ - PDF viewer    │
│ - Resume Action │ │ - Hover Preview │ │ - Download CTA  │
│ - Section Links │ │ - Detail Modal  │ │ - Skills Matrix │
└─────────────────┘ └───────┬─────────┘ └─────────────────┘
                            │
               ┌────────────▼───────────┐
               │  FloatingProjectPreview │
               │ (Spring-tracked cursor) │
               └────────────────────────┘
```

### Data Model & State

- `PortfolioConfig`:
  - `personal`: Name, role, bio, location, availability, social links.
  - `resume`: PDF file path, last updated date, key highlights, downloadable file name.
  - `projects`: Array of projects with `id`, `title`, `tagline`, `category`, `year`, `description`, `architectureOverview`, `metrics`, `technologies`, `previewMedia` (image URL + optional video/GIF poster), `demoUrl`, `githubUrl`, `featured`.
  - `architecturePillars`: Highlights of cloud & systems design principles.
  - `experience`: Work timeline with company, role, dates, achievements.

### Interactive Component & State Mapping

- **Top Navigation (`Navbar.tsx`)**:
  - Desktop: 1-line brand title, 4 clean text links with active section tracking, 1 primary `Resume` button triggering the resume modal or direct download.
  - Mobile: Responsive backdrop-blurred slide-over drawer with identical action hierarchy.
- **Projects Showcase (`ProjectShowcase.tsx`)**:
  - Filter state: Tab buttons (`All`, `Cloud & Distributed`, `Full-Stack`, `DevOps & SRE`).
  - Hover state: Triggers `hoveredProject` ID with mouse coordinate tracking for `FloatingProjectPreview`.
  - Modal state: Click triggers detailed case-study modal with full technical overview and metrics.
- **Floating Hover Preview (`FloatingProjectPreview.tsx`)**:
  - Coordinates smoothed via `motion/react` spring physics.
  - Shows instant visual media swap, architecture stack tags, and quick preview indicator.
  - Automatically hidden on touch devices, where cards show inline previews.
- **Resume Modal (`ResumeModal.tsx`)**:
  - Clean preview pane of the resume document layout with one-click direct PDF download button, print action, and quick copyable email.
