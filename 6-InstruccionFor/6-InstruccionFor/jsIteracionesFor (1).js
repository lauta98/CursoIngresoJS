function Mostrar()
{
	var numero;
	var bandera=0;
	for (var numero =0; numero < 10; numero++)
	 {
	 	if (bandera==0)
	 	 {
	 	 	document.write(numero);
	 	 	bandera=1;
	 	 }
		else
			{
				document.write("-" + numero);
			}
	 }
}