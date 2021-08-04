USE sakila;

SELECT first_name, last_name FROM actor
UNION ALL
SELECT first_name, last_name FROM staff;
