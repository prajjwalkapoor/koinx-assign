require("dotenv").config();
const express = require("express");
const logger = require("./src/utils/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middleware
app.use(express.json());

// Error handler
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send({
    success: true,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
