# DSSA starter

A small Next.js and Tailwind site for the [DSSA Builder Path](https://bluehen-dssa.org/learn). The path tells you what to do with it, one stage at a time.

## Run it

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What is here

| File | What it does |
| --- | --- |
| `src/app/page.tsx` | The home page |
| `src/app/layout.tsx` | The frame around every page, with the footer |
| `src/app/globals.css` | Loads Tailwind |
| `tailwind.config.js` | Adds the DSSA colors `blue-primary` and `gold` |
| `public/` | Images go here. `public/me.jpg` shows at `/me.jpg` |
| `.env.example` | The names of the keys Stage 5 uses. Copy it to `.env.local` |
| `.cursor/rules/tutor.mdc` | Tells the Cursor agent to explain before it changes code |
| `.github/copilot-instructions.md` | The same guidance for GitHub Copilot in VS Code |

`.env.local` holds your keys. `.gitignore` keeps it off GitHub. Keep it that way.

## Stuck

Each build card on the path has a link to report a problem with that step.
