const express = require("express");
const { swaggerUi, swaggerDocument } = require("./docs/swaggerConfig");

const aboutRoutes = require("./routes/about");
const authRoutes = require("./routes/auth");
const educationsRoutes = require("./routes/educations");
const experiencesRoutes = require("./routes/experiences");
const projectRoutes = require("./routes/project");

const app = express();

const connectDB = require("./db");
require("dotenv").config();

connectDB();

app.use(express.json());

// Menyajikan dokumentasi Swagger UI di /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/v1", aboutRoutes);
app.use("/v1", authRoutes);

// Server berjalan di port 3000
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs Running on http://localhost:${PORT}/api-docs`);
});
