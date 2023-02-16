let Emitter = require("./objects/emitter.js")
let persona = {
    nombre: "David",
    apellido: "Cruz",
    edad: 18,
    keyPress: function (){
        return "Se ha presionado una tecla";
    },
    mouseOver: function (){
        return "El puntero del mouse esta arriba";
    }
}

console.log(persona.nombre);
console.log(persona['nombre']);



let myKey = 'nombre';
console.log(persona[myKey]); //Se puede acceder a una llave por medio de los corchetes cuadrados [] y una variable

myKey = 'keyPress';
console.log(persona[myKey]())
myKey = 'mouseOver';
console.log(persona[myKey]())

let myArray = []; // creamos un array y le introduciomos datos
myArray.push(4);
myArray.push('Un texto');
myArray.push(persona)
myArray.push(function () {return "Esta es una funcion en un array"});
console.log(myArray) // En java script podemos ingresar diferentes tipos 
console.log(myArray[3]()) // En java script podemos ingresar diferentes tipos 
console.log(myArray[2][myKey]()) // Para acceder las funciones del objeto necesitamos poner nomArray[indice][nombreLlave]()

let functionArray = [];
functionArray.push(()=>{
    return "Funcion 1"
})
functionArray.push(()=>{
    return "Funcion 2"
})
functionArray.push(()=>{
    return "Funcion 3"
})
functionArray.forEach((item)=>{
    console.log(item());
})

let emtr = new Emitter();
emtr.on("greet",()=>{
    console.log( "saludo1") // con el metodo on agregamos la funcion greet a nuestro emitter
})
emtr.on("greet",()=>{
    console.log( "saludo2") // volvemos a agregar una funcion con el mismo nombre pero diferente funcion
})
emtr.emit("greet");

emtr.on("saludo",()=>{
    console.log( "saludo3") 
})
emtr.emit("saludo");