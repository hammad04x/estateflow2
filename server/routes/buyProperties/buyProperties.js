const express = require("express");
const router = express.Router();

const buyProperties = require("../../controller/buyProperties/buyProperties");

// 🌊 routes
router.get("/getbuyproperties", buyProperties.getBuyProperties);
router.get("/getbuypropertiesbyid/:id", buyProperties.getBuyPropertyById);
router.get("/getbuypropertiesbyuserid/:id", buyProperties.getBuyPropertiesByUserId);
router.post("/addbuyproperty", buyProperties.addBuyProperty);
router.put("/updatebuyproperty/:id", buyProperties.updateBuyProperty);
router.delete("/deletebuyproperty/:id", buyProperties.deleteBuyProperty);

module.exports = router;




