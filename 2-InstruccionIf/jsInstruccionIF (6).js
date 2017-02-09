function Mostrar()
{
//tomo la edad  

	var edad;

	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

		if (edad>17)
		 	{
		 		alert("es mayor de edad");
			}
		else
			{
				if (edad<13)
				{
				alert("es un niño");
				}
				else
				{
				alert("Es adolescente");
				}
			}
}

	/*

		if(edad>=18)
			{
				alert("Es mayor de edad");
			}
		if (edad>=13 && edad<=17) 
			{
				alert("Es adolescente");
			}
		if (edad<13) 
			{
				alert("es Niño");
			} //OTRA OPCION

}//FIN DE LA FUNCIÓN */