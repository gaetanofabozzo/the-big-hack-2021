const express = require("express");
const controller = require("./controllers");

const router = express.Router();

router.get("/date", controller.getDate);

router.get("/age-group", controller.getAgeGroup);

router.get("/categories", controller.getCategories);

router.get("/positives-on-vaccines", controller.positivesOnVaccines);

router.get("/municipalities", controller.municipalities);

router.get("/remaining", controller.remaining);

router.get("/summary", controller.summary);

module.exports = router;
