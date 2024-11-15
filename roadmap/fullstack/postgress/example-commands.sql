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

-- WHERE clause
SELECT * FROM person WHERE gender = 'Female' AND (country_of_birth = 'Poland' OR country_of_birth = 'China');

-- Comparison 
-- PSQL is capable of comparing results. Simple example below
SELECT 1 = 1;
-- results in t which is equal to true
SELECT 1 = 2;
-- results in f which is equal to false

-- Limit result numbers
SELECT * FROM person LIMIT 10;

-- Limit and offset
SELECT * FROM person limit 10 OFFSET 10;

-- IN to filter by array of values
SELECT * FROM person WHERE country_of_birth IN ('China', 'Poland', 'Japan');

-- BETWEEN filter by dates
SELECT * FROM person WHERE country_of_birth IN ('China', 'Poland', 'Japan') AND date_of_birth BETWEEN '2000-01-01' AND '2026-01-01';

-- LIKE allows you to search using pattern matching
SELECT * FROM person WHERE email LIKE '%google%';
-- pattern match underscore represents any single char
SELECT * FROM person WHERE email LIKE '%google____';

-- ILIKE case insensitive version of LIKE
SELECT * FROM person WHERE gender ILIKE 'female';

-- GROUP BY statement groups rows that have the same values into summary rows
SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth ORDER BY country_of_birth ASC;

-- HAVING FILTER FOR GROUP BY
SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth HAVING COUNT(*) >= 40 ORDER BY country_of_birth ASC;