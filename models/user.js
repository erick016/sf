module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        myPassword: {
            type: DataTypes.BIGINT
        },
        passwordEnc: {
            type: DataTypes.BIGINT
        },
        
    });




    return users;
};
