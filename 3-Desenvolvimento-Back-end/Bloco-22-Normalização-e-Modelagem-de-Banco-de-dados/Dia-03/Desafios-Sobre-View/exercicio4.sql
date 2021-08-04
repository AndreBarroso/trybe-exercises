CREATE VIEW movies_languages AS
	SELECT f.title, l.language_id, l.name AS 'language' FROM sakila.film AS f
	INNER JOIN sakila.`language` AS l
	ON f.language_id = l.language_id
	ORDER BY f.title;
