
function dibujar(x, y) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x), Math.round(y), grosor, grosor);
    ctx.fill();
    
}
function dibujarFigura(x, y, indiceF) {
    ctx.beginPath();
    ctx.fillStyle = figuras[indiceF].color;
    
    ctx.fillRect(Math.round(x), Math.round(y), figuras[indiceF].grosor, figuras[indiceF].grosor);
    ctx.fill();
}

function dibujarTextura(x, y, indiceF){
    ctx.beginPath();
    ctx.fillStyle = figuras[indiceF].colorTextura;
    ctx.fillRect(Math.round(x), Math.round(y), figuras[indiceF].grosor, figuras[indiceF].grosor);
    ctx.fill();
}

function limpiarCanvas(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    VerGrosor();
    for(n = 0; n < figuras.length; n++){
        if(figuras[n].textura){
            ctx.beginPath();
            if(figuras[n].tipo == 'circulo'){
                for(m = 0; m < figuras[n].coordenadasCirculo.x.length; m++){
                    ctx.lineTo(figuras[n].coordenadasCirculo.x[m], figuras[n].coordenadasCirculo.y[m], figuras[n].puntoCentral.x, figuras[n].puntoCentral.y);
                }
            }else if(figuras[n].tipo == 'poligono' || figuras[n].tipo == 'cuadrado' || figuras[n].tipo == 'lado' || figuras[n].tipo == 'rectangulo' ){
                for(l = 0; l < figuras[n].nLados; l++){
                    for(m = 0; m < figuras[n].coordenadas[l].lado.length; m++){
                        ctx.lineTo(figuras[n].coordenadas[l].lado[m].x, figuras[n].coordenadas[l].lado[m].y, figuras[n].puntoCentral.x, figuras[n].puntoCentral.y);
                    }
                }
            }else if(figuras[n].tipo == 'lapiz' || figuras[n].tipo == 'ellipse'){
                for(p = 0; p < figuras[n].coordenadas.length ; p++){
                    ctx.lineTo(figuras[n].coordenadas[p].x, figuras[n].coordenadas[p].y, figuras[n].puntoCentral.x, figuras[n].puntoCentral.y);
                }
            }
            ctx.closePath();
            ctx.fillStyle = figuras[n].colorTextura;
            ctx.fill();
        }
        if(figuras[n].tipo == 'circulo'){
            
            for(m = 0; m < figuras[n].coordenadasCirculo.x.length; m++){
               dibujarFigura(figuras[n].coordenadasCirculo.x[m], figuras[n].coordenadasCirculo.y[m],n);
            }
            
           
        }else if(figuras[n].tipo == 'poligono' || figuras[n].tipo == 'cuadrado' || figuras[n].tipo == 'lado' || figuras[n].tipo == 'rectangulo' ){
            for(l = 0; l < figuras[n].nLados; l++){
                for(m = 0; m < figuras[n].coordenadas[l].lado.length; m++){
                    dibujarFigura(figuras[n].coordenadas[l].lado[m].x, figuras[n].coordenadas[l].lado[m].y, n);
                }
            }
        }else if(figuras[n].tipo == 'lapiz' || figuras[n].tipo == 'ellipse'){
            for(p = 0; p < figuras[n].coordenadas.length ; p++){
                dibujarFigura(figuras[n].coordenadas[p].x, figuras[n].coordenadas[p].y, n);
            }
        } 
    }
}
