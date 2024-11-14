-- CREATE A DATABASE
CREATE DATABASE test;

-- CREATE A TABLE
CREATE TABLE person(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(150)
);

-- INSERT INTO THE TABLE
INSERT INTO
    person(
        first_name,
        last_name,
        gender,
        date_of_birth
    )
VALUES
    ('Jane', 'Smith', 'FEMALE', DATE '1988-12-12');

-- INSERT PERSON WITH EMAIL
INSERT INTO
    person(
        first_name,
        last_name,
        gender,
        date_of_birth,
        email
    )
VALUES
    (
        'Michael',
        'Caley',
        'MALE',
        DATE '1988-12-12',
        'kneedeep'
    );

-- PRINT ALL ROWS IN TABLE
SELECT * FROM person;

-- PRINT INDIVIDUAL COLUMN
SELECT first_name FROM person;

-- PRINT TWO COLUMNS
SELECT first_name, last_name FROM person;

-- ORDER BY COLUMN ASC
SELECT first_name, last_name FROM person ORDER BY last_name ASC;

-- ORDER BY COLUMN DESC
SELECT first_name, last_name FROM person ORDER BY last_name DESC;

-- Remove duplicates from the results
SELECT DISTINCT first_name FROM person;