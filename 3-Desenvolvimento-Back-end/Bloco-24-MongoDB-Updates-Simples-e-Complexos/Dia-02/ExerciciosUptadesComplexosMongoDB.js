/* Exercícios uptade complexos em mongoDB parte1 */

/* Exercício 1: Adicione a categoria "superhero" ao filme Batman . */
db.movies.updateOne(
  {title: "Batman"},
  {$push: {category: "superhero"}},
);

/* Exercício 2: Utilizando o modificador $each , adicione as categorias
"villain" e "comic-based" ao filme Batman . */
db.movies.updateOne(
  {title: "Batman"},
  {
    $push:
     {
       category: {
         $each: [ "villain", "comic-based"]
       }
     }

  },
);

/* Exercício 3: Remova a categoria "action" do filme Batman . */
db.movies.updateOne(
  {title: "Batman"},
  {$push: {category: "action"}},
);

/* Exercício 4: Remova o primeiro elemento do array category do filme
Batman . */
db.movies.updateOne(
  {title: "Batman"},
  {$pop: {category: -1}},
);

/* Exercício 5: Remova o último elemento do array category do filme Batman . */
db.movies.updateOne(
  {title: "Batman"},
  {$pop: {category: 1}},
);

/* Exercício 6: Adicione o elemento "action" ao array category do
filme Batman , garantindo que esse valor não se duplique.
 */
db.movies.updateOne(
  {title: "Batman"},
  {$addToSet: {category: "action"}},
);

/* Exercício 7: Adicione a categoria "90's" aos filmes Batman
e Home Alone . */
db.movies.updateOne(
  {title: {$in: ["Batman", "Home Alone"] } },
  {$push: {category: "90's"}},
);

/* Exercício 8: Crie um array de documentos chamado cast para o filme
Home Alone com os seguintes dados:

                    {
                      "actor": "Macaulay Culkin",
                      "character": "Kevin"
                    },
                    {
                      "actor": "Joe Pesci",
                      "character": "Harry"
                    },
                    {
                      "actor": "Daniel Stern"
                    }

*/
db.movies.updateOne(
  { title: "Home Alone" },
  {
$push: {
      cast: {
$each: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin",
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry",
          },
          {
            "actor": "Daniel Stern",
          },
        ],
      },
    },
  },
);


/* Exercício 9: Adicione o campo character com o valor Marv ao array
de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone .*/
db.movies.updateOne(
  {title: "Home Alone", "cast.actor": "Daniel Stern"},
  {
    $set: {"cast.$character": "Marv"}
  }
);


/* Exercício 10: Crie um array de documentos chamado cast para
o filme Batman com os seguintes dados: */
db.movies.updateOne(
  { title: "Batman" },
  {
push: {
      cast: {
each: [
          {
            "character": "Batman",
          },
          {
            "character": "Alfred",
          },
          {
            "character": "Coringa",
          },
        ],
      },
    },
  },
);

/* Exercício 11: Produza três querys para o filme Batman : 
  *Adicione o campo actor , que deve ser um array com o valor Christian Bale ,
   ao array de cast em que o campo character seja igual a Batman ;

  *Adicione o campo actor , que deve ser um array com o valor Michael Caine ,
   ao array de cast em que o campo character seja igual a Alfred ;

  *Adicione o campo actor , que deve ser um array com o valor Heath Ledger ,
  ao array de cast em que o campo character seja igual a Coringa .
*/
db.movies.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  {
    $push: {"cast.$.actor": "Christian Bale"}
  }
);

db.movies.updateOne(
  { title: "Batman", "cast.character": "Coringa" },
  {
    $push: {"cast.$.actor": "Heath Ledger"}
  }
);

db.movies.updateOne(
  { title: "Batman", "cast.character": "Michael Caine" },
  {
    $push: {"cast.$.actor": "Alfred "}
  }
);

/* Exercício 12: Adicione aos atores de cast do character Batman do filme Batman
os valores "Michael Keaton" , "Val Kilmer" e "George Clooney" , e deixe o array
em ordem alfabética. */





db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        $each: [
          {
            "name" : "notepad",
            "quantity" : 2,
          },
          {
            "name": "envelopes",
            "quantity": 8,
          },
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
        ],
        $sort: { quantity: -1 },
        $slice: 2,
      },
    },
  },
  { upsert: true },
);