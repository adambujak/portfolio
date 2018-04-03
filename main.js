

function fadeInAndOut() {
    var opacity = 1;
    var timer;
    var addVal = -0.01;
    function fade() {
        opacity += addVal;
        document.getElementById("welcome").style.opacity = "" + opacity;
        if (opacity <= 0){ 
            addVal*=-1;
            document.getElementById("welcome").textContent="Take a look around.";
            document.getElementById("div1").className = "content2"; //delete original
        }
        else if (opacity >= 1) {
            clearInterval(timer);

        }
    }
    timer = setInterval(fade, 25);
}

function scrollToAbout(){
    $("html, body").animate({ scrollTop: $("#about-div").offset().top+Number($("#about-div").css("padding-top").substring(0,2))}, 1500); 
    return true;
}

window.onload = function () {
    fadeInAndOut();
};

