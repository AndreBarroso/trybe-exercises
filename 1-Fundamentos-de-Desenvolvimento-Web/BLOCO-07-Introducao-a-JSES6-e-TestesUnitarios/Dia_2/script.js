const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    let array = Object.values(order);
    console.log(`Olá ${array[3].delivery.deliveryPerson}, entrega para: ${array[0]}, Telefone: ${array[1]}`); 
    console.log(`${array[2].street} N:${array[2].number} AP:${array[2].apartment}`);
  }


  /* street: 'Rua das Flores',
      number: '389',
      apartment: '701',*/
  
  customerInfo(order);
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    let array = Object.values(order);
    array[3].delivery.deliveryPerson = 'Luiz Silva';
    array[4].payment = 60;
    console.log(`Olá ${array[3].delivery.deliveryPerson}, o total do seu pedido de muzzarella, calabresa e ${array[3].drinks.coke.type} é de R$${array[4].payment}.`); 
  }
  
  orderModifier(order);
