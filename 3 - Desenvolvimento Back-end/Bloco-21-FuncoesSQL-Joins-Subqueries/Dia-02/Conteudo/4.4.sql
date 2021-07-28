USE hotel;

SELECT cus.Name, car.Name FROM Cars AS car
INNER JOIN Customers AS cus
WHERE EXISTS(
	SELECT * FROM CarSales AS cs
    WHERE cs.carID = car.Id AND cus.CustomerID = cs.CustomerID
)