import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Rating extends Model {}

Rating.init({
    value: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }},{
        sequelize,
        tableName:"rating"
    
});