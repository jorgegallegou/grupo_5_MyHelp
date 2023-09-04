window.addEventListener("load", function () {
  
  let form = document.querySelector("form.formulario");

  form.addEventListener("submit", function (e) {

    // Limpia los errores anteriores
    let ulErrores = document.querySelector("div.errores ul");
    ulErrores.innerHTML = "";

    
    let errores = [];


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


    if (errores.length > 0) {
      let tituloError = document.querySelector(".errores");
      let icono = tituloError.querySelector("i");
      let texto = tituloError.querySelector("h3");

      tituloError.style.display = 'inline-block';
      icono.style.display = 'inline-block';
      texto.style.display = 'inline-block';
      icono.style.marginRight = '5px'
      
      e.preventDefault();
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});