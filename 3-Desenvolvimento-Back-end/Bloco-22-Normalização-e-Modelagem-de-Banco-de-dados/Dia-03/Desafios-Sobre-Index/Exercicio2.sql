DROP INDEX index_address ON sakila.address;
CREATE INDEX postal_code_index ON sakila.address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';