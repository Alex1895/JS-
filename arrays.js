var html = document.getElementById("result_palindromo");
//html.innerHTML=frutas;
var txt= document.getElementById("input_palindromo").value;
function arrays(){
var frutas = ["kiwi","pera","durazno","manzana"];
var txt= document.getElementById("input_palindromo").value;
}
function add(){
    //var tienda = {frutas :["kiwi","pera","durazno","manzana"], sodas:["manzanita","coca-cola","fanta"]};
    if (txt.length > 0 ){
        alert("text_field empty");
    }else{
        frutas.push(txt);
    html.innerHTML=frutas;
    }
}
function del(){
    if(txt.length > 0){
        alert ("text_field empty");
    }else{
        frutas.pop(txt);
    html.innerHTML=frutas;
    }
}
function print(){
    if(frutas.length >0 ){
        alert ("the string is empty");
    }else {
        html.innerHTML=frutas;
    }
    
}
arrays(); 