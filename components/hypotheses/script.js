var vid = document.getElementById("bgvid");

// document.querySelector('.info').style.visibility = "hidden";

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function () {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    // vidFade();
    // document.querySelector('.info').style.visibility = "visible";
});

window.onload = function () {
    window.setTimeout(fadein, 1000); //8 seconds
}

function fadein() {
    document.getElementById('fadein').style.opacity = '1';
}