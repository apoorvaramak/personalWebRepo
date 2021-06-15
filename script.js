const gitLogo = document.getElementById("logo");

function logoClick(){
    alert("I was clicked"); 
    window.location.replace("https://github.com/apoorvaramak");
}
gitLogo.addEventListener('click', logoClick); 

