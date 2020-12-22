function Init() {


//INICIALIZO PRODUCTOS
var listadoProductos = [];
listadoProductos[0] = { nombre: "Monitor 23'' ", precio: 2700, enOferta: true };
listadoProductos[1] = { nombre: "Estabilizador de tension", precio: 650, enOferta: false };
listadoProductos[2] = { nombre: "CPU Prearmado", precio: 4200, enOferta: false };
listadoProductos[3] = { nombre: "Proyector", precio: 5000, enOferta: true };


var select = document.getElementById('productos');
select.options.length = 0; // clear out existing items
for (var i = 0; i < listadoProductos.length; i++) {
    var l = listadoProductos[i];
    select.options.add(new Option(l.nombre))


    if(listadoProductos[i].enOferta==true){
    document.getElementById("Oferta").checked
  }else{}
}

//INICIALIZO VENDEDORES


var vendors = [];
vendors[0] = "Juan";
vendors[1] = "Mariano";
vendors[2] = "José";
vendors[3] = "Romina";


document.getElementById('vendedores').options.length = 0; // clear out existing items
for (var j = 0; j < vendors.length; j++) {
    var h = vendors[j];
    document.getElementById('vendedores').options.add(new Option(h));
  }





}



function refreshCheck() {  
        

   
}


	

	function Cliente(){
	this.Fecha = document.getElementById("Fecha").value;
	this.Cliente = document.getElementById("Cliente").value;
	this.Producto = document.getElementById("productos").value;
	this.Cantidad = document.getElementById("Cantidad").value;
	this.Vendedor = document.getElementById("vendedores").value;
	if (document.getElementById("Oferta").checked==true) this.Oferta = "Si"
		else
			this.Oferta="No"
	

	}
	
	function AgregarLineaDeTexto(TextoLinea) {
	
    document.getElementById("consulta").innerHTML += "<div class=\"well well-sm\" id=\"a\">"+
    TextoLinea+"<input type =\"button\"class=\"btn-danger\"onClick=\"this.parentNode.parentNode.removeChild(this.parentNode)\" value=\"borrar\"/></div>"; 
    
    }



	function CargarProducto()
	{
		var V = new Cliente();
		
		function Retorno()
		{
	    	return "Fecha: " + V.Fecha + " - Cliente: " + V.Cliente + " - Producto: "+ (V.Producto) + " - Cantidad: " + V.Cantidad + " - Vendedor: "+ (V.Vendedor) +  " - Oferta: " + 
	    V.Oferta + "  ";
		}
		console.log(Retorno());

		

		AgregarLineaDeTexto(Retorno())

             $("#bloquer").css('display', 'none');
             $("#ventana_emergente").css('display', 'none');


    }

	

	




 jQuery.fn.doBloquer = function(){

          $(this).css({
             'position': 'fixed',
             'width': '100%',
             'height': '100%',
             'left': '0px',
             'top': '0px',
             'background-color': '#000',
             'opacity': 0.8,
             'z-index': '999'
          });
          $(this).fadeIn(500);
       }
       jQuery.fn.doModal = function(){
          var w = $(window).width();
          var h = $(window).height();
          var divW = $(this).width();
          var divH = $(this).height();
          $(this).css({
             'position': 'absolute',
             'left': (w/2)-(divW / 2)+"px",
             'top': (h/2)-(divH / 2)+"px",
             'z-index': '999'
          });
          $(this).fadeIn(500);
       }
       $(document).ready(function(){
          $("#abrir").click(function(){
             $("#bloquer").doBloquer();
             $("#ventana_emergente").doModal();
          });
          $("#cerrar").click(function(){
             $("#bloquer").css('display', 'none');
             $("#ventana_emergente").css('display', 'none');
          });
       });