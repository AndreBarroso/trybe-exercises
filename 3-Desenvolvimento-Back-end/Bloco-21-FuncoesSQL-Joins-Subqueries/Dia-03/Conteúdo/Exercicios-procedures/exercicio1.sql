DELIMITER $$

CREATE PROCEDURE atoresMaisPopulares()
BEGIN
	SELECT CONCAT(a.first_name, ' ',a.last_name) AS 'nome',
	COUNT(fm.film_id) AS 'quantidade' FROM sakila.film_actor AS fm
	INNER JOIN sakila.actor AS a
	ON fm.actor_id = a.actor_id
	GROUP BY fm.actor_id
	ORDER BY `quantidade` DESC, `nome`
	LIMIT 10;
END $$

DELIMITER ;


