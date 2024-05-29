const job = "Profesor";

const data = {
    name: "Juana",
    age: 30,
    job: job,
    active: true,
    hobbies: [
        "Play games",
        "Read books",
        "Sleep"
    ],
    studies: {
        primary: "Argelino Duran",
        school: "Colcaro",
        college: "UFPSO"
    },

    greeting: function (){
        console.log("Se te nota qué")
        console.log("Tú me estás amando")
        console.log("y que con tu mirar")
        console.log("Me estás embrujando")
    }
}

data.name = "Pepa";
data.lastname = "Pig";

delete data.active;

data.greeting();

const drink = '{"ingredients":[{"idIngredient":"552","strIngredient":"Elderflower cordial","strDescription":"Elderflower cordial is a soft drink made largely from a refined sugar and water solution and uses the flowers of the European elderberry. Historically the cordial has been popular in North Western Europe where it has a strong Victorian heritage.","strType":"Cordial","strAlcohol":"No","strABV":null}]}'

const drinkObj = JSON.parse(drink)
console.log(drinkObj.ingredients[0].idIngredient)
