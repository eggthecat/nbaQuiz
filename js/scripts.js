// var food = parseInt($("#food").val());
// var music = parseInt($("#music").val());
// var brand = parseInt($("#brand").val());
// var member = parseInt($("#member").val());
// var score = food + music + brand + member ;
// function reset(){
//    var score = 0;
//   }
//   function tryAgain(){
//
//   }
function reload(){
  window.reload();
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault()
    var food = parseInt($("#food").val());
    var music = parseInt($("#music").val());
    var brand = parseInt($("#brand").val());
    var member = parseInt($("#member").val());

    var score = food + music + brand + member ;

    if (score < 4) {
      $("#kevin").hide();
      $("#kawhi").hide();
      $("#lebron").hide();
      $("#steph").hide();

    } else if (score === 4 ) {
      $("#kevin").hide();
      $("#lebron").hide();
      $("#steph").hide();
      $("#kawhi").show();

    } else if (score >= 5 && score < 9) {
      $("#kawhi").hide();
      $("#lebron").hide();
      $("#steph").hide();
      $("#kevin").show();

    } else if (score >= 9 && score <= 13) {
      $("#kevin").hide();
      $("#kawhi").hide();
      $("#steph").hide();
      $("#lebron").show();

    } else if (score >= 14 && score < 17)  {
      $("#kevin").hide();
      $("#kawhi").hide();
      $("#lebron").hide();
      $("#steph").show();

    };
    console.log(score)
    reset();
    console.log(score)
  });

});
