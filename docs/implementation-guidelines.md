# Implementation Guidelines

## Framework Choice

This implementation uses **React Native + TypeScript** with reusable UI primitives and Zustand stores.

## State Management Model

- `authStore`: authentication session state
- `enrollmentStore`: cart/subscription and enrollment confirmation
- `favoritesStore`: favorite course tracking

## Recommended Milestone Plan (60 Working Days)

1. **Days 1-10: Foundations**
   - Finalize design tokens
   - Accessibility baseline pass
   - Navigation architecture

2. **Days 11-25: Component Production**
   - Complete atoms/molecules/organisms with visual QA
   - Add unit tests for key components

3. **Days 26-45: 26-Screen Delivery**
   - Implement all screens
   - Connect APIs and analytics
   - Conduct stakeholder milestone demos

4. **Days 46-60: Optimization**
   - Performance tuning
   - Cross-device QA (iOS/Android/tablet)
   - Accessibility certification pass

## KPI Instrumentation (To Be Connected)

- Enrollment funnel:
  - `course_detail_viewed`
  - `subscription_started`
  - `payment_success`
- Discovery:
  - `search_used`
  - `filter_applied`
  - `course_opened_from_search`
- Engagement:
  - `discussion_opened`
  - `comment_posted`
  - `lesson_completed`

## Open Product Questions (Need Stakeholder Input)

1. Existing analytics provider and tracked events?
2. Highest drop-off screens in current conversion funnel?
3. Most frequent user complaints from support logs?
4. Payment gateway currently integrated (Mada/Apple Pay/STC Pay/etc.)?
5. Existing design system constraints from prior release?

## Engineering Hand-off Notes

- Replace mock data with API integration in `data/` usage points.
- Keep Arabic text in `utils/i18n/ar.ts` and externalize strings as localization scales.
- Preserve token usage from `styles/theme` to prevent visual drift.
