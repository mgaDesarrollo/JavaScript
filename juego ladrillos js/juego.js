var canvas=document.getElementById("miCanvas"); 
var contexto=canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var radioBola = 10;
var paletaAlto = 11;
var paletaAncho = 100;
var paletaX = (canvas.width-paletaAncho)/2;
var movimientoDerecha = false;
var movimientoIzquierda = false;
//ladrillos
var ladrilloFila = 3;//cambia numero de filas de ladrillo
var ladrilloColumna = 5; //cambia numero de columnas de ladrillo
var ladrilloAncho = 75;
var ladrilloAlto = 20;
var ladrilloPadding = 10;
var ladrilloOffsetTop = 30;
var ladrilloOffsetLeft = 30;

var vidas = 3;

var score = 0;

//Guardaremos nuestros ladrillos en una matriz bidimensional
// que contendrá las columnas (c) de los ladrillos. Cada columna contendrá, a su vez, toda la fila (r) de ladrillos.
// Cada ladrillo se va a representar con un objeto con las posiciones "x" e "y" e

var ladrillos = [];
for(c=0; c<ladrilloColumna; c++) {
    ladrillos[c] = [];
    for(r=0; r<ladrilloFila; r++) {
        ladrillos[c][r] = { x: 0, y: 0, estado: 1 };
    }
}

document.addEventListener("keydown", teclaPresionada, false);
document.addEventListener("keyup", teclaSoltada, false);
document.addEventListener("mousemove", mouseMovimiento, false);

function darvidas() {
    contexto.font = "19px Arial";
    contexto.fillStyle = "grey";
    contexto.fillText("Vidas: "+vidas, canvas.width-155, 20);
}

function dibujarScore() {
    contexto.font = "20px consolas";
    contexto.fillStyle = "black";
    contexto.fillText("Score: "+score, 200, 30);
}



function mouseMovimiento(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paletaX = relativeX - paletaAncho/2;
    }
}
function teclaPresionada(tecla) {
    if(tecla.keyCode == 39) {
        movimientoDerecha = true;
    }
    else if(tecla.keyCode == 37) {
        movimientoIzquierda = true;
    }
}
function teclaSoltada(tecla) {
    if(tecla.keyCode == 39) {
        movimientoDerecha = false;
    }
    else if(tecla.keyCode == 37) {
        movimientoIzquierda = false;
    }
}



contexto.beginPath();
contexto.rect(20, 40, 50, 50);
contexto.fillStyle = "#pink";
contexto.fill();
contexto.closePath();



contexto.beginPath();
contexto.rect(160, 10, 100, 40);
contexto.strokeStyle = "rgba(100, 32, 255, 0.5)";
contexto.stroke();
contexto.closePath();



function dibujarPaleta() {
    contexto.beginPath();
    contexto.rect(paletaX, canvas.height-paletaAlto, paletaAncho, paletaAlto);
    contexto.fillStyle = "black";
    contexto.fill();
    contexto.closePath();
}

function dibujarLadrillos() {
    for(c=0; c<ladrilloColumna; c++) {
        for(r=0; r<ladrilloFila; r++) {
            if(ladrillos[c][r].estado==1){

            var ladriX = (c*(ladrilloAncho+ladrilloPadding))+ladrilloOffsetLeft;
            var ladriY = (r*(ladrilloAlto+ladrilloPadding))+ladrilloOffsetTop;
            ladrillos[c][r].x = ladriX;
            ladrillos[c][r].y = ladriY;
            contexto.beginPath();
            contexto.rect(ladriX, ladriY, ladrilloAncho, ladrilloAlto);
            contexto.fillStyle = "grey";
            contexto.fill();
            contexto.closePath();
            }
        }
    }
}

function dibujarBola() {
    contexto.beginPath();
    contexto.arc(x, y, radioBola, 0, Math.PI*2);
    contexto.fillStyle = "white";
    contexto.fill();
    contexto.closePath();
}
function colisiones() {
    for(c=0; c<ladrilloColumna; c++) {
        for(r=0; r<ladrilloFila; r++) {
            var b = ladrillos[c][r];
            // calculo colicion
            if(b.estado==1){
            if(x > b.x && x < b.x+ladrilloAncho && y > b.y && y < b.y+ladrilloAlto) {
                dy = -dy;
                b.estado=0;
                score++;
                if(score == ladrilloFila*ladrilloColumna) {
                    alert("TU GANAS, BIEN HECHO !");
                    document.location.reload();
                }
            }
            }
        }
    }
}

function dibujar() {
    contexto.clearRect(0, 0, canvas.width, canvas.height);//borra el lienzo
    dibujarBola();
    dibujarPaleta();
    dibujarLadrillos();
    colisiones();
    dibujarScore();
    darvidas();
       
    if(x + dx > canvas.width-radioBola || x + dx < radioBola) {
        dx = -dx;
    }
    if(y + dy < radioBola) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-radioBola) {
        if(x > paletaX && x < paletaX + paletaAncho) {
            dy = -dy;
        }
        else {
            vidas--;
            if(!vidas) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                paletaX = (canvas.width-paletaAncho)/2;
            }
        }
    }
    if(movimientoDerecha && paletaX < canvas.width-paletaAncho) {
        paletaX += 7;
    }
    else if(movimientoIzquierda && paletaX > 0) {
        paletaX -= 7;
    }
    
    x += dx;
    y += dy;
}
setInterval(dibujar, 10);