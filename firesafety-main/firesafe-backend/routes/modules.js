const express = require("express");
const Module = require("../models/Module");
const router = express.Router();

router.get("/", async (req, res) => {
  const modules = await Module.find();
  res.json(modules);
});

module.exports = router;
