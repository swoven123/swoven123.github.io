$(document).ready(function(){
    
    var black='rgb(0,0,0)';
    var count=2;
    $("#button").click(function(){
            
        if(count % 2==0){
          $("#swoven").css("color","rgb(255,0,0)"); 
            count++;
        }
        else{
              location.reload();
            count++;
        }
          
   
    });
    
});