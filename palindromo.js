function palindromo(){
    var v_input = document.getElementById("input_palindromo").value;
    var cadena = v_input;
    //console.log (cadena);
    cadena = cadena.trim().replace(/s/g,"").toLowerCase();
    //cadena = cadena.toUpperCase();
    var cadaux = cadena;
    var palindromo = cadaux.split("").reverse().join("");
    //console.log(palindromo);
    var html = document.getElementById("result_palindromo");
    if (cadaux === palindromo)
    {
        alert ("es palindromo "+ palindromo);
        html.innerHTML=palindromo;
    }else{
        alert ("no es palindromo "+ cadena);
        html.innerHTML=cadena;
    }
    html.innerHTML = cadaux;
}
palindromo();