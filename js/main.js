(function(){

  /* SKROLLR SETUP */

  function adjust(){
    var width = window.innerWidth,
      height = window.innerHeight;

    if(width >= 1100){
      var s = skrollr.init({
        forceHeight: false
      });
    }

    else {
      var s = skrollr.init();
      s.destroy();
    }
  }

  var adjustObj = {
    match: function(){
      adjust();
    },
    unmatch: function(){
      adjust();
    }
  };

  /* THAT'S ALL THE SETUP I NEED FOR RESPONSIVE SKROLLR */

  window.onload = function(){
    setTimeout(function(){
      document.getElementsByClassName("monitor")[0].className = "monitor";
      document.getElementsByClassName("keyboard")[0].className = "keyboard";
      document.getElementsByClassName("earphone")[0].className = "earphone";
      document.getElementsByClassName("docs")[0].className = "docs";
      enquire.register("screen and (min-width: 1100px)", adjustObj, false);
    }, 300);
  }

})();