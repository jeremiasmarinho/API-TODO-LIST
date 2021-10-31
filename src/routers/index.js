const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Hello1");
  res.send("Hello send");
});

module.exports = router;