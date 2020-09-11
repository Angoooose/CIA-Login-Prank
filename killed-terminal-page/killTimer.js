function killTerminalCountdown() {
    var elem = document.getElementById('terminalkilledmsg');
    setTimeout(() => { elem.innerHTML = 'C:\secure-terminal\>Terminal Killed....'; }, 3000).then(connectionFailed());
}
function connectionFailed() {
    setTimeout(() => { document.getElementById('connection1').innerHTML = 'ERROR: Connection failed, attempting to reconect.'; }, 5000);
    setTimeout(() => { document.getElementById('connection2').innerHTML = 'ERROR: Connection failed, attempting to reconect.'; }, 10000);
    setTimeout(() => { document.getElementById('connection3').innerHTML = 'ERROR: Connection failed, attempting to reconect.'; }, 15000);
    setTimeout(() => { document.getElementById('connection4').innerHTML = 'ERROR: Connection failed, attempting to reconect.'; }, 20000);
    setTimeout(() => { document.getElementById('connection5').innerHTML = 'ERROR: Connection failed, attempting to reconect.'; }, 25000);
}