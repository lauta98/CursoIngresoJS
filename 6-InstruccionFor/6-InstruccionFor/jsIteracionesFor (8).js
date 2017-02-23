function Mostrar()
{
	var nombre;
	var edad;
	var nota;
	var sexo;
	var respuesta;
	var contador=0;
	var notaMaxima;
	var sumaNotas=0;
	var promedio;
	var ;

	while(respuesta=="si")
	{
		sexo=prompt("Ingrese su sexo");
		nombre=prompt("Ingrese su nombre");

		edad=prompt("ingrese su edad");
		edad=parseInt(edad);

		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);

		sumaNotas=nota;
		promedio=sumaNotas/contador;

			while(nota<0 || nota>=10)
				{
					nota=prompt("Ingrese su nota");
					nota=parseInt(nota);
				}	

		if(contador==0)
			{
				notaMaxima=nota;


			}
		else
			{
				if(nota>notaMaxima)
				{
				notaMaxima=nota;
				}
				
			}

			if(sexo==f && edad>25 && nota>=4)

			{

				

			}


		contador++
		respuesta=prompt("Desea continuar?");
	}




}//FIN DE LA FUNCIÓN




/*se ingresara los datos de los alumnos del curso de ingreso,
a partir de estos datos deberemos informar lo siguiente:
1)La mejor nota
los datos de los alumnos son:
nombre-edad-nota-sexo-
2)Promedio de notas
3)necesito saber la cantidad de mujeres aprobadas mayores
a 25 años
4)El sexo y el nombre de la ultima persona que se saco 10
5)La cantidad de hombres desaprobados
6)La cantidad de mujeres aprobadas
7)El promedio de notas de las mujeres
8)El promedio de notas de los hombres mayores a 30
9)Que sexo desaprobo mas?
10)Cuantas personas menores a 30 años desaprobaron el examen?
*/