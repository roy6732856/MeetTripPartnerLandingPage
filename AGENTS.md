# AGENTS.md — Meet Trip Partner Landing Page

## Project Overview

- **Project Name**: Meet Trip Partner Landing Page
- **Type**: Next.js 14+ Web Application (App Router)
- **Purpose**: Landing page to recruit NZ restaurants/cafes as partners
- **Language**: English

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod validation
- **Data Storage**: Google Sheets (via n8n webhook)
- **Deployment**: Zeabur
- **Language**: TypeScript

---

## Brand Design System

| Token | Value | Usage |
|-------|-------|-------|
| `brand.primary` | `#F4B34A` | CTAs, highlights (warm yellow) |
| `brand.secondary` | `#3A8288` | Accents, links (teal) |
| `brand.background` | `#FDF5E6` | Page background (cream) |
| `brand.dark` | `#1A1A1A` | Body text |

---

## Build Commands

```bash
# Install dependencies
npm install

# Development server (port 3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

**Run a single test**:
```bash
npm run test -- --testNamePattern="component name"
# or with Vitest
npx vitest run --testNamePattern="component name"
```

---

## File Structure

```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Landing page
├── globals.css         # Global styles
└── api/submit/route.ts # POST → n8n webhook → Google Sheets

components/            # Reusable UI components
├── Hero.tsx, About.tsx, Benefits.tsx
├── HowItWorks.tsx, PartnerForm.tsx
├── FAQ.tsx, Footer.tsx

lib/googleSheets.ts   # n8n API utilities
public/                # Static assets
```

---

## Sprint Planning

| Sprint | 週次 | 任務 | 預估天數 | 狀態 |
|--------|------|------|----------|------|
| **Sprint 1** | Week 1 | 專案初始化 + UI 元件庫建立 | 2 天 | ✅ |
| **Sprint 2** | Week 1-2 | 頁面區塊開發 (Hero → Footer) | 2 天 | ✅ |
| **Sprint 3** | Week 2 | 表單功能 + n8n 串接 | 1.5 天 | ✅ |
| **Sprint 4** | Week 2 | 優化 + 部署 + 測試 | 0.5 天 | ✅ |

### Sprint 1: 專案初始化 + UI 元件庫建立 ✅
- [x] Initialize Next.js 14+ with Tailwind CSS
- [x] Configure brand colors in Tailwind config
- [x] Set up fonts (Inter)
- [x] Create base UI components (Button, Input, Textarea, Label)
- [x] Set up ESLint
- [x] Create API route template

### Sprint 2: 頁面區塊開發 ✅
- [x] Hero - Main headline, subtitle, CTA, mockup placeholder
- [x] About - App introduction, key metrics
- [x] Benefits - 4 benefit cards
- [x] HowItWorks - 3-step process
- [x] PartnerForm - logic in Sprint  Section wrapper (form3)
- [x] FAQ - Accordion Q&A
- [x] Footer - Logo, contact, social links

### Sprint 3: 表單功能 + n8n 串接 ✅
- [x] Create PartnerForm with React Hook Form + Zod
- [x] Form fields: Restaurant Name, Contact Person, Phone, Email, Google Maps Link, Discount Details, Notes
- [x] Implement n8n webhook POST
- [x] Success/error states

### Sprint 4: 優化 + 部署 + 測試 ⏳
- [x] SEO meta tags
- [ ] Responsive verification
- [ ] Accessibility audit
- [ ] Deploy to Zeabur
- [ ] E2E form test

---

### General Principles

1. **Functional components** with TypeScript — no class components
2. **Server Components** by default; add `'use client'` only for hooks/events
3. **One component per file** — keep them small and focused

### Imports (order matters)

```typescript
import { useState } from 'react'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { submitForm } from '@/lib/api'
```

### TypeScript & Naming

```typescript
// Props interface - use descriptive names
interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  onCtaClick?: () => void
}

// Union types
type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

// Avoid: data, info, temp
// Use: restaurantData, userInfo, tempForm
```

- **Components**: PascalCase (`Hero.tsx`, `PartnerForm.tsx`)
- **Files**: kebab-case (`google-sheets.ts`)
- **Functions**: camelCase (`submitForm`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRY_COUNT`)
- **Types**: PascalCase (`PartnerFormData`, `ApiResponse`)

### Tailwind CSS

```tsx
// Brand colors
<div className="bg-brand-background text-brand-dark">
  <h1 className="text-brand-primary font-bold">Welcome</h1>
</div>

// Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
```

### Error Handling

```typescript
try {
  const result = await submitToSheets(data)
  return { success: true, data: result }
} catch (error) {
  console.error('Form submission failed:', error)
  return { success: false, error: 'Failed to submit form' }
}
```

### Form (React Hook Form + Zod)

```typescript
const formSchema = z.object({
  restaurantName: z.string().min(1, 'Required'),
  contactPerson: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  // ...
})

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
})
```

---

## Git Conventions

- Branch: `feature/description` or `fix/description`
- **Never commit**: `node_modules`, `.env`, build outputs

---

## Accessibility

- All images need `alt` text
- Form inputs need labels
- Use semantic HTML (`<main>`, `<section>`, `<footer>`)
- Brand `#F4B34A` on white = 2.09:1 contrast — use darker shade for text

---

## Pre-Commit Checks

1. `npm run lint` passes
2. `npm run build` succeeds
3. `npx tsc --noEmit` clean

---

## Available Skills

These skills can be loaded when delegating tasks via `task()`:

### Frontend & UI
- **frontend-dev** — Next.js 15, shadcn/ui, Tailwind CSS development
- **frontend-ui-ux** — Designer-turned-developer for stunning UI/UX
- **frontend-design** — Production-grade frontend interfaces
- **react:components** — Convert designs into modular React components
- **tailwind-design-system** — Scalable design systems with Tailwind CSS v4
- **shadcn-ui** — Integration and customization of shadcn/ui components

### DevOps & Tools
- **git-automation** — Advanced Git operations
- **git-master** — Atomic commits, rebase, history search
- **create-pr** — GitHub pull request creation

### Code Quality
- **code-reviewer** — Security, performance, best practices review
- **test-writer** — Vitest test generation

### Design & Content
- **content-design** — UI copy, button labels, error messages
- **theme-factory** — Styling artifacts with themes
- **design-md** — Semantic design system synthesis
- **figma** — Figma design-to-code

### Automation
- **playwright** — Browser automation, testing, scraping
- **dev-browser** — Persistent page state browser automation

### Research & Analysis
- **apify-market-research** — Market conditions, geographic opportunities
- **librarian** — External documentation, code examples search
- **explore** — Internal codebase pattern search

---

## Task Delegation Pattern

When delegating work, use:

```typescript
task(
  category="[visual-engineering|deep|quick|...]",
  load_skills=["skill-1", "skill-2"],
  prompt="TASK: ...
EXPECTED OUTCOME: ...
MUST DO: ...
MUST NOT DO: ...
CONTEXT: ..."
)
```
