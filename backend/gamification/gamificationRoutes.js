const express = require("express");

const router = express.Router();

const {
  updateProgress,
  leaderboard
} = require("./gamificationController");

router.put("/progress/:id", updateProgress);

router.get("/leaderboard", leaderboard);

module.exports = router;