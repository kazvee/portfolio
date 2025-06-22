# 👩‍💻 Portfolio

This is the repo for my portfolio website, which you can visit ✨[HERE](https://kazvee.com/)✨

## Screenshots

![Main View](/public/images/readme/Portfolio-Main-View.png)

![Projects View](/public/images/readme/Portfolio_Projects.png)

## Demo Video

Featuring some festive snowfall from winter 2024! ❄️

https://github.com/user-attachments/assets/2a143ff7-b9ee-4dd6-a8a9-26abb4717dfa

## Built With

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/)
* [EmailJS](https://www.emailjs.com/)
* [hCaptcha](https://www.hcaptcha.com/)
* [Dotenv](https://www.npmjs.com/package/dotenv/)
* [PostgreSQL](https://www.postgresql.org/)
* [PostHog](https://posthog.com/)

## Acknowledgements & Thanks

* Chickadee photo by [teyi 徐](https://www.pexels.com/photo/black-capped-chickadee-bird-on-a-redcurrant-shrub-19097681/) from [Pexels](https://www.pexels.com/)
* Icons from [icons8](https://icons8.com/)
* Project Loading status placeholder image from [Imgflip](https://imgflip.com/memegenerator)

## Installation

* Clone this repo to your local machine
* From the project root in your terminal, install dependencies using the `npm i` (or `npm install`) command

### Database Setup
* Start PostgreSQL
  * `sudo service postgresql start`
* Log in as the `postgres` user
  * `sudo -u postgres psql`
* Create the database
  * `CREATE DATABASE portfolio_projects_db;`
* Connect to the database
  * `\c portfolio_projects_db`
* Create the tables
  * `\i backend/db/create.sql`
* Seed the database
  * `\i backend/db/seeds.sql`

### Start the Development Server
* Run `npm run dev`
* The development app will be served at [http://localhost:3000](http://localhost:3000/)

### Linting
* To check your code for potential errors, stylistic issues, or other problems, run `npm run lint`

### Build the Production-Ready Application
* Run `npm run build`
  * Pre-build checks verify the database and optionally rebuild it after user confirmation
  * Generates deployment-ready static pages and a sitemap inside the `out` folder

#### Start the Production Server
* Run `npx serve@latest out`
* The production app will be served at [http://localhost:3000](http://localhost:3000/)