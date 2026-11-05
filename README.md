# Akshar — Beyond the Code

A new portfolio concept for the AWS Student Builder Challenge. This is a separate project from the existing GitHub Pages portfolio.

## Concept

A product-focused portfolio for Akshar Kakadiya, positioned as a Full-Stack + AI Developer and final-year MCA student. The key creative feature is the **Product Thinking Lab**, a three-step interactive product decision exercise connected to the real MealShare project.

## Stack

- React + Vite + TypeScript
- Framer Motion
- Lucide React
- Custom responsive CSS (Tailwind is configured and available for future component styling)
- AWS Amplify Hosting deployment configuration (`amplify.yml`)

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vite outputs the production site to `dist/`. The root `amplify.yml` configures Amplify to install dependencies, run the production build, and publish `dist/`.

## Deploy to AWS Amplify Hosting

1. Push this project to a **new public GitHub repository** (do not overwrite the existing portfolio repository).
2. In AWS Amplify, choose **New app → Host web app → GitHub**.
3. Authorize the AWS Amplify GitHub App for this repository.
4. Select the new repository and its `main` branch.
5. Confirm build output directory `dist` and deploy.
6. Keep the generated public Amplify URL accessible through the judging window.

AWS documentation:
- https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
- https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html
- https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html

## Before submitting — verify and personalize

- Confirm the GitHub profile URL in `src/App.tsx` (`https://github.com/akshar-kakadiya`).
- Confirm the LinkedIn URL and contact email in `src/App.tsx`.
- MealShare now includes five real administrator-interface screenshots in `public/mealshare/` and links to the live application (`https://mealshare-100.web.app/`) and source repository (`https://github.com/akshar-kakadiya/MealShare`). Screens showing user-directory contact details and personal information were deliberately excluded from the public portfolio gallery.
- Verify each project description and technology list against the current implementation.
- Add the actual AWS deployment screenshots and describe only the AWS services used in your deployment.
- Test the site at desktop and mobile widths, including every navigation link and the full Product Thinking Lab flow.

## MealShare evidence shown in the portfolio

- Administrator dashboard, donations, pickups, ratings/feedback and reports screens are included as supplied screenshots.
- The supplied UI identifies Spring Boot and PostgreSQL for operational metrics, PostGIS for pickup functionality, and Firebase ID-token authentication. Verify these against the repository before publishing any deeper architecture diagram.
- The supplied screenshots show a small test dataset (including one donation and 12 food units in the captured dashboard); do not present these as large-scale impact metrics.
- Do not add screenshots of the Users or Verification pages without first redacting other users’ names, email addresses and phone numbers.

## Content accuracy notes

- MealShare is presented as the flagship project using the known implemented features: food listing, claiming, user roles, live tracking, reviews and user verification.
- Chhatralay is presented as a Flutter/Firebase project focused on Yuvak records and sabha attendance workflows.
- Civic AI Assistant is described only at a high level as an AI-powered civic assistant built during HackNight Bengaluru. Add further technical claims only after verifying them.
- AI Gallery is intentionally not presented as a flagship project.
