$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault()
    var food = parseInt($("#food").val());
    var music = parseInt($("#music").val());
    var brand = parseInt($("#brand").val());
    var member = parseInt($("#member").val());

    var score = food + music + brand + member ;

    if (score < 5 ) {
      alert("#kawhi").show();
      $("#kevin").hide();
      $("#lebron").hide();
      $("#steph").hide();
    } else if (5 < score > 10) {
      $("#kawhi").hide();
      $("#kevin").hide();
      alert("#lebron").show();
      $("#steph").hide();
    } else if (10 <score > 15) {
      $("#kawhi").hide();
      $("#kevin").hide();
      $("#lebron").hide();
      alert("#steph").show();
    } else  {
      $("#kawhi").hide();
      alert("#kevin").show();
      $("#lebron").hide();
      $("#steph").hide();
    };
    console.log(food);
    console.log(music);
    console.log(brand);
    console.log(member);
  });
});
