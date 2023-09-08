function borrarse(x0, y0){
    var ordenx, ordeny, vectorseleccionado = 0;
    for(m = 1 ;m <= figuras.length;m++){
        if(figuras[figuras.length-m].tipo == 'circulo'){
            console.log(figuras[figuras.length-m]);
            console.log(figuras[figuras.length-m].coordenadasCirculo);
            console.log(figuras[figuras.length-m].coordenadasCirculo.x.length);
            for(n = 0 ;n < figuras[figuras.length-m].coordenadasCirculo.x.length;n++){
                if(figuras[figuras.length-m].coordenadasCirculo.x[n] <= figuras[figuras.length-m].puntoCentral.x){
                    ordenx = 0;
                }else {
                    ordenx = 1;
                }
                if(figuras[figuras.length-m].coordenadasCirculo.y[n] <= figuras[figuras.length-m].puntoCentral.y){
                    ordeny = 0;
                }else {
                    ordeny = 1;
                }
                if(ordenx == 0 && ordeny == 0){
                    if(figuras[figuras.length-m].coordenadasCirculo.x[n] <= x0 && x0 <= figuras[figuras.length-m].puntoCentral.x 
                    && figuras[figuras.length-m].coordenadasCirculo.y[n] <= y0 && y0 <= figuras[figuras.length-m].puntoCentral.y){
                        figuras[figuras.length-m].estado = true;
                        vectorseleccionado = figuras.length-m;
                        break;
                    }
                }else if(ordenx == 0 && ordeny == 1){
                    if(figuras[figuras.length-m].coordenadasCirculo.x[n] <= x0 && x0 <= figuras[figuras.length-m].puntoCentral.x 
                    && figuras[figuras.length-m].puntoCentral.y <= y0 && y0 <= figuras[figuras.length-m].coordenadasCirculo.y[n]){
                        figuras[figuras.length-m].estado = true;
                        vectorseleccionado = figuras.length-m;
                        break;
                    }
                }else if(ordenx == 1 && ordeny == 0){
                    if(figuras[figuras.length-m].coordenadasCirculo.x[n] >= x0 && x0 >= figuras[figuras.length-m].puntoCentral.x 
                    && figuras[figuras.length-m].coordenadasCirculo.y[n] <= y0 && y0 <= figuras[figuras.length-m].puntoCentral.y){
                        figuras[figuras.length-m].estado = true;
                        vectorseleccionado = figuras.length-m;
                        break;
                    }
                }else if(ordenx == 1 && ordeny == 1){
                    if(figuras[figuras.length-m].coordenadasCirculo.x[n] >= x0 && x0 >= figuras[figuras.length-m].puntoCentral.x 
                    && figuras[figuras.length-m].coordenadasCirculo.y[n] >= y0 && y0 >= figuras[figuras.length-m].puntoCentral.y){
                        figuras[figuras.length-m].estado = true;
                        vectorseleccionado = figuras.length-m;
                        break;
                    }
                }
            }
        }else if(figuras[figuras.length-m].tipo == 'poligono' || figuras[figuras.length-m].tipo == 'cuadrado'){
            for(l = 0 ;l < figuras[figuras.length-m].nLados;l++){
                for(n = 0 ;n < figuras[figuras.length-m].coordenadas[l].lado.length;n++){
                    if(figuras[figuras.length-m].coordenadas[l].lado[n].x <= figuras[figuras.length-m].puntoCentral.x){
                        ordenx = 0;
                    }else {
                        ordenx = 1;
                    }
                    if(figuras[figuras.length-m].coordenadas[l].lado[n].y <= figuras[figuras.length-m].puntoCentral.y){
                        ordeny = 0;
                    }else {
                        ordeny = 1;
                    }
                    if(ordenx == 0 && ordeny == 0){
                        if(figuras[figuras.length-m].coordenadas[l].lado[n].x <= x0 && x0 <= figuras[figuras.length-m].puntoCentral.x 
                        && figuras[figuras.length-m].coordenadas[l].lado[n].y <= y0 && y0 <= figuras[figuras.length-m].puntoCentral.y){
                            figuras[figuras.length-m].estado = true;
                            vectorseleccionado = figuras.length-m;
                            break;
                        }
                    }else if(ordenx == 0 && ordeny == 1){
                        if(figuras[figuras.length-m].coordenadas[l].lado[n].x <= x0 && x0 <= figuras[figuras.length-m].puntoCentral.x 
                        && figuras[figuras.length-m].puntoCentral.y <= y0 && y0 <= figuras[figuras.length-m].coordenadas[l].y){
                            figuras[figuras.length-m].estado = true;
                            vectorseleccionado = figuras.length-m;
                            break;
                        }
                    }else if(ordenx == 1 && ordeny == 0){
                        if(figuras[figuras.length-m].coordenadas[l].lado[n].x >= x0 && x0 >= figuras[figuras.length-m].puntoCentral.x 
                        && figuras[figuras.length-m].coordenadas[l].lado[n].y <= y0 && y0 <= figuras[figuras.length-m].puntoCentral.y){
                            figuras[figuras.length-m].estado = true;
                            vectorseleccionado = figuras.length-m;
                            break;
                        }
                    }else if(ordenx == 1 && ordeny == 1){
                        if(figuras[figuras.length-m].coordenadas[l].lado[n].x >= x0 && x0 >= figuras[figuras.length-m].puntoCentral.x 
                        && figuras[figuras.length-m].coordenadas[l].lado[n].y >= y0 && y0 >= figuras[figuras.length-m].puntoCentral.y){
                            figuras[figuras.length-m].estado = true;
                            vectorseleccionado = figuras.length-m;
                            break;
                        }
                    }
                }
                if(figuras[figuras.length-m].estado){
                    break;
                }
            }
        }else if(figuras[figuras.length-m].tipo == 'lado'){
            for(n=0;n < figuras[figuras.length-m].coordenadas[0].lado.length ;n++){
                if(figuras[figuras.length-m].coordenadas[0].lado[n].x + 2 >= x0 && figuras[figuras.length-m].coordenadas[0].lado[n].x -2  <= x0 && figuras[figuras.length-m].coordenadas[0].lado[n].y + 2 >= y0 && figuras[figuras.length-m].coordenadas[0].lado[n].y - 2 <= y0){
                    figuras[figuras.length-m].estado = true;
                    vectorseleccionado = figuras.length-m;
                    break;
                }
            }
        }
        if(figuras[vectorseleccionado].estado){
            figuras.splice(vectorseleccionado,1);
            break;
        }
    }
}