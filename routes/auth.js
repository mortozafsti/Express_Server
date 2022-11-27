const express = require('express');
const router = express.Router();

// Controller
const {grettings,overview,about} = require("../controller/auth")


//routes
router.get("/",grettings);
router.get("/overview",overview);
router.get("/about",about);



module.exports = router;
