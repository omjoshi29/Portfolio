const body = document.body;

const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains("dark");

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};

const toggleTheme = () =>
  isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

btnTheme.addEventListener("click", toggleTheme);

const displayList = () => {
  const navUl = document.querySelector(".nav__list");

  if (btnHamburger.classList.contains("fa-bars")) {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }
};

btnHamburger.addEventListener("click", displayList);

//Animations
const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};

document.addEventListener("scroll", scrollUp);

var fadeElements = document.getElementsByClassName("scrollFade");

function scrollFade() {
  var viewportBottom = window.scrollY + window.innerHeight;

  for (var index = 0; index < fadeElements.length; index++) {
    var element = fadeElements[index];
    var rect = element.getBoundingClientRect();

    var elementFourth = rect.height / 4;
    var fadeInPoint = window.innerHeight - elementFourth;
    var fadeOutPoint = -(rect.height / 2);

    if (rect.top <= fadeInPoint) {
      element.classList.add("scrollFade--visible");
      element.classList.add("scrollFade--animate");
      element.classList.remove("scrollFade--hidden");
    } else {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }
  }
}

document.addEventListener("scroll", scrollFade);
window.addEventListener("resize", scrollFade);
document.addEventListener("DOMContentLoaded", function () {
  scrollFade();
});

//Slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlidesOb");
  var y = document.getElementsByClassName("mySlidesBw");
  var z = document.getElementsByClassName("mySlidesFm");
  var p = document.getElementsByClassName("mySlidesOm");
  var q = document.getElementsByClassName("mySlidesTx");
  var r = document.getElementsByClassName("mySlidesIk");
  var s = document.getElementsByClassName("mySlidesGc");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
    z[i].style.display = "none";
    p[i].style.display = "none";
    q[i].style.display = "none";
    r[i].style.display = "none";
    s[i].style.display = "none";
  }

  myIndex++;

  if (myIndex > x.length) {
    myIndex = 1;
  }

  x[myIndex - 1].style.display = "block";
  y[myIndex - 1].style.display = "block";
  z[myIndex - 1].style.display = "block";
  p[myIndex - 1].style.display = "block";
  q[myIndex - 1].style.display = "block";
  r[myIndex - 1].style.display = "block";
  s[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
