(function(){
    var loadScript = function(url, callback){

        /* JavaScript that will load the jQuery library on Google's CDN.
           We recommend this code: https://snipplr.com/view/18756/loadscript/.
           Once the jQuery library is loaded, the callback function will be executed. */
      
      };
      
      var myAppJavaScript = function($){
          console.log("-===========================");
          console.log("executou");
        /* Your app's JavaScript here.
           $ in this scope references the jQuery object we'll use.
           Don't use 'jQuery', or 'jQuery191', here. Use the dollar sign
           that was passed as argument.*/
        $('body').append("<p>I'm using jQuery version "+$.fn.jquery+'</p>');
      };
      
      var target = [3, 1, 0];
      
      var current = typeof jQuery === 'undefined' ? [0,0,0] : $.fn.jquery.split('.').map(function(item) {
          return parseInt(item);
      });
      
      if (current[0] < target[0] || (current[0] == target[0] && current[1] < target[1])) {
        loadScript('https://code.jquery.com/jquery-3.6.0.min.js', function(){
          var jQuery1101 = jQuery.noConflict(true);
          myAppJavaScript(jQuery1101);
        });
      } else {
        myAppJavaScript(jQuery);
      }
})();
