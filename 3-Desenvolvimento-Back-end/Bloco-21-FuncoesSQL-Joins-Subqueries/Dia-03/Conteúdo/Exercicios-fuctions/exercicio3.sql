USE sakila;

DELIMITER $$

CREATE FUNCTION amountMovie(cat VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN 
DECLARE amount INT;
SELECT COUNT(fc.film_id) FROM film_category AS fc
INNER JOIN category AS c
ON fc.category_id = c.category_id
WHERE c.name = cat
ORDER BY fc.category_id INTO amount;
RETURN amount;
END $$

DELIMITER ;
