

function crearEllipse(x0 , y0, x1, y1){
    var vectorE = [];
    const centerX = (x0 + x1) / 2;
    const centerY = (y0 + y1) / 2;
    let radiusX;
    let radiusY;
    if(x0 < x1){
        radiusX = x1 - centerX;
    }else {
        radiusX = x0 - centerX;
    }
    if(x0 < x1){
        radiusY = y1 - centerY;
    }else {
        radiusY= y0 - centerY;
    }
    
    const angle = 45* Math.PI / 180;
    for(let angle = 0; angle < 2 * Math.PI; angle += 0.01){
        const x = centerX + radiusX * Math.cos(angle);
        const y = centerY + radiusY * Math.sin(angle);
        vectorE.push({
            x: x,
            y: y
        })
        dibujar(Math.round(x), Math.round(y));
    
       
    }
    almacenar('ellipse',1,0,vectorE,0,{x: centerX, y: centerY},{x: radiusX, y: radiusY},grosor,color);
    
}
function previewcrearEllipse(x0, y0, x1, y1){
    
    const centerX = (x0 + x1) / 2;
    const centerY = (y0 + y1) / 2;
    let radiusX;
    let radiusY;
    if(x0 < x1){
        radiusX = x1 - centerX;
    }else {
        radiusX = x0 - centerX;
    }
    if(x0 < x1){
        radiusY = y1 - centerY;
    }else {
        radiusY= y0 - centerY;
    }
    
    const angle = 45* Math.PI / 180;
    for(let angle = 0; angle < 2 * Math.PI; angle += 0.01){
        const x = centerX + radiusX * Math.cos(angle);
        const y = centerY + radiusY * Math.sin(angle);
        
        dibujar(Math.round(x), Math.round(y));
    
       
    }
}