USE sakila;

SELECT a.actor_id, first_name, f.film_id
FROM actor AS a
INNER JOIN film_actor AS f
ON f.actor_id = a.actor_id;
