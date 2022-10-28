const { DataTypes } = require('sequelize')

module.exports= (sequelize)=>{
    sequelize.define('temperament', {
        id:{
            type: DataTypes.UUID, //generador de valor único
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,

        },
        name: {
            type: DataTypes.STRING,
        }
    })
}