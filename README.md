<br/>
<p align="center">
  <a href="https://github.com/SpencerKPhillips/Evolve">
    <img src="https://github.com/spencerkphillips/Evolve/blob/main/assets/evolve_Icon.webp" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Evolve CMS</h3>

  <p align="center">
    An easy to use, lightweight content-management-system built to your needs on the MERN stack.
    <br/>
    <br/>
    <a href="https://github.com/SpencerKPhillips/Evolve">View Demo</a>
    .
    <a href="https://github.com/SpencerKPhillips/Evolve/issues">Report Bug</a>
    .
    <a href="https://github.com/SpencerKPhillips/Evolve/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/SpencerKPhillips/Evolve/total) ![Contributors](https://img.shields.io/github/contributors/SpencerKPhillips/Evolve?color=dark-green) ![Issues](https://img.shields.io/github/issues/SpencerKPhillips/Evolve) ![License](https://img.shields.io/github/license/SpencerKPhillips/Evolve)

## Technology stack

As the name suggests, this repository is built on top of Express.js and React.js, however in the implementation detail, we will find other supporting technologies as well.

#### Client side

- React - A JavaScript library for building user interfaces
- Ant Design Pro - A design system for enterprise-level products. Create an efficient and enjoyable work experience
- Testing Library - React Testing Library
- Umi Request - HTTP client for the executing HTTP request from browser to server.

#### Server side

- Node.js - evented I/O for the backend
- Express.js - Fast, unopinionated, minimalist web framework for Node.js
- MongoDB - The application data platform for NoSQL databases
- Mongoose - mongoose
- Swagger - Swagger (Not done yet)
- Jest - JavaScript testing framework
- Super Test - Super test API testing framework

Details frameworks and packages can be found in the package.json files in server and client directory.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

## Running the application

### Locally

#### Prerequisites

- Node.js : To run npm packages
- MongoDB : As a database for the application

##### Steps

- To run locally, we should run the server and client side projects separately, and also make sure mongodb is up and running.
- Create a `.env` file inside of the `server` directory. Add the below entries or change accordingly. You can follow the `.env.sample` file to see the format.

  ```
  DB_HOST=localhost
  DB_PORT=27017
  DB_NAME=appdb
  JWT_SECRET=[YOUR JWT SECRET]
  JWT_EXPIRES_IN=3600
  PORT=5000
  IS_MONGODB_CLOUD_URL=true
  MONGODB_CLOUD_URI="[YOUR MONGODB ATLAS CLOUD URI]"
  ```

#### Server commands

We assume we run the MongoDB in the docker container.

```sh
cd server
npm i
npm run start
```

## Data seeding

To seed the database, we need to run the following commands in the docker container. You can run these commands in the terminal as well if you are running the server and client outside of the docker environment.
I assume we are running appserver in the docker container.

```
npm run db:seed
npm run db:migrate
```

You should be able to see the username and password in the `/server/setup/users.json` file.
