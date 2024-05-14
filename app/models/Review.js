import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Review extends Model {}

Review.init({
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    }},   
    {
        sequelize,
        tableName:"review"  
});