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

  /* The project page slide show */

  let active = 0,
      elems = document.getElementsByClassName("projectContent"),
      titleText = ["YouTube Downloader", "QandA", "Portfolio", "Hill'ffair"],
      activeTab = document.getElementsByClassName("active")[0];

  function next(){
    if(active < (elems.length - 1)){
      if(active == 0)
        document.getElementsByClassName("previousSlide")[0].className = "previousSlide";
      elems[active].className = "projectContent rightSlide";
      ++active;
      elems[active].className = "projectContent activeSlide";
      activeTab.innerHTML = titleText[active];
    }

    if(active == elems.length - 1)
      document.getElementsByClassName("nextSlide")[0].className = "nextSlide disabled";
  }

  function prev(){
    if(active > (0)){
      if(active == elems.length - 1)
        document.getElementsByClassName("nextSlide")[0].className = "nextSlide";
      elems[active].className = "projectContent leftSlide";
      --active;
      elems[active].className = "projectContent activeSlide";
      activeTab.innerHTML = titleText[active];
    }

    if(active == 0)
      document.getElementsByClassName("previousSlide")[0].className = "previousSlide disabled";
  }

  document.getElementsByClassName("nextButton")[0].addEventListener("click", next, false);
  document.getElementsByClassName("previousButton")[0].addEventListener("click", prev, false);

  /* Contact page */

  let count = 0;
  function changeMessageCount(){
    ++count;
    document.getElementsByClassName("mailCount")[0].innerHTML = count;
    if(count < 99)
      setTimeout(changeMessageCount, 2000);
  }

  setTimeout(changeMessageCount, 2000);

})();