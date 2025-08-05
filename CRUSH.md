# CRUSH.md

Build/lint/test
- Dev: pnpm dev
- Build: pnpm build (tsc -b && vite build)
- Preview: pnpm preview
- Lint: pnpm lint
- Typecheck: pnpm typecheck
- Test all: pnpm test
- Test single: pnpm test -- tests/<file>.test.tsx

Guidelines
- Package manager: pnpm
- Commits: English-only messages; include concise Summary in body when needed. No push to main without pair OK; send change summary first.
- TDD: write failing test (RED) → implement (GREEN) → refactor
- Imports: ESM; paths via @/* to src; prefer named exports
- Formatting/Lint: ESLint flat config; 2 spaces; run lint before push
- Types: TS strict; avoid any; type public APIs
- Naming: PascalCase components; camelCase vars/functions; SCREAMING_SNAKE_CASE constants
- React: function components; follow react-hooks rules; export components to satisfy react-refresh
- Styling: Tailwind v4; PostCSS plugin @tailwindcss/postcss; keep className small
- A11y: role=grid, role=gridcell; label cells via aria-label

CI
- GitHub Actions runs lint, typecheck, tests on push/PR to main
