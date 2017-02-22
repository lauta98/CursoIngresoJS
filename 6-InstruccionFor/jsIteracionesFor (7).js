function Mostrar()
{

var i;
	var numero;
	var 
	cantidadDiv=0;

	numero=prompt("Ingresame el numero wachin: ");
	numero=parseInt(numero);

		for(i=1;i <=numero; i++)
		{
			if(numero % i ==0)
			{
				document.write(i);
				
				cantidadDiv++;
			}
		}
		document.write("La cantidad de numeros divisibles es: "+cantidadDiv);


}//FIN DE LA FUNCIÓN