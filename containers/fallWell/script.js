var audio = document.getElementById('audio');

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fall').style.visibility = 'hidden';
    document.querySelector('.instructions').style.visibility = 'hidden';
    document.getElementById('malTete').style.visibility = 'hidden';
    document.getElementById('vid').pause();

})

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    document.getElementById('bgvid').removeAttribute('autoplay');
    document.getElementById('bgvid').pause();
    pauseButton.innerHTML = 'Paused';
}

function vidFade() {
    document.getElementById('bgvid').classList.add('stopfade');
}

document.getElementById('bgvid').addEventListener('ended', function () {
    // only functional if 'loop' is removed 
    document.getElementById('bgvid').pause();
    document.querySelector('.instructions').style.visibility = 'visible';
    // to capture IE10
    //vidFade();
});

////

var i = document.getElementById('fall')

document.onkeydown = document.body.onkeydown = function (e) {
    if (e.keyCode == 32) {
        e = e || window.event;
        vidFade();
        document.querySelector('.instructions').style.visibility = 'hidden';
        document.getElementById('malTete').style.visibility = 'hidden';
        document.getElementById('fall').style.visibility = 'visible';

        audio.load();
        audio.play();

        audio.addEventListener('ended', function () {

            document.getElementById('malTete').style.visibility = 'visible';
            document.querySelector('.puit').style.visibility = 'hidden';
            document.querySelector('.instructions').style.visibility = 'hidden';
            document.getElementById('fall').style.visibility = 'hidden';


            document.getElementById('vid').play();
            if (window.matchMedia('(prefers-reduced-motion)').matches) {
                pauseButton.innerHTML = 'Paused';
            }

            function vidFade() {
                document.getElementById('vid').classList.add('stopfade');
            }

            document.getElementById('vid').addEventListener('ended', function () {
                // only functional if 'loop' is removed 
                document.getElementById('vid').pause();
                // to capture IE10
            });
        });
    } else {
        console.log('Press the space key.')
    }
}