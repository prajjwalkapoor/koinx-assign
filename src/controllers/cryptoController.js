const asyncHandler = require("../middlewares/asyncHandler");
const { getLatestCryptoData } = require("../services/cryptoService");

exports.getCryptoStats = asyncHandler(async (req, res) => {
  const { coin } = req.query;
  const stats = await getLatestCryptoData(coin);
  res.json(stats);
});
