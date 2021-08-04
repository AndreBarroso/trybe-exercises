USE sakila;
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' AND replacement_cost > 18.00
ORDER BY replacement_cost DESC
LIMIT 100;
