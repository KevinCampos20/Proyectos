function buscar() {
    let nombre = document.getElementById("nombre").value.trim();
    let dia    = document.getElementById("dia").value.trim();
    let mes    = document.getElementById("mes").value.trim();
    let año    = document.getElementById("año").value.trim();

    if (!nombre || !dia || !mes || !año) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    dia = parseInt(dia);
    mes = parseInt(mes);
   
let signo = "";
    if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
        signo = "Acuario";
    } else if  ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
        signo = "Piscis";
    } else if  ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
        signo = "Aries";
    } else if  ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
        signo = "Tauro";
    } else if  ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
        signo = "Géminis";
    } else if  ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
        signo = "Cáncer";
    } else if  ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
        signo = "Leo";
    } else if  ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
        signo = "Virgo";
    } else if  ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
        signo = "Libra";
    } else if  ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
        signo = "Escorpio";
    } else if  ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
        signo = "Sagitario";
    } else if  ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
        signo = "Capricornio";
    } 

    if (!signo) {
        alert("La fecha ingresada no corresponde a ningún signo zodiacal. Verifique el día y el mes.");
        return;
    }

    document.getElementById("signo-zodiacal").innerHTML = `
        <p class="fac-titulo">DATOS</p>
        <hr class="fac-separador">
        <p class="fac-linea">Su nombre es : ${nombre}</p>
        <hr class="fac-separador">
        <p class="fac-linea">Su fecha de nacimiento es : ${dia}/${mes}/${año}</p>
        <hr class="fac-separador">
        <p class="fac-linea">Su signo zodiacal es : ${signo}</p>
        <hr class="fac-separador">
    `;

    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}