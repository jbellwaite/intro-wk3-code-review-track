$(document).ready(function() {
   $("form#track").submit(function(event) {
     var name = $("input#name").val();
     var userScore = parseInt($("input:radio[name=wherework]:checked").val()) + parseInt($("input:radio[name=clean]:checked").val()) +
     parseInt($("input:radio[name=friends]:checked").val()) +
     parseInt($("input:radio[name=freetime]:checked").val()) + parseInt($("input:radio[name=why]:checked").val()) ;

      if (userScore === 5 || userScore === 6) {
        $("#answer").text(name + ", you should take the Design track!");
        $("#design").removeClass();
 +      $("#description").text("You will learn CSS, HTML, and JavaScript to learn how to style web pages using complex, responsive layouts. You will learn front-end development to control what the user of a website can see and do.");
      }
      else if (userScore === 7 || userScore === 8) {
        $("#answer").text(name + ", you should take the SQL track!");
        $("#sql").removeClass();
 +      $("#description").text("Structured Query Language (SQL) is used to communicate with databases. Its a bit different than some of the others listed, as you can't build a website or app using SQL, SQL is used to build and manage the databases apps and websites use.");
      }
      else if (userScore === 9) {
        $("#answer").text(name + ", you should take the Ruby & Rails track!");
        $("#ruby").removeClass();
 +      $("#description").text("Ruby is a beginner-friendly and dynamic language. It powers Ruby on Rails, which is a framework used to quickly develop sites and applications. Ruby is used on sites like Twitter and Shopify.");
      }
      else if (userScore === 10 || userScore === 12) {
        $("#answer").text(name + ", you should learn C#!");
        $("#csharp").removeClass();
 +      $("#description").text("C# is popular amongst larger, well-established companies. It has Microsoft backing. If you like the idea of doing back-end coding for a larger business, C# is a great language to learn.")

      }
      else {
        $("#answer").text(name + ", you should take the Android track!");
        $("#android").removeClass();
 +      $("#description").text("Android is used in everything from phones to tablets to watches. You will learn Java and JavaScript along with the Android framework to develop mobile apps.");
      }

      $("#track").hide();
     event.preventDefault();
   });
 });
