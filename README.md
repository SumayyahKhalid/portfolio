# sumkhalid.me

My personal portfolio, rebuilt from scratch in Next.js. It has a cozy, Ghibli-inspired look with a few small interactive pieces hidden around the pages.

**Live site:** https://sumkhalid.me

## Built with

Next.js (App Router), React, TypeScript, Tailwind CSS, and Motion for animations. Hosted on Vercel, and every push to `main` deploys automatically.

## How I built it

The design started in Framer. I used an AI coding agent to help translate it into code, then went through the generated components myself and fixed the places where they didn't match the original design. The UI is split into reusable components in `app/components`.

## Running it locally

```bash
git clone https://github.com/SumayyahKhalid/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  components/    reusable UI pieces (windows, intro, game, clock)
  home/          main page after the intro
  about-me/
  cs-projects/
  ux-projects/   case study pages
  resume/
public/          images, audio, and resume PDF
```
