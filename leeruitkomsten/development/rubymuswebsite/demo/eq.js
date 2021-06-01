let Button1 = document.getElementById("playbuttonContainer").addEventListener("click", Play)

let EQ1 = document.getElementById("EQ1")
let EQ2 = document.getElementById("EQ2")
let EQ3 = document.getElementById("EQ3")
let EQ4 = document.getElementById("EQ4")
let EQ5 = document.getElementById("EQ5")
let EQ6 = document.getElementById("EQ6")
let EQ7 = document.getElementById("EQ7")
let EQ8 = document.getElementById("EQ8")
let EQ9 = document.getElementById("EQ9")
let EQ10 = document.getElementById("EQ10")
let EQ11 = document.getElementById("EQ11")
let EQ12 = document.getElementById("EQ12")
let EQ13 = document.getElementById("EQ13")
let EQ14 = document.getElementById("EQ14")
let EQ15 = document.getElementById("EQ15")
let EQ16 = document.getElementById("EQ16")
let EQ17 = document.getElementById("EQ17")
let EQ18 = document.getElementById("EQ18")
let EQ19 = document.getElementById("EQ19")
let EQ20 = document.getElementById("EQ20")
let EQ21 = document.getElementById("EQ21")
let EQ22 = document.getElementById("EQ22")
let EQ23 = document.getElementById("EQ23")
let EQ24 = document.getElementById("EQ24")
let EQ25 = document.getElementById("EQ25")
let EQ26 = document.getElementById("EQ26")
let EQ27 = document.getElementById("EQ27")
let EQ28 = document.getElementById("EQ28")
let EQ29 = document.getElementById("EQ29")
let EQ30 = document.getElementById("EQ30")

var isButtonClicked = false

async function Play(){
    if(isButtonClicked == false)
    {
        isButtonClicked = true
    }
    else{
        isButtonClicked = false
        Reset()
    }

    while(isButtonClicked == true){
        EQf1()
        EQf2()
        EQf3()
        EQf4()
        EQf5()
        EQf6()
        EQf7()
        EQf8()
        EQf9()
        EQf10()
        EQf11()
        EQf12()
        EQf13()
        EQf14()
        EQf15()
        EQf16()
        EQf17()
        EQf18()
        EQf19()
        EQf20()
        EQf21()
        EQf22()
        EQf23()
        EQf24()
        EQf25()
        EQf26()
        EQf27()
        EQf28()
        EQf29()
        EQf30()
        await sleep(500)
    }
}

function randomHeight(){   
    heightVar = Math.floor(Math.random() * 30) + 10
}

function EQf1(){
    randomHeight() 
    EQ1.style.height = heightVar + "px"
    console.log(heightVar)
}

function EQf2(){
    randomHeight()
    EQ2.style.height = heightVar + "px"
}

function EQf3(){
    randomHeight()
    EQ3.style.height = heightVar + "px"
}

function EQf4(){
    randomHeight()
    EQ4.style.height = heightVar + "px"
}

function EQf5(){
    randomHeight()
    EQ5.style.height = heightVar + "px"
}

function EQf6(){
    randomHeight() 
    EQ6.style.height = heightVar + "px"
}

function EQf7(){
    randomHeight()
    EQ7.style.height = heightVar + "px"
}

function EQf8(){
    randomHeight()
    EQ8.style.height = heightVar + "px"
}

function EQf9(){
    randomHeight()
    EQ9.style.height = heightVar + "px"
}

function EQf10(){
    randomHeight()
    EQ10.style.height = heightVar + "px"
}

function EQf11(){
    randomHeight() 
    EQ11.style.height = heightVar + "px"
}

function EQf12(){
    randomHeight()
    EQ12.style.height = heightVar + "px"
}

function EQf13(){
    randomHeight()
    EQ13.style.height = heightVar + "px"
}

function EQf14(){
    randomHeight()
    EQ14.style.height = heightVar + "px"
}

function EQf15(){
    randomHeight()
    EQ15.style.height = heightVar + "px"
}

function EQf16(){
    randomHeight() 
    EQ16.style.height = heightVar + "px"
}

function EQf17(){
    randomHeight()
    EQ17.style.height = heightVar + "px"
}

function EQf18(){
    randomHeight()
    EQ18.style.height = heightVar + "px"
}

function EQf19(){
    randomHeight()
    EQ19.style.height = heightVar + "px"
}

function EQf20(){
    randomHeight()
    EQ20.style.height = heightVar + "px"
}

function EQf21(){
    randomHeight()
    EQ21.style.height = heightVar + "px"
}

function EQf22(){
    randomHeight()
    EQ22.style.height = heightVar + "px"
}

function EQf23(){
    randomHeight()
    EQ23.style.height = heightVar + "px"
}

function EQf24(){
    randomHeight()
    EQ24.style.height = heightVar + "px"
}

function EQf25(){
    randomHeight()
    EQ25.style.height = heightVar + "px"
}

function EQf26(){
    randomHeight()
    EQ26.style.height = heightVar + "px"
}

function EQf27(){
    randomHeight()
    EQ27.style.height = heightVar + "px"
}

function EQf28(){
    randomHeight()
    EQ28.style.height = heightVar + "px"
}

function EQf29(){
    randomHeight()
    EQ29.style.height = heightVar + "px"
}

function EQf30(){
    randomHeight()
    EQ30.style.height = heightVar + "px"
}

function Reset(){
    EQ1.style.height = "10px"
    EQ2.style.height = "10px"
    EQ3.style.height = "10px"
    EQ4.style.height = "10px"
    EQ5.style.height = "10px"
    EQ6.style.height = "10px"
    EQ7.style.height = "10px"
    EQ8.style.height = "10px"
    EQ9.style.height = "10px"
    EQ10.style.height = "10px"
    EQ11.style.height = "10px"
    EQ12.style.height = "10px"
    EQ13.style.height = "10px"
    EQ14.style.height = "10px"
    EQ15.style.height = "10px"
    EQ16.style.height = "10px"
    EQ17.style.height = "10px"
    EQ18.style.height = "10px"
    EQ19.style.height = "10px"
    EQ20.style.height = "10px"
    EQ21.style.height = "10px"
    EQ22.style.height = "10px"
    EQ23.style.height = "10px"
    EQ24.style.height = "10px"
    EQ25.style.height = "10px"
    EQ26.style.height = "10px"
    EQ27.style.height = "10px"
    EQ28.style.height = "10px"
    EQ29.style.height = "10px"
    EQ30.style.height = "10px"
}

function sleep(time) {
return new Promise(resolve => setTimeout(resolve, time));
}