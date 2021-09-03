const express = require('express');
const app = express();

// todo - sample taco payload for now
const tacos = [
    {
        id:1,
        name: "Al Pastor",
        proteins: ["Pork"],
        ingredients: [
            "Pork",
            "Pineapple",
            "Cilantro",
            "Onion"
        ],
        imageUrl:"https://images.pexels.com/photos/2338015/pexels-photo-2338015.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
        id:2,
        name: "Carne Asada",
        proteins: ["Beef"],
        ingredients: [
            "Beef",
            "Cilantro",
            "Onion"
        ],
        imageUrl:"https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
]

app.get('/', function (req, res) {
    res.send("hello");
});

app.get('/tacos', function (req, res) {
    res.send(tacos)
})

app.listen(3000);