$('.slick-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold:20,
  responsive: [
    {
      breakpoint: 1371,
      settings: {
        arrows: false
      }
    }
  ]
});
$('.under-hero__slider').slick({
  dots: false,
  infinite: true,
  variableWidth: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  touchThreshold:20,
  responsive: [
    {
      breakpoint: 1371,
      settings: {
        arrows: false
      }
    }
  ]
});

function toggleNav() {
  if (document.getElementById("kataloq").classList.contains("active")) {
      document.getElementById("kataloq").classList.remove("active");
      document.getElementById("opened-menu").classList.remove("active");
      document.getElementById("kataloq-button").classList.remove("active");
  } else {
      document.getElementById("kataloq").classList.add("active");
      document.getElementById("opened-menu").classList.add("active");
      document.getElementById("kataloq-button").classList.add("active");
  }
}

function closeMenu(){
  document.getElementById("kataloq").classList.remove("active");
  document.getElementById("opened-menu").classList.remove("active");
  document.getElementById("kataloq-button").classList.remove("active");
}

// const scrollContainer = document.querySelector('.hero-another-items');
// scrollContainer.addEventListener('wheel', (evt) => {
//     console.log(document.querySelector('body').clientWidth);
//     if(document.querySelector('body').clientWidth < 1426){
//         evt.preventDefault();
//         scrollContainer.scrollLeft += evt.deltaY;
//     }
// });
// $(document).ready(function(){
//     $('.slick-slider').slick();
// });