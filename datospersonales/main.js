function buscar() {
    let identificacion = document.getElementById("identificacion").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let fecha_de_nacimiento = document.getElementById("fecha_de_nacimiento").value;
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();

    if (!identificacion || !nombre || !edad || !fecha_de_nacimiento || !correo || !telefono) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Formatear la fecha de dd/mm/aaaa a legible
    const [anio, mes, dia] = fecha_de_nacimiento.split("-");
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    document.getElementById("datos-personales").innerHTML = `
        <p class="fac-titulo">DATOS PERSONALES</p>
        <hr class="fac-separador">
        <p class="fac-linea"> Su identificación es: ${identificacion}</p>
        <hr class="fac-separador">
        <p class="fac-linea"> Su nombre es: ${nombre}</p>
        <hr class="fac-separador">
        <p class="fac-linea"> Su edad es: ${edad} años</p>
        <hr class="fac-separador">
        <p class="fac-linea"> Su fecha de nacimiento es: ${fechaFormateada}</p>
        <hr class="fac-separador">
        <p class="fac-linea"> Su correo es: ${correo}</p>
        <hr class="fac-separador">
        <p class="fac-linea"> Su teléfono es: ${telefono}</p>
        <hr class="fac-separador">
    `;

    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}