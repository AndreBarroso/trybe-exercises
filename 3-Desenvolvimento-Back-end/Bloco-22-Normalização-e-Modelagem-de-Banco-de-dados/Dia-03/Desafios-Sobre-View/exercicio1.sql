CREATE VIEW film_with_categories AS
	SELECT f.title, c.category_id, c.name FROM sakila.category AS c
	INNER JOIN sakila.film_category AS fc
	INNER JOIN sakila.film AS f
	WHERE c.category_id = fc.category_id AND f.film_id = fc.film_id
	ORDER BY f.title;
