const nombre=document.getElementById('nombre');
const email=document.getElementById('email');
const materia=document.getElementById('materia');
const boton=document.getElementById("btn-enviar");
const resultado=document.querySelector(".resultado")

boton.addEventListener("click",(e)=>{
	e.preventDefault();
	let error=validarCampos();
	if(error[0]){
		resultado.innerHTML = error[1];
	}else{
		resultado.innerHTML="solicitud enviada";
	}

})
const validarCampos=()=>{
	let error=[];
	if(nombre.value.lengt < 5 ){
		error[0]=true;
		error[1]="el nombre no puede contener menos de 5 caracteres"
		return error;
	}else if(nombre.value.lengt>40){
		error[0]=true;
		error[1]="el nombre no puede contener msd de 5 caracteres"
		return error;
	}
	error[0]=false;
	return error;
}