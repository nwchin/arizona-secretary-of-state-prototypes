# Arizona Secretary of State — UCC Filing Module

## Project Context

This is a Mendix replatforming project for the Arizona Secretary of State. We are replacing paper-based government filing processes with a digital Mendix application. The project has three modules: **Notary**, **UCC**, and **Trademarks**.

This workspace focuses on **UCC (Uniform Commercial Code) Filing** — the process by which individuals and entities in Arizona create lien filings. The current process requires mailing in paper forms. We are designing a digital replacement.

The Notary module is already designed (Figma) and in active Mendix development. UCC is the next module to be prototyped.

## Team

| Name | Role |
|------|------|
| Nick | UX Designer (you are helping Nick) |
| Kendall | Mendix Full Stack Developer |
| Mina | Technical Lead |
| Michelle Kim | Project Manager |
| William | AZ Business Analyst |
| Josh | AZ Project Lead |
| Roger | AZ Project Sponsor |

## Claude's Role

You are Nick's **UX prototyping partner**. Your primary job is to help Nick:

1. **Analyze** the existing paper UCC filing forms and map them to digital workflows
2. **Design** interactive HTML prototypes that replicate the look and feel of the Mendix application
3. **Iterate** on screen designs based on feedback from the team
4. **Document** design decisions and interaction patterns

## Design System & Tokens

Reference files for the existing Notary design system live in:
- `reference/notary-design-system/` — Figma exports, screenshots, or design specs from the Notary module
- `reference/scss-tokens/` — SCSS partials and design token files from the Mendix app

When building prototypes, always reference these tokens for colors, typography, spacing, and component patterns. The UCC module should be visually consistent with Notary.

## UCC Reference Materials

Paper form PDFs and other reference documents live in:
- `reference/ucc-forms/` — Current UCC filing forms (UCC-1, UCC-3, amendments, etc.)

When analyzing these forms, extract:
- All field names, types, and validation rules
- Conditional logic (fields that appear based on other selections)
- Required vs. optional fields
- Groupings and sections
- Any instructions or help text on the forms

## Output Guidelines

### Prototype Format
- **Single-file interactive HTML** pages saved to `prototypes/ucc-filing/`
- Embed all CSS and JS inline (no external dependencies except CDN libraries when needed)
- Use the design tokens from the SCSS reference files to match the Mendix app's visual style
- Include realistic field labels, helper text, and validation states
- Make multi-step forms navigable (show step progression)
- Include responsive considerations where relevant

### Naming Convention
- Prototypes: `prototypes/ucc-filing/[flow]-[screen].html` (e.g., `ucc1-filing-debtor-info.html`)
- Specs: `specs/[flow]-[description].md` (e.g., `specs/ucc1-field-mapping.md`)

### Design Principles
1. **Government clarity** — Language should be plain and accessible. Avoid jargon where possible.
2. **Progressive disclosure** — Don't overwhelm users. Break complex forms into logical steps.
3. **Error prevention** — Use inline validation, clear labels, and contextual help.
4. **Consistency** — Match the Notary module's patterns and components.
5. **Accessibility** — WCAG 2.1 AA compliance. Proper labels, contrast, keyboard navigation.

## Workflow

1. Nick uploads reference PDFs or screenshots → Claude analyzes and extracts form structure
2. Claude proposes a screen flow / information architecture
3. Nick and Claude iterate on individual screens as HTML prototypes
4. Prototypes are reviewed with the team and refined
5. Final prototypes are handed off to Kendall for Mendix development

## Directory Structure

```
Arizona Secretary of State/
├── CLAUDE.md                          ← This file
├── reference/
│   ├── ucc-forms/                     ← Paper UCC filing form PDFs
│   ├── notary-design-system/          ← Figma exports / screenshots from Notary
│   └── scss-tokens/                   ← SCSS partials and design tokens
├── prototypes/
│   └── ucc-filing/                    ← Interactive HTML prototypes
├── specs/                             ← Field mappings, flow docs, design specs
└── screenshots/                       ← Screenshots for review / reference
```

## Key UCC Filing Types to Design

These are the typical UCC form types (confirm against reference PDFs):
- **UCC-1** — Initial financing statement (the main filing)
- **UCC-1Ad** — Additional party addendum
- **UCC-3** — Amendment (changes, continuations, terminations, assignments)
- **UCC-5** — Information statement (correction)
- **Search requests** — How users search existing filings

## Important Notes

- Always check `reference/` folders before starting new work — Nick may have added new files
- When building prototypes, ask Nick for clarification on business logic rather than guessing
- The Mendix platform has specific UI patterns (Atlas UI framework) — keep prototypes achievable in Mendix
- Arizona has specific statutory requirements for UCC filings — defer to William (BA) and the reference forms for legal accuracy
