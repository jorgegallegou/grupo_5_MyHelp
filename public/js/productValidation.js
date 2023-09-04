window.onload = function () {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const precio = document.getElementById("precio");
    const descripcion = document.getElementById("descripcion");
    const descripcion_general = document.getElementById("descripcion_general");
    const categoria = document.getElementById("categoria");
    const imagen = document.getElementById("imagen");
    const errormsg = document.querySelector(".msg-error");

    let errors = [];
  });
};
