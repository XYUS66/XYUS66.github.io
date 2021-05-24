let diaHoy = Number(prompt("Indique el día actual"))
let mesHoy = Number(prompt("Indique el mes actual"))
let añoHoy = Number(prompt("Indique el año actual"))

let diaNaci = Number(prompt("Indique el día nacimiento"))
let mesNaci = Number(prompt("Indique el mes nacimiento"))
let añoNaci = Number(prompt("Indique el año nacimiento"))

let edad = añoHoy-añoNaci

console.log("Fecha actual: " + diaHoy + "/" +  mesHoy + "/" + añoHoy)
console.log("Fecha de nacimiento: " + diaNaci + "/" +  mesNaci + "/" + añoNaci)
console.log("Su edad es: " + edad)

if (edad>=65)
{
    console.log("Usted esta jubilado")
}