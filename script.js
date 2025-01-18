document.addEventListener('DOMContentLoaded', (event) => {
    const pantalla = document.getElementById('pantalla');
    const botones = document.querySelectorAll('.botones button');
    let resultado = '';

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const valor = boton.textContent;

            if (valor === 'C') {
                resultado = '';
            } else if (valor === 'DEL') {
                resultado = resultado.slice(0, -1);
            } else if (valor === '=') {
                try {
                    resultado = eval(resultado);
                } catch (e) {
                    resultado = 'Error';
                }
            } else {
                resultado += valor;
            }

            pantalla.value = resultado;
        });
    });
});
