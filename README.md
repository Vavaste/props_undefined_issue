This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/example/15](http://localhost:3000/example/15) with your browser to see the result.


## issue

The page /example/[slug].tsx will be rendered the first time with the age prop undefined (except /example/15).\
This behaviour occurs because of the getStaticPaths function since, if it is removed, the problem does not occur.

I added a simple function:
```
export const stringifyNumber = (number: number) => {
    return number.toString();
};
```
that specifies, through TypeScript, to accept a number as an argument (not undefined) and neither TS nor LINT\
provide any error related to the "undefined" problem.
