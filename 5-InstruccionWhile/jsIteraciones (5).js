function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

	while(sexo != "f" && sexo != "m")
	{
		sexo=prompt("Sexo ingresado no valido, vuelva a intentar");
	}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN