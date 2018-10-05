<!DOCTYPE html>
<html>
<head>
</head>
<body>
<p id="demo"></p>
<script>
function palindromo(){
var cadena = "";
//document.getElementById("demo").innerHTML= cadena; 
cadena = cadena.replace(/ /g,"");
var str = cadena.split("");
str = str.reverse().join("");
var contenedor = document.getElementById("demo");
if(str.length == 0 )
{
	return alert("the array is empty");
}else if(cadena === str)
{
	contenedor.innerHTML= str; 

}else
{
	return alert("no es palindromo");
}//nombre = miguel; nombre+= lopez;
}
setTimeout(palindromo(), 10);
palindromo();
</script>
</body>
</html>
