const botonDesplegar = document.getElementById("desplegar");
const listaOpciones = document.getElementById("opciones");
const bloquesColor = document.querySelectorAll(".paleta div");

let cantidadSeleccionada = 9;

/* MOSTRAR Y OCULTAR OPCIONES */
botonDesplegar.addEventListener("click", function () {
    if (listaOpciones.style.display === "block") {
        listaOpciones.style.display = "none";
    } else {
        listaOpciones.style.display = "block";
    }
});

/* CUANDO EL USUARIO ELIGE UNA CANTIDAD */
listaOpciones.addEventListener("click", function (evento) {
    if (evento.target.tagName === "LI") {
        cantidadSeleccionada = Number(evento.target.dataset.cantidad);
        botonDesplegar.textContent = `Cantidad seleccionada: ${cantidadSeleccionada}`;
        listaOpciones.style.display = "none";
        generarPaleta();
    }
});

/* GENERAR NÚMERO ALEATORIO */
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* CONVERTIR RGB A HEX */
function rgbAHex(r, g, b) {
    let rojo = r.toString(16).padStart(2, "0");
    let verde = g.toString(16).padStart(2, "0");
    let azul = b.toString(16).padStart(2, "0");

    return `#${rojo}${verde}${azul}`.toUpperCase();
}

/* CONVERTIR RGB A HSL */
function rgbAHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l;

    l = (max + min) / 2;

    if (max === min) {
        h = 0;
        s = 0;
    } else {
        let diferencia = max - min;

        s = l > 0.5 ? diferencia / (2 - max - min) : diferencia / (max + min);

        switch (max) {
            case r:
                h = (g - b) / diferencia + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / diferencia + 2;
                break;
            case b:
                h = (r - g) / diferencia + 4;
                break;
        }

        h = h / 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

/* ELEGIR COLOR DE TEXTO SEGÚN EL FONDO */
function colorTextoIdeal(r, g, b) {
    let brillo = (r * 299 + g * 587 + b * 114) / 1000;

    if (brillo > 128) {
        return "#000000";
    } else {
        return "#FFFFFF";
    }
}

/* GENERAR PALETA */
function generarPaleta() {
    bloquesColor.forEach(function (bloque, indice) {
        if (indice < cantidadSeleccionada) {
            let r = numeroAleatorio(0, 255);
            let g = numeroAleatorio(0, 255);
            let b = numeroAleatorio(0, 255);
            let a = (Math.random() * 0.7 + 0.3).toFixed(2);

            let colorHex = rgbAHex(r, g, b);
            let colorHsl = rgbAHsl(r, g, b);
            let colorRgba = `rgba(${r}, ${g}, ${b}, ${a})`;

            bloque.style.display = "flex";
            bloque.style.backgroundColor = colorRgba;
            bloque.style.color = colorTextoIdeal(r, g, b);

            bloque.innerHTML = `
                HEX: ${colorHex}<br>
                HSL: ${colorHsl}<br>
                RGBA: ${colorRgba}
            `;
        } else {
            bloque.style.display = "none";
        }
    });
}

/* GENERAR PALETA AL CARGAR LA PÁGINA */
generarPaleta();

const botonGenerarPaleta = document.getElementById("generar-paleta");

botonGenerarPaleta.addEventListener("click", generarPaleta);