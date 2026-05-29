const USER  = "pepito";
const CONTRA = "12345";

function iniciarSesion() {
    let u = document.getElementById("usuario").value.trim();
    let c = document.getElementById("contrasena").value.trim();
    let errorMsg = document.getElementById("error-login");

    if (!u || !c) {
        errorMsg.textContent = "Por favor, ingrese su usuario y contraseña.";
        errorMsg.style.display = "block";
        return;
    }

    if (u === USER && c === CONTRA) {
        document.getElementById("pantalla-login").style.display = "none";
        document.getElementById("pantalla-calculadora").style.display = "block";
    } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos. No está permitido entrar al sistema.";
    errorMsg.style.display = "block";
    }
}

function buscar() {
    let identificacion = document.getElementById("identificacion").value;
    let nombre         = document.getElementById("nombre").value;
    let estatura       = parseFloat(document.getElementById("estatura").value);
    let peso           = parseFloat(document.getElementById("peso").value);

    if (!identificacion || !nombre || isNaN(estatura) || isNaN(peso)) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let imcNum = peso / (estatura * estatura);
    let imc    = imcNum.toFixed(2);

    let diagnostico = "";
    if (imcNum < 18.5) {
        diagnostico = "El paciente tiene bajo peso";
    } else if (imcNum >= 18.5 && imcNum < 25.0) {
        diagnostico = "El paciente tiene un peso normal";
    } else if (imcNum >= 25.0 && imcNum < 30.0) {
        diagnostico = "El paciente está en sobrepeso";
    } else if (imcNum >= 30.0) {
        diagnostico = "El paciente está obeso";
    }

    document.getElementById("contenido-calculadora-de-masa-corporal").innerHTML = `
        <hr class="res-separador">
        <p class="res-titulo">DATOS DEL PACIENTE</p>
        <hr class="res-separador">
        <p class="res-linea">Identificación: ${identificacion}</p>
        <p class="res-linea">Nombre: ${nombre}</p>
        <p class="res-linea">Estatura: ${estatura} Metros</p>
        <p class="res-linea">Peso: ${peso} Kilos</p>
        <hr class="res-separador">
        <p class="res-titulo">RESULTADO</p>
        <hr class="res-separador">
        <p class="res-linea">La masa corporal del paciente es: ${imc}</p>
        <hr class="res-separador">
        <p class="res-titulo">DIAGNÓSTICO</p>
        <hr class="res-separador">
        <p class="res-linea">${diagnostico}</p>
        <hr class="res-separador">
    `;

    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
