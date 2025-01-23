const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const baseSwagger = YAML.load("./docs/base.yaml");
const aboutDocs = YAML.load("./docs/about.yaml");
const authDocs = YAML.load("./docs/auth.yaml");

baseSwagger.paths = {
  ...aboutDocs,
  ...authDocs,
};

module.exports = {
  swaggerUi,
  swaggerDocument: baseSwagger,
};
