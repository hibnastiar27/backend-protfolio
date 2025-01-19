const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig"); // Import konfigurasi Swagger
const app = express();

// Menyajikan dokumentasi Swagger UI di /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Import route API
const apiRoutes = require("./routes/apiRoutes");
const aboutRoutes = require("./routes/about");
const educationsRoutes = require("./routes/educations");
const experiencesRoutes = require("./routes/experiences");
const projectRoutes = require("./routes/project");

app.use("/v1", apiRoutes); // Menggunakan routing API
app.use("/v1", aboutRoutes); // Menggunakan routing API
app.use("/v1", educationsRoutes); // Menggunakan routing API
app.use("/v1", experiencesRoutes); // Menggunakan routing API
app.use("/v1", projectRoutes); // Menggunakan routing API

// Server berjalan di port 3000
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs Running on http://localhost:${PORT}/api-docs`);
});
