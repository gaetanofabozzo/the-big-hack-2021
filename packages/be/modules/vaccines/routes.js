const express = require("express");
const controller = require("./controllers");

const router = express.Router();

router.get("/date", controller.getDate);

router.get("/list", controller.list);

module.exports = router;
