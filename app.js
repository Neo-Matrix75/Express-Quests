require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};
app.use(express.json()); // add this line
app.get("/", welcome);

const movieHandlers = require("./movieHandlers");

const usersHandlers = require("./userHandlers");

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.put("/api/movies/:id", movieHandlers.updateMovie);
app.put("/api/users/:id", usersHandlers.updateUsers);

app.get("/api/users", usersHandlers.getUsers);

app.get("/api/users/:id", usersHandlers.getUsersById);
app.post("/api/movies", movieHandlers.postMovie);
app.post("/api/users", usersHandlers.postUsers);

app.delete("/api/movies/:id", movieHandlers.deleteMovie);
app.delete("/api/users/:id", usersHandlers.deleteUsers);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
