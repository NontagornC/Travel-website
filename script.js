let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  console.log("hi");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
});

const naviBtn = document.querySelectorAll(".navi-btn");
const videoSlide = document.querySelectorAll(".video-slide");
var slideNavi = function (i) {
  naviBtn.forEach((e) => {
    e.classList.remove("active");
  });
  videoSlide.forEach((e) => {
    e.classList.remove("active");
  });

  naviBtn[i].classList.add("active");
  videoSlide[i].classList.add("active");
};

naviBtn.forEach((e, i) => {
  e.addEventListener("click", () => {
    slideNavi(i);
  });
});

var swiper = new Swiper(".activity_slider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  speed: 1000,
});

// var swiper = new Swiper(".activity_slider", {
//   loop: true,
//   slidesPerView: 6,
//   spaceBetween: 20,
//   grabCursor: true,
//   centeredSlides: true,
//   autoplay: {
//     delay: 1000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     700: {
//       slidesPerView: 3,
//     },
//   },
//   loopAdditionalSlides: 5 // Set the number of additional slides to append
// });

// const box = document.getElementsByClassName("wrapper")[0];
// const ItemSlide = document.querySelectorAll(".slide");

// let idx = 0;
// console.log(box);
// console.log(ItemSlide);

// function Slide() {
//   setInterval(slideToNextItem, 2000);
// }

// function slideToNextItem() {
//   if (idx > ItemSlide.length - 1) {
//     idx = 0;
//   } else if (idx < 0) {
//     idx = ItemSlide.length - 1;
//   }
//   const slideWidth = ItemSlide[idx].clientWidth;
//   ItemSlide[idx].style.transform = `translateX(${-idx * slideWidth}px)`;
// }
// Slide();
