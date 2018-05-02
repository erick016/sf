var express = require("express");

var router = express.Router();

// Import the model (food.js) to use its database functions.
var db = require("../models");

var usdaApi = require("./usdaApi.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    console.log(req.query)
    var foodName = req.query.food;
    var hbsObject = {}
    if (foodName) {
        console.log(foodName)
        return usdaApi.findNutrientsByFoodName(foodName, function (data) {
            hbsObject = { food: data, name: foodName }
            res.render("index", hbsObject);
        });
    }
    return res.render("index", hbsObject);
});

router.post("/recipesAPI", function (req, res) {
    console.log(req.body)
    db.Food.create({
        name: req.body.foodName,

        Protein: req.body.nutraList[0].formattedName,

        TotalLipidFat: req.body.nutraList[1].formattedName,

        CarbohydrateByDifference: req.body.nutraList[2].formattedName,

        FiberTotalDietary: req.body.nutraList[3].formattedName,

        SugarsTotal: req.body.nutraList[4].formattedName,

        Cholesterol: req.body.nutraList[5].formattedName,


    }).then(function (dbFood) {
        res.json(dbFood);
    })
        .catch(function (err) {
            res.json(err);
        })
});


router.get("/api/recipe/:name", function(req, res){
    usdaApi.findNutrientsByRecipeName(req.params.name, function(data){
        res.json(data);
    });
})
// window.location.replace("?=" + food +"")
//     module.exports = router;
// get value out of text box

//ABOUT page

router.get("/about", function (req, res) {
    res.render("about");
});

//DONATE page

router.get("/charity", function (req, res) {
    res.render("charity");
});

//RECIPE page

router.get("/recipe", function (req, res) {
    res.render("recipe");
});

//BMI page

router.get("/bmi", function (req, res) {
    res.render("bmi");
});
//create tables
router.post("/savedfood", function (req, res) {
    console.log(req.body)
    db.Food.create({
        name: req.body.foodName,

        Protein: req.body.nutraList[0].formattedName,

        TotalLipidFat: req.body.nutraList[1].formattedName,

        CarbohydrateByDifference: req.body.nutraList[2].formattedName,

        FiberTotalDietary: req.body.nutraList[3].formattedName,

        SugarsTotal: req.body.nutraList[4].formattedName,

        Cholesterol: req.body.nutraList[5].formattedName,


    }).then(function (dbFood) {
        res.json(dbFood);
    })
        .catch(function (err) {
            res.json(err);
        })
});

router.get("/favorite", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Food.findAll({}).then(function (dbFood) {
        // We have access to the todos as an argument inside of the callback function
        //   res.json(dbFood);
        res.render("favorite", { dbFood: dbFood })
    });
});

module.exports = router;
