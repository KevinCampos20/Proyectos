function buscar() {
    let ide   = document.getElementById("ide").value.trim();
    let nom   = document.getElementById("nom").value.trim();
    let dir   = document.getElementById("dir").value.trim();
    let tel   = document.getElementById("tel").value.trim();
    let nfac  = document.getElementById("nfac").value.trim();
    let fecha = document.getElementById("fecha").value.trim();
    let rs    = document.getElementById("rs").value.trim();
    let p     = document.getElementById("p").value.trim();
    let cant  = parseFloat(document.getElementById("cant").value);
    let vu    = parseFloat(document.getElementById("vu").value);

    if (!ide || !nom || !dir || !tel || !nfac || !fecha || !rs || !p || isNaN(cant) || isNaN(vu)) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let subtotal = vu * cant;
    let iva      = subtotal * 0.19;
    let total    = subtotal + iva;

    // Lógica de descuento según rango del total
    let porcentaje_descuento, descuento;
    if (total >= 50000 && total <= 100000) {
        porcentaje_descuento = 5;
        descuento = total * 0.05;
    } else if (total > 100000 && total <= 199999) {
        porcentaje_descuento = 10;
        descuento = total * 0.10;
    } else if (total >= 200000) {
        porcentaje_descuento = 20;
        descuento = total * 0.20;
    } else {
        porcentaje_descuento = 0;
        descuento = 0;
    }
    let total_final = total - descuento;

    let filaDescuento = porcentaje_descuento > 0
        ? `<p class="fac-linea fac-descuento">Descuento (${porcentaje_descuento}%) : -$${descuento.toLocaleString('es-CO')}</p>`
        : `<p class="fac-linea">Descuento          : Sin descuento</p>`;

    document.getElementById("contenido-factura").innerHTML = `
        <p class="fac-linea">Razón social: <b>${rs}</b></p>
        <p class="fac-linea"># de Factura: <b>${nfac}</b></p>
        <p class="fac-linea">Fecha       : <b>${fecha}</b></p>
        <hr class="fac-separador">
        <p class="fac-titulo">DATOS DEL CLIENTE</p>
        <hr class="fac-separador">
        <p class="fac-linea">Identificación : ${ide}</p>
        <p class="fac-linea">Cliente        : ${nom}</p>
        <p class="fac-linea">Dirección      : ${dir}</p>
        <p class="fac-linea">Teléfono       : ${tel}</p>
        <hr class="fac-separador">
        <p class="fac-titulo">DATOS DEL PRODUCTO</p>
        <hr class="fac-separador">
        <p class="fac-linea">Producto       : ${p}</p>
        <p class="fac-linea">Cantidad       : ${cant}</p>
        <p class="fac-linea">Valor unitario : $${Number(vu).toLocaleString('es-CO')}</p>
        <p class="fac-linea">Subtotal       : $${subtotal.toLocaleString('es-CO')}</p>
        <p class="fac-linea">IVA (19%)      : $${iva.toLocaleString('es-CO')}</p>
        <p class="fac-linea">Total antes desc.: $${total.toLocaleString('es-CO')}</p>
        ${filaDescuento}
        <hr class="fac-separador">
        <p class="fac-linea"><b>TOTAL A PAGAR  : $${total_final.toLocaleString('es-CO')} Pesos</b></p>
        <hr class="fac-separador">
        <p class="fac-titulo">¡GRACIAS POR SU COMPRA!</p>
        <hr class="fac-separador">
    `;

    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}