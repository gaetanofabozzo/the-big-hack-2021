const express = require("express");
const controller = require("./controllers");

const router = express.Router();

router.get("/date", controller.getDate);

module.exports = router;
