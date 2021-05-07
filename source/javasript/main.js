
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

function scrollFunction(){
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.classList.add("btnExit");
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop(){
    window.scrollTo(0, 0);
}