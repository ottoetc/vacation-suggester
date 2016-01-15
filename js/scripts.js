$(document).ready(function(){
  $("form").submit(function(event){
    $("#suggestion").empty();
    var vacationOregon = $("input[name=vacationOregonQuestion]:checked").val();
    var readingNapping = $("input[name=readingNappingQuestion]:checked").val();
    var city = $("input[name=cityQuestion]:checked").val();
    var camping = $("input[name=campingQuestion]:checked").val();
    var ocean = $("input[name=oceanQuestion]:checked").val();
    if (vacationOregon === "yes"){
      if (readingNapping === "yes"){
        if (city === "yes"){
          $("#suggestion").append("<p>You should find a place to stay in Portland!</p><img src='img/portland.jpg' alt='A picture of Portland Oregon'>");
        } else {
          if (camping === "yes" && ocean === "yes"){
            $("#suggestion").append("<p>You should camp on the Oregon coast!</p><img src='img/coast.jpg' alt='A picture of the oregon coast'>");
          } else if (camping === "yes" && ocean === "no") {
            $("#suggestion").append("<p>You should camp in the mountains!</p><img src='img/mountain2.jpg' alt='A picture of a mountain'>");
          } else if (camping === "no" && ocean === "yes"){
            $("#suggestion").append("<p>You should rent a house in Pacific City on the coast!</p><img src='img/beachhouse.jpg' alt='A beach house'>");
          } else {
            $("#suggestion").append("<p>You should rent a cabin in the mountains!</p><img src='img/mountain.jpg' alt='A picture of mountains'>");
          }
        }
      } else {
        $("#suggestion").append("<p>If reading and napping aren't your primary goals on vacation this guide won't be much help to you, sorry!");
      }
    } else {
      $("#suggestion").append("<p>If you don't want to vacation in Oregon this probably isn't a good guide for you.</p>");
    }
    event.preventDefault();
  });
});
