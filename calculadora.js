function insert(number)
{
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + number;

}
function limpar()
{
    document.getElementById('resultado').innerHTML = "";
}
function apagar()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function total()
{
    var total = document.getElementById('resultado').innerHTML;
    if(total)
    {
        document.getElementById('resultado').innerHTML = eval(total);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "";
    }
}
