
var loginButton = document.getElementById("loginButton");
var loginModal = document.getElementById("loginModal");
var closeButton = document.getElementsByClassName("close")[0];

loginButton.onclick = function() {
  loginModal.style.display = "block";
}

closeButton.onclick = function() {
  loginModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}
