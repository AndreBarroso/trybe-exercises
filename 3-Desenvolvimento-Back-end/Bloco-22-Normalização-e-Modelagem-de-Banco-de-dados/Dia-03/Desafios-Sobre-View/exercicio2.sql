CREATE VIEW film_info AS
	SELECT a.actor_id, CONCAT(first_name, ' ', last_name) AS 'actor' FROM sakila.actor AS a
	INNER JOIN sakila.film AS f
	INNER JOIN sakila.film_actor AS fa 
	WHERE a.actor_id = fa.actor_id AND f.film_id = fa.film_id
	ORDER BY `actor`;
