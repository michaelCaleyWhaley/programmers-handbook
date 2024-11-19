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

-- /////////////////////////////////////
-- CARS DATASET
-- /////////////////////////////////////

-- Return the highest price car
SELECT MAX(price) FROM car;

-- Return the minimum price car
SELECT MIN(price) FROM car;

-- Average from car
SELECT ROUND(AVG(price)) FROM car;

-- Return highest prices for each make and groups by make
SELECT make, MAX(price) from car GROUP BY make ORDER BY make;

-- Return lowest prices for each make/model and groups by make/model
SELECT make, model, MIN(price) from car GROUP BY make, model ORDER BY make;

-- Sum all prices
SELECT SUM(price) FROM car;

-- Sum all prices where make is Audi
SELECT SUM(price) FROM car WHERE make LIKE 'Audi';

-- Sums the combined price of price of make and model
SELECT make, model, SUM(price) FROM car GROUP BY make;

-- you can do calculations in SQL
-- 2 to the power 10
SELECT 2^10;

-- Factorial of 4
SELECT FACTORIAL(5);

-- Modulus
SELECT 3 % 10;

-- Find 10% of original price
SELECT make, model, price, ROUND(SUM(price * 0.1),2) AS "Discount" FROM car GROUP BY make, model, price;

-- Show discounted price
SELECT make, model, price, ROUND(SUM(price * 0.1),2) AS "Discount", ROUND(SUM(price * 0.9),2) AS "Discounted price" FROM car GROUP BY make, model, price;

-- Use the COALESCE replace empty values with default
SELECT COALESCE(email, 'Email not provided') FROM person; 

-- Handle division by zero with COALESCE
SELECT COALESCE(10 / NULLIF(0,0),0);

-------------------------------------------- DATES

-- Get todays date and time
SELECT NOW();

-- To get date without time
SELECT NOW()::DATE;

-- Get todays date minus 1 year
SELECT NOW() - INTERVAL '1 YEAR';

-- Get todays date minus 10 months
SELECT NOW() - INTERVAL '1 MONTHS';

-- To extract the year from the date
SELECT EXTRACT(YEAR FROM NOW());

-- To extract the day from the date
SELECT EXTRACT(DAY FROM NOW());

-------------------------------------------- AGE

-- Dynamically calculate a persons age using AGE func
SELECT first_name, last_name, gender, country_of_birth, date_of_birth, AGE(NOW(),date_of_birth) FROM person;

-------------------------------------------- ALTERING TABLE

-- Alter person table to not have primary key constraint
ALTER TABLE person DROP CONSTRAINT person_pkey;

-- Alter person table to re add the primary key constraint
ALTER TABLE person ADD PRIMARY KEY (id);

-- DELETE an entry in a table
DELETE FROM person WHERE id = 1;