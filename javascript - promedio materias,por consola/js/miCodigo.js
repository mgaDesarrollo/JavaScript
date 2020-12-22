//aplicacion para un alumno que nescesita saber si apruba las materias segun asistencia ,nota y trabajos entregados
//muestra por consola los resultados

const materias={


	fisica:[10,6,4,"fisica"],//asistencia,promedio,practicos entregados`
	matematica:[10,6,4,"matematica"],
	algebra:[100,7,4,"algebra"],
	quimica:[90,6,4,"quimica"],
	programacion:[80,10,4,"programacion"],
	biologia:[60,6,4,"biologia"]
}


//validar primero si tiene el 90 por ciento de asist `

const aprobo=()=>{
	for(materia in materias){

		let asistencia=materias[materia][0];
		let promedio=materias[materia][1];
		let trabajos=materias[materia][2]

		if(asistencia>=90){
			console.log(materias[materia][3]);
			console.log(`%c Asistencias ok`,`color:green`);
		}else{
			console.log(materias[materia][3]);
			console.log(`%c libre en Asistencias `,`color:red`);
		}
		if(promedio>=7){
						console.log(`%c Aprobado `,`color:green`);
		}else{
						console.log(`%c Desaprobado`,`color:red`);
		}
		if(trabajos>=3){
						console.log(`%c Trabajos entregados `,`color:green`);
		}else{
						console.log(`%c Trabajos Faltantes`,`color:red`);
		}
	}
}
aprobo()