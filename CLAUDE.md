# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Philosophie de code

- Simple et optimisé
- ESM natif uniquement (pas de CommonJS)
- Éviter les dépendances
- Éviter la rétrocompatibilité à outrance

## Project Overview

FoxyColor is an NPM package for styling CLI output with ANSI escape codes.

**Spec suivie :** ECMA-48 5th Edition (1991), Section 8.3.117 — choix volontaire pour garantir la compatibilité maximale sur tous les terminaux.

**Note :** Les couleurs `bright` (90-97, 100-107) ne font pas partie de ECMA-48. C'est une extension AIXterm (IBM) devenue standard de facto.

## Commands

- **Install dependencies:** `npm install`

No test suite is currently configured.

## Architecture

Single-file library (`foxyColor.js`) that exports a `FoxyColor` class:

- **`FoxyColor.ANSI`** - Static object containing all ANSI escape codes organized by:
  - `reset` - Reset code
  - `STYLE` - Text styles (bold, italic, underline, blink, reverse, strike, etc.)
  - `foreground.classic` / `foreground.bright` - Foreground colors
  - `background.classic` / `background.bright` - Background colors

- **`FoxyColor.style(text, styleOptions)`** - Applies ANSI styling to text and appends reset code

- **`String.prototype.foxyStyle(styleOptions)`** - Prototype extension for chaining: `"text".foxyStyle({...})`

### Style Options Object

```javascript
{
    foregroundColor: FoxyColor.ANSI.foreground.classic.red,
    backgroundColor: FoxyColor.ANSI.background.classic.blue,
    style: FoxyColor.ANSI.STYLE.bold
}
```