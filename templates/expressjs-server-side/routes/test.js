const router = require("express").Router()

router.get("/", (req, res) => {
  res.send("Fribe-cli server side template")
})

module.exports = router