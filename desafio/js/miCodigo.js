class Vehiculo{
	constructor(marca,modelo,tipo,precio){
		this.marca=marca;
		this.modelo=modelo;
		this.tipo=tipo;
		this.precio=precio;
		this.info=`Marca: ${this.marca} // Modelo:  ${this.modelo} // Tipo: ${this.tipo} //Precio: $ ${this.precio} `;
}


  

		verInfo(){
		console.log(this.info)}
}

function cargaVehiculos(){
//let vehiculos=new Vehiculo[];
vehiculos[0]=new Vehiculo("Peugeot","206","4","900000");
vehiculos[1]=new Vehiculo("Honda","Titan","125cc","60000");
vehiculos[2]=new Vehiculo("Peugeot","208","4","200000");
vehiculos[3]=new Vehiculo("Yamaha","YBR","160cc","85500");
}

function mostrarVehiculos(){
	for (let i = 0; i < vehiculos.length; i++){
         console.log(vehiculos[i].verInfo());		
	}
}

function masCaro(){
	let preciosVehiculos = [],
		precioMasAlto,
		vehiculoMasCaro;

    for(let i = 0; i < vehiculos.length; i++){
        preciosVehiculos.push(vehiculos[i].precio);
	}
	precioMasAlto = Math.max.apply(Math, preciosVehiculos);
	for(let i = 0; i < vehiculos.length; i++){
		if(vehiculos[i].precio == precioMasAlto.toString()) {
			vehiculoMasCaro = vehiculos[i].marca + " " + vehiculos[i].modelo;
		}
	}
	console.log(vehiculoMasCaro);
}

function masBarato(){
	let preciosVehiculos = [],
		precioMasBajo,
		vehiculoMasBarato;

    for(let i = 0; i < vehiculos.length; i++){
        preciosVehiculos.push(vehiculos[i].precio);
	}
	precioMasBajo = Math.min.apply(Math, preciosVehiculos);
	for(let i = 0; i < vehiculos.length; i++){
		if(vehiculos[i].precio == precioMasBajo.toString()) {
			vehiculoMasBarato = vehiculos[i].marca + " " + vehiculos[i].modelo;
		}
	}
	console.log(vehiculoMasBarato);
}
const vehiculos = [];
cargaVehiculos();
mostrarVehiculos();
masCaro();
masBarato();




