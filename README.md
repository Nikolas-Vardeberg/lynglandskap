# Headless CMS Workshop using Next.js, Sanity and Vercel<!-- omit in toc -->

This is a starter repo used as a part of the Headless CMS Workshop. It walks through the steps needed to build out a statically generated website that uses [Next.js](https://nextjs.org/) for the frontend, [Sanity](https://www.sanity.io/) to handle its content and [Vercel](https://vercel.com/) to deploy to production.

## Topics

- Intro

  - What is headless architecture?
  - What is Next.js?
  - What is Sanity.io?

- Setting up the Repo
- Setting up Sanity.io
  - Content modeling
  - Querying content with GROQ
- Setting up Next.js
  - Dynamic routing
  - Fetching page data
  - Page builder
- Deploying to production on Vercel

## Running the project locally

### Next.js App

You can start development environment for the frontend app by running:

```bash
npm run dev
```

Navigate to http://localhost:3000

### Sanity Studio

For this implementation, the Sanity Studio is embedded inside our Next.js app. This means that you just need to start the development environment for the frontend app and navigate to http://localhost:3000/studio.
