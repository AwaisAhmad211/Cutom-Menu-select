let selecltField = document.getElementById("selecltField");
let selcetText = document.getElementById("selcetText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");


selecltField.onclick = function () {
    list.classList.toggle("hide");
}

for (option of options) {
    option.onclick = function () {
        selcetText.innerHTML = this.textContent;
        list.classList.toggle("hide");
    }
}