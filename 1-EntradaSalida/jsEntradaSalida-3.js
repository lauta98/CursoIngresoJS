/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{//Copiar elNombre- document.g(tab)+shift.I
	var nombre;
	nombre=document.getElementById('elNombre').value;
	alert("Su nombre es" +nombre);
}