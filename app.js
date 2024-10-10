require("dotenv").config();
const express = require("express");
const logger = require("./src/utils/logger");
const errorHandler = require("./src/middlewares/errorHandler");
const { connectDB } = require("./src/config/database");
const cryptoRoutes = require("./src/routes/cryptoRoutes");
const { validateCoin } = require("./src/middlewares/validate");
const cron = require("node-cron");

const app = express();

// Middleware
app.use(express.json());
app.use("/api", validateCoin, cryptoRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 3000;
connectDB();
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

cron.schedule("0 */2 * * *", async () => {
  try {
    updateCryptoData();
    logger.info("Background job completed successfully");
  } catch (error) {
    logger.error("Error in background job:", error);
  }
});
