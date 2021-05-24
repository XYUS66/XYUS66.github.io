let num = Number(prompt("Escoja la tabla del numero deseado"))
MostrarTablaMultiplicar(num)
function MostrarTablaMultiplicar()
{
    for (i=0; i<=10; i++)
    {
        console.log(num + "x" + i + "= " + num * i);
    }
}
