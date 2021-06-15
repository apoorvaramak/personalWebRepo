const gitLogo = document.getElementById("logo");

function logoClick(){
    window.location.href = "https://github.com/apoorvaramak";
}
gitLogo.addEventListener('click', logoClick); 

const myName = document.getElementById("name"); 

myName.addEventListener('click', function(){
    alert("That's me!");
})

const linkedIn = document.getElementById("linkedin"); 

linkedIn.addEventListener('click', function(){
    window.location.href = "https://www.linkedin.com/in/apoorvaramakrishnan/"; 
})

const instagram = document.getElementById("instagram"); 

instagram.addEventListener('click', function(){
    window.location.href = "https://www.instagram.com/apoorva.rama/";
})

