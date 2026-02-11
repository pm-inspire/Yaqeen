# Design System Documentation

## 1) Brand & Theme Tokens

### Colors

- Primary: `#2E9F98`
- Primary Dark: `#247D78`
- Primary Soft: `#DDF3F1`
- Accent: `#F0B774`
- Text: `#1B1F24`
- Text Secondary: `#5D6774`
- Surface: `#FFFFFF`
- Background: `#F3F7F7`
- Border: `#E2E8F0`
- Success/Warning/Error states included

### Typography Scale

- H1: 28/36
- H2: 24/32
- H3: 20/28
- Body Large: 17/26
- Body: 15/24
- Caption: 13/20
- Button: 16/24

### Spacing (8px Grid)

- xs: 4
- sm: 8
- md: 16
- lg: 24
- xl: 32

### Interaction Standards

- Minimum touch target: 44x44
- Rounded corners: 10-18 radius scale
- Card elevations and border tokens included

## 2) Atomic Components

- `Button` (primary, secondary, ghost)
- `Input` (label + validation support)
- `Icon` (baseline symbolic icon set)
- `Badge` (default/success/warning)
- `Card`

## 3) Molecular Components

- `CourseCard` (list/grid, subscribed/unsubscribed)
- `FilterBar` usage support via organism integration
- `EmptyState` (icon, message, CTA)
- `TeacherProfile` (avatar, name, subject, rating)
- `RatingDisplay` (stars + count)
- `PriceTag` (SAR)
- `SearchBar` (input + filter trigger)
- `LessonCard`

## 4) Organism Components

- `BottomNavigation` (5 tabs)
- `FilterBar`
- `SubscriptionFlow` (step indicator)
- `DiscussionThread` (nested comments)
- `PaymentSummary` (subtotal + VAT + total)
- `CourseList`

## 5) Templates

- `HomeTemplate`
- `CourseDetailTemplate`

## 6) RTL Rules

- App forces RTL through `I18nManager.forceRTL(true)`
- Rows and alignment prioritize right-to-left layout
- Text content defaults to `textAlign: "right"`
