let thing = document.getElementById('thing')
let currentPos = 0

function moveThing(){
    currentPos += 3
    thing.style.left = currentPos + "px"

    if(Math.abs(currentPos) >= 700){
        currentPos =  -300
    }

    window.requestAnimationFrame(moveThing)
} 
moveThing()
