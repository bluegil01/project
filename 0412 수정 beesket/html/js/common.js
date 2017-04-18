$(document).ready(function(){
// 메인 배너 슬라이드
$('.slider').owlCarousel({
          items : 1, //한개보이기
          loop  : true, //계속 루프
          margin: 0,
          nav : true, //prev next버튼 안보이게
          autoplay: false, //자동
          autoplayTimeout:3000,//딜레이
          autoplayHoverPause: false
  });
});
