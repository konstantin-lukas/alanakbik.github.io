## Getting Started

You will need to install Node.js and NPM to build and run the project.

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. To work with GitHub pages, we configured Next.js
to produce a static output. This is why there is a build command in the `package.json` but no command for running the
build artifacts. For developing, you only need to use the above dev command.

## Editing Content

Here's an overview over each page and which files you have to edit to change their content:
- Home: `@/content/LatestNews.tsx`
- Publications: `@/content/Publications.ts`
- Research: `@/content/Research.ts`, `@/app/research/(projects)/**/page.tsx`
- Chair: `@/content/Chair.ts`
- Travel: `@/app/travel/page.tsx`
- Legal Notice: `@/app/legal-notice/page.tsx`
- Privacy Policy: `@/app/privacy-policy/page.tsx`

## Deploying
Make sure the `next.config.mjs` and `@/components/shared/BasePathImage.tsx` file contains the correct base path. This is necessary for loading images correctly
on GitHub pages. This needs to be set to `"/alanakbik.github.io"` on forked versions of the repo and be set
to `""` on the main repo. Also in the original repo, please remove the base path from `@/app/chair/page.tsx`.

## ESLint
To mainting constant code quality adhering to the linter rules is necessary. These rules are checked
at build time. If your changes violate the linter rules, the build will fail. The rules are defined in
the `.eslintrc.json`. It is recommended to connect this file to your IDE for automatic checking and/or enforcement
of these rules when writing code. Alternatively, you can run `npm run lint` to check your code for errors
and `npm run fix` to automatically them.

## Learn More

To learn more about the technology used in this repo, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [React](https://react.dev/) - The underlying frontend framework Next.js is encapsulating.
- [TailwindCSS](https://tailwindcss.com) - the library we use for styling in this project.

Note: if you see `@` used inside path names, this refers to the project root.