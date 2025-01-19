const swaggerJSDoc = require("swagger-jsdoc");
const swaggerDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0", // Versi OpenAPI
    info: {
      title: "Express.js Portfolio API",
      version: "1.0.0",
      description: "Web Api Portfolio Arialog 2025 MERN Stack",
    },
    servers: [
      {
        url: "http://localhost:3030/v1", // URL server untuk pengembangan
        url: "http://localhost:3030/api-docs", // URL server untuk documentasi
      },
    ],
  },
  apis: ["./routes/apiRoutes.js"], // Path ke file routing yang berisi komentar Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
