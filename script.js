const checks = document.querySelectorAll(".opcion input");
const feedback = document.querySelector("#feedback");

checks.forEach(function(check) {
    check.addEventListener("change", function() {

        checks.forEach(function(otroCheck) {
            otroCheck.checked = false;
            otroCheck.parentElement.classList.remove("seleccionada");
        });

        check.checked = true;
        check.parentElement.classList.add("seleccionada");

        cantidadSeleccionada = parseInt(check.value, 10);
        feedback.textContent = "Seleccionaste: " + check.value + " colores";
    });
});

const contenedorPaleta = document.getElementById("contenedor-paleta");
const paleta = document.querySelector(".paleta");
const cajasColor = document.querySelectorAll(".paleta div");
const botonGenerar = document.getElementById("generar-paleta");
const opcionesFormato = document.querySelectorAll("input[name='formato']");
const feedbackFormato = document.getElementById("feedback-formato");

let cantidadSeleccionada = 0;
let coloresGuardados = [];

function generarNumeroAleatorio(maximo) {
    return Math.floor(Math.random() * maximo);
}

function generarColor() {
    const rojo = generarNumeroAleatorio(256);
    const verde = generarNumeroAleatorio(256);
    const azul = generarNumeroAleatorio(256);

    const hex = "#" + 
        rojo.toString(16).padStart(2, "0") +
        verde.toString(16).padStart(2, "0") +
        azul.toString(16).padStart(2, "0");

    const alpha = (Math.random() * 0.8 + 0.1).toFixed(2);
    const rgba = "rgba(" + rojo + ", " + verde + ", " + azul + ", " + alpha + ")";

    const hsl = convertirRgbAHsl(rojo, verde, azul);

    return {
        hex: hex,
        hsl: hsl,
        rgba: rgba
    };
}

function convertirRgbAHsl(r, g, b) {
    r = r / 255;
    g = g / 255;
    b = b / 255;

    const maximo = Math.max(r, g, b);
    const minimo = Math.min(r, g, b);

    let h = 0;
    let s = 0;
    let l = (maximo + minimo) / 2;

    if (maximo !== minimo) {
        const diferencia = maximo - minimo;

        if (l > 0.5) {
            s = diferencia / (2 - maximo - minimo);
        } else {
            s = diferencia / (maximo + minimo);
        }

        if (maximo === r) {
            h = (g - b) / diferencia;
        } else if (maximo === g) {
            h = 2 + (b - r) / diferencia;
        } else {
            h = 4 + (r - g) / diferencia;
        }

        h = h * 60;

        if (h < 0) {
            h = h + 360;
        }
    }

    h = Math.round(h);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

function obtenerFormatoSeleccionado() {
    let formatoElegido = "hex";

    opcionesFormato.forEach(function(opcion) {
        if (opcion.checked) {
            formatoElegido = opcion.value;
        }
    });

    return formatoElegido;
}

function mostrarPaleta() {
    const formato = obtenerFormatoSeleccionado();
    
    paleta.style.gridTemplateColumns = "repeat(" + cantidadSeleccionada + ", 1fr)";

    cajasColor.forEach(function(caja, indice) {
        if (indice < cantidadSeleccionada) {
            const color = coloresGuardados[indice];

            if (formato === "rgba") {
                caja.classList.add("rgba-padding");
            } else {
                caja.classList.remove("rgba-padding");
            }

            caja.classList.remove("oculto");
            caja.style.backgroundColor = color.hex;
            caja.textContent = "";
            caja.setAttribute("data-codigo", color[formato]);
        } else {
            caja.classList.add("oculto");
        }
    });
}

botonGenerar.addEventListener("click", function() {
    if (cantidadSeleccionada === 0) {
        feedback.textContent = "⚠️ Seleccioná primero una cantidad de colores";
        return;
    }

    coloresGuardados = [];

    for (let i = 0; i < cantidadSeleccionada; i++) {
        coloresGuardados.push(generarColor());
    }

    contenedorPaleta.style.display = "block";

    setTimeout(function () {
        contenedorPaleta.classList.add("mostrar");
    }, 10);
    mostrarPaleta();

    document.getElementById("seleccion").classList.add("modo-activo");
});

opcionesFormato.forEach(function(opcion) {
    opcion.addEventListener("change", function() {
        feedbackFormato.textContent = "Formato seleccionado: " + opcion.value.toUpperCase();

        if (coloresGuardados.length > 0) {
            mostrarPaleta();
        }
    });
});

cajasColor.forEach(function(caja) {
    caja.addEventListener("click", function() {
        const codigo = caja.getAttribute("data-codigo");

        navigator.clipboard.writeText(codigo);

        caja.classList.add("copiado");

        setTimeout(function () {
            caja.classList.remove("copiado");
        }, 900);
    });
});