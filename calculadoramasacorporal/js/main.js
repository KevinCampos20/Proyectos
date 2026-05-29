function buscar() {
    let identificacion = document.getElementById("identificacion").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let estatura = document.getElementById("estatura").value.trim();
    let peso = document.getElementById("peso").value.trim();

    if (!identificacion || !nombre || !estatura || !peso) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // imcNum es número (para comparar), imc es string con 2 decimales (para mostrar)
    let imcNum = peso / (estatura * estatura);
    let imc = imcNum.toFixed(2);

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