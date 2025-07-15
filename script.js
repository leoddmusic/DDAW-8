// Función para mostrar alerta al hacer clic en el botón
function mostrarAlerta() {
    alert("¡Gracias por visitar mi sitio web interactivo!");
}

// Validación del formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        // Evita que se envíe el formulario si hay errores
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        let errores = [];

        if (nombre === "") {
            errores.push("El campo Nombre es obligatorio.");
        }

        if (correo === "") {
            errores.push("El campo Correo Electrónico es obligatorio.");
        } else if (!/^\S+@\S+\.\S+$/.test(correo)) {
            errores.push("El correo electrónico no tiene un formato válido.");
        }

        if (mensaje === "") {
            errores.push("El campo Mensaje es obligatorio.");
        }

        if (errores.length > 0) {
            alert("Por favor corrige los siguientes errores:\n\n" + errores.join("\n"));
        } else {
            alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
            form.reset(); // Limpia el formulario
        }
    });
});
