# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**130323 Müzesi** — a personal, interactive 2D side-scrolling museum experience built in vanilla HTML/CSS/JavaScript (no build system, no dependencies). The player enters via a ticket code, walks through a gallery corridor, and views photo/object exhibits. The UI and code comments are in Turkish.

To run: open `index.html` directly in a browser, or serve with any static file server (e.g., `npx serve .`) for correct asset loading. There are no build, lint, or test commands.

## Key Files

- [script.js](script.js) — core game engine (~1,760 lines): game loop, player/camera, exhibit placement, interaction, audio, responsive scaling, all UI panels
- [style.css](style.css) — gallery visual styling; uses CSS custom properties (`--scene-scale`, `--world-width`, `--spotlight-*`, `--gallery-bg-*`)
- [data/memories.js](data/memories.js) — content data file; exports the `memories` array that drives all exhibit placement
- [index.html](index.html) — entry point; loads `memories.js` then `script.js`

## Architecture

### Data → Engine flow

`data/memories.js` exports a flat array of memory objects. On `DOMContentLoaded`, `script.js` reads this array and calls `placeMems()` which auto-lays out exhibits along the corridor, using the memory's `type`, `frameType`, `orientation`, and optional `x` override.

Memory object shape:
```js
{
  id, type,           // "photo" | "object"
  image,              // path relative to root
  orientation,        // "portrait" | "landscape"
  frameType,          // "portrait" | "landscape" | "square" | "wide"
  wallLabelTitle, wallLabelSubtitle,
  modalTitle, modalDate, modalDescription,
  order,              // display order
  x,                  // optional absolute world-x override (px)
}
```

### Game loop

`requestAnimationFrame` loop in `update()`:
1. Delta-time calculation
2. Player position update (A/D keys or touch)
3. Sprite animation (idle/walk frames)
4. Camera dead-zone following
5. CSS transform applied to `#world`
6. Interaction proximity detection & hint display

### Exhibit system

Exhibits are DOM elements created dynamically by `placeMems()` and placed at calculated world-x positions. Types: photo frames, display cases (objects), shelf clusters, tape players. Interaction radius is checked each frame against `PLAYER_CENTER_X`.

Key layout constants (top of `script.js`):
```
EXHIBIT_START_X         = 2600   // gallery start (px)
PHOTO_TO_PHOTO_SPACING  = 260
PHOTO_TO_OBJECT_SPACING = 320
INTERACTION_DISTANCE    = 300
ENDING_TRIGGER_PHOTO_ID = 67     // shows ending panel after this photo
REQUIRED_TICKET_CODE    = "1096gün"
```

### Responsive scaling

Five device profiles are detected at startup and on resize; each sets `--scene-scale` on `:root`:

| Profile          | Scale |
|------------------|-------|
| Phone portrait   | 0.8   |
| Phone landscape  | 0.72  |
| Tablet portrait  | 0.9   |
| Tablet landscape | 0.84  |
| Desktop          | 1.0   |

All sizes in CSS use `calc(Xpx * var(--scene-scale))`.

### Audio

Two tracks: `prelude_song.mp3` (plays at start/entrance interaction) and `memory_song.mp3` (main gallery music). Both are togglable. See [assets/audio/README.md](assets/audio/README.md) for file requirements.

### Access gate

Before entering, users see a floating-memories animation and must enter ticket code `1096gün`. Desktop shows 24 floating memories; mobile shows 12.

## Asset conventions

- Character sprites: `assets/character/female_idle.png`, `female_walk.png`, `male_idle.png`, `male_walk.png`
- Photo frames: `assets/objects/frame_*.png` (named by frameType)
- Display case assets: see [assets/objects/display-case/README.md](assets/objects/display-case/README.md)
- Tape player assets: see [assets/objects/tape/README.md](assets/objects/tape/README.md)
- Photos go in `assets/photos/portrait/` or `assets/photos/landscape/`
