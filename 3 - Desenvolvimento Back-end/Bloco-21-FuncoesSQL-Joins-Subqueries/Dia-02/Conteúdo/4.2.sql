USE hotel;

SELECT B.id, B.title FROM Books AS B
WHERE EXISTS (
	SELECT * FROM Books_Lent AS BL
    WHERE B.id = BL.book_id
) 
AND B.title LIKE '%lost%';
