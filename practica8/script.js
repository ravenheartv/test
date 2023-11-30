function crearInput() {
    
    let inputValor = document.getElementById('Input').value;

    let nuevoParrafo = document.createElement('p');

    nuevoParrafo.textContent = inputValor;

    document.body.appendChild(nuevoParrafo);
}



///////////////////////////////////////////////
function lanzarDados() {
    const input = document.getElementById('dadosInput').value;
    const regex = /^(\d+)d(\d+)$/;

    if (regex.test(input)) {
        const [, numDados, caras] = input.match(regex);
        const resultados = lanzarXDados(parseInt(numDados), parseInt(caras));
        document.getElementById('resultadoDados').textContent = `Results: ${resultados.join(', ')}`;
    } else {
        document.getElementById('resultadoDados').textContent = "k no hombre bro ponmelo como la explicación de ahi arriba eske no sabes leer????";
    }
}

function lanzarXDados(numDados, caras) {
    const resultados = [];
    for (let i = 0; i < numDados; i++) {
        const dadoResultado = Math.floor(Math.random() * caras) + 1;
        resultados.push(dadoResultado);
    }
    return resultados;
}
document.getElementById('buttonId').addEventListener('click', lanzarDados);


///////////////////////////////////////////////