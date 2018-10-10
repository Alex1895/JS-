var arrowFunc_Alert_Strings = (param1,param2) =>
{
	alert("valor 1: "+ param1+", valor2: "+param2);
}
function reverse_String()
{
  var v_input = document.getElementById("input_palindromo").value;
  var cadena = v_input;
  cadena = cadena.trim().replace(/[^A-Z0-9]/ig,"").toLowerCase();
  var cadaux = "";
  var html = document.getElementById("result_palindromo");
  if (cadena.length > 0)
  {
  for( var i = (cadena.length - 1); i >= 0; i--)
   {
    	cadaux += cadena[i];
    }
   arrowFunc_Alert_Strings(cadena, cadaux);
   document.getElementById("result_palindromo").innerHTML=cadena + "es lo mismo" + cadaux;
    if (cadaux === cadena)
    {
        alert("es palindromo: " + cadaux);
        html.innerHTML=cadaux;
    }else{
        alert ("no es palindromo "+ cadena);
        html.innerHTML=cadena;
    }
    }else{
	alert ("text field en blanco");
    }
}

reverse_String();