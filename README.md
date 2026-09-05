# Veeraputhiran S — Personal Portfolio

Production-ready personal site for **Veeraputhiran S**, Senior Backend & AI Engineer. The site is a static single-page portfolio intended for GitHub Pages, LinkedIn, Wellfound, Remotive, and job applications.

## Tech stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Lucide React icons
- GitHub Actions → GitHub Pages

There is no backend. The production build is a static `dist/` folder.

## Local setup

Prerequisites: Node.js 22+ and npm.

```bash
cd veeraputhiran-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

To simulate a GitHub Pages project URL locally:

```bash
GITHUB_PAGES_BASE=/veeraputhiran-portfolio/ npm run build
npx vite preview --base /veeraputhiran-portfolio/
```

## GitHub Pages deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

The Vite `base` path is derived from `GITHUB_REPOSITORY` during CI:

- Project site: `https://<username>.github.io/veeraputhiran-portfolio/`
- User site (`<username>.github.io` repository): `/`

### First-time publish

```bash
cd veeraputhiran-portfolio
git init
git add .
git commit -m "Add senior engineering portfolio site."
git branch -M main
git remote add origin git@github.com:<USERNAME>/veeraputhiran-portfolio.git
git push -u origin main
```

Or with GitHub CLI:

```bash
gh repo create veeraputhiran-portfolio --public --source=. --remote=origin --push
```

Then in the GitHub repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Wait for the **Deploy to GitHub Pages** workflow on `main` to finish.
4. Open the Pages URL printed by the workflow.

If the first deploy fails because Pages is not enabled yet, complete step 2 and re-run the workflow.

## How to update portfolio content

Content lives in typed data files. Edit these instead of hunting through components:

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, role, email, headline, social URLs, hero badges |
| `src/data/experience.ts` | Role timeline, bullets, technology tags |
| `src/data/projects.ts` | Featured projects, architecture steps, optional links |
| `src/data/skills.ts` | Skill groups |
| `src/data/architecture.ts` | System-building workflow and principle cards |

Project links are optional. Leave `live`, `repo`, or `caseStudy` as empty strings until a public URL exists. Buttons render only when a URL is present.

## How to update the resume

1. Export the resume as PDF.
2. Replace `public/Veeraputhiran_S_Resume.pdf`.
3. Keep the filename unless you also change `resumeFileName` in `src/data/profile.ts`.

Download buttons use a GitHub Pages-safe path:

```ts
`${import.meta.env.BASE_URL}Veeraputhiran_S_Resume.pdf`
```

## How to update GitHub and LinkedIn links

In `src/data/profile.ts`:

```ts
linkedinUrl: 'https://www.linkedin.com/in/veeraputhiran-s-3218ba148/',
githubUrl: 'https://github.com/<your-handle>',
```

Until those placeholders are replaced:

- LinkedIn and GitHub buttons are hidden from visitors.
- A console warning appears in local development only.

Do not leave `PASTE_...` values visible in the UI; the site already suppresses them.

## SEO notes

`index.html` includes title, description, Open Graph, and Twitter tags.

During GitHub Actions builds, canonical URL, `robots.txt`, and `sitemap.xml` are generated from the repository name. To override:

```bash
SITE_URL=https://your.domain npm run build
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Typecheck and production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run oxlint |
