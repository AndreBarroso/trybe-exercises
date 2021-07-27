USE sakila;

SELECT C.first_name, C.email, C.address_id, A.district
FROM customer AS C
INNER JOIN address AS A
ON C.address_id = A.address_id 
WHERE A.district = 'California'
AND C.first_name LIKE '%rene%';
