function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(numero<0 || numero>9)
		{
			numero=prompt("Numero incorrecto, voler a ingresar");
			numero=parseInt(numero);
		}
		document.getElementById('Numero').value=numero;

	if (numero >=0 && numero<=9)
	 	{
	 		alert("numero correcto");
	 	}
}//FIN DE LA FUNCIÓN