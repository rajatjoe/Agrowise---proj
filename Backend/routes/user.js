const express = require("express");
const router = express.Router();


const { postData } = require("../controllers/postData");



router.post("/post", postData);
router.get("/fetch", getData);

module.exports = router;
