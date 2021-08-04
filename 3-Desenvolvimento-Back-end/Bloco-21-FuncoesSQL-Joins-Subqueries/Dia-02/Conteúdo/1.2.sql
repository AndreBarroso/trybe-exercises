USE sakila;

SELECT S.first_name, S.last_name, A.address FROM staff AS S
INNER JOIN address AS A
WHERE A.address_id = S.address_id;
