
// svg logo
const logo = document.querySelectorAll("#logosvg path");

for(let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

// custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px")
})

document.addEventListener('click', () =>{
    cursor.classList.add("expand")

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500)
})

// back to top button

const backToTopButton = document.querySelector("#backtotopbtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) { // Show backToTopButton
      if(!backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnExit");
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
      }
    }
    else { // Hide backToTopButton
      if(backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnEntrance");
        backToTopButton.classList.add("btnExit");
        setTimeout(function() {
          backToTopButton.style.display = "none";
        }, 250);
      }
    }
  }

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;
    
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
}
  
function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
};

//slick slider
$('.slick').slick({
  autoplay: true,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  autoplayspeed: 2000,
  speed: 3000,
});










function Soon(){
    alert("Coming soon")
}