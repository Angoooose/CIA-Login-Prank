function killTerminalCountdown() {
    var elem = document.getElementById('terminalkilledmsg');
    setTimeout(() => { elem.innerHTML = 'C:\\secure-terminal\\>Terminal Killed....'; }, 3000).then(connectionFailed());
}
function connectionFailed() {
    setTimeout(() => { document.getElementById('connection1').innerHTML = 'ERROR: Connection failed, attempting to reconnect (Failed attempts: 1).'; }, 5000);
    setTimeout(() => { document.getElementById('connection2').innerHTML = 'ERROR: Connection failed, attempting to reconnect (Failed attempts: 2).'; }, 10000);
    setTimeout(() => { document.getElementById('connection3').innerHTML = 'ERROR: Connection failed, attempting to reconnect (Failed attempts: 3).'; }, 15000);
    setTimeout(() => { document.getElementById('connection4').innerHTML = 'ERROR: Connection failed, attempting to reconnect (Failed attempts: 4).'; }, 20000);
    setTimeout(() => { document.getElementById('connection5').innerHTML = 'ERROR: Connection failed, attempting to reconnect (Failed attempts: 5).'; }, 25000);
    setTimeout(() => { document.getElementById('connection6').innerHTML = 'ERROR: Failed to reconnect after 5 attempts...'; }, 30000);
}