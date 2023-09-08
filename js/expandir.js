var numero = 0;

function escalar(x0, y0, x1, y1, anteriorx, anteriory){
    var vectorseleccionado = parseInt(localStorage.getItem('FiguraStatus'));
    var entrada;
    if(figuras[vectorseleccionado].estado){
        /*if(x0 >= figuras[vectorseleccionado].puntoCentral.x && y0 >= figuras[vectorseleccionado].puntoCentral.y){
            entrada = 1;
        }else if(x0 <= figuras[vectorseleccionado].puntoCentral.x && y0 >= figuras[vectorseleccionado].puntoCentral.y){
            entrada = 2;
        }else if(x0  >=  figuras[vectorseleccionado].puntoCentral.x && y0 <= figuras[vectorseleccionado].puntoCentral.y){
            entrada = 3;
        }else if(x0 <= figuras[vectorseleccionado].puntoCentral.x && y0 <= figuras[vectorseleccionado].puntoCentral.y){
            entrada = 4;
        }*/

        
            
        /*switch(entrada){
            case 1:
                if(x1 > anteriorx || y1 > anteriory){
                    figuras[vectorseleccionado].puntoCentral.x +=0.5;
                    figuras[vectorseleccionado].puntoCentral.y +=0.5;
                }else {
                    figuras[vectorseleccionado].puntoCentral.x -=0.5;
                    figuras[vectorseleccionado].puntoCentral.y -=0.5;
                }
                break;
            case 2:
                if(x1 < anteriorx || y1 > anteriory){
                    figuras[vectorseleccionado].puntoCentral.x -=0.5;
                    figuras[vectorseleccionado].puntoCentral.y +=0.5;
                }else {
                    figuras[vectorseleccionado].puntoCentral.x +=0.5;
                    figuras[vectorseleccionado].puntoCentral.y -=0.5;
                }
                break;
            case 3:
                if(x1 > anteriorx || y1 < anteriory){
                    figuras[vectorseleccionado].puntoCentral.x +=0.5;
                    figuras[vectorseleccionado].puntoCentral.y -=0.5;
                }else {
                    figuras[vectorseleccionado].puntoCentral.x -=0.5;
                    figuras[vectorseleccionado].puntoCentral.y +=0.5;
                }
                break;
            case 4: 
                if(x1 < anteriorx || y1 < anteriory){
                    figuras[vectorseleccionado].puntoCentral.x -=0.5;
                    figuras[vectorseleccionado].puntoCentral.y -=0.5;
                }else {
                    figuras[vectorseleccionado].puntoCentral.x +=0.5;
                    figuras[vectorseleccionado].puntoCentral.y +=0.5;
                }
                break;
            
        }*/
        numero = obtenerCoor(x0, y0);
        console.log('es el numero antes:' + numero);
        if((figuras[vectorseleccionado].coordenadasCirculo.x.length / 2) -1  <= numero ){
            numero -= figuras[vectorseleccionado].coordenadasCirculo.x.length / 2 -1;
        }else  {
            numero += figuras[vectorseleccionado].coordenadasCirculo.x.length / 2 -1;
        }

        console.log('es el numero: ' + numero);
        if(figuras[vectorseleccionado].tipo == 'circulo'){
            figuras[vectorseleccionado].puntoCentral.x +=(x1 - anteriorx) / 2;
            figuras[vectorseleccionado].puntoCentral.y +=(y1 - anteriory) / 2;
            if(!localStorage.getItem('indiceCoorX')){
                localStorage.setItem('indiceCoorX', figuras[vectorseleccionado].coordenadasCirculo.x[numero])
                localStorage.setItem('indiceCoorY', figuras[vectorseleccionado].coordenadasCirculo.y[numero]
                );
            }
            if(!localStorage.getItem('indiceCoorX')) {
                circularExpandir(figuras[vectorseleccionado].puntoCentral.x, figuras[vectorseleccionado].puntoCentral.y,
                figuras[vectorseleccionado].coordenadasCirculo.x[numero], figuras[vectorseleccionado].coordenadasCirculo.y[numero], vectorseleccionado
                );
            }else {
                circularExpandir(figuras[vectorseleccionado].puntoCentral.x, figuras[vectorseleccionado].puntoCentral.y,
                parseInt(localStorage.getItem('indiceCoorX')), parseInt(localStorage.getItem('indiceCoorY')), vectorseleccionado
               
                );
            }
        }else if(figuras[vectorseleccionado].tipo == 'poligono' || figuras[vectorseleccionado].tipo == 'cuadrado' ){
            figuras[vectorseleccionado].puntoCentral.x +=(x1 - anteriorx) / 2;
            figuras[vectorseleccionado].puntoCentral.y +=(y1 - anteriory) / 2;
            
            numero = obtenerCoor(x0, y0);
            console.log('es el numero antes:' + numero);
            if((figuras[vectorseleccionado].coordenadasCirculo.x.length / 2) -1  <= numero ){
                numero -= figuras[vectorseleccionado].coordenadasCirculo.x.length / 2 -1;
            }else  {
                numero += figuras[vectorseleccionado].coordenadasCirculo.x.length / 2 -1;
            }
            p2 = figuras[vectorseleccionado].coordenadasCirculo.x.length / figuras[vectorseleccionado].puntoVector[0];
            if(!localStorage.getItem('indiceCoorX')){
                localStorage.setItem('indiceCoorX', figuras[vectorseleccionado].coordenadasCirculo.x[numero])
                localStorage.setItem('indiceCoorY', figuras[vectorseleccionado].coordenadasCirculo.y[numero]
                );
            }
            if(!localStorage.getItem('indiceCoorX')) {
                poligonoExpandir(figuras[vectorseleccionado].puntoCentral.x, figuras[vectorseleccionado].puntoCentral.y,
                figuras[vectorseleccionado].coordenadasCirculo.x[numero], figuras[vectorseleccionado].coordenadasCirculo.y[numero], 
                vectorseleccionado, figuras[vectorseleccionado].nLados, p2
                );
            }else {
                poligonoExpandir(figuras[vectorseleccionado].puntoCentral.x, figuras[vectorseleccionado].puntoCentral.y,
                parseInt(localStorage.getItem('indiceCoorX')), parseInt(localStorage.getItem('indiceCoorY')), 
                vectorseleccionado, figuras[vectorseleccionado].nLados, p2
                );
            }
        }else if(figuras[vectorseleccionado].tipo == 'rectangulo'){
            var p = figuras[vectorseleccionado].puntoVector[0] - numero;
            var p2 = figuras[vectorseleccionado].puntoVector[0];
            console.log(p2);
            for(l = 1 ;l < figuras[vectorseleccionado].nLados;l++){
                if(Math.abs(figuras[vectorseleccionado].puntoVector[l] - numero) < Math.abs(p)){
                    p = figuras[vectorseleccionado].puntoVector[l] - numero;
                    p2 = figuras[vectorseleccionado].puntoVector[l];
                }
                console.log(p2);
            }
            numero = p2;
            console.log(numero);
            p2 = [figuras[vectorseleccionado].coordenadasCirculo.x.length / figuras[vectorseleccionado].puntoVector[0], figuras[vectorseleccionado].coordenadasCirculo.x.length / figuras[vectorseleccionado].puntoVector[1], figuras[vectorseleccionado].coordenadasCirculo.x.length / figuras[vectorseleccionado].puntoVector[2], figuras[vectorseleccionado].coordenadasCirculo.x.length / figuras[vectorseleccionado].puntoVector[3]];
            console.log(p2);
            if(!localStorage.getItem('indiceCoorX')){
                localStorage.setItem('indiceCoorX', figuras[vectorseleccionado].coordenadasCirculo.x[numero])
                localStorage.setItem('indiceCoorY', figuras[vectorseleccionado].coordenadasCirculo.y[numero]
                );
            }
            if(!localStorage.getItem('indiceCoorX')) {
                rectanguloExpandir(figuras[vectorseleccionado].puntoCentral.x, figuras[vectorseleccionado].puntoCentral.y,
                figuras[vectorseleccionado].coordenadasCirculo.x[numero], figuras[vectorseleccionado].coordenadasCirculo.y[numero], 
                vectorseleccionado, figuras[vectorseleccionado].nLados, p2
                );
            }else {
                rectanguloExpandir(figuras[vectorseleccionado].puntoCentral.x, figuras[vectorseleccionado].puntoCentral.y,
                parseInt(localStorage.getItem('indiceCoorX')), parseInt(localStorage.getItem('indiceCoorY')), 
                vectorseleccionado, figuras[vectorseleccionado].nLados, p2
                );
            }
        }
    }
}

function circularExpandir(x0, y0, x1, y1, n){
    
        var vec1x = [], vec2x = [], vec3x = [], vec4x = [], vec5x = [], vec6x = [], vec7x = [], vec8x = [];
        var vec1y = [], vec2y = [], vec3y = [], vec4y = [], vec5y = [], vec6y = [], vec7y = [], vec8y = [];
        var vectorglobalx= [];
        var vectorglobaly = [];

        r =  Math.sqrt(Math.pow((x1-x0),2) + Math.pow((y1-y0),2));
        //console.log(r);
        x = Math.round(r);
        y = 0;
        cont = 0;
        //console.log('x0:' +  x0 + ' y0:' + y0 + ' x1:' + x1 + ' y1:' + y1);
        //console.log(y, x);
        while( y <= x){
            dibujar(x0+x,y0+y);
            dibujar(x0-x,y0+y);
            dibujar(x0+x,y0-y);
            dibujar(x0-x,y0-y);
            dibujar(x0+y,y0+x);
            dibujar(x0-y,y0+x);
            dibujar(x0+y,y0-x);
            dibujar(x0-y,y0-x);
            vec1x.push(x0+y);
            vec1y.push(y0+x);
            vec2x.push(x0-y);
            vec2y.push(y0+x);
            vec3x.push(x0+y);
            vec3y.push(y0-x);
            vec4x.push(x0-y);
            vec4y.push(y0-x);
            vec5x.push(x0+x);
            vec5y.push(y0+y);
            vec6x.push(x0-x);
            vec6y.push(y0+y);
            vec7x.push(x0+x);
            vec7y.push(y0-y);
            vec8x.push(x0-x);
            vec8y.push(y0-y);
            r = r - (y/r);
            x = Math.round(r);
            y++;
            cont++;
        }
        cont = cont * 8;
    
        console.log(cont);
        vec1x.pop();
        vec1y.pop();
        vec2x.shift();
        vec2y.shift();
        vec2x.pop();
        vec2y.pop();
        vec3x.pop();
        vec3y.pop();
        vec4x.shift();
        vec4y.shift();
        vec4x.pop();
        vec4y.pop();
        vec6x.shift();
        vec6y.shift();
        vec8x.shift();
        vec8y.shift();
        vec2x.reverse();
        vec2y.reverse();
        vec8x.reverse();
        vec8y.reverse();
        vec3x.reverse();
        vec3y.reverse();
        vec5x.reverse();
        vec5y.reverse();
        vectorglobalx = vectorglobalx.concat(vec1x, vec5x, vec7x, vec3x, vec4x, vec8x, vec6x, vec2x);
        vectorglobaly = vectorglobaly.concat(vec1y, vec5y, vec7y, vec3y, vec4y, vec8y, vec6y, vec2y);
        figuras[n].coordenadasCirculo.x = vectorglobalx;
        figuras[n].coordenadasCirculo.y = vectorglobaly;
       
}

function poligonoExpandir(x0, y0, x1, y1, nFigura, lados, calcular){
    var vec1x = [], vec2x = [], vec3x = [], vec4x = [], vec5x = [], vec6x = [], vec7x = [], vec8x = [];
    var vec1y = [], vec2y = [], vec3y = [], vec4y = [], vec5y = [], vec6y = [], vec7y = [], vec8y = [];
    var vectorglobalx= [];
    var vectorglobaly = [];
    var ladosP = [];
    var puntoVector = [];
    r =  Math.sqrt(Math.pow((x1-x0),2) + Math.pow((y1-y0),2));
    x = Math.round(r) - 1;
    y = 0;
    cont = 0;
    while( y <= x){
        
        vec1x.push(x0+y);
        vec1y.push(y0+x);
        vec2x.push(x0-y);
        vec2y.push(y0+x);
        vec3x.push(x0+y);
        vec3y.push(y0-x);
        vec4x.push(x0-y);
        vec4y.push(y0-x);
        vec5x.push(x0+x);
        vec5y.push(y0+y);
        vec6x.push(x0-x);
        vec6y.push(y0+y);
        vec7x.push(x0+x);
        vec7y.push(y0-y);
        vec8x.push(x0-x);
        vec8y.push(y0-y);
        r = r - (y/r);
        x = Math.round(r) - 1;
        y++;
        cont++;
    }
    cont = cont * 8 - 8;
    var indice = cont / calcular;
    indice = Math.round(indice);
    console.log(cont);
    vec1x.pop();
    vec1y.pop();
    vec2x.shift();
    vec2y.shift();
    vec2x.pop();
    vec2y.pop();
    vec3x.pop();
    vec3y.pop();
    vec4x.shift();
    vec4y.shift();
    vec4x.pop();
    vec4y.pop();
    vec6x.shift();
    vec6y.shift();
    vec8x.shift();
    vec8y.shift();
    vec2x.reverse();
    vec2y.reverse();
    vec8x.reverse();
    vec8y.reverse();
    vec3x.reverse();
    vec3y.reverse();
    vec5x.reverse();
    vec5y.reverse();
    vectorglobalx = vectorglobalx.concat(vec1x, vec5x, vec7x, vec3x, vec4x, vec8x, vec6x, vec2x);
    vectorglobaly = vectorglobaly.concat(vec1y, vec5y, vec7y, vec3y, vec4y, vec8y, vec6y, vec2y);
    
    cont = cont / lados;
    cont = Math.round(cont);
    
    
    console.log();
    if( indice != 0 ) {
        for(l = 1;l < lados;l++){
          if(indice  > (lados - l) * cont){
            indice = indice - ((lados - l)*cont);
            break;
          }
        }
      }
    for(l = 1 ;l < lados;l++){
      console.log(vectorglobalx[cont * (l-1) + indice], vectorglobaly[(cont * (l-1))+indice], vectorglobalx[(cont * l) + indice], vectorglobaly[(cont * l) + indice])
      DDA(vectorglobalx[cont * (l-1) + indice], vectorglobaly[cont * (l-1) + indice], vectorglobalx[(cont * l) + indice], vectorglobaly[(cont * l) + indice]);    
      ladosP.push({
        x0:vectorglobalx[cont * (l-1) + indice],
        y0:vectorglobaly[cont * (l-1) + indice],
        x1:vectorglobalx[(cont * l) + indice],
        y1: vectorglobaly[(cont * l) + indice]
      });
      puntoVector.push(cont * (l-1) + indice);
    }
    console.log(vectorglobalx[(cont * 0) + indice], vectorglobaly[(cont * 0) + indice], vectorglobalx[(cont * (lados- 1)) + indice], vectorglobaly[(cont * (lados- 1)) + indice]);
    DDA(vectorglobalx[(cont * 0) + indice], vectorglobaly[(cont * 0) + indice], vectorglobalx[(cont * (lados - 1)) + indice], vectorglobaly[(cont * (lados-1)) + indice]);     
    ladosP.push({
      x0:vectorglobalx[(cont * 0) + indice],
      y0:vectorglobaly[(cont * 0) + indice],
      x1:vectorglobalx[(cont * (lados - 1)) + indice],
      y1:vectorglobaly[(cont * (lados-1)) + indice]
    });
    puntoVector.push(cont * (lados - 1) + indice);
    figuras[nFigura].coordenadasCirculo.x = vectorglobalx;
    figuras[nFigura].coordenadasCirculo.y = vectorglobaly;
    figuras[nFigura].puntoVector = puntoVector;
    figuras[nFigura].coordenadas = coordenasLados;
    figuras[nFigura].lados = ladosP;
    coordenasLados = [];
    ladosP = [];
}
function rectanguloExpandir(x0, y0, x1, y1, nFigura, lados, calcular){
    var vec1x = [], vec2x = [], vec3x = [], vec4x = [], vec5x = [], vec6x = [], vec7x = [], vec8x = [];
    var vec1y = [], vec2y = [], vec3y = [], vec4y = [], vec5y = [], vec6y = [], vec7y = [], vec8y = [];
    var vectorglobalx= [];
    var vectorglobaly = [];
    var ladosP = [];
    var puntoVector = [];
    r =  Math.sqrt(Math.pow((x1-x0),2) + Math.pow((y1-y0),2));
    x = Math.round(r) - 1;
    y = 0;
    cont = 0;
    while( y <= x){
        
        vec1x.push(x0+y);
        vec1y.push(y0+x);
        vec2x.push(x0-y);
        vec2y.push(y0+x);
        vec3x.push(x0+y);
        vec3y.push(y0-x);
        vec4x.push(x0-y);
        vec4y.push(y0-x);
        vec5x.push(x0+x);
        vec5y.push(y0+y);
        vec6x.push(x0-x);
        vec6y.push(y0+y);
        vec7x.push(x0+x);
        vec7y.push(y0-y);
        vec8x.push(x0-x);
        vec8y.push(y0-y);
        r = r - (y/r);
        x = Math.round(r) - 1;
        y++;
        cont++;
    }
    cont = cont * 8 - 8;
    var indice = [cont / calcular[0], cont / calcular[1] , cont / calcular[2], cont / calcular[3]];
    console.log(indice);  
    indice[0] = Math.round(indice[0]);
    indice[1] = Math.round(indice[1]);
    indice[2] = Math.round(indice[2]);
    indice[3] = Math.round(indice[3]);
    console.log(indice); 
    console.log(cont);
    vec1x.pop();
    vec1y.pop();
    vec2x.shift();
    vec2y.shift();
    vec2x.pop();
    vec2y.pop();
    vec3x.pop();
    vec3y.pop();
    vec4x.shift();
    vec4y.shift();
    vec4x.pop();
    vec4y.pop();
    vec6x.shift();
    vec6y.shift();
    vec8x.shift();
    vec8y.shift();
    vec2x.reverse();
    vec2y.reverse();
    vec8x.reverse();
    vec8y.reverse();
    vec3x.reverse();
    vec3y.reverse();
    vec5x.reverse();
    vec5y.reverse();
    vectorglobalx = vectorglobalx.concat(vec1x, vec5x, vec7x, vec3x, vec4x, vec8x, vec6x, vec2x);
    vectorglobaly = vectorglobaly.concat(vec1y, vec5y, vec7y, vec3y, vec4y, vec8y, vec6y, vec2y);
    
    cont = cont / lados;
    cont = Math.round(cont);
    
    
    console.log();
    
    for(l = 1 ;l < lados;l++){
      console.log(vectorglobalx[indice[l-1]], vectorglobaly[indice[l-1]], vectorglobalx[ indice[l]], vectorglobaly[ indice[l]])
      DDA(vectorglobalx[indice[l-1]], vectorglobaly[indice[l-1]], vectorglobalx[indice[l]], vectorglobaly[indice[l]]);    
      ladosP.push({
        x0:vectorglobalx[indice[l-1]],
        y0:vectorglobaly[indice[l-1]],
        x1:vectorglobalx[indice[l]],
        y1: vectorglobaly[indice[l]]
      });
      puntoVector.push(indice[l-1]);
    }
    console.log(vectorglobalx[indice[0]], vectorglobaly[indice[0]], vectorglobalx[indice[3]], vectorglobaly[indice[3]]);
    DDA(vectorglobalx[indice[0]], vectorglobaly[indice[0]], vectorglobalx[indice[3]], vectorglobaly[indice[3]]);     
    ladosP.push({
      x0:vectorglobalx[indice[0]],
      y0:vectorglobaly[indice[0]],
      x1:vectorglobalx[indice[3]],
      y1:vectorglobaly[indice[3]]
    });
    puntoVector.push(indice[lados - 1]);
    console.log(puntoVector);
    figuras[nFigura].coordenadasCirculo.x = vectorglobalx;
    figuras[nFigura].coordenadasCirculo.y = vectorglobaly;
    figuras[nFigura].puntoVector = puntoVector;
    figuras[nFigura].coordenadas = coordenasLados;
    figuras[nFigura].lados = ladosP;
    coordenasLados = [];
    ladosP = [];
}