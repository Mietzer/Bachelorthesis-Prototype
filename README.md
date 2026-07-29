# BA Prototype: Accessible Digital Signage

Monorepo (npm workspaces) for the implementation prototype of the bachelor thesis.

## Packages (`app/*`)

- **`app/core`** — shared logic/types for `display` and `app`; contains the static data sources under `src/data/` (timetable, events, notices).
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
  core/       # shared logic + sample data, framework-free
    src/
      data/         # timetable.json, events.json, notices.json
      types.ts      # Timetable, TimetableEntry, CampusEvent, Notice
      timetable.ts  # filtering + German date/time formatting
      campus.ts     # sort order for events and notices
      index.ts      # public surface: typed data + helpers
  display/    # React + Vite
    src/
      components/   # reusable UI building blocks (ui/ = generic base)
      pages/        # content per area
      hooks/        # state (view settings, current time)
      styles/       # colors.css + metrics.css (design tokens)
  app/        # React Native + Expo
    src/
      screens/      # one screen per view (OverviewScreen)
      components/   # App* building blocks (tree nodes, cards, header, search)
      lib/          # core data mapped to display text + screen reader labels
      data/         # German UI text + the overview tree definition
      a11y/         # screen reader helpers (focus on screen entry)
      theme/        # tokens.ts: colors, spacing, font sizes, touch target
```
