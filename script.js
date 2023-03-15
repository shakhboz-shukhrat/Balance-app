$(document).ready(function () {
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let data2 = data;
      $("#amount-mon").text("$" + data[0].amount);
      $("#amount-tue").text("$" + data[1].amount);
      $("#amount-wed").text("$" + data[2].amount);
      $("#amount-thu").text("$" + data[3].amount);
      $("#amount-fri").text("$" + data[4].amount);
      $("#amount-sat").text("$" + data[5].amount);
      $("#amount-sun").text("$" + data[6].amount);
      $("#mon").text(data[0].day);
      $("#tue").text(data[1].day);
      $("#wed").text(data[2].day);
      $("#thu").text(data[3].day);
      $("#fri").text(data[4].day);
      $("#sat").text(data[5].day);
      $("#sun").text(data[6].day);
    });
  $(".b-1").hide();
  $(".b-2").hide();
  $(".b-3").hide();
  $(".b-4").hide();
  $(".b-5").hide();
  $(".b-6").hide();
  $(".b-7").hide();
  $(".div-1")
    .mouseenter(function () {
      $(".b-1").show(500);
    })
    .mouseleave(function () {
      $(".b-1").hide(500);
    });
  $(".div-2")
    .mouseenter(function () {
      $(".b-2").show(500);
    })
    .mouseleave(function () {
      $(".b-2").hide(500);
    });
  $(".div-3")
    .mouseenter(function () {
      $(".b-3").show(500);
    })
    .mouseleave(function () {
      $(".b-3").hide(500);
    });
  $(".div-4")
    .mouseenter(function () {
      $(".b-4").show(500);
    })
    .mouseleave(function () {
      $(".b-4").hide(500);
    });
  $(".div-5")
    .mouseenter(function () {
      $(".b-5").show(500);
    })
    .mouseleave(function () {
      $(".b-5").hide(500);
    });
  $(".div-6")
    .mouseenter(function () {
      $(".b-6").show(500);
    })
    .mouseleave(function () {
      $(".b-6").hide(500);
    });
  $(".div-7")
    .mouseenter(function () {
      $(".b-7").show(500);
    })
    .mouseleave(function () {
      $(".b-7").hide(500);
    });
});
