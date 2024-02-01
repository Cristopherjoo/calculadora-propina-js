// script.js
// Referencia al boton utilizar id
let btnCalculadora = document.getElementById('btnCalculadora')

// Escucha de eventos clic en el boton
btnCalculadora.addEventListener('click', function() {
    calcularPropina()
});

function calcularPropina() {
    // Obtener valores de los campos de entrada
    let cantidaTotal = parseFloat(document.getElementById('cantidaTotal').value)
    let porcentaje = parseFloat(document.getElementById('porcentaje').value)

    // Validar ingreso de valores numericos
    if (typeof cantidaTotal !== 'number' || isNaN(cantidaTotal) || typeof porcentaje !== 'number' || isNaN(porcentaje)) {
        alert('Por favor, ingrese valores numéricos válidos.')
        return
    }

    // Calcular propina y total
    let propina = cantidaTotal * (porcentaje / 100)
    let totalPagar = cantidaTotal + propina

    // Mostrar en la interfaz
    mostrarResultados(propina, totalPagar)
}

function mostrarResultados(propina, totalPagar) {
    // Mostrar en la interfaz
    let resultadosHTML = `        
        <p>Total a pagar: $${totalPagar.toFixed(0)}</p>
        <p>Total de propina:<span class="propina"> $${propina.toFixed(0)}</span></p>
    `
    document.getElementById('pagarPropina').innerHTML = resultadosHTML
}
