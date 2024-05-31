const storage = "128GB"
const ram = "16GB"
const mobile = {
    storage,
    memory: ram,
    brand: "Nokia",
    screenSize: "6",
    dualSim: true,
    battery: "5000mah",
    phoneOperator: [
        "Movistar",
        "Tigo",
        "Claro",
        "Wom"
    ],

    camera: {
        principal: "40mpx",
        selfie: "16mpx",
        macro: "2mpx"
    },

    ringtone: function(){
        console.log("Hello Moto")
    }

}

mobile.asd = "Creado en tiempo de ejecucion"


mobile.ringtone()
console.log(mobile.phoneOperator)
console.log(mobile.phoneOperator[0])
console.log(mobile.camera.principal)
console.log(mobile.camera)
console.log(mobile.memory)

console.log(JSON.stringify(mobile))

const data = '{"userId": 1,"id": 1,"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" }'

const dataObj = JSON.parse(data)
console.log(dataObj.userId)

//Para irnos a la consola nos ponenemos en la carpeta donde se encuentra el archivo comando node (nombre archivo)
