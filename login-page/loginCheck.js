function loginCheck() {
    const userAgentId = 'agent1234';
    const userAgentPassword = 'password1234';
    var agentId = document.getElementById('agentid').value;
    var password = document.getElementById('password').value;
    if (agentId === userAgentId) {
        if (password === userAgentPassword) {
            window.location.replace('../welcome-page/welcome.html');
        }
    } else if (agentId != userAgentId) {
        document.getElementById('failedlogin').style.display = 'block';
    }
}

function hideFailedLogin() {
    document.getElementById('failedlogin').style.display = 'none';
}