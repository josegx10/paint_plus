var lados4 = [];
var cargarCuaCir;
var puntosCuaCir;
function calcularCuadrado(x0, y0, x1, y1){
    var deltax = Math.abs(x1-x0);
    var deltay = Math.abs(y1-y0);

    if(deltax == deltay){ //cuando el usuario pone los puntos que son iguales, es decir, pone los dos vertices
        DDA(x0,y0,x0,y1);
        DDA(x1,y0,x1,y1);
        DDA(x0,y0,x1,y0);
        DDA(x0,y1,x1,y1);
        lados4individual(x0,y0,x0,y1);
        lados4individual(x1,y0,x1,y1);
        lados4individual(x0,y0,x1,y0);
        lados4individual(x0,y1,x1,y1);
        var centro = {
            x: x0 + (x1-x0)/2,
            y: y0 + (y1-y0)/2
        }

    }else {
        if(y1 == y0 || x0 == x1){ // cuando pone los puntos de un lado nomas
            if(x0 == x1){
                DDA(x0,y0,x0,y1);
                DDA(x1+deltay,y0,x1+deltay,y1);
                DDA(x0,y0,x1+deltay,y0);
                DDA(x0,y1,x1+deltay,y1);
                lados4individual(x0,y0,x0,y1);
                lados4individual(x1+deltay,y0,x1+deltay,y1);
                lados4individual(x0,y0,x1+deltay,y0);
                lados4individual(x0,y1,x1+deltay,y1);
                var centro = {
                    x: x0 + (x1+deltay - x0)/2,
                    y: y0 + (y1 - y0)/2
                }
            }else if(y1 == y0){
                DDA(x0,y0,x0,y1+deltax);
                DDA(x1,y0,x1,y1+deltax);
                DDA(x0,y0,x1,y0);
                DDA(x0,y1+deltax,x1,y1+deltax);
                lados4individual(x0,y0,x0,y1+deltax);
                lados4individual(x1,y0,x1,y1+deltax);
                lados4individual(x0,y0,x1,y0);
                lados4individual(x0,y1+deltax,x1,y1+deltax);
                var centro = {
                    x: x0 + (x1-x0)/2,
                    y: y0 + (y1+deltax - y0)
                }
            }
        }else
        if( deltax > deltay  ){ // cuando no pone uno de los lados o pone 
            if( y1 > y0 ){
                DDA(x0,y0,x0,y0 + deltax);
                DDA(x1,y0,x1,y0 + deltax);
                DDA(x0,y0,x1,y0);
                DDA(x0,y0+deltax,x1,y0 + deltax);
                lados4individual(x0,y0,x0,y0 + deltax);
                lados4individual(x1,y0,x1,y0 + deltax);
                lados4individual(x0,y0,x1,y0);
                lados4individual(x0,y0+deltax,x1,y0 + deltax);
                var centro = {
                    x: x0 + (x1-x0)/2,
                    y: y0 + (y0+deltax - y0)/2
                }
            }else {
                DDA(x0,y0,x0,y0 - deltax);
                DDA(x1,y0,x1,y0 - deltax);
                DDA(x0,y0,x1,y0);
                DDA(x0,y0-deltax,x1,y0 - deltax); 
                lados4individual(x0,y0,x0,y0 - deltax);
                lados4individual(x1,y0,x1,y0 - deltax);
                lados4individual(x0,y0,x1,y0);
                lados4individual(x0,y0-deltax,x1,y0 - deltax); 
                var centro = {
                    x: x0 + (x1-x0)/2,
                    y: y0 + (y0-deltax - y0)/2
                }
            }
        }else {
            if( x1 > x0 ){
                DDA(x0,y0,x0,y1);
                DDA(x0+deltay,y0,x0+deltay,y1);
                DDA(x0,y0,x0+deltay,y0);
                DDA(x0,y1,x0+deltay,y1);
                lados4individual(x0,y0,x0,y1);
                lados4individual(x0+deltay,y0,x0+deltay,y1);
                lados4individual(x0,y0,x0+deltay,y0);
                lados4individual(x0,y1,x0+deltay,y1);
                var centro = {
                    x: x0 + (x0+deltay-x0)/2,
                    y: y0 + (y1 - y0)/2
                }
            }else {
                DDA(x0,y0,x0,y1);
                DDA(x0-deltay,y0,x0-deltay,y1);
                DDA(x0,y0,x0-deltay,y0);
                DDA(x0,y1,x0-deltay,y1); 
                lados4individual(x0,y0,x0,y1);
                lados4individual(x0-deltay,y0,x0-deltay,y1);
                lados4individual(x0,y0,x0-deltay,y0);
                lados4individual(x0,y1,x0-deltay,y1);
                var centro = {
                    x: x0 + (x0-deltay-x0)/2,
                    y: y0 + (y1 - y0)/2
                } 
            }
        }
    }
    cuadradocirculo(centro.x, centro.y, x0, y0);
    almacenar('cuadrado',4,lados4,coordenasLados,cargarCuaCir,centro,puntosCuaCir, grosor, color);
    lados4 = [];
    coordenasLados = [];
}
function lados4individual(x0, y0, x1, y1){
    lados4.push({
        x0: x0,
        y0: y0,
        x1: x1,
        y1: y1
    });
}
function cuadradocirculo(x0, y0, x1, y1){
    var vec1x = [], vec2x = [], vec3x = [], vec4x = [], vec5x = [], vec6x = [], vec7x = [], vec8x = [];
    var vec1y = [], vec2y = [], vec3y = [], vec4y = [], vec5y = [], vec6y = [], vec7y = [], vec8y = [];
    var vectorglobalx= [];
    var vectorglobaly = [];
    var cont;
    var vec = [];
    r =  Math.sqrt(Math.pow((x1-x0),2) + Math.pow((y1-y0),2));
    x = Math.round(r)-1;
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
        x = Math.round(r)-1;
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
    cont =cont /  8;
    for(l = 0 ;l < 4; l++){
        vec.push(cont * ((l*2) +1));
        console.log(vec);
    }
    meterCuaCir(vectorglobalx, vectorglobaly, vec);
}
function meterCuaCir(x, y, puntos){
    cargarCuaCir = {
        x: x,
        y: y
    };
    puntosCuaCir = puntos;
}