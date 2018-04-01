var opacity = 1;
var timer;
var addVal = -0.01;

function setOpacity(){
    opacity+=addVal;
    document.getElementById("welcome").style.opacity = ""+opacity;
    if (opacity <= 0){ 
        addVal*=-1;
        document.getElementById("welcome").textContent="Take a look around.";
        document.getElementById("div1").className = "content2"; //delete original
    }
    else if (opacity >= 1){
        clearInterval(timer);
        
    }
}

window.onload = function () {
 
    timer = setInterval(setOpacity, 25);

};
function scrollToAbout(){
    alert("click");
}
document.getElementById("getStarted").onclick = scrollToAbout;
