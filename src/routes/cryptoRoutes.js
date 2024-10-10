const express = require("express");
const { getCryptoStats } = require("../controllers/cryptoController");

const router = express.Router();

router.get("/stats", getCryptoStats);

module.exports = router;
