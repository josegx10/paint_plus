var contenedorTemporal = [];
var indiceTem = -1;
var conTem = 0;

function guardadorContenedor(){
    if(conTem == indiceTem+1){
        contenedorTemporal.push({fig: Array.from(figuras)});
        indiceTem++;
        conTem++;
    }else { // si va a hacer un cambio entre un anterior cambio
        contenedorTemporal.push({fig: Array.from(figuras)});
        indiceTem++;
        conTem=indiceTem+1;
    }
    console.log(contenedorTemporal);

}
function deshacerTem(){
    if(indiceTem == 0){
        
        return true;
    }
    indiceTem--;
    
    figuras = Array.from(contenedorTemporal[indiceTem].fig);
}
function rehacerTem(){
    if(indiceTem == conTem - 1){
        
        return true;
    }
    indiceTem++;
    
    figuras =  Array.from(contenedorTemporal[indiceTem].fig);
}
