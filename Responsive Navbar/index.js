$(function (){
 $('.burger').on('click', function () {

function myFunction(x) {
  if (x.matches) {
    $('ul li').show();
    $('.burger').removeClass('open');
    $('ul').removeClass('d-flex flex-column align-items-center');
  } else {
    $('ul li').hide();
  }
}

var x = window.matchMedia("(min-width: 601px)")
myFunction(x)
x.addListener(myFunction)


$(this).toggleClass("open");

if ( $( this ).hasClass( "open" ) ) {
$("ul li").show(300);
$('ul').addClass('d-flex flex-column align-items-center');
} else {
$("ul li").hide(300);
}

});
});


$(function (){
$('ul li').on('click', function () {
$(this).addClass('active').siblings().removeClass('active');
});
});
