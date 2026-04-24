const checks = document.querySelectorAll(".opcion input");
const feedback = document.querySelector("#feedback");

checks.forEach(function(check) {
    check.addEventListener("change", function() {

        checks.forEach(function(otroCheck) {
            otroCheck.checked = false;
            otroCheck.parentElement.classList.remove("seleccionada");
        });

        check.checked = true;
        check.parentElement.classList.add("seleccionada");

        feedback.textContent = "Seleccionaste: " + check.value + " colores";
    });
});