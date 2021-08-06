USE sakila;

DELIMITER $$

CREATE FUNCTION getMovie(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN 
DECLARE film VARCHAR(100);
SELECT f.title FROM inventory AS i
INNER JOIN film AS f
ON f.film_id = i.film_id
WHERE i.inventory_id = id INTO film;
RETURN film;
END $$

DELIMITER ;
