window.addEventListener('load', function () {
  const form = document.querySelector('.formulario');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    cleanError();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const cpassword = document.getElementById('cpassword').value.trim();
    const imagen = document.getElementById('imagen');
    const tipo_identificacion = document
      .getElementById('tipo_identificacion')
      .value.trim();
    const identificacion = document
      .getElementById('identificacion')
      .value.trim();
    const celular = document.getElementById('celular').value.trim();

    let errores = [];
    console.log(errores);

    if (!nombre) {
      errores.push({
        campo: 'nombre',
        msg: 'El campo nombre está vacío',
      });
      showError('nombre', 'El campo nombre está vacío');
    } else if (nombre.length < 2) {
      errores.push({
        campo: 'nombre',
        msg: 'El campo nombre debe tener al menos 2 caracteres',
      });
      showError('nombre', 'El campo nombre debe tener al menos 2 caracteres');
    }

    let correoExpresionRegular =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      errores.push({
        campo: 'email',
        msg: 'Ingresa un correo electrónico',
      });
      showError('email', 'Ingresa un correo electrónico');
    } else if (!correoExpresionRegular.test(email)) {
      errores.push({
        campo: 'email',
        msg: 'El formato del correo electrónico no es válido',
      });
      showError('email', 'El formato del correo electrónico no es válido');
    }

    if (!password && !cpassword) {
      errores.push({
        campo: 'password',
        msg: 'Ingresa una contraseña',
      });
      showError('password', 'Ingresa una contraseña');
    } else if (password.length < 8) {
      errores.push({
        campo: 'password',
        msg: 'La contraseña debe tener mínimo 8 caracteres.',
      });
      showError('password', 'La contraseña debe tener mínimo 8 caracteres.');
    }
    if (password && !cpassword) {
      errores.push({
        campo: 'cpassword',
        msg: 'Debes confirmar la contraseña',
      });
      showError('cpassword', 'Debes confirmar la contraseña');
    } else if (password !== cpassword) {
      errores.push({
        campo: 'password',
        msg: 'Las contraseñas no coinciden.',
      });
      showError('password', 'Las contraseñas no coinciden.');
    }

    if (imagen.files.length === 0) {
      errores.push({
        campo: 'imagen',
        msg: 'Selecciona una imagen',
      });
      showError('imagen', 'Selecciona una imagen.');
    } else {
      let campoImagen = imagen.files[0];
      let extensionesPermitidas = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
      let extension = campoImagen.name.split('.').pop().toLowerCase();
      if (extensionesPermitidas.indexOf(extension) === -1) {
        errores.push({
          campo: 'imagen',
          msg: 'Selecciona una imagen en formato JPG, JPEG, PNG, GIF o .SVG',
        });
        showError(
          'imagen',
          'Selecciona una imagen en formato JPG, JPEG, PNG, GIF o .SVG'
        );
      }
    }

    if (!tipo_identificacion) {
      errores.push({
        campo: 'tipo_identificacion',
        msg: 'Debes seleccionar un tipo de documento de identificación.',
      });
      showError(
        'tipo_identificacion',
        'Debes seleccionar un tipo de documento de identificación.'
      );
    }

    if (!identificacion) {
      errores.push({
        campo: 'identificacion',
        msg: 'Debes ingresar el número de identificacíon.',
      });
      showError(
        'identificacion',
        'Debes ingresar el número de identificación.'
      );
    }

    if (!celular) {
      errores.push({
        campo: 'celular',
        msg: 'Debes ingresar un número de celular.',
      });
      showError('celular', 'Debes ingresar un número de celular.');
    }

    if (errores.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Algún campo incorrecto!',
      });
    } else {
      Swal.fire('¡Registro satisfactorio!', '', 'success').then(() => {
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
      const errorEmpty = document.querySelectorAll('.msg-error');
      errorEmpty.forEach((errorField) => {
        errorField.textContent = '';
      });
    }
  });
});
