var section = window.location.pathname;
if (section == "/articles") {
  $("#index").addClass("hide");
  $("#articles").removeClass("hide");
}
else if (section == "/consultation") {
  $("#index").addClass("hide");
  $("#consultation").removeClass("hide");
}
else if (section == "/contact") {
  $("#index").addClass("hide");
  $("#contact").removeClass("hide");
}

$(function () {
  $("#articles-loader").load("articles.html");
});
// onclick of one of the navigation buttons
$("a[data-hide]").on("click", function () {
  $(window).scrollTop(0);
  var toHide = $(this).data("hide");
  var toShow = "#" + $(this).attr("href");
  var url = "/" + $(this).attr("href");
  if (url == "/index") {
    url = "/";
  }
  var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  var animationArray = ['zoomOutDown', 'zoomOutUp', 'zoomOutRight', 'zoomOutLeft', 'rollOut', 'slideOutUp', 'rotateOutDownRight', 'rotateOutUpRight', 'lightSpeedOut', 'bounceOutUp', 'rotateOutUpLeft', 'slideOutUp'];
  var animationName = animationArray[Math.floor(Math.random() * animationArray.length)];
  // var animationName = "zoomOutDown";

  $(toShow).removeClass("hide");
  $(toShow).css("z-index", "0");
  $(toHide).css("z-index", "9999");
  window.history.pushState(null, null, url);
  $(toHide).addClass("animated " + animationName).one(animationEnd, function () {

    $(toHide).addClass('hide').removeClass("animated " + animationName);

  });
  return false;
});
$('#post').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var post = button.data('post')
  var title = button.data('title')
  var modal = $(this)
  modal.find('.modal-title').text(title)
  modal.find('.modal-body').html(post)
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  });
})
$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});

function showHide(hide, show) {
  $("#articles-row").hide();
  $("#yearly-horoscope").show();
}