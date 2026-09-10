# sumkhalid.me

My personal portfolio, rebuilt from scratch in Next.js after I first made it in Framer. It has a cozy, Ghibli-inspired look with a few small interactive pieces hidden around the pages.

**Live site:** https://sumkhalid.me

## What's on the site

- An intro screen with a twinkling starfield that explodes into the home page when you click in
- A desktop-style layout built from window components, plus a live clock and a Ghibli TV you can flip through
- A No-Face guessing game (with sound effects when you win)
- Pages for my CS projects, UX case studies (Echo, GreenBuddies, The Failure Museum), an about page, and my resume

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
