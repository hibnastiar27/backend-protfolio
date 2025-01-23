const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const aboutRouter = express.Router();

// aboutRouter.use(authMiddleware);

aboutRouter.get("/about", authMiddleware, (req, res) => {
  const about = {
    name: "Nur Aria Hibnastiar",
    occupation: "Design Grafis",
    description: "Bla bla bla",
    photos: "url",
    skils: [
      {
        name: "laravel",
        img: "path/laravel",
      },
      {
        name: "react",
        img: "path/react",
      },
    ],
  };
  res.json(about);
});

aboutRouter.post("/about", (req, res) => {
  res.send("Create a new about entry");
});

aboutRouter.put("/about/:id", (req, res) => {
  res.send(`Update about entry with ID ${req.params.id}`);
});

aboutRouter.delete("/about/:id", (req, res) => {
  res.send(`Delete about entry with ID ${req.params.id}`);
});

module.exports = aboutRouter;
