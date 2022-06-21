const express = require("express");

const router = require("./routes");

const app = express();
const swaggerJSON = require("./docs/swagger.json");
const swaggerUI = require("swagger-ui-express");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.use(router);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
