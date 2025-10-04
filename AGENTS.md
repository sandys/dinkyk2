# Repository Guidelines

## Project Structure & Module Organization
`SPECS.md` remains the curriculum charter—update sparingly and log deltas in `docs/changelog.md`. Store lesson collateral under `curriculum/phase_##/lesson_##/` and keep spaced-repetition cards in `data/srs/`. The React Native client lives in `app/mobile/` with TypeScript in `src/` and shared hooks in `src/core/`. Media belongs in `assets/audio/` and `assets/art/`, while decodable prompts and approved manuscripts sit in `content/decodables/`, mirroring the Part IX XML schema for traceability.

## Build, Test, and Development Commands
Install dependencies with `yarn install`, then run `yarn lint` (ESLint + type checks) and `yarn prettier --check "**/*.{md,ts,tsx}"` before every PR. Execute `yarn test` for Jest suites and add `yarn test:e2e` once the Detox harness lands. Use `yarn start` for Metro, `yarn ios --device "iPad"` for local previews, and `jq . data/srs/*.json` (or `just validate:srs`) to confirm card integrity. For AI stories run `python scripts/generate_decodable.py --lesson 15 --dry-run` and commit only human-reviewed files.

## Coding Style & Naming Conventions
Docs stay in clear, active voice with bold Title Case headings, numbered footnotes, and two-space bibliography breaks. React code is TypeScript-first, 2-space indentation, `PascalCase` components, `camelCase` hooks, and `SCREAMING_SNAKE_CASE` env keys. Co-locate styles in `*.styles.ts` and name assets `lesson##_skill-token.ext` (e.g., `lesson11_short-i_audio.m4a`) so curriculum JSON can reference them reliably.

## Testing & Validation
When updating lessons, ensure new graphemes or sight words are already unlocked in `SPECS.md`. Align interactive specs with the "Core Interactive Exercise Types" lists and confirm sound-wall unlock rules still match Part VII. Validate card schemas against Appendix C samples and replay SRS scheduling logic in local scripts before merging. Snapshot new screens and run a quick VoiceOver pass to uphold multisensory goals.

## Commit & Pull Request Guidelines
Use Conventional Commits (`docs:`, `content:`, `app:`, `chore:`) with subjects ≤72 characters. Reference lesson numbers, phonics targets, and spec sections inside bodies. PRs must note pedagogy impact, attach simulator media for UI work, and list manual validation (scope review, SRS audit, AI prompt sign-off). Request curriculum approval whenever modifying bibliography entries or scope tables.

## Research & AI Content Governance
Keep citations alphabetized with access dates and log rationale for replacements in PR threads. Vet AI-generated decodables against the Part IX XML contract before promoting them to `content/decodables/approved/`. Host licensed audio or articulation footage outside the repo and link to secured storage with usage notes instead of committing raw files.
