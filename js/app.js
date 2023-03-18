function setTambah() {
    let frm = document.getElementById("kalkulatorku");
    let ak1 = frm.angka1.value;
    let ak2 = frm.angka2.value;
    let tbh = parseInt(ak1) + parseInt(ak2);

    if (isNaN(tbh)) {
        frm.hasil.value = alert("Maaf, yang anda inputkan bukan angka!");
    }

    else {
        frm.hasil.value = tbh.toLocaleString();
    }
}

function setKurang() {
    let frm = document.getElementById("kalkulatorku");
    let ak1 = frm.angka1.value;
    let ak2 = frm.angka2.value;
    let tbh = parseInt(ak1) - parseInt(ak2);

    if (isNaN(tbh)) {
        frm.hasil.value = alert("Maaf, yang anda inputkan bukan angka!");
    }

    else {
        frm.hasil.value = tbh.toLocaleString();
    }
}

function setKali() {
    let frm = document.getElementById("kalkulatorku");
    let ak1 = frm.angka1.value;
    let ak2 = frm.angka2.value;
    let tbh = parseInt(ak1) * parseInt(ak2);

    if (isNaN(tbh)) {
        frm.hasil.value = alert("Maaf, yang anda inputkan bukan angka!");
    }

    else {
        frm.hasil.value = tbh.toLocaleString();
    }
}

function setBagi() {
    let frm = document.getElementById("kalkulatorku");
    let ak1 = frm.angka1.value;
    let ak2 = frm.angka2.value;
    let tbh = parseInt(ak1) / parseInt(ak2);

    if (isNaN(tbh)) {
        frm.hasil.value = alert("Maaf, yang anda inputkan bukan angka!");
    }

    else {
        frm.hasil.value = tbh.toLocaleString();
    }
}

function setPangkat() {
    let frm = document.getElementById("kalkulatorku");
    let ak1 = frm.angka1.value;
    let ak2 = frm.angka2.value;
    let tbh = Math.pow(parseInt(ak1), parseInt(ak2));

    if (isNaN(tbh)) {
        frm.hasil.value = alert("Maaf, yang anda inputkan bukan angka!");
    }

    else {
        frm.hasil.value = tbh.toLocaleString();
    }
}

function kosongin() {
    let frm = window.document.getElementById("kalkulatorku");
    frm.angka1.value = "";
}

function kosongin2() {
    let frm = window.document.getElementById("kalkulatorku");
    frm.angka2.value = "";
}