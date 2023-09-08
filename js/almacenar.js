
function almacenar(tipo, nLados, lados, coordenadas, coordenadasCirculo, puntoCentral, puntoVector, grosor, color){
    figuras.push({
        tipo: tipo,
        nLados: nLados,
        lados: lados,
        coordenadas: coordenadas,   
        coordenadasCirculo: coordenadasCirculo,
        estado: false,
        puntoCentral: puntoCentral,
        puntoVector: puntoVector,
        grosor: grosor,
        color: color,
        textura: false,
        colorTextura: 'white'
    }) 
    console.log(figuras);
}