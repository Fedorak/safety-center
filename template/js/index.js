
$('.filter-open').click(function() {
  $('.filter-container').addClass('active');
  $('.modal-overlay').addClass('active');
});
$('.filter-button__close').click(function() {
  $('.filter-container').removeClass('active');
  $('.modal-overlay').removeClass('active');
});

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    )
  },
}
let body = document.querySelector('body')
if (isMobile.any()) {
  body.classList.add('touch')
  let arrow = document.querySelectorAll('.arrow')
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling
    let subMenu = arrow[i].nextElementSibling
    let thisArrow = arrow[i]

    thisLink.classList.add('parent')
    arrow[i].addEventListener('click', function () {
      subMenu.classList.toggle('open')
      thisArrow.classList.toggle('active')
    })
  }
} else {
  body.classList.add('mouse')
}

// ===== HERO CAROUSEL =====

$(document).ready(function(){
  $(".hero-slider").owlCarousel( {
    items: 1,
    margin: 0,
    nav: false,
    dots: false,
    dotsEach: true,
    autoplay: {
       delay: 1200,
       stopOnLastSlide: false,
       disableOnInteraction: false
    },
    autoplayHoverPause: true,
    slideBy: 1,
    freeMode: true,
     autoplaySpeed: 800,
    dragEndSpeed: true,
    slideTransition: 'ease-out',
    loop: true
  });
});


// ===== HITS CAROUSEL =====

$(document).ready(function(){
  $(".hits__cards").owlCarousel( {
    items: 5,
    margin: 5,
    nav: true,
    dots: true,
    dotsEach: true,
    // autoplay: {
    //   delay: 1200,
    //   stopOnLastSlide: false,
    //   disableOnInteraction: false
    // },
    // autoplayHoverPause: true,
    // slideBy: 1,
    freeMode: true,
    // autoplaySpeed: 800,
    dragEndSpeed: true,
    slideTransition: 'ease-out',
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 5,
        nav: true
      }
    }
  });
});


// ===== AJAX CAROUSEL =====

$(document).ready(function(){
  $(".ajax__cards").owlCarousel( {
    items: 5,
    margin: 5,
    nav: true,
    dots: true,
    dotsEach: true,
    autoplay: {
      delay: 500,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    autoplayHoverPause: true,
    slideBy: 1,
    freeMode: true,
    autoplaySpeed: 800,
    dragEndSpeed: true,
    slideTransition: 'ease-out',
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 5,
        nav: true
      }
    }
  });
});


// ===== NEW CAROUSEL =====

$(document).ready(function(){
  $(".new__cards").owlCarousel( {
    items: 5,
    margin: 5,
    nav: true,
    dots: true,
    dotsEach: true,
    autoplay: {
      delay: 500,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    autoplayHoverPause: true,
    slideBy: 1,
    freeMode: true,
    autoplaySpeed: 1200,
    dragEndSpeed: true,
    slideTransition: 'ease-out',
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 5,
        nav: true
      }
    }
  });
});


// ===== EXPERETS CAROUSEL =====

$(document).ready(function(){
  $(".experts__cards").owlCarousel( {
    items: 3,
    margin: 20,
    nav: true,
    dots: true,
    dotsEach: true,
    centeer: true,
    video: true,
    // autoplay: {
    //   delay: 500,
    //   stopOnLastSlide: false,
    //   disableOnInteraction: false
    // },
    autoplayHoverPause: true,
    slideBy: 1,
    freeMode: true,
    // autoplaySpeed: 1500,
    dragEndSpeed: true,
    slideTransition: 'ease-out',
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 3,
        nav: true,
      }
    }
  });
});







// ===== PRODUCT SLIDER =====

$(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    speed: 500,
    nav: false,
    // autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: ["❮", "❯"],
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    // items: 4,
    dots: false,
    nav: true,
    navText: ["❮", "❯"],
    smartSpeed: 500,
    slideSpeed: 500,
    // slideBy: 4,
      responsiveRefreshRate: 100,
    responsive : {
      // breakpoint from 0 up
      0 : {
          items : 2,
          slideBy : 2,
      },
      // breakpoint from 480 up
      550 : {
          items : 3,
          slideBy : 3,
      },
      // breakpoint from 768 up
      1200 : {
          items : 4,
          slideBy : 4,
      }
    }
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});

// ===== END OF PRODUCT SLIDER =====


// catalog slider

$(document).ready(function(){
  $(".catalog-slider").owlCarousel( {
    items: 4,
    margin: 5,
    nav: true,
    navText: ["❮", "❯"],
    dots: false,
    dotsEach: true,
    // autoplay: {
    //   delay: 1200,
    //   stopOnLastSlide: false,
    //   disableOnInteraction: false
    // },
    // autoplayHoverPause: true,
    // slideBy: 1,
    freeMode: true,
    // autoplaySpeed: 800,
    dragEndSpeed: true,
    slideTransition: 'ease-out',
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 4,
        nav: true
      }
    }
  });
});


/*


// ===== PRODUCT COUNTER =====

let plus = document.querySelector(".buy__plus");
let minus = document.querySelector(".buy__minus");
let counter = document.querySelector(".buy__count");

startcounter = 0;
counter.innerHTML = startcounter;
function setcounter() {
    counter.innerHTML = startcounter;
}

minus.classList.add('disable')
plus.addEventListener('click', function () {
  minus.classList.remove('disable');
  startcounter += 1;
  setcounter();
})
minus.addEventListener('click', function () {
  if (startcounter > 0) {
    minus.classList.remove('disable');
    startcounter -= 1;
    setcounter();
  } else {
    startcounter = startcounter;
    minus.classList.add('disable');
    setcounter();
  }
});

// ===== END OF PRODUCT COUNTER =====


*/


// ===== STAR RATING =====

const allStars = document.querySelectorAll('.rating__star');
let current__rating = document.querySelector('.rating__current');
allStars.forEach((star, i) => {
  star.onclick = function () {
    let current_star_level = i + 1;
    document.getElementById("rating__current").innerHTML = `${current_star_level}/5`;
    allStars.forEach((star, j) => {
 
      if (current_star_level >= j + 1) {
        star.innerHTML = '&#9733';
      } else {
        star.innerHTML = '&#9734';
        $("#star-1,#star-2,#star-3,#star-4,#star-5").css("color", "#ffbc00");
      }
    })
  }
})

$("#star-1").click(function () {
  $("#star-1").css("color", "#ffbc00");
});
$("#star-2").click(function () {
  $("#star-1,#star-2").css("color", "#ffbc00");
});
$("#star-3").click(function () {
  $("#star-1,#star-2,#star-3").css("color", "#ffbc00");
});
$("#star-4").click(function () {
  $("#star-1,#star-2,#star-3,#star-4").css("color", "#ffbc00");
});
$("#star-5").click(function () {
  $("#star-1,#star-2,#star-3,#star-4,#star-5").css("color", "#ffbc00");
});

// ===== END OF STAR RATING =====

/*
// ======== HEADER SCROLL EFFECT =========

// Toggle the .header__wrapper_scroll class when the user scroll 100px 
//window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const headerWrapper = document.getElementById("headerWrapper");
    const catalog = document.getElementById("catalog");
    const items = document.querySelectorAll(".menu__item");
    const link = document.querySelectorAll(".menu__link");
    const links = document.querySelectorAll("#header a");
    const action = document.querySelectorAll(".header__action");
    const burger = document.getElementById("burger");


  if (document.documentElement.scrollTop > 100) {
    headerWrapper.classList.add("header__wrapper_scroll");
    catalog.classList.remove("menu__link_catalog");
    catalog.classList.add("menu__link_catalog-scroll");
    burger.classList.add("icon-menu_scroll");
    burger.classList.remove("icon-menu");

    // Change the color items on scroll
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        element.classList.add('menu__item_scroll');
    }

    // Change the color link on scroll
    for (let i = 0; i < link.length; i++) {
        const element = link[i];
        element.classList.add('menu__link_scroll');
    }

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('white');
    }

    // Change the color of action on scroll
    for (let i = 0; i < action.length; i++) {
        const element = action[i];
        element.classList.add('scroll');
    }


  } else {
    headerWrapper.classList.remove("header__wrapper_scroll");
    catalog.classList.add("menu__link_catalog");
    catalog.classList.remove("menu__link_catalog-scroll");
    burger.classList.remove("icon-menu_scroll");
    burger.classList.add("icon-menu");
    
    // Change the color of items back to default
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        element.classList.remove('menu__item_scroll');
    }
    
    // Change the color of link back to default
    for (let i = 0; i < link.length; i++) {
        const element = link[i];
        element.classList.remove('menu__link_scroll');
    }

    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('white');
    }

    // Change the color of action back to default
    for (let i = 0; i < action.length; i++) {
        const element = action[i];
        element.classList.remove('scroll');
    }
  }

}

// ======== END OF HEADER SCROLL EFFECT =========
*/


// ======== HEADER SEARCH =========

$('#actions__search').click(function() {
  $('.actions__search-form').animate({left: 0}, 500);
  $('.actions__search-popup').show();
  $('.actions__search-bg').click(function() {
    $('.actions__search-popup').hide();
    $('.actions__search-form').animate({left: '-100%'}, 300);
  });
});

// ======== END OF HEADER SEARCH =========


// =====================================================================================================





const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 700; 

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currenrPopup = document.getElementById(popupName);
      popupOpen(currenrPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(currenrPopup) {
  if (currenrPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currenrPopup.classList.add('open');
    currenrPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.shopping__cart')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}
function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.lockPaddingRight = lockPaddingValue;
    }
  }
  body.style.lockPaddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout); 
}
function bodyUnlock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});
(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  if (Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();

$('#burger').click(function() {
  $('.burger__body').toggleClass('active');
  $(this).toggleClass('active');
});

$('.catalog-open-button').click(function() {
  $('.catalog').addClass('active');
});
$('.catalog-close').click(function() {
  $('.catalog').removeClass('active');
});








var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}