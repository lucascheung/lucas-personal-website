//= require jquery
//= require bootstrap-sprockets
//= require_tree .



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  bannerScroll();
  aboutScroll();
  trumpScroll();
}



function bannerScroll() {
  const banner = document.querySelector(".banner-wrapper");
  const lucas = document.querySelector("#banner-lucas");
  const cheung = document.querySelector("#banner-cheung");
  let distanceToTop = banner.getBoundingClientRect().top;
  let itemTranslate = Math.min(0, distanceToTop / 4);
  lucas.style.transform = `translateX(${itemTranslate}px)`;
  cheung.style.transform = `translateX(${-itemTranslate}px)`;
}

function aboutScroll() {
    const about = document.querySelector(".about-wrapper");
    const tagline = document.querySelector(".about-container h1");
    let distanceToTop = about.getBoundingClientRect().top;
    let distanceToTopFromBottom = about.getBoundingClientRect().bottom;
    let startPoint = window.innerHeight / 2;
    let divRange = distanceToTopFromBottom - distanceToTop;
    let aboutList = [
      "Digital Marketing Specialist.",
      "Web App Developer.",
      "Pianist.",
      "Snowboarder.",
      "Rock Climber.",
      "Hong Kong.",
      "London.",
      "ENTP.",
      "26 Years Old.",
      "Meatarian.",
      "Full Time Badass."
    ];
    let aboutListLengthIndex = aboutList.length - 1;
    let aboutIndex = Math.floor(
      ((startPoint - distanceToTop) / divRange) * (aboutList.length)
    );
    if (Math.floor(aboutIndex < 0)) {
      aboutIndex = 0;
    } else if (aboutIndex > aboutListLengthIndex) {
      aboutIndex = aboutListLengthIndex;
    } else {
      aboutIndex = aboutIndex;
    }
    console.log(startPoint);
    tagline.innerHTML = aboutList[aboutIndex];

}

function trumpScroll() {
  const trump = document.querySelector(".trump-wrapper");
  const trumpHead = document.querySelector(".trump-head");
  const trumpFood = document.querySelector(".chosen img");
  const trumpAllFood = document.querySelector(".trump-food-container")
  let distanceToTop = trump.getBoundingClientRect().top;
  let distanceToTopFromBottom = trump.getBoundingClientRect().bottom;
  let divRange = distanceToTopFromBottom - distanceToTop;
  let movement = distanceToTop - divRange
  console.log(distanceToTop);
  let itemTranslate = Math.min(0, movement/2);
  let mobileTranslate = itemTranslate + 300;
  if (window.innerWidth > 500) {
    trumpHead.style.transform = `translateX(${-itemTranslate}px)`;
    if (distanceToTop < 100) {
      trumpFood.style.display = 'none';
    } else {
      trumpFood.style.display = 'block';
    }
  } else {
    trumpHead.style.transform = `translateX(-105px)`;
    trumpAllFood.style.transform = `translateX(${mobileTranslate}px)`
  }
}

