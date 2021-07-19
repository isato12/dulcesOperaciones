window.addEventListener("DOMContentLoaded", () => {
  //declaracion variables globales
  let element = document.querySelector(".navbar");
  let btnNav = document.querySelector(".navbar-toggler");
  let links = document.querySelectorAll(".links");

  //funcion que hace que la barra de navegacion cambie de color al hacer scroll ya que inicialmente
  //es transparente
  document.addEventListener("scroll", () => {
    //La propiedad Element.scrollTop establece el número de píxeles que el contenido de un elemento
    //ha sido desplazado (scrolleado) hacia arriba. El scrollTopde un elemento es una medida de la distancia desde
    //el límite superior de un elemento al límite superior de su contenido visible. Cuando un elemento no genera
    //una barra de scroll vertical, el valor de su scrollTopes establecido por defecto a 0.
    //variable scroll que guarda el desplazamiento que se hizo al hacer scroll
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    //validamos si realizamos scroll mayor a 200px para agregar o quitar una clase  segun sea el caso, esta clase
    //tiene el background color rojo
    if (scroll >= 200) {
      element.classList.add("navback");
    } else {
      element.classList.remove("navback");
    }
  });
  //evento a boton hamburguesa el cual cada que se presiona obtiene el fondo de color rojo ya que de inicio es
  //transparente
  btnNav.addEventListener("click", () => {
    if ("show.bs.collapse") {
      element.classList.add("navback");
    }
  });
  //fncion para que cada que se de clik a un enlace de nuestra barra de navegacion esta se cierre automaticamente
  links.forEach((link) => {
    link.addEventListener("click", () => {
      let barra = document.querySelector("#navbarNav");
      barra.classList.remove("show");
    });
  });
});
