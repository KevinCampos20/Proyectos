function buscar() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, ingrese dos números válidos.");
        return;
    }

    let resultado = "";
    if (n1 > n2) {
        resultado = `<p class="fac-linea"> El número <strong>${n1}</strong> es el mayor.</p>`;
    } else if (n1 === n2) {
        resultado = `<p class="fac-linea"> Los dos números son iguales </p>`;
    } else {
        resultado = `<p class="fac-linea"> El número <strong>${n2}</strong> es el mayor </p>`;
    }

    document.getElementById("mayor").innerHTML = `
        <p class="fac-titulo">RESULTADO</p>
        <hr class="fac-separador">
        <p class="fac-linea">Primer Número: ${n1}</p>
        <hr class="fac-separador">
        <p class="fac-linea">Segundo Número: ${n2}</p>
        <hr class="fac-separador">
        ${resultado}
        <hr class="fac-separador">
    `;

    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}