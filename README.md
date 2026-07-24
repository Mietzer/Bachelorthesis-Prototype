# BA-Prototyp: Barrierefreie digitale Beschilderung

Monorepo (npm workspaces) fuer den Umsetzungsprototyp der Bachelorarbeit.

## Packages (`app/*`)

- **`app/core`** — geteilte Logik/Typen fuer `display` und `app` (aktuell leer, Platzhalter).
- **`app/display`** — React + Vite. Wand-Display: Informationsquelle für Menschen mit starker Sehbehinderung und normaler Sehfähigkeit.
- **`app/app`** — React Native + Expo. Eigenstaendige App fuer blinde Nutzer.

## Setup

```bash
npm install
```

## Entwicklung

```bash
npm run dev:display   # Vite Dev-Server (app/display)
npm run dev:app        # Expo Dev-Server (app/app)
```

## Struktur

```
app/
  core/       # geteilte Logik (leer)
  display/    # React + Vite
  app/        # React Native + Expo
```
