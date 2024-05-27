function calcularResultado() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('resultadoInput').value = 'Valores faltantes';
        return;
    }

    const resultado = (b * c) / a;
    document.getElementById('resultadoInput').value = resultado;
}

document.getElementById('a').addEventListener('input', calcularResultado);
document.getElementById('b').addEventListener('input', calcularResultado);
document.getElementById('c').addEventListener('input', calcularResultado);

document.getElementById('copyButton').addEventListener('click', function() {
    const resultadoInput = document.getElementById('resultadoInput');
    navigator.clipboard.writeText(resultadoInput.value).then(function() {
        alert('Resultado copiado!');
    }, function() {
        alert('Falha ao copiar o resultado.');
    });
});