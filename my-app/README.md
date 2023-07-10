# Portfolio

## Description

### FR

J'ai choisi de faire mon portfolio avec Next.js et avec Sass, dans l'intention de m'améliorer en design et pour avoir quelque chose de présentable pour mes postulations. 

Dans l'accomplissement de ce projet, j'ai découvert `react-intersection-observer` pour lancer l'animation pendant que l'utilisateur scroll en descendant la page. Cependant, j'ai rencontré des problèmes lorsque j'ai voulu utiliser les link de la navbar. En effet, les link avec react-intersection-observer ne sont pas compatibles. J'ai donc préféré utiliser la lib framer-motion.

J'ai appris dans ce projet à manipuler la structure Next.js avec le system `app`, plutôt qu'avec le system `pages`. Etant donné que je n'avais pas l'utilité du system de routes, j'ai opté pour app. J'ai pu ainsi me rendre compte qu'il y a des différences existantes. A savoir, le fichier layout.tsx de l'app qui comprend la function `RootLayout` qui diffère de celui de l'`_app.tsx`.

J'ai également appris à optimiser les images en installant sharp.

### EN

I chose to do my portfolio with Next.js and Sass, with the intention of improving my design and having something presentable for my applications. 

In completing this project, I discovered `react-intersection-observer` to launch the animation as the user scrolls down the page. However, I ran into problems when I tried to use the navbar links. Indeed, links with react-intersection-observer are not compatible. So I preferred to use the framer-motion lib.

In this project, I learned to manipulate the Next.js structure using the `app` system, rather than the `pages` system. Since I had no use for the routes system, I opted for app. This allowed me to realize that there are some differences. Namely, the app's layout.tsx file, which includes the `RootLayout` function, differs from the `_app.tsx` file.

I also learned how to optimize images by installing sharp.

## Getting Started

First, run the development server:

```bash
git clone https://...

cd my-app

pnpm install

pnpm dev
```

## Install

└─ $ ▶ pnpm add --save-dev sass

└─ $ ▶ pnpm add @fontsource/acme

└─ $ ▶ pnpm add @fontsource/akaya-kanadaka

└─ $ ▶ pnpm add sharp

└─ $ ▶ pnpm add framer-motion

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
