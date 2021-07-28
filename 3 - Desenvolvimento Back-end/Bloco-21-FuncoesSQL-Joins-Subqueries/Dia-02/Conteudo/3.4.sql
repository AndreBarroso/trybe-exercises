USE sakila;

( SELECT first_name, last_name FROM actor)
UNION 
(SELECT first_name, last_name FROM customer)
ORDER BY first_name, last_name
LIMIT 15
OFFSET 120;

