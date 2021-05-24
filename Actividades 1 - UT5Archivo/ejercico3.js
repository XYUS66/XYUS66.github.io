let num1 = Number(prompt("Escriba el primer número"))
let num2 = Number(prompt("Escriba el segundo número"))
comprobar(num1, num2)
function comprobar()
{
    if (num1 == 0)
    {
        console.log("El primer numero es 0")
    }
    else
    {
        console.log(num1 + "/" + num2 + "= " + (num1/num2))
    }
}