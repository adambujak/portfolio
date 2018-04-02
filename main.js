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

function scrollToAbout(){
    $("html, body").animate({ scrollTop: $("#about").offset().top-Number($("#about-div").css("padding-bottom").substring(0,2))}, 1500);
    return true;
}

window.onload = function () {
    
    timer = setInterval(setOpacity, 25);
};

