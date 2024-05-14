import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class User extends Model {}

User.init({
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }},
    {
        sequelize,
        tableName:"user"
    
});