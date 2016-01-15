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
          $("#suggestion").append("<p>You should find a AirBnB place in a cool Portland neighborhood and spend your non reading time finding great food and drink in the city</p>");
        } else {
          if (camping === "yes" && ocean === "yes"){
            $("#suggestion").append("<p>Camp on the Oregon coast</p>");
          } else if (camping === "yes" && ocean === "no") {
            $("#suggestion").append("<p>Camp in the mountains</p>");
          } else if (camping === "no" && ocean === "yes"){
            $("#suggestion").append("<p>Rent a house in Pacific City on the coast</p>");
          } else {
            $("#suggestion").append("<p>Rent cabin in the mountains</p>");
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
