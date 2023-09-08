function relleno(x0, y0){
    active = activate(x0, y0);
    if(active){
        var vectorseleccionado = localStorage.getItem('FiguraStatus');
        figuras[vectorseleccionado].textura = true;
        figuras[vectorseleccionado].colorTextura = color;
        
        figuras[vectorseleccionado].estado = false;
        localStorage.removeItem('FiguraStatus');
    }

}