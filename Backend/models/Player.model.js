module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isInt: true,
                min: 0
            }
        }
    },
    {
        timestamps: false,
        tableName: 'players',
    });
    return Player;
}

