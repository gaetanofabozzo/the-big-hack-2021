const express = require("express");
const controller = require("./controllers");

const router = express.Router();

router.get("/date", controller.getDate);

router.get("/age-group", controller.getAgeGroup);

router.get("/municipalities", controller.municipalities);

module.exports = router;
