const express = require("express");
const { createUserId, getALlIds } = require("../controllers/userController");
const router = express.Router();

router.get("/user/:id", createUserId);
router.get("/ids", getALlIds);

module.exports = router;
