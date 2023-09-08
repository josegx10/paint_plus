function mover(x0, y0, x1, y1){
    //activate(x0, y0);
    var vectorseleccionado = parseInt(localStorage.getItem('FiguraStatus'));

    if(figuras[vectorseleccionado].estado){
        if(figuras[vectorseleccionado].tipo == 'circulo'){
            for(n = 0 ;n < figuras[vectorseleccionado].coordenadasCirculo.x.length;n++){
                figuras[vectorseleccionado].coordenadasCirculo.x[n] += (x1 - x0);
                figuras[vectorseleccionado].coordenadasCirculo.y[n] += (y1 - y0); 
            }
        }else if(figuras[vectorseleccionado].tipo == 'poligono' || figuras[vectorseleccionado].tipo == 'cuadrado' || figuras[vectorseleccionado].tipo == 'lado' || figuras[vectorseleccionado].tipo == 'rectangulo'){
            for(l = 0 ;l < figuras[vectorseleccionado].nLados;l++){
                for(n = 0 ;n < figuras[vectorseleccionado].coordenadas[l].lado.length;n++){
                    figuras[vectorseleccionado].coordenadas[l].lado[n].x += (x1 - x0);
                    figuras[vectorseleccionado].coordenadas[l].lado[n].y += (y1 - y0); 
                }
            }
            if( figuras[vectorseleccionado].tipo != 'lado'){
                for(n = 0 ;n < figuras[vectorseleccionado].coordenadasCirculo.x.length;n++){
                    figuras[vectorseleccionado].coordenadasCirculo.x[n] += (x1 - x0);
                    figuras[vectorseleccionado].coordenadasCirculo.y[n] += (y1 - y0); 
                }
            }
        }else if(figuras[vectorseleccionado].tipo == 'ellipse'){
            for(p = 0; p < figuras[vectorseleccionado].coordenadas.length ; p++){
                figuras[vectorseleccionado].coordenadas[p].x  += (x1 - x0);
                figuras[vectorseleccionado].coordenadas[p].y  += (y1 - y0);
            }
        }
        if(figuras[vectorseleccionado].tipo != 'lado'){
            figuras[vectorseleccionado].puntoCentral.x += (x1 - x0);
            figuras[vectorseleccionado].puntoCentral.y += (y1 - y0);
        }
        
    }

}