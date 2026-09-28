# Notes for contributors (including future Claude Code sessions)

**This repository currently contains scaffolding only.**

What exists:

- A standard Expo/React Native (TypeScript) app shell, generated via `create-expo-app`
  and lightly configured (renamed, ESLint/Prettier, Jest + Testing Library, Zustand,
  a CI workflow).
- Framework default screens (`src/app/index.tsx`, `src/app/explore.tsx`) and components —
  these are `create-expo-app`'s stock "welcome" boilerplate, not Solve Along UI.
- One example Zustand store (`src/store/useAppStore.ts`) demonstrating the state
  management pattern, holding no real app state.

What does **not** exist yet, and should not be assumed to exist:

- Any Solve Along screens or navigation flows.
- Any question/problem data model.
- Any scaffolded-reasoning-step or option/MCQ UI components.
- Any hint, scoring, or corrective-path logic.
- Any subject content (Mathematics or otherwise).

If you are picking up this repository to build a feature, start from a design/plan for
that specific feature — do not assume prior art in this codebase beyond what's listed
above. The one non-negotiable product constraint to carry into that design: **the
student never answers via free-text/keyboard input** — every interaction must be
option-based (see `README.md`).
