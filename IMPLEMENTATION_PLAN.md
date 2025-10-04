# Implementation Plan

## Phase 0 – Project Foundations (Weeks 0-2)
- Confirm target hardware (latest iPadOS tablets) and choose a React Native stack (Expo-managed with TypeScript + React Navigation + Reanimated where needed).
- Scaffold repository layout (`app/mobile`, `curriculum`, `data`, `assets`, `content`, `scripts`) and wire shared tooling: Yarn workspaces, TypeScript config, ESLint/Prettier, Husky hooks, Justfile commands, and GitHub Actions smoke checks.
- Produce onboarding docs covering Node/Watchman setup, iOS simulator requirements, lint/test workflows, and migrate historical curriculum notes into `docs/changelog.md`.

## Phase 1 – Curriculum Data Pipeline (Weeks 2-5)
- Break `SPECS.md` into modular lesson briefs under `curriculum/phase_##/lesson_##.md`, maintaining cross-links to scope tables.
- Expand Appendix C into complete JSON card inventories per lesson; ship schema definitions and validation scripts (`just validate:srs`).
- Hold weekly syncs with literacy experts to ratify each lesson packet before corresponding app work begins.

## Phase 2 – Interactive Exercise Prototypes (Weeks 4-8)
- Build React Native prototypes for high-priority exercise templates (Rhyme Match, Word Tapper, Word Builder) using placeholder art/audio.
- Instrument telemetry (analytics wrapper + React Query cache) to capture engagement, latency, and error states.
- Conduct formative usability sessions with target learners; document feedback on touch targets, audio cues, and pacing.

## Phase 3 – Application Architecture & Sound Wall (Weeks 6-12)
- Implement core app shell: authentication-light onboarding, lesson map, daily review launcher, and offline-aware data hydrators.
- Develop the Sound Wall module backed by phoneme metadata, progressive unlock animations (Reanimated/Lottie), and articulation media playback.
- Establish an asset pipeline (audio normalization, mouth-position thumbnails) with review checklists and storage conventions.

## Phase 4 – Spaced Repetition & Progression Engine (Weeks 10-14)
- Port FSRS-style scheduling into a TypeScript service layer using MMKV/SQLite for persistence and expose hooks for the UI.
- Wire lesson gating and mastery checks, including educator override hooks for future dashboard integrations.
- Build analytics export jobs (JSONL or CSV) to feed curriculum evaluation dashboards.

## Phase 5 – Decodable Book Generation Workflow (Weeks 12-16)
- Deliver `scripts/generate_decodable.py` that consumes lesson metadata, applies the XML prompt template, and writes drafts to `content/decodables/drafts/`.
- Create a human-in-the-loop review checklist (decodability audit, comprehension fit, illustration prompts) before promoting files to `approved/`.
- Integrate lightweight CMS sync (Notion API or Airtable) so stakeholders can browse approved manuscripts.

## Phase 6 – Quality Assurance & Launch Prep (Weeks 14-18)
- Expand automated coverage: Jest unit tests, React Native Testing Library snapshots, Detox journeys covering SRS flows.
- Run accessibility audits (VoiceOver, Dynamic Type, contrast) and profile performance on baseline iPads.
- Pilot with classroom cohorts, log findings, triage critical fixes, and cut a release candidate with rollout plan.

## Ongoing – Governance & Continuous Improvement
- Host bi-weekly curriculum councils to evaluate lesson efficacy, update bibliography entries, and plan scope adjustments.
- Publish monthly product-health reports combining telemetry, educator feedback, and student outcomes to steer roadmap priorities (e.g., advanced morphology, bilingual tracks).
- Maintain a six-week release cadence with hotfix capacity reserved for high-severity pedagogical or accessibility defects.
