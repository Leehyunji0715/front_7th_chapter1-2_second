# Project Overview

This project is a React-based calendar event management web application. Users can create, edit, delete, and search events with features including:

- Monthly and weekly calendar views
- Event overlap detection and validation
- Recurring events (daily, weekly, monthly, yearly)
- Event notifications and reminders
- Event filtering and search functionality

## Tech Stack

- **Language**: TypeScript

### Frontend

- **UI Library**: React, Material-UI (@mui/material) with @emotion/styled
- **State Management**: Custom React hooks pattern
- **Notifications**: notistack for toast messages
- **Animation**: framer-motion

### Backend

- **Runtime**: Node.js with Express
- **API**: RESTful API for event CRUD operations
- **Data Storage**: JSON file-based storage (realEvents.json)

### Testing

- **Test Framework**: Vitest with @testing-library/react
- **Mocking**: MSW (Mock Service Worker) for API mocking

## Project Architecture

The project follows a **custom hooks-based architecture** for separation of concerns:

- **Presentation Layer**: `App.tsx` - UI components and rendering
- **Business Logic Layer**: Custom hooks in `/src/hooks/`
  - `useCalendarView` - Calendar view state management
  - `useEventOperations` - Event CRUD operations
  - `useEventForm` - Form state and validation
  - `useNotifications` - Notification scheduling and management
  - `useSearch` - Event search and filtering
- **Utility Layer**: Pure functions in `/src/utils/`
  - `dateUtils` - Date formatting and manipulation
  - `eventOverlap` - Event conflict detection
  - `eventUtils` - Event data processing
  - `notificationUtils` - Notification time calculation
  - `timeValidation` - Time range validation

## Folder Structure

```
/src
  ├── hooks/          # Custom React hooks for business logic
  ├── utils/          # Pure utility functions
  ├── apis/           # External API calls (e.g., holiday fetching)
  ├── __tests__/      # Unit and integration tests
  │   ├── hooks/      # Hook tests
  │   └── unit/       # Utility function tests
  └── __mocks__/      # MSW handlers and mock data
      └── response/   # Mock JSON responses
/server.js            # Express backend for event CRUD
```

## Key Features Implementation

1. **Event Management**: Full CRUD operations with validation
2. **Calendar Views**: Monthly and weekly views
3. **Overlap Detection**: Prevents scheduling conflicts
4. **Recurring Events**: Support for repeat patterns with intervals
5. **Search & Filter**: Events searchable by title, description, location

## Coding Standards

### General

- Use TypeScript for type safety
- Use semicolons at the end of each statement
- Use single quotes for strings
- Use arrow functions for callbacks
- Prefer `const` over `let`, avoid `var`

### React Specific

- Use functional components with hooks
- Extract business logic into custom hooks
- Keep components focused on presentation
- Use Material-UI components for consistent UI

### Testing

- Write unit tests for utility functions
- Write integration tests for hooks
- Use MSW for API mocking in tests
- Maintain high test coverage for critical paths

### File Naming

- React components: PascalCase (e.g., `App.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useCalendarView.ts`)
- Utilities: camelCase (e.g., `dateUtils.ts`)
- Types: PascalCase for interfaces/types (e.g., `Event`, `EventForm`)

## Type Definitions

Custom types are defined in `/src/types.ts`

## Code Rules

Refer to '.prettierrc' and 'eslint.config.js'
