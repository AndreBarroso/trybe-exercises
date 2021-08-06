USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalPayments(id INT)
RETURNS INT READS SQL DATA
BEGIN 
	DECLARE total INT;
	SELECT COUNT(p.payment_id) AS 'quantidade pagamentos'
	FROM payment AS p
	INNER JOIN customer AS c
	ON p.customer_id = c.customer_id
    WHERE p.customer_id = id
	GROUP BY p.customer_id INTO total ;
    RETURN total;
END $$

DELIMITER $$
    