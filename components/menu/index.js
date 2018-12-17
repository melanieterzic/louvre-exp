function toggleNav() {
    const element = document.querySelector("nav");
    const elementHeight = element.scrollHeight;
    var isCollapsed = element.getAttribute('data-collapsed') === 'true';
    if (isCollapsed) {
      element.style.height = elementHeight + "px";
      element.setAttribute("data-collapsed", "false");
    } else {
          element.style.height = "0px";
      element.setAttribute("data-collapsed", "true");
    }
  }