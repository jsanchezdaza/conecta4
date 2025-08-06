# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Dev server**: `pnpm dev` (Vite development server)
- **Build**: `pnpm build` (TypeScript compilation + Vite build)
- **Preview**: `pnpm preview` (preview production build)
- **Lint**: `pnpm lint` (ESLint)
- **Typecheck**: `pnpm typecheck` (TypeScript type checking)
- **Test all**: `pnpm test` (Jest test suite)
- **Test watch**: `pnpm test:watch` or `pnpm test:ui`
- **Test single file**: `pnpm test -- tests/<filename>.test.ts`

Package manager: **pnpm** (not npm or yarn) - ALWAYS use pnpm for all package management commands

## Architecture Overview

This is a Connect 4 game built with React, TypeScript, and Tailwind CSS following TDD principles.

### Core Structure
- `src/board.ts`: Game logic core with immutable state management
  - `GameState` type combines board, turn, winner, and draw status
  - `initialState()` and `step()` functions manage state transitions
  - Pure functions for game mechanics (dropPiece, checkWinner, etc.)
- `src/ui/BoardView.tsx`: React component rendering the game board
- `src/main.tsx`: Application entry point

### Key Patterns
- **Immutable state**: All game state changes create new objects
- **Single source of truth**: GameState contains all game information
- **Functional approach**: Pure functions for game logic, React hooks for UI state
- **Type safety**: Strict TypeScript with custom types (Cell, Board, GameState)

### Testing Strategy
- Comprehensive test coverage in `tests/` directory
- Tests for game logic, UI interactions, accessibility, and edge cases
- Jest + React Testing Library setup
- TDD workflow: RED (failing test) → GREEN (implementation) → REFACTOR

## Code Standards

- **Imports**: ESM modules, use `@/*` paths for src imports
- **Components**: Function components, PascalCase naming
- **Styling**: Tailwind v4 with PostCSS, keep className attributes concise
- **Accessibility**: Use role="grid" and role="gridcell", aria-label for screen readers
- **Commits**: English messages, no direct push to main without review
- **Commit guidelines**: NEVER include "Generated with Claude" or similar AI attribution in commit messages
- **Co-authoring**: NEVER add Claude or AI tools as co-authors in commits