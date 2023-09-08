function DDApreview(x1, y1, x2, y2, opcion) //linea
{
    let x, y, xs, ys;
    let dx, dy, steps;
    dx = x2-x1;
    dy = y2-y1;
    x = x1;
    y = y1;
    if(Math.abs(dx) > Math.abs(dy))
    {
      steps = Math.abs(dx);
    }else
    {
      steps = Math.abs(dy);
    }
    if(steps === 0)
    {
      console.log(x,y,1,1);
      return;
    }
    xs = dx/steps;
    ys = dy/steps;
    for(let i = 0; i<= steps; i++)
    {
      if(opcion == 0){
        dibujar(x,y);
      }else {
        dibujarTextura(x,y, opcion - 1);
      }
      
      x += xs;
      y += ys;
    }
    
    
}

function calcularCuadradoPreview(x0, y0, x1, y1){
    var deltax = Math.abs(x1-x0);
    var deltay = Math.abs(y1-y0);

    if(deltax == deltay){ //cuando el usuario pone los puntos que son iguales, es decir, pone los dos vertices
        DDApreview(x0,y0,x0,y1, 0);
        DDApreview(x1,y0,x1,y1 ,0);
        DDApreview(x0,y0,x1,y0,0);
        DDApreview(x0,y1,x1,y1,0);

    }else {
        if(y1 == y0 || x0 == x1){ // cuando pone los puntos de un lado nomas
            if(x0 == x1){
                DDApreview(x0,y0,x0,y1,0);
                DDApreview(x1+deltay,y0,x1+deltay,y1,0);
                DDApreview(x0,y0,x1+deltay,y0,0);
                DDApreview(x0,y1,x1+deltay,y1,0);
            }else if(y1 == y0){
                DDApreview(x0,y0,x0,y1+deltax,0);
                DDApreview(x1,y0,x1,y1+deltax,0);
                DDApreview(x0,y0,x1,y0,0);
                DDApreview(x0,y1+deltax,x1,y1+deltax,0);

            }
        }else
        if( deltax > deltay  ){ // cuando no pone uno de los lados o pone 
            if( y1 > y0 ){
                DDApreview(x0,y0,x0,y0 + deltax,0);
                DDApreview(x1,y0,x1,y0 + deltax,0);
                DDApreview(x0,y0,x1,y0,0);
                DDApreview(x0,y0+deltax,x1,y0 + deltax,0);
            }else {
                DDApreview(x0,y0,x0,y0 - deltax,0);
                DDApreview(x1,y0,x1,y0 - deltax,0);
                DDApreview(x0,y0,x1,y0,0);
                DDApreview(x0,y0-deltax,x1,y0 - deltax,0); 
            }
        }else {
            if( x1 > x0 ){
                DDApreview(x0,y0,x0,y1,0);
                DDApreview(x0+deltay,y0,x0+deltay,y1,0);
                DDApreview(x0,y0,x0+deltay,y0,0);
                DDApreview(x0,y1,x0+deltay,y1,0);
            }else {
                DDApreview(x0,y0,x0,y1,0);
                DDApreview(x0-deltay,y0,x0-deltay,y1,0);
                DDApreview(x0,y0,x0-deltay,y0,0);
                DDApreview(x0,y1,x0-deltay,y1,0); 
                
            }
        }
    }
    
}
var cont = 0;
function poligonosPreview(x0,y0,x1,y1,lados){
    var vec1x = [], vec2x = [], vec3x = [], vec4x = [], vec5x = [], vec6x = [], vec7x = [], vec8x = [];
    var vec1y = [], vec2y = [], vec3y = [], vec4y = [], vec5y = [], vec6y = [], vec7y = [], vec8y = [];
    var vectorglobalx= [];
    var vectorglobaly = [];
    r =  Math.sqrt(Math.pow((x1-x0),2) + Math.pow((y1-y0),2));
    x = Math.round(r)- 1;
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
    cont = cont - 8;
    cont = cont / lados;
    cont = Math.round(cont);
    var indice = 0;
    if(vectorglobalx.includes(x1)){
      indice = vectorglobalx.indexOf(x1);
    }else if(vectorglobaly.includes(y1)){
      indice = vectorglobaly.indexOf(y1);
    }
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
      
      DDApreview(vectorglobalx[cont * (l-1) + indice], vectorglobaly[cont * (l-1) + indice], vectorglobalx[(cont * l) + indice], vectorglobaly[(cont * l) + indice]);     
    }
    DDApreview(vectorglobalx[(cont * 0) + indice], vectorglobaly[(cont * 0) + indice], vectorglobalx[(cont * (lados - 1)) + indice], vectorglobaly[(cont * (lados-1)) + indice]);         


    
}

function CirculoDDApreview(x0, y0, x1, y1){

    r =  Math.sqrt(Math.pow((x1-x0),2) + Math.pow((y1-y0),2));
    x = Math.round(r);
    y = 0;
    while( y <= x){
        dibujar(x0+x,y0+y);
        dibujar(x0-x,y0+y);
        dibujar(x0+x,y0-y);
        dibujar(x0-x,y0-y);
        dibujar(x0+y,y0+x);
        dibujar(x0-y,y0+x);
        dibujar(x0+y,y0-x);
        dibujar(x0-y,y0-x);
        r = r - (y/r);
        x = Math.round(r);
        y++;
    }
    
}

function rectanguloPreview(x0, y0, x1, y1){
  DDApreview(x0,y0,x0,y1, 0);
  DDApreview(x1,y0,x1,y1, 0);
  DDApreview(x0,y0,x1,y0, 0);
  DDApreview(x0,y1,x1,y1, 0);
}
