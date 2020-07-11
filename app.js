var varmin=document.getElementById("min");
var varsec=document.getElementById("sec");
var varmsec=document.getElementById("msec");

var min=0;
var sec=0;
var msec=0;
var interval;
function milisecond(){
    msec++;
    varmsec.innerHTML=msec;
    if(msec>=100){
        sec++;
        varsec.innerHTML=sec
        msec=0;
    }
    else if(sec>=60){
        min++
        varmin.innerHTML=min
        sec=0;
    }
}
function start(){ 
    interval= setInterval(milisecond,10)
}
function stop(){
    clearTimeout(interval)
}
function reset(){
    min=0
    sec=0
    msec=0
    varmin.innerHTML=min
    varsec.innerHTML=sec
    varmsec.innerHTML=msec
}