const router = require("express").Router()
const controllers = require("../controllers/index");

const { homePage } = controllers;

router.get("", homePage)

module.exports = router