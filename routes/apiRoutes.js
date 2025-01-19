const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /v1/projects:
 *   get:
 *     summary: "Get all projects"
 *     description: "Retrieve a list of all projects in the portfolio."
 *     responses:
 *       200:
 *         description: "List of projects"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   link:
 *                     type: string
 */
router.get("/projects", (req, res) => {
  const projects = [
    {
      title: "Project 1",
      description: "Description 1",
      link: "http://link1.com",
    },
    {
      title: "Project 2",
      description: "Description 2",
      link: "http://link2.com",
    },
  ];
  res.json(projects);
});

/**
 * @swagger
 * /v1/projects/{id}:
 *   get:
 *     summary: "Get project by ID"
 *     description: "Retrieve a specific project by its ID."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID of the project to retrieve"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Project details"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 link:
 *                   type: string
 *       404:
 *         description: "Project not found"
 */
router.get("/projects/:id", (req, res) => {
  const projectId = req.params.id;
  const project = {
    title: "Project 1",
    description: "Description 1",
    link: "http://link1.com",
  };
  if (projectId === "1") {
    res.json(project);
  } else {
    res.status(404).send("Project not found");
  }
});

module.exports = router;
