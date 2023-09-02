window.addEventListener("load", function () {
  
  let form = document.querySelector("form.formulario");

  form.addEventListener("submit", function (e) {

    // Limpia los errores anteriores
    let ulErrores = document.querySelector("div.errores ul");
    ulErrores.innerHTML = "";

    
    let errores = [];


    let campoNombre = document.querySelector("input[name='nombre']");
    if (campoNombre.value === "") {
      errores.push("Ingresa tu nombre completo.");
    } else if (campoNombre.value.length < 2) {
      errores.push("Tu nombre debe tener al menos 2 caracteres.");
    }


    let campoEmail = document.querySelector("input[name='email']");
    let correoExpresionRegular  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (campoEmail.value === "") {
      errores.push("Ingresa tu dirección de correo electrónico.");
    } else if (!correoExpresionRegular.test(campoEmail.value)) {
      errores.push("El formato del correo electrónico no es válido");
    }


    let campoPassword = document.querySelector("input[name='password']");
    if (campoPassword.value === "") {
      errores.push("Ingresa una contraseña.");
    }


    let campoImagen = document.querySelector("input[name='imagen']");
    if (campoImagen.files.length === 0) {
      errores.push("Por favor, selecciona una imagen.");
    } else {
      let imagen = campoImagen.files[0];
      let extensionesPermitidas = ["jpg", "jpeg", "png", "gif"];
      let extension = imagen.name.split(".").pop().toLowerCase();
      if (extensionesPermitidas.indexOf(extension) === -1) {
        errores.push("Selecciona una imagen en formato JPG, JPEG, PNG o GIF.");
      }
      let tamanoMaximo = 5 * 1024 * 1024; // 5 MB
      if (imagen.size > tamanoMaximo) {
        errores.push(
          "La imagen es demasiado grande. El tamaño máximo permitido es de 5 MB."
        );
      }
    }


    let campoTipoIdentificacion = document.querySelector(
      "select[name='tipo_identificacion']"
    );
    if (campoTipoIdentificacion.value === "") {
      errores.push("Debes seleccionar un tipo de documento de identificación.");
    }


    let campoIdentificacion = document.querySelector(
      "input[name='identificacion']"
    );
    if (campoIdentificacion.value === "") {
      errores.push("Debes ingresar el número de identificacíon.");
    }


    let campoCelular = document.querySelector("input[name='celular']");
    if (campoCelular.value === "") {
      errores.push("Debes ingresar un número de celular.");
    }


    if (errores.length > 0) {
      e.preventDefault();
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
