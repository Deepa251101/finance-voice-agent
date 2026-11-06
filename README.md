# DM Finance Website

A responsive corporate website for DM Finance, a financial services and NBFC company. The site presents the company’s service categories, contact information, legal starter pages, and an integration point for its existing Retell AI voice assistant.

## Technology stack

- Next.js 15 App Router and React 19
- TypeScript
- Tailwind CSS 4 (with project-specific CSS for the design system)
- ESLint 9
- Official Retell website widget script (no Retell SDK dependency)

## Project structure

```text
public/favicon.svg
src/app/                 App Router pages, metadata, and global styles
src/components/           Shared layout, contact form, and Retell integration
src/data/                 Central company and service information
.env.example              Environment variable template
.env.local                Local Retell public widget configuration (ignored by Git)
```

## Installation

Requirements: Node.js 20.9 or later and npm. The project was initialized with Node.js 22.21.1 and npm 10.9.4.

```bash
npm install
```

## Environment configuration

Copy `.env.example` to `.env.local` and set the public voice widget values:

```text
NEXT_PUBLIC_RETELL_VOICE_PUBLIC_KEY=
NEXT_PUBLIC_RETELL_VOICE_AGENT_ID=
```

The supplied values are in the local `.env.local`. The file is ignored by Git. These are public widget identifiers, not private Retell API credentials. Verify in Retell that the public key is a voice/Web Call key and that its allowed domains include the deployed website. This project cannot verify dashboard key scope or domain configuration. If the variables are empty, the widget is not loaded and a configuration message is shown.

## Retell AI integration

`src/components/ai/RetellAssistant.tsx` loads `https://dashboard.retellai.com/retell-widget-v2.js` once in the browser and configures the documented voice attributes and branding for the official floating launcher. `src/components/ai/RetellCallEmbed.tsx` keeps Retell’s documented embedded voice widget mounted in the shared layout and reveals it on the Contact page. This avoids losing the initialized widget during client-side navigation. The homepage call button links directly to that panel; the visitor starts the call using Retell’s call control and grants microphone access when prompted. No undocumented launcher API is used. Service-specific context is not sent to the agent.

Existing Cal.com booking and confirmation email workflows remain part of the existing agent setup and are not reimplemented here. Test the voice flow, microphone permission, appointment booking, and confirmation email on the deployed domain before launch.

## Local development

```bash
npm run dev
```

Open http://localhost:3000.

## Checks and production build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

The production build uses Next.js’ supported Webpack mode for predictable builds across environments.

## GitHub upload

Initialize a repository if needed, then commit the project files. `.env.local` is ignored; do not force-add it. Add production widget variables through the deployment provider’s environment settings.

```bash
git init
git add .
git commit -m "Build DM Finance corporate website"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

## Deployment

Deploy to a Next.js-compatible host such as Vercel. Configure the two `NEXT_PUBLIC_RETELL_VOICE_*` variables in the host’s production environment, then deploy. Configure the Retell public key’s allowed domains for the deployed host. Company email, phone, and address are explicit placeholders in `src/data/company.ts`; replace them with verified contact details. Replace the example metadata URL, review the legal starter pages with qualified counsel, and configure form delivery before presenting the contact form as an online submission channel.
