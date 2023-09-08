const canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var rect = canvas.getBoundingClientRect();
var dibujando = false, color = 'black', grosor = 2;
var valido = false;
var figuras = [];
function index(){
    DDA(20,20,40,40);
    
}

window.addEventListener("click", function(e){
    if(rect.left > e.clientX || rect.top > e.clientY || e.clientX > rect.right){

    }
    else if (valido){     
        finalX = e.clientX - rect.left;
		finalY = e.clientY - rect.top;
		valido = false;
        

        console.log(inicialX, inicialY, finalX, finalY)
		seleccionar(inicialX, inicialY, finalX, finalY, finalX, finalY);
        for(n = 0; n < figuras.length; n++){
            figuras[n].estado = false;
        }
        this.localStorage.removeItem('indiceCoorX');
        this.localStorage.removeItem('indiceCoorY')
        guardadorContenedor();
        /*ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();*/
    }
    else{
        inicialX = e.clientX - rect.left;
		inicialY = e.clientY - rect.top;
        
        if(seleccion > 30){
            borrarse(inicialX, inicialY);
            guardadorContenedor()
            limpiarCanvas();

        
        }else if(seleccion > 23){
            relleno(inicialX, inicialY);
            guardadorContenedor()
            limpiarCanvas();
        } else if(seleccion > 19){
            desplazar(inicialX, inicialY, seleccion - 19);
            guardadorContenedor();
            limpiarCanvas();
        }else {
            finalX = e.clientX - rect.left;
		    finalY = e.clientY - rect.top;
		    
        } 
        if(seleccion == 11 || seleccion == 12 || seleccion == 13){
            valido = activate(inicialX, inicialY);
        }else {
            valido = true;
        }
        
    }
}, false);
window.addEventListener("mousemove",function(e){
    if(valido && seleccion < 11){
        limpiarCanvas();
        preview(inicialX, inicialY, e.clientX- rect.left, e.clientY - rect.top, finalX, finalY);
    }else if(seleccion == 11 && valido){
        preview(inicialX, inicialY, e.clientX - rect.left, e.clientY - rect.top, finalX, finalY);
        inicialX = e.clientX - rect.left;
		inicialY = e.clientY - rect.top;
    }else if(seleccion == 12 && valido){
        preview(inicialX, inicialY, e.clientX - rect.left, e.clientY - rect.top, finalX, finalY);
        inicialX = e.clientX - rect.left;
		inicialY = e.clientY - rect.top;
    }else if(seleccion == 13 && valido){
        preview(inicialX, inicialY, e.clientX - rect.left, e.clientY - rect.top, finalX, finalY);
        finalX = e.clientX - rect.left;
		finalY = e.clientY - rect.top;
    }else if(seleccion == 14 && valido){
        preview(e.clientX - rect.left, e.clientY - rect.top, 0,0,0,0);
    }else if(seleccion == 15 && valido){
        limpiarCanvas();
        preview(inicialX, inicialY, e.clientX- rect.left, e.clientY - rect.top, finalX, finalY);
    }

})

