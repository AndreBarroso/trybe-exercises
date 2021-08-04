USE sakila;
DELIMITER $$

CREATE FUNCTION paymentAmount()
RETURNS INT READS SQL DATA
BEGIN
	DECLARE valor INT;
	SELECT COUNT(payment_id)
    FROM sakila.payment
    INTO valor;
	RETURN valor;
END $$

DELIMITER ;



