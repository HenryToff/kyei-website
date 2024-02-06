let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}



var Username = document.getElementById('name').value;
var email = document.getElementById('email').value;
var msg = document.getElementById('msg').value;

var messageBody = "Name" + Username +
"<br/> Email" + email +
"<br/> Message"+ msg;

function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kyeiornament@gmail.com",
        Password : "98E5C9D43BF205C649B6D0A9CE5CB1A0022F",
        To : 'henrydetoff@gmail.com',
        From : "kyeiornament@gmail.com",
        Subject : "This is the subject",
        Body : messageBody,
    }).then(
      message => alert(message)
    );
};

