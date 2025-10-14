movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]

cargar1=function(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
    
}

prueba = function(){
    let numCuenta = recuperarTexto("txtMovimiento");
    filtrarMovimientos(numCuenta);
}

filtrarMovimientos=function(numeroCuenta){
    let movimientosCuenta = [];
    let elementoCuenta;
    //Se barre el arreglo de movimientos
    //En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
    //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
    //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
    for(let i = 0; i < movimientos.length; i++){
        elementoCuenta = movimientos[i];
        if(elementoCuenta.numeroCuenta == numeroCuenta){
            movimientosCuenta.push(elementoCuenta);
            mostrarMovimientos(movimientosCuenta);
        }
    }
}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos=function(misMovimientos){
    //Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
    //Columnas: NUMERO CUENTA, MONTO, TIPO
    //Si ya pinta correctamente la tabla, hacer el siguiente cambio:
    //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
    //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)
    let cmpTabla = document.getElementById("tablaMovimientos");
    let elementoMovimiento;
    let contenidoTabla = "<table>" 
    + "<tr>" 
    + "<th>NUMERO CUENTA</th>" + "<th>MONTO</th>" + "<th>TIPO</th>"
    + "</tr>"
    for(let i = 0; i < misMovimientos.length; i++){
        elementoMovimiento = misMovimientos[i];
        if(elementoMovimiento.tipo == "D"){
            contenidoTabla += "<tr>" 
            + "<td>" + elementoMovimiento.numeroCuenta + "</td>"
            + "<td>" + (-1 * parseFloat(elementoMovimiento.monto)) + "</td>"
            + "<td>" + elementoMovimiento.tipo + "</td>"
            + "</tr>"
        } else{
            contenidoTabla += "<tr>" 
            + "<td>" + elementoMovimiento.numeroCuenta + "</td>"
            + "<td>" + elementoMovimiento.monto + "</td>"
            + "<td>" + elementoMovimiento.tipo + "</td>"
            + "</tr>"
        }
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}




