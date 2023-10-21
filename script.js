// javascript code goes here
const timeElement=document.getElementById('time')
const satrtBtn=document.getElementById('start')
const pause_continueBtn=document.getElementById('pause')
const stopBtn=document.getElementById('stop')

let hour=0
let minute=0
let second=0

function getTimeInString(){
    let time=''
    time+=hour<10 ? `0${hour}`:`${hour}`
    time+=minute<10 ? `:0${minute}`:`:${minute}`
    time+=second<10 ? `:0${second}`:`:${second}`
    return time
}
timeElement.innerText=getTimeInString()
pause_continueBtn.setAttribute('disabled',true)
stopBtn.setAttribute('disabled',true)
let interval
function start(){
    interval=setInterval(function(){
        increasedTime()
    },500)
    satrtBtn.setAttribute('disabled',true)
    pause_continueBtn.removeAttribute('disabled')
    stopBtn.removeAttribute('disabled')
}
function pause(){
    if(pause_continueBtn.innerText==='pause'){
        clearInterval(interval)
        pause_continueBtn.innerText='continue'
    }
    else{
        start()
        pause_continueBtn.innerText='pause'
    }
    
}
function stop(){
    clearInterval(interval)
    hour=0
    minute=0
    second=0
    pause_continueBtn.setAttribute('disabled',true)
    satrtBtn.removeAttribute('disabled')
    timeElement.innerText=getTimeInString()
    pause_continueBtn.innerText='pause'
    stopBtn.setAttribute('disabled',true)

}
function increasedTime(){
    second+=0.5 
    if(second===60){
        second=0
        minute+=1
    }
    if(minute===60){
        minute=0
        hour+=1
    }
    if(Number.isInteger(second)){
        timeElement.innerText=getTimeInString()
    }
    
}