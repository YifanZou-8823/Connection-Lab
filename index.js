let express = require('express');
let app = express();

let signs = {
  "data": [
    {
      name: "ford",
      establishedYear: 1903,
      ceo: "Jim Farley",
      country: "USA"
    },
    {
      name: "toyota",
      establishedYear: 1937,
      ceo: "Koji Sato",
      country: "Japan"
    },
    {
      name: "volkswagen",
      establishedYear: 1937,
      ceo: "Oliver Blume",
      country: "Germany"
    },
    {
      name: "mercedes_benz",
      establishedYear: 1926,
      ceo: "Ola Källenius",
      country: "Germany"
    },
    {
      name: "BMW",
      establishedYear: 1916,
      ceo: "Oliver Zipse",
      country: "Germany"
    },
    {
      name: "honda",
      establishedYear: 1948,
      ceo: "Toshihiro Mibe",
      country: "Japan"
    },
    {
      name: "hyundai",
      establishedYear: 1967,
      ceo: "Jose Muñoz",
      country: "South Korea"
    },
    {
      name: "tesla",
      establishedYear: 2003,
      ceo: "Elon Musk",
      country: "USA"
    },
    {
      name: "general_motors",
      establishedYear: 1908,
      ceo: "Mary Barra",
      country: "USA"
    },
    {
      name: "stellantis",
      establishedYear: 2021,
      ceo: "Antonio Filosa",
      country: "Netherlands"
    }
  ]
}
app.get('/', (request, response) => {
    response.send("HomePage");
})

app.get('/about', (request, response) => {
    response.send("this is the about page");
})

app.get('/signs', (request, response) => {
    response.json(signs);
})

app.get('/signs/:sign', (request, response) => {
    console.log(request.params.sign);
    let user_sign = request.params.sign;
    let user_obj;
    for (let i = 0; i < signs.data.length; i++) {
        if (user_sign == signs.data[i].name) {
            user_obj = signs.data[i];
        }
    }
    console.log(user_obj);
    if(user_obj){
        response.json(user_obj);
    } else {
        response.json({status:"info not present"});
    }
})

app.listen(3000, () => {
    console.log("Listening at localhost:3000");
})

