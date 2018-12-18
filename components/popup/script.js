document.querySelector('.pop-up').style.visibility = "hidden";
document.querySelector('.pop-up-container').style.visibility = "hidden";

 document.querySelector('.pop-up-button').addEventListener("click",function () {
    document.querySelector('.pop-up-container').style.visibility = "visible";
    document.querySelector('.pop-up').style.visibility = "visible";
    document.querySelector('.pop-up-button').style.visibility = "hidden";
});

document.querySelector('.pop-up span').addEventListener("click",function () {
    document.querySelector('.pop-up-container').style.visibility = "hidden";
    document.querySelector('.pop-up').style.visibility = "hidden";
    document.querySelector('.pop-up-button').style.visibility = "visible";
});