function toggleNav() {
    const element = document.querySelector("nav");
    //const fermer = document.querySelector("fermer");
    //const ouvert = document.querySelector("ouvert");
    const elementHeight = element.scrollHeight;
    var isCollapsed = element.getAttribute('data-collapsed') === 'true';
    if (isCollapsed) {
      element.style.height = elementHeight + "px";
      element.setAttribute("data-collapsed", "false");
      //fermer.style.display = "none";
      //ouvert.style.display = "block";

    } else {
      element.style.height = "0px";
      element.setAttribute("data-collapsed", "true");
      //fermer.style.display = "block";
      //ouvert.style.display = "none";
    }
  }