/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	// mal lugar numeroDos= parseInt(numeroDos);
/* horrible
	document.getElementById('elnumeroUno').value;="Me llamo jose"
	
	document.getElementById('lanumeroDos').value="Tiene 66 años";
	*/
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	/*
	numeroDos= parseInt(numeroDos);
	numeroUno= parseInt(numeroUno);

	suma= numeroUno+numeroDos;
	*/
	/*
	suma= parseInt(numeroUno)+ parseInt(numeroDos);
	alert( suma );
	*/

	alert(parseInt(numeroUno)+ parseInt(numeroDos));

}

