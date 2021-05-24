let num1 = Number(prompt("Primer número a multiplicar"))
let num2 = Number(prompt("Segundo número a multiplicar"))
function multi (numero1, numero2)
{
    let result = 0
    for (i=1; i<=numero2; i++)
    {
        result = result + numero1
    }
    return result
}
let r = multi(num1, num2)
console.log(num1 + "x" + num2 + "= " + r)