$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        dots: true
    });
});

window.addEventListener("scroll", function () {
    const mainContent = document.querySelector("#main");
    const sidebar = document.querySelector(".sidebar");
    const topOffset = 128;
  
    // Vị trí của `mainContent` và chiều cao của nó
    const mainTop = mainContent.offsetTop;
    const mainBottom = mainTop + mainContent.offsetHeight;
  
    // Lấy vị trí hiện tại của scroll
    const scrollPosition = window.scrollY + topOffset;
  
    if (scrollPosition > mainTop && scrollPosition < mainBottom - sidebar.offsetHeight) {
      // Thêm `fixed` khi cuộn đến vị trí cần thiết
      sidebar.classList.add("fixed");
      sidebar.classList.remove("stop-fixed");
    } else if (scrollPosition >= mainBottom - sidebar.offsetHeight) {
      // Dừng khi đến cuối main
      sidebar.classList.remove("fixed");
      sidebar.classList.add("stop-fixed");
    } else {
      // Trở về bình thường nếu chưa cuộn đến
      sidebar.classList.remove("fixed");
      sidebar.classList.remove("stop-fixed");
    }
  });