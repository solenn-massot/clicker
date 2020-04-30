var score = 1;
var multiplicateur = 5;
$(document).ready(function (){
    $('#score').append("<span id='bells'> Votre nombre de clochettes :" + score + "</span>");
   $('#bag').click(function(){
       score = score * multiplicateur;
       $('#bells').remove();
       $('#score').append("<span id='bells'> Votre nombre de clochettes :" + score + "</span>");
    
   })
   if(score >= 100)
    {
            console.log("djason");
    }
   score = score;
   console.log(score)


})
