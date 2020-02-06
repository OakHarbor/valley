var $hamburger = $(".hamburger");

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
        getSidebar.style.height = "100%";

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

var $dropdown = $(".about-dropdown");
var $dropdownService = $(".service-dropdown");
var $dropdownContact = $(".contact-dropdown");

var $reveal = $(".sub1");
var $revealService = $(".sub2");
var $revealContact = $(".sub3");

var $aboutli = $(".about-li");
var $serviceli = $(".services-li");
var $Contactli = $(".contact-li");

var $aboutLink = $(".about-drop-link");
var $serviceLink = $(".service-drop-link");
var $ContactLink = $(".contact-drop-link");

if ($(window).width() < 1024 || $(window).height() < 550) {
  
  /* About Dropdown */
  $dropdown.on("click", function(e) {

    $reveal.toggleClass("drop");
    $aboutli.toggleClass("drop");
    $aboutLink.toggleClass("drop");

    /* Reset any clicked sub menus */
    $revealService.removeClass("drop");
    $serviceli.removeClass("drop");
    $serviceLink.removeClass("drop");

    $revealContact.removeClass("drop");
    $contactli.removeClass("drop");
    $contactLink.removeClass("drop");
    
  });

  /* Service Dropdown */
  $dropdownService.on("click", function(e) {

    /* On services click */
    $revealService.toggleClass("drop");
    $serviceli.toggleClass("drop");
    $serviceLink.toggleClass("drop");

    /* Reset any clicked sub menus */
    $reveal.removeClass("drop");
    $aboutli.removeClass("drop");
    $aboutLink.removeClass("drop");

    $revealContact.removeClass("drop");
    $contactli.removeClass("drop");
    $contactLink.removeClass("drop");
    
  });

  /* Contact Dropdown */
  $dropdownContact.on("click", function(e) {

    /* On services click */
    $revealContact.toggleClass("drop");
    $contactli.toggleClass("drop");
    $contactLink.toggleClass("drop");

    /* Reset any clicked sub menus */
    $reveal.removeClass("drop");
    $aboutli.removeClass("drop");
    $aboutLink.removeClass("drop");

    $revealService.removeClass("drop");
    $serviceli.removeClass("drop");
    $serviceLink.removeClass("drop");
    
  });

}

/* Modals collected in variables */

var $modalOne = $(".modal-one");
var $modalTwo = $(".modal-two");
var $modalThree = $(".modal-three");
var $modalFour = $(".modal-four");
var $modalFive = $(".modal-five");
var $modalSix = $(".modal-six");
var $modalSeven = $(".modal-seven");
var $modalEight = $(".modal-eight");
var $modalNine = $(".modal-nine");
var $modalTen = $(".modal-ten");
var $modalEleven = $(".modal-eleven");
var $modalTwelve = $(".modal-twelve");
var $modalThirteen = $(".modal-thirteen");
var $modalFourteen = $(".modal-fourteen");
var $modalFifteen = $(".modal-fifteen");
var $modalSixteen = $(".modal-sixteen");
var $modalSeventeen = $(".modal-seventeen");
var $modalEighteen = $(".modal-eighteen");
var $modalNineteen = $(".modal-nineteen");
var $modalTwenty = $(".modal-twenty");
var $modalTwentyOne = $(".modal-twenty-one");

/* Images collected in variables */

var $homeIcon = $(".home-icon");
var $html = $("html");

var $one = $("#one");
var $two = $("#two");
var $three = $("#three");
var $four = $("#four");
var $five = $("#five");
var $six = $("#six");
var $seven = $("#seven");
var $eight = $("#eight");
var $nine = $("#nine");
var $ten = $("#ten");
var $eleven = $("#eleven");
var $twelve = $("#twelve");
var $thirteen = $("#thirteen");
var $fourteen = $("#fourteen");
var $fifteen = $("#fifteen");
var $sixteen = $("#sixteen");
var $seventeen = $("#seventeen");
var $eighteen = $("#eighteen");
var $nineteen = $("#nineteen");
var $twenty = $("#twenty");
var $twentyOne = $("#twenty-one");

/* Add Clicked Class */

$one.on("click", function(e) {
  $modalOne.addClass("clicked");
  $html.addClass("clicked");
});

$two.on("click", function(e) {
  $modalTwo.addClass("clicked");
  $html.addClass("clicked");
});

$three.on("click", function(e) {
  $modalThree.addClass("clicked");
  $html.addClass("clicked");
});

$four.on("click", function(e) {
  $modalFour.addClass("clicked");
  $html.addClass("clicked");
});

$five.on("click", function(e) {
  $modalFive.addClass("clicked");
  $html.addClass("clicked");
});

$six.on("click", function(e) {
  $modalSix.addClass("clicked");
  $html.addClass("clicked");
});

$seven.on("click", function(e) {
  $modalSeven.addClass("clicked");
  $html.addClass("clicked");
});

$eight.on("click", function(e) {
  $modalEight.addClass("clicked");
  $html.addClass("clicked");
});

$nine.on("click", function(e) {
  $modalNine.addClass("clicked");
  $html.addClass("clicked");
});

$ten.on("click", function(e) {
  $modalTen.addClass("clicked");
  $html.addClass("clicked");
});

$eleven.on("click", function(e) {
  $modalEleven.addClass("clicked");
  $html.addClass("clicked");
});

$twelve.on("click", function(e) {
  $modalTwelve.addClass("clicked");
  $html.addClass("clicked");
});

$thirteen.on("click", function(e) {
  $modalThirteen.addClass("clicked");
  $html.addClass("clicked");
});

$fourteen.on("click", function(e) {
  $modalFourteen.addClass("clicked");
  $html.addClass("clicked");
});

$fifteen.on("click", function(e) {
  $modalFifteen.addClass("clicked");
  $html.addClass("clicked");
});

$sixteen.on("click", function(e) {
  $modalSixteen.addClass("clicked");
  $html.addClass("clicked");
});

$seventeen.on("click", function(e) {
  $modalSeventeen.addClass("clicked");
  $html.addClass("clicked");
});

$eighteen.on("click", function(e) {
  $modalEighteen.addClass("clicked");
  $html.addClass("clicked");
});

$nineteen.on("click", function(e) {
  $modalNineteen.addClass("clicked");
  $html.addClass("clicked");
});

$twenty.on("click", function(e) {
  $modalTwenty.addClass("clicked");
  $html.addClass("clicked");
});

$twentyOne.on("click", function(e) {
  $modalTwentyOne.addClass("clicked");
  $html.addClass("clicked");
});

/* Remove Clicked Class */

$homeIcon.on("click", function(e) {
  $modalOne.removeClass("clicked");
  $modalTwo.removeClass("clicked");
  $modalThree.removeClass("clicked");
  $modalFour.removeClass("clicked");
  $modalFive.removeClass("clicked");
  $modalSix.removeClass("clicked");
  $modalSeven.removeClass("clicked");
  $modalEight.removeClass("clicked");
  $modalNine.removeClass("clicked");
  $modalTen.removeClass("clicked");
  $modalEleven.removeClass("clicked");
  $modalTwelve.removeClass("clicked");
  $modalThirteen.removeClass("clicked");
  $modalFourteen.removeClass("clicked");
  $modalFifteen.removeClass("clicked");
  $modalSixteen.removeClass("clicked");
  $modalSeventeen.removeClass("clicked");
  $modalEighteen.removeClass("clicked");
  $modalNineteen.removeClass("clicked");
  $modalTwenty.removeClass("clicked");
  $modalTwentyOne.removeClass("clicked");
  $html.removeClass("clicked");
});