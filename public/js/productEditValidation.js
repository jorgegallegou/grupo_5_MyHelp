window.onload = function () {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    cleanError();

    const nombre = document.getElementById("nombre").value.trim();
    const precio = document.getElementById("precio").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const descripcion_general = document
      .getElementById("descripcion_general")
      .value.trim();
    const categoria = document.getElementById("categoria");
    const imagen = document.getElementById("imagen");

    let errors = [];
    console.log(errors);

    if (!nombre) {
      errors.push({
        campo: "nombre",
        msg: "¡El campo nombre no puede estar vacio!",
      });
      showError("nombre", "¡El campo nombre no puede estar vacio!");
    } else if (nombre.length < 5) {
      errors.push({
        campo: "nombre",
        msg: "El campo nombre debe tener al menos 5 caracteres",
      });
      showError("nombre", "¡El campo nombre debe tener al menos 5 caracteres!");
    }

    if (!precio) {
      errors.push({
        campo: "precio",
        msg: "El campo precio no puede estar vacio",
      });
      showError("precio", "¡El campo precio no puede estar vacio!");
    } else if (precio < 0) {
      errors.push({ campo: "precio", msg: "El numero debe ser mayor a cero" });
      showError("precio", "¡El numero debe ser mayor a cero!");
    }

    if (!descripcion) {
      errors.push({
        campo: "descripcion",
        msg: "El campo descripcion no puede estar vacio",
      });
      showError("descripcion", "¡El campo descripcion no puede estar vacio!");
    } else if (descripcion.length < 20) {
      errors.push({
        campo: "descripcion",
        msg: "El campo descripcion debe tener al menos 20 caracteres",
      });
      showError(
        "descripcion",
        "¡El campo descripcion debe tener al menos 20 caracteres!"
      );
    }

    if (!descripcion_general) {
      errors.push({
        campo: "descripcion_general",
        msg: "El campo descripcion general no puede estar vacio",
      });
      showError(
        "descripcion_general",
        "¡El campo descripcion general no puede estar vacio!"
      );
    } else if (descripcion_general.length < 50) {
      errors.push({
        campo: "descripcion_general",
        msg: "El campo descripcion general debe tener al menos 50 caracteres",
      });
      showError(
        "descripcion_general",
        "¡El campo descripcion general debe tener al menos 50 caracteres!"
      );
    }

    if (errors.length === 0) {
      form.submit();
    }
  });

  /*funcion para pasar los errores*/

  function showError(campo, msg) {
    const errorField = document.getElementById(`error-${campo}`);
    if (errorField) {
      errorField.textContent = msg;
    }
  }

  /*funcion para limpiar los errores*/

  function cleanError() {
    const errorEmpty = document.querySelectorAll(".msg-error");
    errorEmpty.forEach((errorField) => {
      errorField.textContent = "";
    });
  }
};
