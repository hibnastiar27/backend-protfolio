const express = require("express");
const aboutRouter = express.Router();

// routes/about.js
/**
 * @swagger
 * /v1/about:
 *   get:
 *     summary: Get all about entries
 *     responses:
 *       200:
 *         description: Success
 */
aboutRouter.get("/about", (req, res) => {
  res.send("Get all about entries");
});

/**
 * @swagger
 * /v1/about:
 *   post:
 *     summary: Create a new about entry
 *     responses:
 *       201:
 *         description: Created
 */
aboutRouter.post("/about", (req, res) => {
  res.send("Create a new about entry");
});

/**
 * @swagger
 * /v1/about/{id}:
 *   put:
 *     summary: Update an about entry
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the about entry to update
 *     responses:
 *       200:
 *         description: Updated
 */
aboutRouter.put("/about/:id", (req, res) => {
  res.send(`Update about entry with ID ${req.params.id}`);
});

/**
 * @swagger
 * /v1/about/{id}:
 *   delete:
 *     summary: Delete an about entry
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the about entry to delete
 *     responses:
 *       200:
 *         description: Deleted
 */
aboutRouter.delete("/about/:id", (req, res) => {
  res.send(`Delete about entry with ID ${req.params.id}`);
});

module.exports = aboutRouter;
