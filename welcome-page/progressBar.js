function popUpProgressBar() {
  var elem = document.getElementById('progressbox');
  elem.style.display = 'block';
}

function updateLoadingMessage(name) {
  var elem = document.getElementById('loadingmessage');
  elem.innerHTML = `Loading ${name}...`;
  if (name === 'Thunderbird') {
    elem.style.fontSize = '50px';
    elem.style.left = '10%';
  } else if (name === 'irc.exe') {
    elem.style.left = '9%';
  }
}

function startProgressBar(name) {
  popUpProgressBar();
  updateLoadingMessage(name);
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