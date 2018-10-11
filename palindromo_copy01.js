var arrowFunc_Alert_Strings = (param1,param2) =>
{
	alert("valor 1: "+ param1+", valor2: "+param2);
}

function reverse_String()
{
  var v_input = document.getElementById("input_palindromo").value;
  var cadena = v_input;
  var cadena2 = cadena.split('').reverse().join('');
  var cadaux = "";
  var html = document.getElementById("result_palindromo");
  if (cadena.length > 0)
  {
	if(onlyletters(v_input))
	{
		cadena = cadena.toLowerCase().replace(/[^A-Z]/ig,"");	
  	for( var i = (cadena.length - 1); i >= 0; i--)
   	{
    	cadaux += cadena[i];
    	}
   	arrowFunc_Alert_Strings(cadena, cadaux);
	alert(validString(cadena, cadaux));
   	html.innerHTML= cadena + "es lo mismo" + cadena2;
	}
    }else{
	alert ("text field en blanco");
    }
}

function validString(a,b)
{
	if (a === b)
    	{
	 return a + "es Palindromo! ";
    	}else{
	 return a + " no es palindromo";
    }	
}
function onlyletters(inputtxt){
  var regex = /^\d {0,9}$/gm;
  if(inputtxt.match(regex))
  {
	alert ("por favor ingresa solamente caracteres validos");
	return false; 
  } 	
	return true;      
}
reverse_String();