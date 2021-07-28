USE sakila;

( SELECT first_name FROM actor ORDER BY first_name DESC LIMIT 5 )
UNION 
(SELECT first_name FROM staff  LIMIT 1)
UNION
(SELECT first_name FROM customer LIMIT 5 OFFSET 14 )

