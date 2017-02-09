function Mostrar()
{
//tomo la edad  
	var mesDelAño;
	mesDelAño = document.getElementById('mes').value;

	alert (mesDelAño);

	switch(mesDelAño)
	{
		case "Febrero":
		alert("Este mes no tiene mas de 29 dias")
		break;

		default: 
		
		alert("Este mes tiene 30 dias o mas")
		break;

	}
}/*
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		alert("Este mes tiene 30 dias o mas")
		break;
*/
// OTRA OPCION PERO MAS LARGO
	


//FIN DE LA FUNCIÓN