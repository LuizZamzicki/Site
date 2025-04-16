function mostrarmenu() {
  $(".header-nav").toggle();
  $("body").toggleClass("menu-aberto");

  if ($(".header-nav").is(":visible")) $(".main").css("padding-top", "430px");
  else $(".main").css("padding-top", "100px");
}

$(window).on("resize", function () {
  const larguraTela = window.innerWidth;
  if (larguraTela > 960) {
    $(".header-nav").show();
  } else if ($(".header-nav").is(":visible")) $(".header-nav").hide();
  $(".main").css("padding-top", "100px");
});
