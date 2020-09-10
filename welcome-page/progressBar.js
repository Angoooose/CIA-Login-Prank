function startProgressBar() {
    var elem = document.getElementById("progressBar");   
    var width = 0;
    var id = setInterval(frame, 80);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }