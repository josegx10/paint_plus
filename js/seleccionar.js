// botones para seleccionado de figurass
var boton = document.getElementById('seleccione');
var limpiar = document.getElementById('borrador');
var lapiz = document.getElementById('lapiz');
var linea = document.getElementById('linea');
var cuadrado = document.getElementById('cuadrado');
var triangulo = document.getElementById('triangulo');
var pentagono = document.getElementById('pentagono');
var hexagono = document.getElementById('hexagono');
var heptagono = document.getElementById('heptagono');
var octagono = document.getElementById('octagono');
var decagono = document.getElementById('decagono');
var circulo = document.getElementById('circulo');
var rectangulo = document.getElementById('rectangulo');
var ellipse = document.getElementById('ellipse');
var rotar = document.getElementById('rotar');
var expandir = document.getElementById('expandir');
var guardar = document.getElementById('guardar');
var cargar_Archivo = document.getElementById('cargar_archivo');
var archivo = document.getElementById('archivo');
var frente = document.getElementById('frente');
var fondo = document.getElementById('fondo');
var adelante = document.getElementById('adelante');
var atras = document.getElementById('atras'); 
var menor = document.getElementById('menor');
var mayor = document.getElementById('mayor');
var numeroGrosor = document.getElementById('numeroGrosor')
var png = document.getElementById('png');
var textura = document.getElementById('textura');
var deshacer = document.getElementById('deshacer');
var rehacer = document.getElementById('rehacer');
// botones de colores
var rojo = document.getElementById('rojo');
var azul = document.getElementById('azul');
var verde = document.getElementById('verde');
var amarillo = document.getElementById('amarillo');
var naranja = document.getElementById('naranja');
var morado = document.getElementById('morado');
var negro = document.getElementById('negro');
var seleccion = 0;
lapiz.addEventListener('click', function(){
    seleccion = 14;
})
boton.addEventListener("click", function(){
    seleccion = 11;
});
rotar.addEventListener("click",function(){
    seleccion = 12;
})
expandir.addEventListener("click",function(){
    seleccion = 13;
})
limpiar.addEventListener("click", function(){
    //canvas.width=canvas.width;
    seleccion = 31;
});
linea.addEventListener("click", function(){
    seleccion = 1;
});
cuadrado.addEventListener("click", function(){
    seleccion = 2;
});
triangulo.addEventListener("click", function(){
    seleccion = 3;
});
pentagono.addEventListener("click", function(){
    seleccion = 4;
});
hexagono.addEventListener("click", function(){
    seleccion = 5;
});
heptagono.addEventListener("click", function(){
    seleccion = 6;
});
octagono.addEventListener("click", function(){
    seleccion = 7;
});
decagono.addEventListener("click", function(){
    seleccion = 8;
});
circulo.addEventListener("click", function(){
    seleccion = 9;
});
rectangulo.addEventListener("click", function(){
    seleccion = 10
})
ellipse.addEventListener('click', function(){
    seleccion = 15;
})

function seleccionar(x0, y0, x1, y1, anteriorx, anteriory){
    switch(seleccion){
        case 1:
            DDA(x0, y0, x1, y1);
            almacenar('lado',1,{
                x0: x0,
                y0: y0,
                x1: x1,
                y1: y1
            },coordenasLados,0,0,0,grosor,color)
            coordenasLados = [];
            break;
        case 2:
            calcularCuadrado(x0, y0, x1, y1);
            break;
        case 3:poligonos(x0,y0,x1,y1,3);
            break;
        case 4:
            poligonos(x0,y0,x1,y1,5);
            break;
        case 5:
            poligonos(x0,y0,x1,y1,6);
            break;
        case 6:
            poligonos(x0,y0,x1,y1,7);
            break;
        case 7:
            poligonos(x0,y0,x1,y1,8);
            break;
        case 8:
            poligonos(x0,y0,x1,y1,10);
            break;
        case 9:
            CirculoDDA(x0,y0,x1,y1);
            break;
        case 10:
            calcularRectangulo(x0, y0, x1, y1);
            break;
        case 11:
            mover(x0,y0,x1,y1);
            limpiarCanvas();
            break;
        case 12:
            rotacion(x0,y0,x1,y1);
            limpiarCanvas();
            break;
        case 13:
            escalar(x0, y0, x1, y1, anteriorx, anteriory);
            limpiarCanvas();
            break;
        case 14:
            pintar(x0, y0);
            almacenar('lapiz',1,0,pixelLapiz,0,0,0,grosor,color);
            limpiarCanvas();
            pixelLapiz = [];
            break;
        case 15:
            crearEllipse(x0, y0, x1, y1);
            break;
    }

}
function preview(x0, y0, x1, y1, anteriorx, anteriory){
    switch(seleccion){
        case 1:
            DDApreview(x0, y0, x1, y1, 0);
            break;
        case 2:
            calcularCuadradoPreview(x0, y0, x1, y1);
            break;
        case 3:poligonosPreview(x0,y0,x1,y1,3);
            break;
        case 4:
            poligonosPreview(x0,y0,x1,y1,5);
            break;
        case 5:
            poligonosPreview(x0,y0,x1,y1,6);
            break;
        case 6:
            poligonosPreview(x0,y0,x1,y1,7);
            break;
        case 7:
            poligonosPreview(x0,y0,x1,y1,8);
            break;
        case 8:
            poligonosPreview(x0,y0,x1,y1,10);
            break;
        case 9:
            CirculoDDApreview(x0,y0,x1,y1);
            break;
        case 10: 
            rectanguloPreview(x0, y0, x1, y1);
            break;
        case 11:
            mover(x0,y0,x1,y1);
            limpiarCanvas();
            break;
        case 12:
            rotacion(x0,y0,x1,y1);
            limpiarCanvas();
            break;
        case 13:
            escalar(x0, y0, x1, y1, anteriorx, anteriory);
            limpiarCanvas();
            break; 
        case 14:
            pintar(x0, y0);
            break;
        case 15:
            
            previewcrearEllipse(x0, y0, x1, y1);
            break;
    }

}
rojo.addEventListener("click", function(){
    color = 'red';
})
azul.addEventListener("click", function(){
    color = 'blue';
})
verde.addEventListener("click", function(){
    color = 'green';
})
amarillo.addEventListener("click", function(){
    color = 'yellow';
})
naranja.addEventListener("click", function(){
    color = 'orange';
})
morado.addEventListener("click", function(){
    color = 'purple';
})
negro.addEventListener("click", function(){
    color = 'black';
})

cargar_Archivo.addEventListener('click', function(){
    archivo.click();
})
archivo.addEventListener('click', function(){
    
})

guardar.addEventListener('click', function(){
    var json = JSON.stringify(figuras);
    const a = document.createElement("a");
    const archivo = new Blob([json], { type: 'text/plain' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = 'figuras.pain';
    a.click();
    URL.revokeObjectURL(url);
})
async function loadFile(file) {
    let text = await file.text();

    console.log(JSON.parse(text));
    figuras = JSON.parse(text);
    limpiarCanvas();
  }

frente.addEventListener('click', function(){
    seleccion = 20;
})
fondo.addEventListener('click', function(){
    seleccion = 21;
})
adelante.addEventListener('click', function(){
    seleccion = 22;
})
atras.addEventListener('click', function(){
    seleccion = 23;
})
textura.addEventListener('click', function(){
    seleccion = 24;
})
deshacer.addEventListener('click', function(){
    deshacerTem();
    limpiarCanvas();
})
rehacer.addEventListener('click', function(){
    rehacerTem();
    limpiarCanvas();
})
menor.addEventListener('click', function(){
    if(grosor != 1){
        grosor -= 1;
    }
    numeroGrosor.innerHTML = grosor;
});
mayor.addEventListener('click', function(){
    grosor += 1;
    console.log()
    numeroGrosor.innerHTML = grosor;
});
function VerGrosor(){
    ctx.fillStyle = "white";
    ctx.rect(0, 0, 1450, 700);
    ctx.fill()
    numeroGrosor.innerHTML = grosor;
}
//window.onload = VerGrosor;
png.addEventListener('click', function(){
    

    let enlace = document.createElement('a');
			// El título
	enlace.download = "Canvas como imagen.png";
			// Convertir la imagen a Base64 y ponerlo en el enlace
	enlace.href = canvas.toDataURL();
			// Hacer click en él
	enlace.click();
})