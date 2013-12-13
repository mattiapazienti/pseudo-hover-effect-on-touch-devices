(function ($) {

   var check = {any:function(){
       return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
   }};
   if(check.any()) {
        lnt = $(".tch");
        lnt.bind("click.a", function(event) {
          event.preventDefault();
          $(this).unbind(".a");
        });

        lnt.click(function(e) {
           if ($(this).hasClass('focus')) {
               $(this).removeClass('focus');
           } else {
               $(this).addClass('focus');
           }
        });
   };
    
})(jQuery);
