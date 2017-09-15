$(document).ready(function() {
   $("form#track").submit(function(event) {
     var name = $("input#name").val();
     var userScore = parseInt($("input:radio[name=wherework]:checked").val()) + parseInt($("input:radio[name=clean]:checked").val()) +
     parseInt($("input:radio[name=friends]:checked").val()) +
     parseInt($("input:radio[name=freetime]:checked").val()) + parseInt($("input:radio[name=why]:checked").val()) ;

      if (userScore === 3 || userScore === 4) {
        $("#answer").text("C#");
        $("#csharp").removeClass();
 +      $("#description").text("C# is popular amongst larger, well-established companies. It has Microsoft backing. If you like the idea of doing back-end coding for a larger business, C# is a great language to learn.");
      }
      else if (userScore === 5 || userScore === 6) {
        $("#answer").text("You are a bellpepper!");
        $("#bellpepper").removeClass();
 +      $("#description").text("You are bright and cheery. You are empty inside.");
      }
      else if (userScore === 7) {
        $("#answer").text("You are a broccoli!");
        $("#broccoli").removeClass();
 +      $("#description").text("You are healthy. People pretend to like you, but secretly no one does.");
      }
      else if (userScore === 8) {
        $("#answer").text("You are brussel sprouts!");
        $("#brussels").removeClass();
 +      $("#description").text("Misunderstood for much of your long life. Recently, you are en vogue.")
      }
      else if (userScore === 9 || userScore === 10) {
        $("#answer").text("You are a tomato (its actually vegetable)!");
        $("#tomato").removeClass();
 +      $("#description").text("You are plump and juicy. You are only really good two months out of the year");
      }
      else {
        $("#answer").text(name + ", you are a carrot!");
        $("#carrot").removeClass();
 +      $("#description").text("You spend most of your life underground. You are worth more the uglier you are.");
      }

      $("#track").hide();
     event.preventDefault();
   });
 });
