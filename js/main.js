$(document).ready(function(){

  // 검색창 click시 단어 등장 효과
  $(".section10 input").click(function(){
    $(".section10 .terms").slideDown("fast");
  });

  // MOBILE) 사이드 메뉴창 열림/닫힘
  $(".mo_view").css({"left":"-45%"}); /* 처음위치 */
  $(".black_back").hide(); /* 검은 배경 숨김 */

  /* 메뉴버튼 */
  $(".toggle_btn").click(function(){
    $(".mo_view").stop().animate({"left":0},500);
    $(".black_back").fadeIn();
  });

  /* 닫기버튼 */
  $(".close_btn a").click(function(){
    $(".mo_view").stop().animate({"left":"-45%"},500);
    $(".black_back").fadeOut();
  });

  // 검은 배경(모달창)을 클릭하면 닫히는 기능
  document.querySelector(".black_back").addEventListener("click", function(e){
    if(e.target == this){
      document.querySelector(".mo_view").style.left = "-45%";
      document.querySelector(".black_back").style.display = "none";
    }
  });

});