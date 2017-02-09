function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom = Math.floor((Math.random() * 10) + 1);

	alert(numeroRandom);

	if (numeroRandom>=9)
	 {
	 	alert("Excelente");
	 }
	 else
	 {
	 	if (numeroRandom>=4)
	 	 {
	 	 	alert("Aprobò");
	 	 }
	 	 else
	 	 {
	 	 	alert("Vamos, la proxima se puede");
	 	 }
	 }
}//FIN DE LA FUNCIÓN
/* para marcar todas las variables:
	seleccion ctrl+D y cambio*/