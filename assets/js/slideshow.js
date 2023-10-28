let slideshow = document.querySelector(".slideshow");
let dots = document.querySelector(".dots");

let slideshowContent = [
  {
    img: "img/img1.jpg",
    text: "Slider 1",
  },
  {
    img: "img/img2.png",
    text: "Slider 2",
  },
  {
    img: "img/img3.jpg",
    text: "Slider 3",
  },
  {
    img: "img/img4.jpg",
    text: "Slider 4",
  },
];

let displaySlider = () => {
  return (slideshow.innerHTML = slideshowContent
    .map((x) => {
      let { img, text } = x;
      return `
        <div class="slider fade">
          <img src="${img}" alt="" />
          <div class="text">${text}</div>
        </div>
        <a class="prev" onclick="plusSlides(-1)">⥢</a>
        <a class="next" onclick="plusSlides(1)">⥤</a>
        `;
    })
    .join(""));
};
displaySlider();

let setDots = () => {
  return (dots.innerHTML = `
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
`);
};
setDots();

// ON CLICK SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

let plusSlides = (n) => {
  showSlides((slideIndex += n));
};

let currentSlide = (n) => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// AUTOMATIC SLIDESHOW
let autosSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
  let i;
  let autSlides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < autSlides.length; i++) {
    autSlides[i].style.display = "none";
  }

  autosSlideIndex++;
  if (autosSlideIndex > autSlides.length) {
    autosSlideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  autSlides[autosSlideIndex - 1].style.display = "block";
  dots[autosSlideIndex - 1].classList.add("active");
  setTimeout(autoShowSlides, 2000);
}
