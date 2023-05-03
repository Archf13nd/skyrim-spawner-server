const catchAsync = require("../utils/catchAsync");
const robot = require("robotjs");

const createKeyPress = catchAsync(async (req, res, next) => {
  // Keypress code
  console.log("Keypress request received!");
  setTimeout(() => {
    robot.setKeyboardDelay(10);
    for (let i = 0; i < 10; i++) {
      robot.keyToggle("home", "down", []);
      robot.keyToggle("home", "up", []);
    }
  }, 3000);
  res.status(201).json({
    status: "success",
    data: {
      status: "success",
    },
  });
});

module.exports = {
  createKeyPress,
};
