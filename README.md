# ANAi automasjon

Landing page for ANAi, a Norwegian AI automation business helping companies automate workflows, improve customer service, and implement AI agents.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Environment

- `NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL`: optional Google Calendar appointment schedule URL. If omitted, booking opens a prefilled Google Calendar event with Google Meet as the location.
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`: optional automatic contact-form email delivery.
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`: optional contact-form lead storage.
