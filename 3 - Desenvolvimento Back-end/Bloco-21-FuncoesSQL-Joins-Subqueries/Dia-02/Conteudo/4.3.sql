USE hotel;

SELECT Name FROM Customers AS C
WHERE EXISTS (
	SELECT * FROM CarSales AS CS
    WHERE C.CustomerID = CS.CustomerID
);
