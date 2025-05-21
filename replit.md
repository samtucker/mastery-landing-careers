# SkillForge AI - Web Application

## Overview
SkillForge AI is a modern web application designed to help users build and master career skills through AI-powered education. The project uses a full-stack architecture with React on the frontend and Express.js on the backend, with Drizzle ORM for database operations.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
The frontend is built with React and follows a component-based architecture. It uses:
- React for the UI component system
- Tailwind CSS for styling
- Shadcn UI for pre-built UI components
- React Router (via Wouter) for navigation
- TanStack Query for data fetching
- Lucide icons for iconography

The frontend is organized with a clean separation of concerns:
- Pages contain full views
- Components are modular and reusable
- UI components are built on Radix UI primitives
- Custom hooks encapsulate shared logic

### Backend
The backend is a simple Express.js server that serves both the API endpoints and the static frontend in production:
- Express.js for the HTTP server and routing
- REST API design for communication with the frontend
- In-memory storage for development (planned migration to PostgreSQL)
- Drizzle ORM for database interactions
- Zod for validation

### Database
The application is set up to use PostgreSQL (as indicated by the Drizzle configuration and the modules in .replit):
- PostgreSQL as the database
- Drizzle ORM for database schema definition and queries
- Currently has a users table defined (with username and password fields)

### Authentication
A simple authentication system is being implemented with:
- Username/password authentication
- Session-based authentication (connect-pg-simple package suggests PostgreSQL session storage)

## Key Components

### Frontend Components
1. **Pages**: Main views like LandingPage and NotFound
2. **UI Components**: A comprehensive set of UI components built with Radix UI primitives and styled with Tailwind
3. **Layout Components**: Navbar, Footer, etc.
4. **Feature Components**: SkillsSection, TestimonialsSection, etc.

### Backend Components
1. **Express Server**: Main HTTP server setup in server/index.ts
2. **API Routes**: REST endpoints defined in server/routes.ts
3. **Storage Layer**: Database interaction abstracted in server/storage.ts
4. **Development Tools**: Vite integration for development in server/vite.ts

### Shared Components
1. **Database Schema**: Defined in shared/schema.ts using Drizzle ORM
2. **Type Definitions**: Shared types between frontend and backend

## Data Flow
1. Client makes requests to the server via fetch API or TanStack Query
2. Express server handles routes and delegates to appropriate handlers
3. Handlers interact with the storage layer
4. Storage layer performs operations with the database (currently in-memory, planned PostgreSQL)
5. Responses are formatted and returned to the client

## External Dependencies
The application relies on several key external libraries:
1. **React ecosystem**: React, React DOM
2. **UI Libraries**: Radix UI components, Tailwind CSS, Shadcn UI
3. **State Management**: TanStack Query
4. **Backend**: Express.js
5. **Database**: Drizzle ORM, PostgreSQL (via @neondatabase/serverless)
6. **Validation**: Zod, Drizzle-zod
7. **Development**: Vite, TypeScript, ESBuild

## Deployment Strategy
The application is configured for deployment on Replit:
1. **Build Process**: `npm run build` command bundles the frontend with Vite and backend with ESBuild
2. **Start Command**: `npm run start` runs the production build
3. **Development Mode**: `npm run dev` runs the application in development mode with hot reloading
4. **Database**: The application expects a PostgreSQL database connection string via `DATABASE_URL` environment variable

## Development Workflow
1. Run `npm run dev` to start the development server
2. Frontend code changes will be hot-reloaded
3. Backend code changes require server restart
4. Database schema changes can be pushed with `npm run db:push`

## Pending Tasks
1. **Database Integration**: Complete the transition from in-memory storage to PostgreSQL
2. **Authentication System**: Implement full user authentication flow
3. **API Completion**: Expand the API endpoints beyond the current skills endpoint
4. **Frontend Routes**: Add more pages and routes as needed
5. **Testing**: Add testing for both frontend and backend components