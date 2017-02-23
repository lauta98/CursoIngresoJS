function Mostrar()
{

	var i;
	var numero;
	var cantidadDiv=0;
	var bandera;

	numero=prompt("Ingresame el numero wachin: ");
	numero=parseInt(numero);

		for(i=1;i <=numero; i++)
		{
			if(bandera==0)
			{
				document.write(numero);
				bandera=1
			}

			else
			{
				document.write("-"+numero);
			}

				if(numero % i ==0)
				{
				document.write(i);
				
				cantidadDiv++;
				}

			
		}
		document.write("La cantidad de numeros divisibles es: "+cantidadDiv);


}//FIN DE LA FUNCIÓN