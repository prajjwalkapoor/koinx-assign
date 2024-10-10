const VALID_COINS = ["bitcoin", "matic-network", "ethereum"];

const validateCoin = (req, res, next) => {
  const { coin } = req.query;
  if (!coin || !VALID_COINS.includes(coin)) {
    return res.status(400).json({ error: "Invalid coin parameter" });
  }
  next();
};

module.exports = {
  validateCoin,
};
