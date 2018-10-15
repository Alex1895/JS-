function arrays(){
    //declaracion del arreglo
    var FMF = ["chivas","cruz_azul","america","pumas"];
    //imprimir el arreglo
    console.log(FMF);
    document.getElementById("demo").innerHTML = FMF;
    //metodo para add arrays
    FMF.push("atlas","puebla");
    console.log(FMF);
    document.getElementById("demo").innerHTML = FMF;
    //metodo para eliminar un elemento de un arreglo
    FMF.pop("america");
    console.log(FMF);
    document.getElementById("demo").innerHTML = FMF;
}
arrays();