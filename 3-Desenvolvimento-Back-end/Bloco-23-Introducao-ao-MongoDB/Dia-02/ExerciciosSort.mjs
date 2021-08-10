//  Exercícios sobre Sort

/* 1-Ordene alfabeticamente os restaurantes pelo nome (atributo name ). */
db.restaurants.find().sort( { "name": 1  }).pretty();

/* 2- Ordene alfabeticamente os restaurantes pelo nome (atributo name ). */
db.restaurants.find().sort({ "rating": 1 }).pretty();
