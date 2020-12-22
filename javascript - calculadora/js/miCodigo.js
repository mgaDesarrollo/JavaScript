

function sumare (num1,num2){
	return parseInt(num1)+parseInt(num2);
		}
function restare (num1,num2){
	return parseInt(num1)-parseInt(num2);
		}
 function dividire (num1,num2){
	return parseInt(num1)/parseInt(num2);
		}
 function multiplicare(num1,num2){
	return parseInt(num2)*parseInt(num1);
		}
 function potenciare(num1,num2){
	return parseInt(num1**num2);
		}
 function calcularResto(num1,num2){
	return parseInt(num1)%parseInt(num2);
		}
function raizCuadrada(num){
return	Math.sqrt(num);
		}
function raizCubica(num){
	return Math.cbrt(num);
}


let operacion=0;

alert("Que operacion desea realizar? 1 suma, 2 resta, 3 dividir, 4 multiplicar,5 potencia, 6 calcular resto")
operacion=prompt("Ingrese numero op" );


if(operacion==1){

	let numero1=prompt("ingrese n1: ");

	let numero2=prompt("ingrese n2: ");

	resultado=sumare(numero1,numero2);

	alert(`Tu resultado es : ${resultado}`);

}else if(operacion==2){

	let numero1=prompt("ingrese n1: ");

	let numero2=prompt("ingrese n2: ");

	resultado=restare(numero1,numero2);

	alert(resultado);

}else if(operacion==3){

	let numero1=prompt("ingrese n1: ");

	let numero2=prompt("ingrese n2: ");

	resultado=dividire(numero1,numero2);

	alert(resultado);

}else if(operacion==4){

	let numero1=prompt("ingrese n1: ");

	let numero2=prompt("ingrese n2: ");

	resultado=multiplicare(numero1,numero2);

	alert(resultado);

}else if(operacion==5){

	let numero1=prompt("ingrese n1: ");

	let numero2=prompt("ingrese n2: ");

	resultado=potenciare(numero1,numero2);
	alert(resultado);

}else if(operacion==6){

	let numero1=prompt("ingrese n1: ");

	let numero2=prompt("ingrese n2: ");

	resultado=calcularResto(numero1,numero2);
	alert(resultado);

}else if(operacion==7){
	let num=prompt("Ingrese numero");

	resultado=raizCuadrada(num);
	alert(resultado);
}else if(operacion==8){

}else{
	alert("no se a encontrado la operación")
}
