document.querySelector(".menu_mobile_btn").addEventListener('click', function () {
  if (!document.querySelector(".menu_mobile").classList.contains('active')) {
    document.querySelector(".menu_mobile").classList.add('active');
    document.querySelector(".burger").classList.add('active');
    setTimeout(function () {
      document.querySelector(".menu_mobile").classList.remove('visuallyhidden');
    }, 20);
  } else {
    document.querySelector(".menu_mobile").classList.add('visuallyhidden');
    document.querySelector(".burger").classList.remove('active');
    document.querySelector(".menu_mobile").addEventListener('transitionend', function(e) {
        document.querySelector(".menu_mobile").classList.remove('active');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }
}, false);