window.addEventListener("load", function () {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    cleanError();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let errores = [];
    console.log(errores);

    let correoExpresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      errores.push({
        campo: "email",
        msg: "Ingresa un correo electrónico",
      });
      showError("email", "Ingresa un correo electrónico");
    } else if (!correoExpresionRegular.test(email)) {
      errores.push({
        campo: "email",
        msg: "El formato del correo electrónico no es válido",
      });
      showError("email", "El formato del correo electrónico no es válido");
    }

    if (!password) {
      errores.push({
        campo: "password",
        msg: "Ingresa una contraseña",
      });
      showError("password", "Ingresa una contraseña");
    }


    if (errores.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Algún campo incorrecto!",
      });
    } else {
      Swal.fire("¡Hola, bienvenido", "", "success").then(() => {
        form.submit();
      });
    }

    /*Función para mostrar los errores en el formulario*/
    function showError(campo, msg) {
      const errorField = document.getElementById(`error-${campo}`);
      if (errorField) {
        errorField.textContent = msg;
      }
    }

    /*Funcion para limpiar los errores*/
    function cleanError() {
      const errorEmpty = document.querySelectorAll(".msg-error");
      errorEmpty.forEach((errorField) => {
        errorField.textContent = "";
      });
    }
  });
});
