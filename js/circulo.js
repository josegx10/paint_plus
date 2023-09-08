function CirculoDDA(x0, y0, x1, y1){
    var vec1x = [], vec2x = [], vec3x = [], vec4x = [], vec5x = [], vec6x = [], vec7x = [], vec8x = [];
    var vec1y = [], vec2y = [], vec3y = [], vec4y = [], vec5y = [], vec6y = [], vec7y = [], vec8y = [];
    var vectorglobalx= [];
    var vectorglobaly = [];
    r =  Math.sqrt(Math.pow((x1-x0),2) + Math.pow((y1-y0),2));
    x = Math.round(r);
    y = 0;
    cont = 0;
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
    almacenar('circulo',0,0,0,{
        x: vectorglobalx,
        y: vectorglobaly
    },{
        x: x0,
        y: y0
    },0,grosor, color);
}