# Petful server!

A server application that provides a queue of pets to adopt

## Getting started
clone this repo
run npm install
Run npm start to start up the server
## Endpoints
### cat endpoint
Petful server provides a queue of cats at /api/cats
Example request: GET to localhost:8080/api/cat
example response: {
    "imageURL": "https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg",
    "imageDescription": "Orange bengal cat with black stripes lounging on concrete.",
    "name": "Hopper",
    "sex": "Female",
    "age": 2,
    "breed": "Bengal",
    "story": "Thrown on the street"
}

### dog endpoint 
Petful server provides a queue of dogs at /api/cat
Example request: GET to localhost:8080/api/dog
example response: {
    "imageURL": "https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg",
    "imageDescription": "cut lab"
    "name": "Hopper",
    "sex": "Female",
    "age": 2,
    "breed": "lab",
    "story": "Thrown on the street"
}

### Working on the project

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Run the development task: `npm start`
    * Starts a server running at http://localhost:8080
    * Automatically restarts when any of your files change

## Databases

By default, the template is configured to connect to a MongoDB database using Mongoose.  It can be changed to connect to a PostgreSQL database using Knex by replacing any imports of `db-mongoose.js` with imports of `db-knex.js`, and uncommenting the Postgres `DATABASE_URL` lines in `config.js`.

## The Stack

### Front-end
- React
- Redux
- Redux Thunk
- Axios

### Back-end
- NodeJS
- Express
- MongoDB
- Mocha
- Chai