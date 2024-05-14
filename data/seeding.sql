BEGIN;

INSERT INTO "role" ("level") VALUES 
('Admin'),
('User');

INSERT INTO "user" ("firstname", "lastname", "password", "email", "birthdate", "role_id") VALUES
('John', 'Doe', 'password123', 'john@example.com', '1990-01-01', 1),
('Jane', 'Smith', 'pass123', 'jane@example.com', '1995-05-15', 2);

INSERT INTO "playlist" ("name", "user_id") VALUES
('Favorites', 1),
('Watch Later', 2);

INSERT INTO "media" ("tmdb_id") VALUES
(123456),
(789012);

INSERT INTO "playlist_has_media" ("playlist_id", "media_id") VALUES
(1, 1),
(2, 2);

INSERT INTO "review" ("content", "user_id", "media_id") VALUES
('Great movie!', 1, 1),
('Awesome show!', 2, 2);

INSERT INTO "view" ("user_id", "media_id") VALUES
(1, 1),
(2, 2);

INSERT INTO "rating" ("value", "user_id", "media_id") VALUES
(4.5, 1, 1),
(5.0, 2, 2);

COMMIT;