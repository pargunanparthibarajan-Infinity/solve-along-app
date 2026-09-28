# Solve Along

Solve Along is an in-class companion app: while a tutor teaches live, a student works
through the same problem alongside them, one guided step at a time, on their own device.

Starting focus: **Mathematics** for **JEE / NEET / CUET / Board (Classes 6–12)** learners.

> **Status: scaffolding only.** This repository does not yet contain any Solve Along
> screens, question models, or reasoning logic. See [`NOTES.md`](./NOTES.md).

## Product constraint: no keyboard input

The student never types a free-text answer. Every interaction is multiple-choice /
option-based: each problem is broken into 2–3 scaffolded reasoning steps, the student
taps an option at each step, and choosing incorrectly surfaces corrective options that
walk them back toward the right reasoning — in the spirit of Brilliant.org's interactive
problem-solving. This is a hard product constraint for any future screen or component
built in this app, not something enforced by the current scaffold's code.

## Framework: React Native (Expo)

Chosen over Flutter for this project:

- **Rich, animated, option-based UI** — `react-native-reanimated` + `react-native-gesture-handler`
  (both preconfigured by Expo's default template) give native-thread-driven animations and
  gestures, which is what multi-step reveal/option interactions need to feel instant.
- **Offline-friendly performance on average Indian devices** — Expo's New Architecture
  (Fabric/JSI) removes the old JS bridge bottleneck, and the RN/Expo ecosystem has mature,
  battle-tested offline storage (`expo-sqlite`, `AsyncStorage`) for a live-class tool that
  can't depend on classroom Wi-Fi.
- **Ecosystem maturity for interactive components** — Reanimated, Moti, Lottie, and
  `react-native-skia` cover everything a Brilliant.org-style step-reveal component library
  will need later, without exotic dependencies.
- **Iteration speed for this project specifically** — the tooling (Node/npm, Expo CLI,
  Jest, ESLint) is directly scriptable and testable in an automated dev environment, so
  changes can be verified (typecheck/lint/test) without a heavier native toolchain
  install step.

## Folder structure

```
.
├── src/
│   ├── app/            # expo-router screens (file-based routing)
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── explore.tsx
│   ├── components/      # shared UI components
│   ├── constants/        # theme tokens
│   ├── hooks/            # shared hooks
│   └── store/            # zustand state stores
├── assets/                # app icons, images, fonts
├── .github/workflows/     # CI (lint + test on PRs)
├── app.json               # Expo app config
├── eslint.config.js        # ESLint (flat config), Expo + Prettier rules
└── package.json
```

- **Navigation**: [`expo-router`](https://docs.expo.dev/router/introduction/) — file-based
  routing, the standard for new Expo projects.
- **State management**: [`zustand`](https://github.com/pmndrs/zustand) — minimal
  boilerplate, wired in at `src/store/` with one example store (`useAppStore`).
- **Linting/formatting**: ESLint (`eslint-config-expo`, flat config) + Prettier.
- **Testing**: Jest via `jest-expo`, with `@testing-library/react-native` for component
  tests.

## Running locally

```bash
npm install
npm start          # starts the Expo dev server
npm run android     # or: npm run ios / npm run web
```

Other useful scripts:

```bash
npm run lint        # ESLint
npm run format       # Prettier --write
npm run typecheck    # tsc --noEmit
npm test             # Jest
```

Requires Node 20+ and, for native builds, the usual Expo/React Native prerequisites
(Android Studio or Xcode) — see the [Expo docs](https://docs.expo.dev/get-started/set-up-your-environment/)
for environment setup. The Expo Go app or a development build lets you run this on a
physical device without a native toolchain.
