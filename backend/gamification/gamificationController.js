const User = require("../models/User");

const assignBadges = require("./badgeService");

const getLeaderboard = require("./leaderboardService");

const updateProgress = async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    user.booksRead += 1;

    user.points += 20;

    user.badges = assignBadges(user);

    await user.save();

    res.json({
      message: "تم تحديث التقدم",
      user
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });
  }
};

const leaderboard = async (req, res) => {

  const users = await getLeaderboard();

  res.json(users);
};

module.exports = {
  updateProgress,
  leaderboard
};