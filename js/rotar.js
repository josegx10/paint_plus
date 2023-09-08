var coorLados = [];
var rotar = 0;
var puntero, entrada = 0, anteriorEntrada;
function rotacion(x0 , y0, x1, y1){
    
    var vectorseleccionado = parseInt(localStorage.getItem('FiguraStatus'));
    
    if(figuras[vectorseleccionado].estado){
        if(x0 >= figuras[vectorseleccionado].puntoCentral.x && y0 >= figuras[vectorseleccionado].puntoCentral.y){
            entrada = 1;
        }else if(x0 >= figuras[vectorseleccionado].puntoCentral.x && y0 <= figuras[vectorseleccionado].puntoCentral.y){
            entrada = 2;
        }else if(x0 <= figuras[vectorseleccionado].puntoCentral.x && y0 <= figuras[vectorseleccionado].puntoCentral.y){
            entrada = 3;
        }else if(x0 <= figuras[vectorseleccionado].puntoCentral.x && y0 >= figuras[vectorseleccionado].puntoCentral.y){
            entrada = 4;
        }
    
        switch(entrada){
            case 1:
                if(x0 <= x1 && y0 >= y1){
                    rotar = 1;
                }else {
                    rotar = -1;;
                }
                break;
            case 2:
                if(x0 >= x1 && y0 >= y1){
                    rotar = 1;
                }else {
                    rotar = -1;
                }
                break;
            case 3:
                if(x0 >= x1 && y0 <= y1){
                    rotar = 1;
                }else {
                    rotar = -1;
                }
                break;
            case 4: 
                if(x0 <= x1 && y0 <= y1){
                    rotar = 1;
                }else {
                    rotar = -1;
                }
                break;
        }
        if(figuras[vectorseleccionado].tipo == 'poligono' || figuras[vectorseleccionado].tipo == 'cuadrado'  || figuras[vectorseleccionado].tipo == 'rectangulo'){
            
            nivelR =  Math.sqrt(Math.pow((x1-x0),2) + Math.pow((y1-y0),2));
            nivelR = Math.round(nivelR);
            
            partes = figuras[vectorseleccionado].coordenadasCirculo.x.length / figuras[vectorseleccionado].nLados;
            for(l = 0 ;l < figuras[vectorseleccionado].nLados;l++){
                figuras[vectorseleccionado].puntoVector[l] = figuras[vectorseleccionado].puntoVector[l] + (rotar * nivelR);
                if(figuras[vectorseleccionado].puntoVector[l] < 0){
                    figuras[vectorseleccionado].puntoVector[l] += figuras[vectorseleccionado].coordenadasCirculo.x.length;
                }else if(figuras[vectorseleccionado].puntoVector[l] >= figuras[vectorseleccionado].coordenadasCirculo.x.length){
                    figuras[vectorseleccionado].puntoVector[l] -= figuras[vectorseleccionado].coordenadasCirculo.x.length;
                }
            }
            
            
            for(l = 0 ;l < figuras[vectorseleccionado].nLados - 1;l++){
                DDA(figuras[vectorseleccionado].coordenadasCirculo.x[figuras[vectorseleccionado].puntoVector[l]], figuras[vectorseleccionado].coordenadasCirculo.y[figuras[vectorseleccionado].puntoVector[l]],
                    figuras[vectorseleccionado].coordenadasCirculo.x[figuras[vectorseleccionado].puntoVector[l+ 1] ], figuras[vectorseleccionado].coordenadasCirculo.y[figuras[vectorseleccionado].puntoVector[l+1]]);
                almacenarLados(figuras[vectorseleccionado].coordenadasCirculo.x[figuras[vectorseleccionado].puntoVector[l]], figuras[vectorseleccionado].coordenadasCirculo.y[figuras[vectorseleccionado].puntoVector[l]],
                    figuras[vectorseleccionado].coordenadasCirculo.x[figuras[vectorseleccionado].puntoVector[l+ 1] ], figuras[vectorseleccionado].coordenadasCirculo.y[figuras[vectorseleccionado].puntoVector[l+1]]);
                
            }
            DDA(figuras[vectorseleccionado].coordenadasCirculo.x[figuras[vectorseleccionado].puntoVector[0]], figuras[vectorseleccionado].coordenadasCirculo.y[figuras[vectorseleccionado].puntoVector[0]],
                figuras[vectorseleccionado].coordenadasCirculo.x[figuras[vectorseleccionado].puntoVector[figuras[vectorseleccionado].nLados-1]], figuras[vectorseleccionado].coordenadasCirculo.y[figuras[vectorseleccionado].puntoVector[figuras[vectorseleccionado].nLados-1]]);
            almacenarLados(figuras[vectorseleccionado].coordenadasCirculo.x[figuras[vectorseleccionado].puntoVector[0]], figuras[vectorseleccionado].coordenadasCirculo.y[figuras[vectorseleccionado].puntoVector[0]],
                figuras[vectorseleccionado].coordenadasCirculo.x[figuras[vectorseleccionado].puntoVector[figuras[vectorseleccionado].nLados-1]], figuras[vectorseleccionado].coordenadasCirculo.y[figuras[vectorseleccionado].puntoVector[figuras[vectorseleccionado].nLados-1]]);
    
            figuras[vectorseleccionado].coordenadas = coordenasLados;
            coordenasLados = [];
            figuras[vectorseleccionado].lados = coorLados;
            coorLados = [];
            
        }else if(figuras[vectorseleccionado].tipo == 'ellipse'){
            const mouseX = x0;
            const mouseY = y0;

            let angle = Math.atan2(y1 - y0, x1 - x0);
            angle -= Math.PI / 2;

            const cos = Math.cos(angle);
            const sin = Math.sin(angle);     
            const matrix = [
                [cos, -sin],
                [sin, cos]
            ];

            const centerX = figuras[vectorseleccionado].puntoCentral.x;
            const centerY = figuras[vectorseleccionado].puntoCentral.y;
            const radiusX = figuras[vectorseleccionado].puntoVector.x;
            const radiusY = figuras[vectorseleccionado].puntoVector.y;

            let cont = 0;
            for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
                const x = radiusX * Math.cos(angle);
                const y = radiusY * Math.sin(angle);
                
                
                const rotatedX = x * matrix[0][0] + y * matrix[0][1];
                const rotatedY = x * matrix[1][0] + y * matrix[1][1];
                
                
                const newX = rotatedX + centerX;
                const newY = rotatedY + centerY;
                
                figuras[vectorseleccionado].coordenadas[cont].x = newX;
                figuras[vectorseleccionado].coordenadas[cont].y = newY;
                cont++;
              }
        }
        
    }
}

function almacenarLados (x0, y0, x1, y1){
    coorLados.push({
        x0: x0,
        y0: y0,
        x1: x1,
        y1: y1
    })
}