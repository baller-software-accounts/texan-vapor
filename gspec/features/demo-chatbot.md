---
description: Demonstration chatbot
name: demo-chatbot
gspec-version: 1.9.0
---

# Demo Chatbot Widget

## 1. Overview

A scripted chatbot widget that appears as a floating bubble on every page, demonstrating the value of conversational AI for business websites — without requiring an LLM or any external service. The bot uses a hybrid of quick-reply buttons and keyword matching to handle common visitor questions about services, contact information, and general FAQs.

The chatbot is transparently framed as a demo, showing visitors (and prospective clients) what an AI-powered assistant _could_ do for their business. This makes it both a functional site feature and a sales tool for chatbot services.

## 2. Users & Use Cases

**Primary users:** Site visitors (potential customers browsing the site)

**Key use cases:**

- A visitor lands on the site after hours and wants to know what services are offered — the chatbot answers instantly with quick-reply options and links to relevant pages
- A visitor is unsure which service fits their needs — the chatbot asks qualifying questions via guided buttons and points them to the right service
- A visitor wants contact information or wants to request a quote — the chatbot surfaces phone, email, and hours, and offers to open the contact form
- A prospective client sees the chatbot demo banner and understands the value a scripted or AI chatbot could bring to their own business site

## 3. Scope

**In scope:**

- Floating chat widget accessible from all pages
- Transparent demo framing (introductory message explaining this is a preview)
- Scripted conversation trees covering services, contact/scheduling, and general FAQs
- Quick-reply button UI for guided conversation paths
- Keyword matching fallback for free-text input
- Graceful handling of unrecognized input with helpful fallback responses

**Out of scope:**

- LLM or AI-powered responses
- Server-side processing or API calls
- Conversation persistence across page loads or sessions
- User authentication or personalization
- Analytics or conversation logging infrastructure
- Admin interface for editing conversation scripts

**Deferred ideas:**

- Persistent conversation history across page navigation (via client-side storage)
- Typing indicators and simulated response delays for a more natural feel
- A/B testing different conversation flows
- Integration with a real LLM backend as an upgrade path

## 4. Capabilities

- [x] **P0**: Floating chat widget appears on all pages as a bubble in the bottom-right corner
  - Bubble is visible and clickable on every page of the site
  - Clicking the bubble opens the chat panel; clicking again (or a close button) dismisses it
  - Widget does not obstruct primary page content or navigation
  - Widget is responsive and usable on both desktop and mobile viewports

- [x] **P0**: Chat panel displays a transparent demo banner on conversation start
  - Opening the chat shows an introductory message framing the experience as a demo (e.g., "This is a preview of what an AI assistant could do for your business")
  - The banner is visible before or alongside the first bot message
  - The banner does not block the conversation flow

- [x] **P0**: Bot responds to quick-reply button selections with scripted conversation branches
  - Bot presents 2–4 quick-reply buttons after each message where applicable
  - Selecting a button advances the conversation along a predefined decision tree
  - Conversation covers at least three top-level topics: services, contact/scheduling, and general FAQs
  - Each topic branch is at least 2 levels deep (initial question → follow-up → answer/action)

- [x] **P0**: Bot matches free-text input to canned responses via keyword matching
  - Common keywords and phrases (e.g., "hours", "phone", "lawn", "quote", "pricing") trigger relevant canned responses
  - Matching is case-insensitive
  - Unrecognized input produces a helpful fallback message that suggests using the quick-reply buttons or contacting the business directly

- [x] **P1**: Bot provides quick-reply action buttons that navigate the user to relevant pages
  - At appropriate points in conversation, bot offers buttons like "View Services" or "Go to Contact Page"
  - Selecting a navigation button takes the user to the corresponding page

- [x] **P1**: Bot offers a quick-reply action to open or scroll to the contact form
  - At least one conversation path ends with an option to go to the contact form
  - Selecting the action navigates the user to the contact page or scrolls to the contact form if on the same page

- [x] **P1**: Conversation content covers services offered by the business
  - Bot can describe the types of services available at a summary level
  - Bot can answer common service questions (e.g., service area, seasonal availability)
  - Service information is maintainable as static data within the codebase

- [x] **P1**: Conversation content covers contact and scheduling inquiries
  - Bot can surface business contact information (phone, email, address, hours)
  - Bot can explain how to request a quote or schedule a consultation

- [x] **P2**: Conversation content covers general FAQs about the business
  - Bot can answer 3–5 common questions (e.g., "How long have you been in business?", "Are you licensed and insured?", "What areas do you serve?")
  - FAQ content is maintainable as static data within the codebase

- [x] **P2**: Chat panel supports smooth open/close animations
  - Opening and closing the chat panel uses a brief transition animation
  - Animation does not delay interactivity or feel sluggish

## 5. Dependencies

- **Contact Form** ([contact-form.md](contact-form.md)) — the chatbot's "open contact form" action depends on the contact form being implemented and accessible
- **Services Page** ([services-page.md](services-page.md)) — navigation actions link to the services page
- **Contact Page** ([contact-page.md](contact-page.md)) — navigation actions link to the contact page
- No external service or API dependencies — all logic and content is client-side and static

## 6. Assumptions & Risks

**Assumptions:**

- Visitors will engage with a chatbot widget if it is unobtrusive and clearly useful
- A scripted decision-tree with keyword fallback provides enough coverage for common visitor questions without an LLM
- The transparent demo framing adds credibility rather than discouraging engagement
- Conversation content (services, FAQs, contact info) can be hardcoded and updated manually as business details change

**Open questions:**

- Optimal keyword matching sensitivity — too aggressive may produce false matches; too conservative may over-rely on the fallback. Tuning will require real visitor input patterns.

**Risks:**

- **Keyword collisions**: Free-text matching may misinterpret ambiguous input. _Mitigation_: Keep keyword rules narrow; prefer quick-reply buttons as the primary interaction; make the fallback message genuinely helpful.
- **Mobile viewport crowding**: A floating widget on small screens can obstruct content. _Mitigation_: Use a compact bubble that expands to a near-full-screen panel on mobile; ensure the close button is easy to tap.
- **Content staleness**: Hardcoded conversation content may drift from actual business details. _Mitigation_: Centralize conversation data in a single maintainable location within the codebase.

## 7. Success Metrics

- **Engagement rate**: >10% of site visitors open the chat widget
- **Completion rate**: >50% of opened conversations reach a terminal node (answer, navigation action, or contact form handoff) rather than being abandoned mid-flow
- **Fallback rate**: <30% of free-text inputs trigger the unrecognized-input fallback, indicating keyword coverage is adequate
- **Contact conversion assist**: Measurable portion of contact form submissions are preceded by chatbot interaction

## 8. Implementation Context

> This feature PRD is portable and project-agnostic. During implementation, consult the project's `gspec/profile.md` (target users, positioning), `gspec/style.md` (design system), `gspec/stack.md` (technology choices), and `gspec/practices.md` (development standards) to resolve project-specific context.
