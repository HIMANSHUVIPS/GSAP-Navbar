const mark = document.querySelector(".mark");
const nav_items = document.querySelector(".nav_items");

let tlOpen = gsap.timeline();
let tlClose = gsap.timeline();

tlOpen.to(".nav_items", {
  duration: 0.2,
  marginRight: 0,
});

tlOpen.from(".nav_items h4", {
  duration: 0.2,
  x: 150,
  opacity: 0,
  stagger: 0.2,
});


tlClose.to(".nav_items", {
  duration: 0.2,
  marginRight: '-470px',
});

mark.addEventListener("click", () => {
  // nav_items.classList.toggle('margin');
  if (mark.classList.contains("fa-bars")) {
    console.log("ys");
    mark.classList.remove("fa-bars");
    mark.classList.add("fa-xmark");
    tlClose.pause();
    tlOpen.restart();
  } else {
    mark.classList.remove("fa-xmark");
    mark.classList.add("fa-bars");
    tlOpen.pause();  
    tlClose.restart();
  }
});

