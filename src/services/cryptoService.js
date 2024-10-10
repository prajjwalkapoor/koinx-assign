const axios = require("axios");
const Crypto = require("../models/Crypto");
const logger = require("../utils/logger");

const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";
const COINS = ["bitcoin", "matic-network", "ethereum"];

async function updateCryptoData() {
  try {
    const promises = COINS.map(async (coin) => {
      const response = await axios.get(`${COINGECKO_API_URL}/coins/${coin}`);
      const { id, name, market_data } = response.data;
      const newCrypto = new Crypto({
        id,
        name,
        price: market_data.current_price.usd,
        marketCap: market_data.market_cap.usd,
        change24h: market_data.price_change_percentage_24h,
        timestamp: new Date(),
      });
      await newCrypto.save();
    });

    await Promise.all(promises);
    logger.info("Crypto data updated successfully");
  } catch (error) {
    logger.error("Error updating crypto data:", error);
    throw error;
  }
}

async function getLatestCryptoData(coin) {
  try {
    const crypto = await Crypto.findOne({ id: coin }).sort({ timestamp: -1 });
    if (!crypto) {
      throw new Error("Cryptocurrency not found");
    }
    return {
      price: crypto.price,
      marketCap: crypto.marketCap,
      "24hChange": crypto.change24h,
    };
  } catch (error) {
    logger.error("Error fetching latest crypto data:", error);
    throw error;
  }
}

module.exports = {
  updateCryptoData,
  getLatestCryptoData,
};
