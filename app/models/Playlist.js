import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Playlist extends Model {}

Playlist.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    }},
    {
        sequelize,
        tableName:"playlist"       
});

