var vid = document.getElementById("bgvid");

document.querySelector('.animPerso').style.visibility = "hidden";

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
    vidFade();

    document.querySelector('.animPerso').style.visibility = "visible";
    
});

// -------- SCRIPT -  --------

