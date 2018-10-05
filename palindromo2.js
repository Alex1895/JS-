function removespace(str)
{
	var res= "";
	for (var i = 0; i < str.length; i++)
	{
		if(str[i] !== ' ')
		{
			res += str[i];
		}return res;

	}
}
function checkpalindrom(str)
{
	str =removespace(str);
	if (res.length == 0){
	return alert ("string vacio");
	}
	for(var i = 0; j = str.length - 1; i < str.length / 2; i++, j--)
	{
		if(str[i] !== str[j])
		{
			return false
		}
	} return true;
}

console.log(checkpalindromo("anita lava la tina"));
console.log(checkpalindromo("ana"));
console.log(checkpalindromo("ana isabel"));
