# 👩‍💻 Portfolio

This is the repo for my portfolio website, which you can visit ✨[HERE](https://kazvee.heliohost.us/)✨ 

## Purpose

I built this for some hands-on learning about what Next.js 14 can offer as a full-stack React framework.  
It's currently been deployed as a static site, but I plan to build out a backend solution using the [App Router](https://nextjs.org/docs/app) method, since it's currently the recommended approach for new applications.

I've written the project in TypeScript in order to re-familiarize myself with static typing in JavaScript since I haven't used TS in a while.

I'm enjoying Tailwind's utility-first approach so far. I especially like that I don't need to think of my own CSS class names! 😃

## Screenshots of Current Iteration

![Main View](/public/images/readme/Portfolio_Main_View.png)

![Projects View](/public/images/readme/Projects_View.png)

## Built With

* [Next.js 14](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/) v20.10

## Acknowledgements & Thanks

* Chickadee photo by [teyi 徐](https://www.pexels.com/photo/black-capped-chickadee-bird-on-a-redcurrant-shrub-19097681/) from [Pexels](https://www.pexels.com/)
* Icons from [icons8](https://icons8.com/)
* Web hosting by [HelioHost](https://heliohost.org/)

## Installation

* Clone this repo to your local machine
* From the project root in your terminal, install dependencies using the `npm i` (or `npm install`) command

### Start the Development Server
* Run `npm run dev`
* The development app will be served at [http://localhost:3000/](http://localhost:3000/)

### Linting
* To check your code for potential errors, stylistic issues, or other problems, run `npm run lint`

### Build the Production-Ready Application
* Run `npm run build`
  * This will generate deployment-ready static pages inside the `out` folder

#### Start the Production Server
* Run `npx serve@latest out`
* The production app will be served at [http://localhost:3000/](http://localhost:3000/)