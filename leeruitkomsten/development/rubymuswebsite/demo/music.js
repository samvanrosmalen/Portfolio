var playButton = document.getElementById("playbuttonContainer").addEventListener("click", interact)
var pause1 = document.getElementById("pb3")
var pause2 = document.getElementById("pb4")
var play = document.getElementById("pb2")
var takeItSlow = document.getElementById('takeItSlow')

var progDot = document.getElementById("progDot")
var countDown = 20
var countUp = 0
var CU = document.getElementById("countUp")
var CD = document.getElementById("countDown")

var isMusicPlaying = false

var counter = 0
pause1.style.opacity = 0
pause2.style.opacity = 0
console.log(takeItSlow.currentTime)
update()
prog() 

function interact(){
    console.log("test")
    if(counter === 0){
        counter++
        takeItSlow.play()
        pause1.style.opacity = 1
        pause2.style.opacity = 1
        play.style.opacity = 0
        isMusicPlaying = true
    }
    else if(counter === 1){
        counter--
        takeItSlow.pause()
        document.getElementById("pb2").style.opacity = 1
        document.getElementById("pb3").style.opacity = 0
        document.getElementById("pb4").style.opacity = 0
        isMusicPlaying = false
    }
}

    async function update(){
        await sleep(500)
        if(takeItSlow.currentTime <= 9){
            CU.innerHTML = "0:0" + Math.round(takeItSlow.currentTime)
            CD.innerHTML = "0:" + Math.round(takeItSlow.duration - takeItSlow.currentTime)
        }
        
        else if(takeItSlow.currentTime >= 10){
            CU.innerHTML = "0:" + Math.round(takeItSlow.currentTime)      
            CD.innerHTML = "0:0" +  Math.round(takeItSlow.duration - takeItSlow.currentTime)   
        }    
        update()    
    }

    async function prog(){
        progDot.style.marginLeft = Math.round(takeItSlow.currentTime * 24,5) + "px" 
        await sleep(10)
        prog()
    }
      
                

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }