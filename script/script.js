const textos = [
    "Soy estudiante de diseño y programación web.",
    "desarrolladora web.",
    "freelancer.",
];

let textoIndex = 0;
let letraIndex = 0;
let escribiendo = true;
const velocidad = 70;
const pausa = 1500;

const maquina = document.getElementById("maquina");


function escribir() {
    const textoActual = textos[textoIndex];

    if (escribiendo) {
        if (letraIndex < textoActual.length) {
            maquina.textContent += textoActual.charAt(letraIndex);
            letraIndex++;
            setTimeout(escribir, velocidad);
        } else {
            escribiendo = false;
            setTimeout(escribir, pausa);
        }
    } else {
        if (letraIndex > 0) {
            maquina.textContent = textoActual.substring(0, letraIndex - 1);
            letraIndex--;
            setTimeout(escribir, velocidad / 2);
        } else {
            escribiendo = true;
            textoIndex = (textoIndex + 1) % textos.length; // vuelve al inicio
            setTimeout(escribir, 300);
        }
    }
}

escribir();
