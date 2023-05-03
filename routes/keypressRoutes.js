const express = require("express");
const { createKeyPress } = require("./../controllers/keypressController");

const router = express.Router();

// router.param('id', checkID);

router.route("/").post(createKeyPress);
// router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
