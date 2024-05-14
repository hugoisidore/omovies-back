import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Role extends Model {}

Role.init({
    level: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }},
    {
    sequelize, 
    tableName: "role"
});

