const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const baseSwagger = YAML.load("./swagger/base.yaml");
const aboutDocs = YAML.load("./swagger/about.yaml");
const authDocs = YAML.load("./swagger/auth.yaml");

baseSwagger.paths = {
  ...aboutDocs,
  ...authDocs,
};

module.exports = {
  swaggerUi,
  swaggerDocument: baseSwagger,
};
