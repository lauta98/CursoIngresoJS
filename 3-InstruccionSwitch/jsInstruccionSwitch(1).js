function Mostrar()

{
	var mes;

	mes=document.getElementById('mes').value;
	
		switch(mes)
	{
		case "Marzo":
			
			alert("A clases!!.")
		break;
		
		case "Julio":
			
			alert("Se vienen las vacaciones!!!")
		break;
		
		case "Enero":
		
			alert("Que comiences bien el año!!!")
		break;
		
		case "Diciembre":
		
			alert("Felices Fiestas!!")
		break;
			
	}	
}
//tomo la edad  
//FIN DE LA FUNCIÓN
/*
{
var mesDelAño = document.getElementById('mes').value;

if (mesDelAño=="Enero")
 {
 	alert("Que comiences bien el año");
 }
else
	if (mesDelAño=="Marzo")
	{
		alert("A clases");
	}
	else
	{	
		if (mesDelAño=="Julio")
		{
		alert("Se vienen las vacaciones!!!");
		}
		else
		{	
			if(mesDelAño=="Diciembre")
			{	
				aler("Felices fiestas!!!")
			}	
			else
			}	
		}	

	}
} NO FUNCIONA*/