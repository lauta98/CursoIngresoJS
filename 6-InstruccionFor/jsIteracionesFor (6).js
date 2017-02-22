function Mostrar()
{
	var i;
	var numero;
	var cantidadPar=0;

	numero=prompt("Ingresame el numero wachin: ");
	numero=parseInt(numero);

		for(i=1;i <=numero; i++)
		{
			if(i % 2==0)
			{
				document.write(i);
				cantidadPar++;
			}
		}
		document.write("La cantidad de numeros pares es: "+cantidadPar);

}//FIN DE LA FUNCIÓN