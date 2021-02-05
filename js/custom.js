$(document).ready(function () {
   $(".changeMood").click(function (e) {
      e.preventDefault();
      let mode = $(this).attr("mode");
      document.documentElement.setAttribute("data-theme", mode);
   });
});

let headerHeright = $("header").outerHeight();
let topbarHeight = $("#topbar").outerHeight();
let totalHeaderHeight = headerHeright + topbarHeight - 60;

$(".single-page main").css("margin-top", totalHeaderHeight);
