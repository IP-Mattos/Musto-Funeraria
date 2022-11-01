let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;
let enter = true;
let button = document.querySelector(".fixed-button")
window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
});
slider.addEventListener("mouseenter", () => {
  enter = false;
});
slider.addEventListener("mouseleave", () => {
  enter = true;
});
setInterval(function () {
  if (enter) slides();
}, intervalo);

function slides() {
  slider.style.transform = "translate(" + -width * contador + "px)";
  slider.style.transition = "transform .8s";
  contador++;

  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1500);
  }
}

addEventListener('scroll', () =>{
  window.scrollY > 1200 ?  button.classList.remove("hide"):   button.classList.add("hide")
})

