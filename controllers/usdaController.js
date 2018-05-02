var express = require("express");

var router = express.Router();

var usdaApi = require("./usdaApi.js");


router.get("/api/foodSearch/:food", function(req, res) {
    var foodName = req.params.food;
    usdaApi.findNutrientsByFoodName(foodName, function(data){
        res.json(data);
    });
});




module.exports = router;