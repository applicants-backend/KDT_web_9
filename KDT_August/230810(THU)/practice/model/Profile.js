const Profile = function (sequelize, DataTypes) {
    const model = sequelize.define (
        'profile',
        {
            id: {
                type : DataTypes.INTEGER,
                allowNull : false, // null값 허용 안된다.
                primaryKey : true,
                autoIncrement : true
            },
            userid: {
                type: DataTypes.TEXT('medium'),
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull : false, 
            },
            password: {
                type: DataTypes.TEXT('medium'),
            },
            
        },
        {
            tableName : 'profile',
            freezeTableName:true,
            timestamps:false
        },
    );
    return model;
};
module.exports = Visitor;