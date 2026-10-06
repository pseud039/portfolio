# pseud0. — portfolio

Personal portfolio of Saumya Sharma ([@pseud039](https://github.com/pseud039)), built with Next.js 16, React 19 and Tailwind CSS 4.

## Pages

- `/` — intro, projects, tech stack, experience, education, GitHub activity, contact
- `/music`, `/anime`, `/pinterest` — off-the-clock stuff (also combined as tabs on `/misc`)

## Editing content

All copy lives in `lib/data.js`: projects, experience, tech stack, Spotify tracks, anime, Pinterest pins and the header "more" menu. Pages just map over these arrays.

## Development

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm lint
pnpm build
```
