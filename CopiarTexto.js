    function copiartexto() {
      var copyText = document.getElementById("copiar");
    
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
    
      navigator.clipboard.writeText(copyText.value);
    
      var tooltip = document.getElementById("alerta");
      tooltip.innerHTML = "Copiado " + copyText.value;
    }
    
    function outFunc() {
      var tooltip = document.getElementById("alerta");
      tooltip.innerHTML = "Copiar";
    }