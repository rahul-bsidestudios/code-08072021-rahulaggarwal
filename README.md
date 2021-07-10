# Weight Management

The main purpose of this repository is to build a solution and workflow for weight management using KOA with Typescript framework.

Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. Through leveraging generators Koa allows you to ditch callbacks and greatly increase error-handling. Koa does not bundle any middleware within core, and provides an elegant suite of methods that make writing servers fast and enjoyable.

## Pre-reqs
To build and run this app locally you will need:
- Install [Node.js](https://nodejs.org/en/)

## Features:
 * Nodemon - server auto-restarts when code changes
 * Koa v2
 * Jest unit tests
 * Jest integration tests
 * Github actions - CI for building and testing the project

# Getting Started
- Clone the repository

- Install dependencies
```
cd <project_name>
npm install
```
- Run the project
```
npm start
```

- Run ESLint
```
npm run lint
```

- Fix ESLint errors
```
npm run lint-fix
```

- Build the project
```
npm run build
```

- Run integration tests
```
npm run test:integration
```

- Run unit tests
```
npm run test:unit
```

# CI: Github Actions
Using Github Actions as a CI pipeline. The pipeline can be found at `/.github/workflows/main.yml`. This performs the following:
 - Build the project
   - Install Node
   - Install dependencies
   - Build the project (transpile to JS)
   - Run unit tests
   - Run integration tests

# Deployment: Heroku Pipeline
Using Heroku to deploy the code automatically on every push to master branch after successful completion of the github workflow.

# Public URL
The application can be accessed using this endpoint - https://weight-bmi-management.herokuapp.com/

# Route for getting the required data
```
POST persons/bmi
```
The above endpoint accepts an array of the persons objects in the request body and returns the required data in the below format -
```
	{
		results: <Array of persons>,
		overweightCount: <number>
	}
```