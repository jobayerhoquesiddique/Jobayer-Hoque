# Overview

Nexus Creative Studio is a modern, full-stack multi-brand digital agency platform showcasing multiple interconnected brands under one umbrella. The project serves as both a portfolio site and business platform for various specialized technology verticals including Web3/blockchain development, design & MVP development, and strategic consulting services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side application is built using **React with TypeScript** and follows a component-based architecture. The application uses **Vite** as the build tool and development server for fast development and hot module replacement.

**Component Structure:**
- Modular component architecture with reusable UI components in `/components/ui/`
- Feature-specific components for different sections (Hero, Services, Brands, Portfolio, Contact)
- Custom hooks for scroll animations and responsive behavior using Intersection Observer API
- Shadcn/ui component library integration for consistent design system

**Styling Solution:**
- **Tailwind CSS** for utility-first styling approach with custom CSS variables
- Multi-theme support (light, dark, gradient, minimal, cyberpunk, neon) managed through React Context
- CSS custom properties for dynamic theming and color schemes
- Responsive design with mobile-first approach

**State Management:**
- React Context API for theme management and global state
- TanStack React Query for server state management and API interactions
- Local state management using React hooks (useState, useEffect)

**Routing:**
- Wouter for lightweight client-side routing
- Multi-page structure with dedicated pages for each brand (Founder, CryptoNexus, ByteStudio, NexusStudio)

## Backend Architecture

The server-side is built with **Express.js** following a RESTful API pattern with middleware-based architecture.

**API Design:**
- Express server with JSON parsing and URL encoding middleware
- Custom request logging middleware for API monitoring and debugging
- Centralized error handling middleware for consistent error responses
- Route registration system with `/api` prefix for all endpoints

**Development Integration:**
- Vite middleware integration for seamless development experience
- Custom logging system with formatted timestamps for request tracking
- Hot module replacement support during development

**Storage Layer:**
- Abstracted storage interface (`IStorage`) for flexible data persistence
- In-memory storage implementation (`MemStorage`) for development
- Prepared for database integration with user management methods

## Data Storage Solutions

The application is configured to use **PostgreSQL** as the primary database with **Drizzle ORM** for type-safe database operations.

**Database Configuration:**
- Drizzle ORM with PostgreSQL dialect for schema management
- Migration system configured in `/migrations` directory
- Neon Database serverless integration for cloud-hosted PostgreSQL
- Zod schema validation integrated with Drizzle for runtime type checking

**Schema Design:**
- User management with UUID primary keys and unique constraints
- Schema defined in shared directory for client-server type consistency
- Database connection pooling through `connect-pg-simple` for session management

## External Dependencies

**UI and Design:**
- Radix UI primitives for accessible component foundations
- Recharts for data visualization and analytics charts
- Embla Carousel for interactive content carousels
- Lucide React for consistent icon system

**Development Tools:**
- TypeScript for static type checking across the entire codebase
- ESBuild for production bundling and server compilation
- PostCSS with Autoprefixer for CSS processing

**Database and Backend:**
- Neon Database serverless PostgreSQL hosting
- Drizzle Kit for database schema migrations and management
- Express.js with middleware ecosystem for server functionality

**Third-party Services:**
- Google Fonts integration for custom typography (Inter, DM Sans, Architects Daughter, Fira Code, Geist Mono)
- WhatsApp Business API integration for customer communication
- Replit development environment integration with custom banners and cartographer

The architecture supports multiple deployment environments with environment-specific configurations and includes comprehensive error handling, logging, and development tooling for a professional development workflow.