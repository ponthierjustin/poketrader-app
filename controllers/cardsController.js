const express = require("express");
const router = express.Router();
const db = require("../models");


// This post creates new card inide users collection.

router.post("/", (req, res) => {
  db.Alert.create(req.body)
    .then((result) => {
      res.json({
        error: false,
        data: result,
        message: "Successfully created new alert",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new alert.",
      });
    });
});

// /api/cards/:id
router.put("/:id", (req, res) => {
  res.json({
    message: "Put route",
  });
});

// /api/cards/:id
router.delete("/:id", (req, res) => {
  res.json({
    message: "Delete route",
  });
});

module.exports = router;
