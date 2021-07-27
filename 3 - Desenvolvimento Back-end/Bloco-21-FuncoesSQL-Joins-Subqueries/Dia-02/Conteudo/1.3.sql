USE sakila;

SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address 
FROM customer AS C
INNER JOIN address AS A
ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;



