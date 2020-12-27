
//Gabriel Avendaño Calculadora js actualizada

let box ;


function escribir(x){
 box = document.getElementById("numero");


    box.value += x;
    if(x=="c"||x=="C"){
      box.value="";
    }
  
}

function mostrarResultado(){
  x=box.value;
  x=eval(x);
  box.value=x;
}

function borrarUltimoNumero(){
  var x = box.value;
  var despuesDeBorrar= x.length-1;
  var nuevoNumero = x.substring(0,despuesDeBorrar);
  box.value = nuevoNumero;
  
}


function calculo(id){
  
  switch(id){
      
      case "eleva2":
        var y=2;
        var x = box.value;
        var result =Math.pow(x,y);
        box.value= result;
     break;
      
      case "eleva3":
        var y=3;
        var x = box.value;
        var result = Math.pow(x,y);
        box.value= result;
     break;
      
   	  case "logx":
        var x = box.value;
        box.value = Math.log(x);
    break;
      
    case "raiz":
      x=box.value;
      box.value=Math.sqrt(x);
      break;
      
    case "exponencial":
      x=box.value;
      box.value=Math.exp(x);
      break;
      
    case "sen":
      x=box.value;
      box.value=Math.sin(x);
      break;
      
    case "asen":
      x=box.value;
      box.value=Math.asin(x);
      break;
      
    case "cos":
      x=box.value;
      box.value=Math.cos(x);
      break;
      
    case "acos":
      x=box.value;
      box.value=Math.acos(x);
      break;
      
    case "tan":
      x=box.value;
      box.value = Math.tan(x);
      break;

    case "atan":
      x= box.value;
      box.value= Math.atan(x);
      break;

    case "factorial":
      x=box.value;
      
      y=1;
      for(var i=1; i<=x; i++){
        y=y*i;
      }
      box.value=y;
      
      break;
      
  }
  
}



