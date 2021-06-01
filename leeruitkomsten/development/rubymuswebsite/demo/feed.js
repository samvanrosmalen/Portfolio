let Arrow1 = document.getElementById("B1").addEventListener("click", B1Clicked)
let Arrow2 = document.getElementById("B2").addEventListener("click", B2Clicked)

let Post1 = document.getElementById("instapost-1")
let Post2 = document.getElementById("instapost-2")
let Post3 = document.getElementById("facebook-media")

var isReady = false;
var counter = 0
Style()
Delay()

function B1Clicked(){
    if (isReady === true){
        counter++
        if(counter >= 3){
            counter = 0
        }
        console.log(counter)
        isReady = false
        Style()
        Delay()
    }  
}

function B2Clicked(){
    if (isReady === true){
        counter--
        if(counter <= -1){
            counter = 2
        }  
        console.log(counter)
        isReady = false
        Style()
        Delay()
    }
}

async function Delay(){
    await sleep(800)
    isReady = true
}

function resetStyle(){
    Post1.style.opacity = 0.5
    Post2.style.opacity = 0.5
    Post3.style.opacity = 0.5
    Post1.style.zIndex = 0
    Post2.style.zIndex = 0
    Post3.style.zIndex = 0
    Post1.style.transform = "scale(0.7,0.7)"
    Post2.style.transform = "scale(0.7,0.7)"
    Post3.style.transform = "scale(0.7,0.7)"
    Post1.style.pointerEvents = "none"
    Post2.style.pointerEvents = "none"
    Post3.style.pointerEvents = "none"
}

function Style(){
    if(counter === 0){
        resetStyle()
        Post1.style.marginLeft = "0px"
        Post2.style.marginLeft = "-500px"
        Post3.style.marginLeft = "500px"
        Post1.style.opacity = 1
        Post1.style.zIndex = 1
        Post1.style.transform = "scale(1,1)"
        Post1.style.pointerEvents = "all"
    }
    
    if(counter === 1){
        resetStyle()
        Post1.style.marginLeft = "500px"
        Post2.style.marginLeft = "0px"
        Post3.style.marginLeft = "-500px"
        Post2.style.opacity = 1
        Post2.style.zIndex = 1
        Post2.style.transform = "scale(1,1)"
        Post2.style.pointerEvents = "all"
    }
    
    if(counter === 2){
        resetStyle()
        Post1.style.marginLeft = "-500px"
        Post2.style.marginLeft = "500px"
        Post3.style.marginLeft = "0px"
        Post3.style.opacity = 1
        Post3.style.zIndex = 1
        Post3.style.transform = "scale(1.3,1.3)"
        Post3.style.pointerEvents = "all"
    }
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }



