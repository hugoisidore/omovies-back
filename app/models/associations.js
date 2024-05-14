import { Role } from "./Role.js";
import { Media } from "./Media.js";
import { User } from "./User.js";
import { Playlist } from "./Playlist.js";
import { Rating } from "./Rating.js";
import { Review } from "./Review.js";

import { sequelize } from "./sequelizeClient.js";

//User VALIDER
User.belongsTo(Role,{
    as:"role",
    foreignKey:"role_id"
});

//Playlist VALIDER
Playlist.belongsTo(User,{
    as:"user",
    foreignKey:"user_id"
});

//View
User.belongsToMany(Media, {
    as:"medias_view",
    through:"view",
    foreignKey:"user_id"
});
Media.belongsToMany(User, {
    as:"users_view",
    through:"view",
    foreignKey:"media_id"
});

//Rating
User.belongsToMany(Media, {
    as:"medias_rating",
    through:"rating",
    foreignKey:"user_id"
});
Media.belongsToMany(User, {
    as:"users_rating",
    through:"rating",
    foreignKey:"media_id"
});

//Review
User.belongsToMany(Media, {
    as:"medias_review",
    through:"review",
    foreignKey:"user_id"
});
Media.belongsToMany(User, {
    as:"users_review",
    through:"review",
    foreignKey:"media_id"
});

//Playlist has media VALIDER
Playlist.belongsToMany(Media,{
    as: "medias",
    through:"playlist_has_media",
    foreignKey: "playlist_id"
});

Media.belongsToMany(Playlist,{
    as:"playlists",
    through:"playlist_has_media",
    foreignKey: "media_id"
});





export {Role, Media, User, Playlist, Rating, Review, sequelize};