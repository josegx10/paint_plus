var cont = 0;

function poligonos(x0,y0,x1,y1,lados){
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
    almacenar('poligono',lados,ladosP,coordenasLados,{
      x: vectorglobalx,
      y: vectorglobaly
    }, {x: x0, y: y0} , puntoVector, grosor, color);
    coordenasLados = [];
    ladosP = [];
}
function ladosPoligonoIndividual(x0, y0, x1, y1){
  ladosP.push({
    x0: x0,
    y0: y0,
    x1: x1,
    y1: y1
  });
}