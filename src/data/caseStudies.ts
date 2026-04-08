import { CaseStudyType } from "@/types";

export const caseStudies: CaseStudyType[] = [
  {
    id: "claims-adjudication",
    number: "01",
    title: "Medical Claims Adjudication System",
    meta: [
      {
        label: "Company",
        value: "Capital Rx — Healthtech SaaS, Pharmacy Benefits Management",
      },
      { label: "Timeline", value: "2021 – Present" },
      {
        label: "My Role",
        value: "Key Frontend Contributor on Cross-Functional Squad",
      },
      {
        label: "Tech Stack",
        value: "React · TypeScript · React-Query · Sass · AWS Lambda",
      },
    ],
    sections: [
      {
        type: "text",
        title: "Background & Problem",
        paragraphs: [
          "Capital Rx needed to build a net-new medical claims adjudication system from the ground up — a mission-critical product used internally by clinical and operations staff to process, review, and resolve complex healthcare claims. The existing workflows were fragmented, slow, and error-prone, creating bottlenecks that impacted processing times and user productivity.",
        ],
      },
      {
        type: "bullets",
        title: "My Contribution",
        intro:
          "As a key contributor on the frontend squad, I worked across the full claims adjudication UI, architecting and building complex flows that handled large volumes of structured medical data while remaining intuitive for non-technical clinical users.",
        items: [
          "Designed and implemented multi-step claim review workflows with complex conditional logic and state management",
          "Built data-dense UI components — tables, filters, status indicators — capable of handling high-volume claims data without performance degradation",
          "Collaborated with backend engineers and clinical SMEs to refine requirements that were often incomplete or evolving",
          "Provided production support, monitored Lambda error logs, and made rapid corrections to minimize operational disruption",
          "Contributed to cross-team code reviews, establishing consistent patterns across the frontend org",
        ],
      },
      {
        type: "text",
        title: "Architecture & Tradeoffs",
        paragraphs: [
          "Managing complex server state in claims processing — data that changed frequently and needed to stay in sync across multiple views — was a core challenge. We evaluated several approaches before settling on React-Query as our primary data-fetching and caching layer, reducing redundant API calls without the boilerplate overhead of a global store like Redux.",
          "We also made a deliberate decision to invest in reusable, typed component abstractions early, even under tight delivery timelines. This slowed initial velocity slightly but paid dividends as the system grew — new claim types and workflow variations could be composed from existing building blocks rather than rebuilt from scratch.",
        ],
      },
      {
        type: "outcomes",
        title: "Outcomes",
        items: [
          "30% increase in efficiency in the claims processing workflow",
          "Significant reduction in user errors through clearer UI state management and validation feedback",
          "Scalable architecture that supported rapid iteration as new claim types were introduced",
        ],
      },
      {
        type: "reflection",
        title: "Reflection",
        paragraphs: [
          "With more time upfront, I would have invested earlier in end-to-end testing coverage using Playwright. Production incidents that surfaced edge cases in complex claim flows could have been caught earlier with more robust automated tests across critical user paths.",
        ],
      },
    ],
  },
  {
    id: "prior-authorization",
    number: "02",
    title: "Prior Authorization Tool Rebuild",
    meta: [
      {
        label: "Company",
        value: "Capital Rx — Healthtech SaaS, Pharmacy Benefits Management",
      },
      { label: "Timeline", value: "2022 – 2023" },
      {
        label: "My Role",
        value:
          "Lead Frontend Engineer — Full Architecture & Implementation Ownership",
      },
      {
        label: "Tech Stack",
        value: "React · TypeScript · React-Query · REST APIs",
      },
    ],
    sections: [
      {
        type: "text",
        title: "Background & Problem",
        paragraphs: [
          "The existing Prior Authorization (PA) tool was a legacy frontend system with significant technical debt. It was making excessive redundant API calls, resulting in slow load times, stale data, and a frustrating experience for clinical staff who relied on it daily to approve or deny medication requests — a time-sensitive, high-stakes workflow.",
          "I was assigned to lead the rebuild, with full ownership of architectural decisions, technology choices, and implementation strategy.",
        ],
      },
      {
        type: "bullets",
        title: "My Approach",
        intro:
          "After auditing the existing codebase, the root cause was clear: no coherent data-fetching strategy. Components were independently firing API calls with no shared caching layer. I proposed and drove the adoption of React-Query as the foundation for the rebuild.",
        items: [
          "Automatic request deduplication — multiple components requesting the same data triggered only one network call",
          "Intelligent background refetching — data stayed fresh without manual polling logic scattered across components",
          "Optimistic updates — UI responded instantly to user actions, improving perceived performance",
          "Centralized cache invalidation — when a PA decision was made, related queries updated automatically",
        ],
      },
      {
        type: "text",
        title: "Architecture & Tradeoffs",
        paragraphs: [
          "The decision to fully rebuild rather than incrementally refactor was deliberate and carried risk — a longer period before value was delivered, and the legacy system had to be maintained in parallel. However, the extent of the technical debt made incremental improvement impractical.",
          "I also chose to keep global state minimal, relying on React-Query's server state cache rather than introducing a client-side store. This kept the architecture simpler and more maintainable for a team of varying experience levels.",
        ],
      },
      {
        type: "outcomes",
        title: "Outcomes",
        items: [
          "50% reduction in API calls through React-Query's caching and deduplication",
          "Significantly improved load times and UI responsiveness for clinical staff",
          "Cleaner, more maintainable codebase enabling faster iteration on new PA criteria types",
          "Positive feedback from internal clinical users on improved workflow clarity",
        ],
      },
      {
        type: "reflection",
        title: "Reflection",
        paragraphs: [
          "I would have involved clinical SMEs earlier in the design process. We refined the workflow structure based on post-launch feedback, and some of those iterations could have been avoided with more upfront discovery sessions with the actual users of the tool.",
        ],
      },
    ],
  },
  {
    id: "component-library",
    number: "03",
    title: "Component Library & WCAG Accessibility Overhaul",
    meta: [
      {
        label: "Company",
        value: "Capital Rx — Healthtech SaaS, Pharmacy Benefits Management",
      },
      { label: "Timeline", value: "2022 – 2023" },
      {
        label: "My Role",
        value:
          "Frontend Lead — Implementation & Accessibility Strategy (partnered with Designer)",
      },
      { label: "Tech Stack", value: "React · TypeScript · Sass · WCAG 2.1 AA" },
    ],
    sections: [
      {
        type: "text",
        title: "Background & Problem",
        paragraphs: [
          "As Capital Rx's product surface grew, UI inconsistency became a growing problem. Different teams were building similar components independently, leading to visual fragmentation, duplicated code, and an accessibility posture that was inconsistent across the application.",
          "In partnership with a designer, I led the effort to formalize the component library and bring it into WCAG 2.1 AA compliance.",
        ],
      },
      {
        type: "bullets",
        title: "My Approach",
        intro:
          "The designer defined visual and interaction specifications; I owned the technical implementation and accessibility engineering.",
        items: [
          "Conducted an accessibility audit across the existing library, cataloging violations by severity and frequency",
          "Prioritized remediation based on user impact — focusing first on interactive components used across all products",
          "Implemented semantic HTML, ARIA roles and labels, keyboard navigation, and focus management patterns for each component",
          "Established a shared token system for colors, spacing, and typography so future components could inherit accessible defaults",
          "Wrote documentation and usage guidelines so engineers across the org could consume components correctly without deep accessibility expertise",
        ],
      },
      {
        type: "text",
        title: "Architecture & Tradeoffs",
        paragraphs: [
          "A key decision was to build accessibility in at the component level rather than relying on consuming teams to implement it correctly. More upfront investment per component, but it dramatically reduced the surface area for accessibility regressions as the product scaled.",
          "We prioritized WCAG AA over AAA compliance. Full AAA compliance for certain color contrast ratios conflicted with the approved brand palette in ways that would have required significant design rework. AA compliance addressed the most impactful real-world needs within our timeline.",
        ],
      },
      {
        type: "outcomes",
        title: "Outcomes",
        items: [
          "Component library brought into WCAG 2.1 AA compliance across all core interactive components",
          "20% decrease in debugging time for the engineering team through cleaner component abstractions",
          "Reduced onboarding friction for new engineers — documented components with clear usage guidelines",
          "Foundation established for design system governance, making it easier to enforce consistency at scale",
        ],
      },
      {
        type: "reflection",
        title: "Reflection",
        paragraphs: [
          "I would have introduced automated accessibility testing — using tools like axe-core integrated into CI — earlier in the process. Manual auditing was thorough but time-consuming, and automated checks would have caught regressions faster as the library continued to evolve.",
        ],
      },
    ],
  },
];

export default caseStudies;
