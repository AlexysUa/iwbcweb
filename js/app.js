$( document ).ready(function(){    
    function callMe(){
      if($('#test1').text()=="Я побудую Канаду в Україні"){
          return $('#test1').text("I will build Canada in Ukraine") && $('#test2').text("Film by Ethnic Channels Group (Canada)");
      } else {
        return $('#test1').text("Я побудую Канаду в Україні") && $('#test2').text("Фільм компанії Ethnic Channels Group (Канада)");
      }
    }
    setInterval(callMe,5000);
});