# PathoFlow AI

> Intelligent Pathology Laboratory Workflow & Quality Assurance Platform

PathoFlow AI is a polished frontend prototype for managing a pathology specimen from collection through reporting. It was created as a college project to demonstrate a coherent, modern health-tech workflow rather than a production clinical system.

The application uses realistic fictional and de-identified demo data. Its AI-related features are clearly presented as operational assistance only: they flag workflow or slide-quality concerns for human review and never diagnose disease or replace a pathologist.

## What was built

The project was bootstrapped as a React + TypeScript app using Vite. It has a dark, clinical control-tower visual system with responsive layouts, typed mock data, reusable interface components, and functional in-app navigation.

The main areas are:

- **Laboratory Control Tower** — a visual summary of active cases, cases at risk, turnaround time, SLA compliance, quality score, specimen flow, bottlenecks, and AI-assisted operational insights.
- **Specimen Registry** — searchable and filterable specimen records with patient IDs, specimen types, priority, workflow stage, and operational status.
- **Digital Specimen Twin** — a focused case preview that maps a specimen to its blocks and slides, making their relationship easy to understand.
- **Workflow Command** — live workload by processing stage, review-capacity context, bottleneck visibility, and a mock AI-assisted reassignment recommendation.
- **Slide Tracking** — slide and block relationships, stain types, workflow state, and quality status.
- **Quality Control** — AI-assisted quality checks for blur, staining inconsistency, and artifacts. Every flagged assessment includes a human-verification safeguard.
- **Report Management** — a professional report view with a clearly marked AI draft helper and a functional status progression from Draft to Under Review to Approved.
- **Analytics** — turnaround trend, SLA compliance, workflow mix, and quality pass-rate visualizations.
- **Audit Trail** — a chronological chain-of-custody timeline for the selected specimen.

## Connected demo flow

For a presentation, start at the Control Tower and open an at-risk case such as `PATH-004821`. From there, show its predictive SLA-risk summary, then open the digital twin and slide-tracking views. Continue to Quality Control to show the AI-assisted slide assessment, then visit Reports and approve the final report. The audit trail shows the specimen's recorded workflow events.

Interactions are intentionally functional:

- Clicking a case selects it for the specimen and slide views.
- Specimen search and status filters update the registry.
- Sidebar items navigate between each product area.
- Report-status buttons update the report state; approving a report shows a confirmation toast.
- Notification and AI-draft controls provide feedback in the UI.

## Tech stack

- React
- TypeScript
- Vite
- Custom CSS — no component library or external icon pack is required

## Project structure

```text
src/
├── App.tsx          # Page composition, navigation, and interaction state
├── components.tsx   # Reusable UI primitives: icons, badges, KPI cards, panels
├── data.ts          # Realistic fictional specimen, workflow, slide, and audit data
├── types.ts         # TypeScript models for specimens, slides, reports, and events
├── main.tsx         # React entry point
└── styles.css       # Responsive design system and component styling
```

## Access the application locally

### Prerequisites

Install a current LTS version of [Node.js](https://nodejs.org/). Node.js 20 or newer is recommended.

### Installation

Clone the repository and enter the project folder:

```bash
git clone https://github.com/archanaaravin/PathoAI.git
cd PathoAI
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print a local URL, normally `http://localhost:5173`. Open that address in a browser to use the prototype.

### Build for production

To validate the project and create an optimized production bundle:

```bash
npm run build
```

The generated site will be placed in the `dist/` folder. You can test that production output locally with:

```bash
npm run preview
```

## Verification completed

The prototype has been checked by:

- Running a successful TypeScript and Vite production build with `npm run build`.
- Opening the local application in a browser and checking the Control Tower layout.
- Testing specimen selection and report approval interactions.
- Checking the browser console for errors.

## Important note

This is a demonstration prototype, not a clinical information system. It has no backend, authentication, persistent database, real patient records, diagnostic AI model, or production-grade compliance controls. The frontend is structured so that mock data can later be replaced by REST API calls and a database-backed backend.
