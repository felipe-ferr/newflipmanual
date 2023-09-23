  window.onscroll = function() {navShowSideScroll()};

  function navShowSideScroll(){
    if (window.innerWidth < 900){
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
            document.getElementById("showside").style.top = "0px";
        }
        else{
            document.getElementById("showside").style.top = "-50px";
        }
      }
    }
      
  