DROP DATABASE if exists users_db;

CREATE DATABASE users_db;
USE users_db;

DROP TABLE if exists users;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	myPassword bigint,
	passwordEnc bigint NOT NULL,
	PRIMARY KEY (id)
);

CREATE Trigger encrypt BEFORE INSERT ON users for each Row set New.passwordEnc = MOD(POW(New.myPassword,9),106), New.myPassword = 0;

INSERT INTO users (email,myPassword,passwordEnc)
VALUES ("snoopy@snoopy.com", 66, 0);
