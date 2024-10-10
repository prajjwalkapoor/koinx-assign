const asyncHandler = require("../middlewares/asyncHandler");
const {
  getLatestCryptoData,
  calculateStandardDeviation,
} = require("../services/cryptoService");

exports.getCryptoStats = asyncHandler(async (req, res) => {
  const { coin } = req.query;
  const stats = await getLatestCryptoData(coin);
  res.json(stats);
});

exports.getCryptoDeviation = asyncHandler(async (req, res) => {
  const { coin } = req.query;
  const deviation = await calculateStandardDeviation(coin);
  res.json({ deviation });
});
