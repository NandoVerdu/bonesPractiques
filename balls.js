Reveal.addEventListener('balls',function(){

var duration = 1.5; // Duración de la animación en segundos
var y = 300; // Altura final de los elementos
var bounce = 0.2; // Cantidad de rebote

// Seleccione los elementos a animar
var circles = document.querySelectorAll("circle");

// Cree una nueva línea de tiempo de animación
var tl = gsap.timeline();

// Configure la animación para cada elemento
circles.forEach(function(circle) {
  // Añada el inicio de la animación a la línea de tiempo
  tl.addLabel("start");
  
  // Configure la animación
  gsap.to(circle, {
    duration: duration,
    y: y,
    ease: "power2.inOut",
    onComplete: function() {
      // Añada la animación de rebote al final de la animación de caída
      gsap.to(circle, {
        duration: duration * bounce,
        y: y - 50,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1
      });
    }
  });
});

// Inicie la línea de tiempo de animación
tl.play();
})