//Enviamos el valor que tiene más el que recibe por parámetro y lo mostramos por pantalla
function add(valueReceived) {
    //vamos a buscar el elemento al html 
    document.getElementById('screen').value += valueReceived
}

//El botón C, no recibe nada por parámetro y al value lo vamos a igualar a vacío, para que cada vez
//que se presione el botón, borre toda la pantalla
function deleteScreen() {
    document.getElementById('screen').value = ''
}

//El botón cal no recibe nada por parámetro
function calculate() {
    //vamos a crear una constante para poner dentro lo que hay en la pantalla
    const screenValue = document.getElementById('screen').value

    //vamos a crear otra constante y vamos a usar el método propio de JS 
    //el método eval evalua un string, en nuestro caso: + - / ..... y ejectua la función matemática    
    const result = eval(screenValue)

    //colocamos el resultado de la operación en la pantalla
    document.getElementById('screen').value = result
}