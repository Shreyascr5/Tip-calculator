var billinput = document.getElementById("input");
var finalBill = document.getElementById("finalbill");
var tipSlider = document.getElementById("tipslider");
var val = document.getElementById("tipvalue");
val.innerHTML = tipSlider.value;
let billrs;
let tipPercent;
tipSlider.oninput = function() {
    val.innerHTML = this.value;
    billrs = billinput.value;
    tipPercent = (val.innerHTML / 100) * billrs;
    if (val.innerHTML == 0) {
        finalBill.innerText = "₹" + billrs;
    } else {
        finalBill.innerText = "₹" + tipPercent;
    }
}