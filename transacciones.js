cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

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
buscarCuenta=function(numeroCuenta){

    for (let i = 0; i < cuentas.length; i++) {
        if (numeroCuenta == cuentas[i].numeroCuenta) {
            return cuentas[i];
        }
    }
    return null;
}

ejecutarBusqueda=function(){
    let numeroCuentaBuscada = recuperarTexto("buscarCuenta");
    let empleado = buscarCuenta(numeroCuentaBuscada);
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
    let cuentaAfectada = buscarCuenta(numeroCuenta);
    
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
    let cuentaAfectada = buscarCuenta(numeroCuenta);
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