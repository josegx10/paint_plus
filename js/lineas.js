var coordenasLineas = [];
var coordenasLados = [];
function DDA(x1, y1, x2, y2)
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
      dibujar(x,y);
      coordenasLineas.push({
        x: x,
        y: y
      })
      x += xs;
      y += ys;
    }
    coordenasLados.push( {lado: coordenasLineas});
    coordenasLineas = [];
    
}