DROP VIEW address_info;
CREATE VIEW address_info AS
	SELECT a.address_id, a.address, a.district, c.city_id, c.city
	FROM sakila.address AS a
	INNER JOIN sakila.city AS c
    ON a.city_id = c.city_id
	ORDER BY c.city;
