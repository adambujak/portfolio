function fadeWelcomeInAndOut(){
    var element = document.getElementById("welcome");
    fade(element, 1500, "out", function(){ 
        element.textContent = "Take a look around.";
        //element.className = "content" //issue!
        fade(element, 1500, "in");
    });
}
function fade(element, time, inOrOut, funcToExecuteOnEnd){
    var opacity = 0;
    var opacityIncrement = 17 / time ; //number of times it must go to get to 0 in x seconds while doing 60fps
    if (inOrOut == "out"){
        opacityIncrement *= -1;
        opacity = 1;
    }
    function fade() {
        opacity += opacityIncrement;
        element.style.opacity = "" + opacity;
        if (opacity <= 0){ 
            funcToExecuteOnEnd();
            clearInterval(timer);
        }
    }
    let timer = setInterval(fade, 17); //60 fps
}
window.onload = function onloadFunc() {
   fadeWelcomeInAndOut();
};
function scrollToAbout() {
   // $("html, body").animate({ scrollTop: $("#about-div").offset().top+Number($("#about-div").css("padding-top").substring(0,2))}, 1000); 
    acceleratedScroll($("#about-div").offset().top + Number($("#about-div").css("padding-top").substring(0,2)), 1000);
    //return true;
}
function acceleratedScroll (target, time){
    alert("adfs");
    var current = document.documentElement.scrollTop;
    var diff = target - current;
    var smoothFactor =  1000;
    var accelerationFactor = 2*diff / ((time)*(time));
    function getDistance (time) {
       return time*time*accelerationFactor/2;
    }
    for (var i = 0; i < smoothFactor; i ++){
        $("html, body").animate({ scrollTop: current+getDistance(time/smoothFactor*i)}, time/smoothFactor);
    }
    
}