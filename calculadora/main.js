let m = ""
let mr1 = 0
let op = 0

function borrar(){
    m = ""
    mr1 = 0
    op = 0
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
}

function opback(){
    m = m.slice(0, -1)
    document.getElementById("n1").value = m || "0"
}

function opporciento(){
    if(m !== "") {
        m = String(parseFloat(m) / 100)
        document.getElementById("n1").value = m
    }
}

function opmasmenos(){
    if(m !== "") {
        m = String(parseFloat(m) * -1)
        document.getElementById("n1").value = m
    }
}

function oppunto(){
    if(!m.includes(".")) {
        m = m === "" ? "0." : m + "."
        document.getElementById("n1").value = m
    }
}

function opmas(){
    op = 1
    mr1 = parseFloat(m)
    document.getElementById("n2").value = mr1 + " +"
    m = ""
}

function opmenos(){
    op = 2
    mr1 = parseFloat(m)
    document.getElementById("n2").value = mr1 + " -"
    m = ""
}

function opmultiplicar(){
    op = 3
    mr1 = parseFloat(m)
    document.getElementById("n2").value = mr1 + " *"
    m = ""
}

function opdividir(){
    op = 4
    mr1 = parseFloat(m)
    document.getElementById("n2").value = mr1 + " /"
    m = ""
}

function opigual(){
    const  mr2 = parseFloat(m)
    let resultado = 0
    let  simbolo = ""

    if(op == 1){ resultado = mr1 + mr2; simbolo = "+" }
    else if(op == 2){ resultado = mr1 - mr2; simbolo = "-" }
    else if(op == 3){ resultado = mr1 * mr2; simbolo = "*" }
    else if(op == 4){ resultado = mr2 !== 0 ? mr1 / mr2 : "Error"; simbolo = "/" }

    document.getElementById("n1").value = resultado
    document.getElementById("n2").value = mr1 + " " + simbolo + " " + mr2 + " ="
    m = String(resultado)
    mr1 = 0
    op = 0
}

function ndigito(d){
    if(m === "0") m = d
    else m += d
    document.getElementById("n1").value = m
}

function nuno(){ ndigito("1") }
function ndos(){ ndigito("2") }
function ntres(){ ndigito("3") }
function ncuatro(){ ndigito("4") }
function ncinco(){ ndigito("5") }
function nseis(){ ndigito("6") }
function nsiete(){ ndigito("7") }
function nocho(){ ndigito("8") }
function nnueve(){ ndigito("9") }
function ncero(){ ndigito("0") }