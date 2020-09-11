function popUpProggressBar() {
  var elem = document.getElementsById('loadingmessage');
  elem.innerHTML = `Loading ${elem.id}`;
}

function startProgressBar() {
  var elem = document.getElementById('progressbar');
  var width = 0;
  var x = setInterval(function() {
    if (width >= 80) {
      clearInterval(x);
      elem.innerHTML = 'ERROR: Verification Failed!';
      setTimeout(() => { window.location.replace('../killed-terminal-page/killed-terminal.html'); }, 5000);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }, 80);
}

// width: 600px;
// height: 300px;
// padding: 40px;
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// text-align: center;
// background: black;
// border-radius: 24px;
// border: 2px solid red;
// font-family: Arial, Helvetica, sans-serif;
// font-size: 40px;
// color: white;
// opacity: 0.9;