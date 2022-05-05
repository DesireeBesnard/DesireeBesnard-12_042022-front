# Project - SportSee React Dashboard (FrontEnd)
![alt text](https://github.com/DesireeBesnard/DesireeBesnard-12_042022-front/blob/main/public/assets/project-thumbnail.png?raw=true)  

This project consists of the integration of a dashboard with data retrieved from an API.
- The backend API uses Node.js ([Express](https://expressjs.com/))
- Requests are made using [Axios](https://axios-http.com/docs/intro)
- The frontend is generated by [React](https://reactjs.org/)/[React Router](https://reactrouter.com/)
- The diagrams integration is made using [Recharts](https://recharts.org/en-US/)


## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Architecture](#project-architecture)
- [Installation steps](#installation-steps)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Launching the app in local](#launching-the-app-in-local)


## Prerequisites
- [NodeJS](https://nodejs.org/en/) and npm
- [Yarn](https://yarnpkg.com/)


## Project Architecture
This frontend project, is connected to a backend API service that you must also launch locally.
The backend project can be found here: https://github.com/DesireeBesnard/DesireeBesnard_12_11042022-back

For a good organization, you will create a sportSee folder in which you will clone the backend project and later, the frontend project


## Installation steps

### Backend

Follow the indications in the [README](https://github.com/DesireeBesnard/DesireeBesnard_12_11042022-back) of the backend project.

### Frontend

Fork the repository

Clone the frontend project into the sportSee folder:
```
$ git clone https://github.com/DesireeBesnard/DesireeBesnard-12_042022-front.git
```

```
sportSee/
   - sportSee-Back
   - sportSee-Front
```

Move into the folder and install all dependencies with the following command:
```
yarn
```

## Launching the app in local
Launch the backend first ([README](https://github.com/DesireeBesnard/DesireeBesnard_12_11042022-back)), then launch the app:
```
yarn start
```

A message may appear in the terminal when launching:
```
? Something is already running on port 3000. Probably:
  /home/.nvm/versions/node/v16.14.2/bin/node app/index.js (pid 26441)
  in /Sportsee/sportsee-Back

  Would you like to run the app on another port instead?
```
Type yes


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**
So go to: `http://localhost:3001/12` or `http://localhost:3001/18`
