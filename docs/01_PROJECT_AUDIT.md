# 01_PROJECT_AUDIT.md

# STEP 01 — Project Audit & Stabilization

---

# Objective

Perform a complete audit of the existing Cosmic Talent Bridge (CTB) Next.js project.

The goal is to improve the project's stability, maintainability, responsiveness, accessibility, performance, and code quality **without changing the current design, architecture, routing, folder structure, JSON architecture, branding, or completed homepage sections**.

This is an audit and stabilization step only.

Do **not** redesign the website.

Do **not** add new features.

---

# Read First

Read and follow:

docs/00_MASTER_RULES.md

Follow every instruction in that document before making any changes.

---

# Scope

Review the entire project including:

* Components
* Pages
* Styles
* Data
* Public assets
* Utilities
* Configuration files

Look for improvements only where they increase quality without changing behaviour.

---

# Do NOT Change

Do not change:

* Project architecture
* Folder structure
* Component names
* Routing
* JSON structure
* Existing branding
* CTB logo
* Hero layout
* Hiring & Projection section
* Existing design language

unless required to fix a real bug.

---

# Audit Checklist

Review and improve only where necessary.

## Code Quality

* Remove unused imports.
* Remove unused variables.
* Remove dead code.
* Remove duplicate logic.
* Improve readability.
* Keep components reusable.

---

## Build Quality

Ensure:

* npm run dev works correctly.
* Production build succeeds.
* No runtime errors.
* No unnecessary warnings.
* No broken imports.

---

## Responsive Review

Check:

Desktop

Tablet

Mobile

Ensure:

* No horizontal scrolling.
* Proper spacing.
* Proper alignment.
* Buttons remain usable.
* Navigation behaves correctly.

---

## Accessibility

Review:

* Semantic HTML
* aria-labels
* Image alt text
* Keyboard navigation
* Focus states
* Colour contrast

Improve where required.

---

## Performance

Review:

* Images
* Rendering
* Lazy loading
* Bundle size
* Component rendering

Improve only when safe.

---

## CSS

Review:

* Duplicate CSS
* Unused styles
* Responsive rules
* Consistent spacing
* Consistent typography

Do not redesign.

---

## SEO

Check:

* Titles
* Meta descriptions
* Heading hierarchy
* Semantic HTML

Prepare recommendations where improvements are needed.

Do not fabricate SEO content.

---

## Deliverables

At the end of the audit provide a report containing:

1. Issues fixed.
2. Issues found but intentionally left unchanged.
3. Recommendations for future improvements.
4. Files modified.
5. Confirmation that architecture was preserved.

---

# Completion Criteria

This step is complete only when:

* Project builds successfully.
* Development server runs.
* No new errors introduced.
* Existing functionality preserved.
* Homepage appearance preserved.
* Architecture preserved.

---

# Git Commit Message

Complete Step 01 — Project Audit & Stabilization
