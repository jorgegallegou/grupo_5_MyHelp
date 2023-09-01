window.onload = function () {
  const form = document.getElementsByClassName('formulario')


  form,addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.getElementById('nombre');
    const precio = document.getElementById('precio');
    const descripcion = document.getElementById('descripcion');
    const descripcion_general = document.getElementById('descripcion_general');
    const categoria = document.getElementById('categoria');
    const imagen = document.getElementById('imagen');

    let errorsMsg = []

    if (nombre.value == ''){
      errorsMsg.push('Campo Obligatorio')
    }
    if (precio.value >= 0 && precio.value == ''){
      errorsMsg.push('Campo Obligatorio y el valor debe ser mayor a 0')
    }
    if (descripcion.value == ''){}
    if (descripcion_general.value == ''){}
    if (categoria.value == ''){}
    if (imagen.value == ''){}



  })
}