function buscar() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, ingrese tres números válidos.");
        return;
    }

    let resultado = "";

    // Caso: n1 es el único mayor
    if (n1 > n2 && n1 > n3) {
        resultado = `<p class="fac-linea"> El número <strong>${n1}</strong> es el mayor </p>`;
    }
    // Caso: n2 es el único mayor
    else if (n2 > n1 && n2 > n3) {
        resultado = `<p class="fac-linea"> El número <strong>${n2}</strong> es el mayor </p>`;
    }
    // Caso: n3 es el único mayor
    else if (n3 > n1 && n3 > n2) {
        resultado = `<p class="fac-linea"> El número <strong>${n3}</strong> es el mayor </p>`;
    }
    // Caso: n1 y n2 son iguales y mayores que n3
    else if (n1 === n2 && n1 > n3) {
        resultado = `<p class="fac-linea"> <strong>${n1}</strong> y <strong>${n2}</strong> son iguales y son los mayores </p>`;
    }
    // Caso: n1 y n3 son iguales y mayores que n2
    else if (n1 === n3 && n1 > n2) {
        resultado = `<p class="fac-linea"> <strong>${n1}</strong> y <strong>${n3}</strong> son iguales y son los mayores </p>`;
    }
    // Caso: n2 y n3 son iguales y mayores que n1
    else if (n2 === n3 && n2 > n1) {
        resultado = `<p class="fac-linea"> <strong>${n2}</strong> y <strong>${n3}</strong> son iguales y son los mayores </p>`;
    }
    // Caso: los tres son iguales
    else if (n1 === n2 && n2 === n3) {
        resultado = `<p class="fac-linea"> Los tres números son iguales </p>`;
    }

    document.getElementById("mayor").innerHTML = `
        <p class="fac-titulo">RESULTADO</p>
        <hr class="fac-separador">
        <p class="fac-linea">Primer Número: ${n1}</p>
        <hr class="fac-separador">
        <p class="fac-linea">Segundo Número: ${n2}</p>
        <hr class="fac-separador">
        <p class="fac-linea">Tercer Número: ${n3}</p>
        <hr class="fac-separador">
        ${resultado}
        <hr class="fac-separador">
    `;

    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}