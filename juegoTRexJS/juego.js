document.addEventListener('keydown',function(evento){
    if(evento.keyCode==32){
        if(jug.y==suelo){
            saltar();
        }else{
            nivel.velocidad=6;
            nivel.muerto=false;
            nube1.velocidad=1;
            obst1.x=ancho+100;
            nube1.x=ancho+100;
            nivel.puntuacion=0;
        }
        
    }
});

/////////////////////////////////////////////////////////////
//Carga Imagenes/////////////////////////////////////////////
/////////////////////////////////////////////////////////////
var imgJugador,imgNube,imgObstaculo1,imgJugadorC1,imgJugadorC2,imgSuelo;

function cargaImagenes(){

    imgJugador=new Image();
    imgJugadorC1=new Image();
    imgJugadorC2=new Image();
    imgNube=new Image();
    imgObstaculo1=new Image();
    imgObstaculo2=new Image();
    imgSuelo=new Image();

    imgJugador.src='jugador.png';
    imgJugadorC1.src='jugadorC1.png';
    imgJugadorC2.src='jugadorC2.png';

    imgNube.src='nube.png';
    imgObstaculo1.src='obstaculo1.png';
    imgObstaculo2.src='obstaculo2.png';

    imgSuelo.src='suelo.png';

    
    

}

////////////////////////////////////////////////////////////
//Borrar Canvas/////////////////////////////////////////////
////////////////////////////////////////////////////////////
var ancho=700;
var alto=300;
var canvas,ctx;

function inicializa(){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    cargaImagenes();
}

function limpiaCanvas(){
    canvas.width=ancho;
    canvas.height=alto;
}
var suelo=220;
var jug={y:suelo, velocidadY:0,gravedad:2,salto:18,velYmax:20,saltando:false,animacion:0};
var obst1={x:ancho+100+random(),y:suelo-10};
var obst2={x:ancho+150,y:suelo-10};
var nivel={velocidad:6,puntuacion:0000,muerto:false};
var nube1={x:400,y:15,velocidad:3};
var suelo1={x:0,y:-45};

////////////////////////////////////////////////////
///////////////Elementos del juego//////////////////
                ////////////////
                

function dibujaJugador(){//jugador
    if(jug.y==suelo){
        if(jug.animacion==0){
            ctx.drawImage(imgJugadorC1, 0,0, 80,89, 100, jug.y, 50, 50);
            jug.animacion=1;

        }else if(jug.animacion==1){
            ctx.drawImage(imgJugadorC2, 0,0, 80,89, 100, jug.y, 50, 50);
            jug.animacion=0;
        }
    }else if(jug.y!=suelo){
        ctx.drawImage(imgJugador, 0,0, 80,89, 100, jug.y, 50, 50);
    }
    
    
}
function dibujaObstaculo1(){//obstaculo
    ctx.drawImage(imgObstaculo1,0,0,51,100,obst1.x,obst1.y,40,60)
}

function dibujaObstaculo2(){//obstaculo2
    ctx.drawImage(imgObstaculo2,0,0,51,100,obst2.x,obst2.y,42,64)
}

function movimientoObstaculo1(){
    if(obst1.x<-100){
        obst1.x=ancho+100;
        nivel.puntuacion+=100;
    }else{
        obst1.x-=nivel.velocidad;
    }
}
function movimientoObstaculo2(){
    if(obst2.x<-100){
        obst2.x=ancho+100;
        nivel.puntuacion+=100;
    }else{
        obst2.x-=nivel.velocidad;
    }
}

function dibujaNube(){
    ctx.drawImage(imgNube,0,0,55,34,nube1.x,nube1.y,100,78)

}
function movimientoNube(){
    if(nube1.x<-100){
        nube1.x=ancho+100;
    }else{
        nube1.x-=nube1.velocidad;
    }
}

function dibujaSuelo(){
    ctx.drawImage(imgSuelo,suelo1.x,150,500,200,0,25,1000,400);
}
function movimientoSuelo(){
    if(suelo1.x>1000){
        suelo1.x=0;
    }
    else{
        suelo1.x+=nivel.velocidad;
    }

}
////////////////////////////////////////////////////
///////////////////////////////////////////////////
function saltar(){
    jug.saltando=true;
    jug.velocidadY=jug.salto;
}



function gravedad(){
    if(jug.saltando==true){

        if(jug.y - jug.velocidadY - jug.gravedad>suelo){
            jug.saltando=false;
            jug.velocidadY=0;
            jug.y=suelo;
        }else{
        jug.velocidadY-=jug.gravedad;
        jug.y-=jug.velocidadY;
        }
    }

}
function colision(){
    if (obst1.x >=100 && obst1.x<=150){
        if(jug.y>=suelo-25){
            nivel.muerto=true;
            nivel.velocidad=0;
            nube1.velocidad=0;

        }
    }

}
function puntuacion(){
    ctx.font="30px Consolas";
    ctx.fillStyle='#555555';
    ctx.fillText(`${nivel.puntuacion}`,600,50);

    if(nivel.muerto==true){
        ctx.font="60px Courier New";
        ctx.fillText(`GAME OVER`,200,150);
    }
}

function random() {
    return Math.random() * (10 - 100) + 10;
  }
////////////////////////////////////////////////////////////
//Bucle Principal///////////////////////////////////////////
////////////////////////////////////////////////////////////

var fps=50;
setInterval(function(){
    principal();
},1000/fps);

function principal(){
    
        limpiaCanvas();
        gravedad();
        colision();
        movimientoSuelo();
        movimientoObstaculo1();
        movimientoNube();
        dibujaSuelo();
        dibujaJugador();
        dibujaObstaculo1();
        dibujaNube();
        puntuacion();
    
  

 
}