var $hamburger = $(".hamburger");var $dropdown = $(".about-dropdown");
var $reveal = $(".sub1");
var $aboutli = $(".about-li");
var $aboutLink = $(".about-drop-link");

  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");

    $reveal.removeClass("drop");
    $aboutli.removeClass("drop");
    $aboutLink.removeClass("drop");
    // Do something else, like open/close menu
  });

  /* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    let getMenu = document.getElementById("main-navigation");
    let getSidebar = document.getElementById("bottom-nav-bar");
    let getSidebarUL = document.querySelector("nav ul li");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");

    if (toggleNavStatus === false) {
        getSidebar.style.visibility = "visible";

        getSidebar.style.opacity = "1";
        getMenu.style.top = "20px";
        getMenu.style.visibility = "visible";

        getSidebarLinks.forEach((item, index)=>{
          console.log(item);
          item.style.display = "inline-block";
          item.style.opacity = "1";
          item.style.visibility = "visible";
         })
        getSidebar.style.height = "540px";

        toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {
        getSidebar.style.visibility = "hidden";
        getSidebar.style.opacity = "0";
        getMenu.style.top = "-1000px";
        getMenu.style.visibility = "hidden";

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.visibility = "hidden";
          item.style.display = "none";
         })
        getSidebar.style.height = "0";

        toggleNavStatus = false;
    }
}

/* Toggle the submenu on mobile */

if ($(window).width() < 1024 || $(window).height() < 550) {
  
  $dropdown.on("click", function(e) {
    $reveal.toggleClass("drop");
    $aboutli.toggleClass("drop");
    $aboutLink.toggleClass("drop");

    // Do something else, like open/close menu
  });

}