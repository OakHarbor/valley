var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
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
          item.style.display = "block";
          item.style.opacity = "1";
          item.style.visibility = "visible";
         })
        getSidebar.style.height = "290px";

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
