(function ($) {

   // check device
   var check = {any:function(){
       return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
   }};
   if(check.any()) {
        lnt = $(".tch");
        lnt.bind("click.a", function(event) {
          event.preventDefault(); // disable first touch
          $(this).unbind(".a");  // allow second touch
        });

        lnt.click(function(e) {
           if ($(this).hasClass('focus')) {
               $(this).removeClass('focus');
           } else {
               $(this).addClass('focus'); // this class works as hover effect
           }
        });
   };
    
})(jQuery);
