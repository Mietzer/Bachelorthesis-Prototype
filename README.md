# BA Prototype: Accessible Digital Signage

Monorepo (npm workspaces) for the implementation prototype of the bachelor thesis.

## Packages (`app/*`)

- **`app/core`** — shared logic/types for `display` and `app`; contains the static data source `src/data/timetable.json`.
- **`app/display`** — React + Vite. Wall display: information source for people with severe visual impairment and for sighted users.
- **`app/app`** — React Native + Expo. Standalone app for blind users.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev:display   # Vite dev server (app/display)
npm run dev:app        # Expo dev server (app/app)
```

## Structure

```
app/
  core/       # shared logic + sample data (timetable.json)
  display/    # React + Vite
    src/
      components/   # reusable UI building blocks (ui/ = generic base)
      pages/        # content per area
      hooks/        # state (view settings, current time)
      styles/       # colors.css + metrics.css (design tokens)
  app/        # React Native + Expo
```
