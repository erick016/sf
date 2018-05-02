module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
        name: {
            type: DataTypes.STRING
        },
        Protein: {
            type: DataTypes.STRING
        },
        TotalLipidFat: {
            type: DataTypes.STRING
        },
        CarbohydrateByDifference: {
            type: DataTypes.STRING
        },
        FiberTotalDietary: {
            type: DataTypes.STRING
        },
        SugarsTotal: {
            type: DataTypes.STRING
        },
        Cholesterol: {
            type: DataTypes.STRING
        }

    });
    return Food;
};
