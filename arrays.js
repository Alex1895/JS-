<!DOCTYPE html>
<html>
<body>

<p></p>

<p id="demo"></p>
<input id="txt" type="text"></input>
<button onclick="printarray()">print</button>
<button onclick="add()">add</button>
<button onclick="del()">del</button>

<script>
var FMF = ["chivas","cruz_azul","america","pumas"];
	
function printarray() {
 	document.getElementById("demo").innerHTML = FMF;
}
function add(){
	
	var txt = document.getElementById("txt").value;
    if(txt == 0){
    	alert ("textfield is empty");
    }else{
    	FMF.push(txt);
        printarray();
        
    }
    
}
function del(){
	var deltxt = FMF.indexOf(document.getElementById("txt").value);
    if (deltxt > -1){
    	FMF.splice(deltxt, 1);
        printarray();
    }else{
    	alert ("Element not found!");
    	printarray();	
    }
}
</script>

</body>
</html>
