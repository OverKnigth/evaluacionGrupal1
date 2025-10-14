cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas();
}

mostrarCuentas=function(){
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
   let cmpTabla = document.getElementById("divTabla");
   let elementoCuenta;
   let contenidoTabla = "<table>" 
   + "<tr>" 
   + "<th>Numero de Cuenta</th>"
   + "<th>Nombre</th>"
   + "<th>Saldo</th>"
   + "</tr>" 
   for(let i = 0; i < cuentas.length; i++){
    elementoCuenta = cuentas[i];
    contenidoTabla += "<tr>"
    + "<td>" + elementoCuenta.numeroCuenta + "</td>"
    + "<td>" + elementoCuenta.nombre + " " + elementoCuenta.apellido + "</td>"
    + "<td>" + elementoCuenta.saldo + "</td>"
    + "</tr>"
   }
   contenidoTabla += "</table>";
   cmpTabla.innerHTML = contenidoTabla;
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let elementoCuenta;
    let cuentaEncontrada = null;
    for(let i = 0; i < cuentas.length; i++){
        elementoCuenta = cuentas[i];
        if(elementoCuenta.numeroCuenta == numeroCuenta){
            cuentaEncontrada = elementoCuenta;
        } 
    }
    return cuentaEncontrada;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
    let cuentaEncontrada = buscarCuenta(cuenta.numeroCuenta);
    if(cuentaEncontrada == null){
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");
    } else{
        alert("CUENTA EXISTENTE");
    }
}

ejecutarAgregarCuenta=function(){
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let numeroCuenta = recuperarInt("txtCuenta");
    let cuenta = {}
    cuenta.numeroCuenta = numeroCuenta;
    cuenta.cedula = cedula;
    cuenta.nombre = nombre;
    cuenta.apellido = apellido;
    cuenta.saldo = 0.0;
    agregarCuenta(cuenta);
    mostrarCuentas();
}

cargar1=function(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
    
}

pruebaMovimientos = function(){
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



cargar2=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    deshabilitarComponente("depositar")
    deshabilitarComponente("retirar")
    deshabilitarComponente("cedula")
    deshabilitarComponente("nombre")
    deshabilitarComponente("apellido")
    deshabilitarComponente("saldo")
    deshabilitarComponente("Cuenta")
    
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuentaTransacciones=function(numeroCuenta){

    for (let i = 0; i < cuentas.length; i++) {
        if (numeroCuenta == cuentas[i].numeroCuenta) {
            return cuentas[i];
        }
    }
    return null;
}

ejecutarBusqueda=function(){
    let numeroCuentaBuscada = recuperarTexto("buscarCuenta");
    let empleado = buscarCuentaTransacciones(numeroCuentaBuscada);
    if (empleado === null) {
        alert("El empleado no existe.");
        mostrarTextoEnCaja("cedula", " ");
        mostrarTextoEnCaja("nombre", "");
        mostrarTextoEnCaja("apellido", "" );
        mostrarTextoEnCaja("saldo", " ");
        mostrarTextoEnCaja("Cuenta"," ");
        deshabilitarComponente("depositar")
        deshabilitarComponente("retirar")

    } else if (empleado!== null) {
        mostrarTextoEnCaja("cedula", empleado.cedula);
        mostrarTextoEnCaja("nombre", empleado.nombre);
        mostrarTextoEnCaja("apellido", empleado.apellido);
        mostrarTextoEnCaja("saldo", empleado.saldo);
        mostrarTextoEnCaja("Cuenta", empleado.numeroCuenta);
        habilitarComponente("depositar")
        habilitarComponente("retirar")

    
}
}


ejecutarDeposito=function(){
    let numeroCuenta = recuperarTexto("Cuenta");
    let monto = recuperarFloat("valorSegundo");
    depositar(numeroCuenta, monto);
    //Toma el numero de cuenta ingresado en la caja de texto
    //Toma el monto ingresado en la caja de texto
    //invoca a depositar
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta
}

depositar=function(numeroCuenta,montoASumar){
    let cuentaAfectada = buscarCuentaTransacciones(numeroCuenta);
    
    if(cuentaAfectada!== null && montoASumar > 0 && !isNaN(montoASumar) ){
        cuentaAfectada.saldo += montoASumar;
    alert("TRANSACCION EXITOSA");
    mostrarTextoEnCaja("saldo", cuentaAfectada.saldo);
    } else if(isNaN(montoASumar) || montoASumar < 0){
        alert("Debe ingresar un monto valido");
    }

    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
}

retirar=function(numeroCuenta,monto){
    let cuentaAfectada = buscarCuentaTransacciones(numeroCuenta);
    if(cuentaAfectada!== null && monto > 0 &&!isNaN(monto) && cuentaAfectada.saldo >= monto){
        cuentaAfectada.saldo -= monto;
        alert("TRANSACCION EXITOSA");
        mostrarTextoEnCaja("saldo", cuentaAfectada.saldo);
    } else if(isNaN(monto) || monto < 0){
        alert("Debe ingresar un monto valido");
    } else if(cuentaAfectada.saldo < monto){
        alert("Saldo insuficiente");
    }
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
}

ejecutarRetirar=function(){
let numeroCuenta = recuperarTexto("Cuenta");
let monto = recuperarFloat("valorSegundo");
retirar(numeroCuenta, monto);
}

/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte


//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos


