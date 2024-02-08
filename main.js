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

function sendEmail(){

    let Username = document.getElementById("Username").value;
    let emal = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let body = "NAME:" + Username + " <br/> EMAIL: " + emal + " <br/> MESSAGE: "+ message;

    Email.send({
        SecureToken : '0839fa01-ad36-420a-82e4-fa0c1367786c',
        To : 'kyeiornament@gmail.com',
        From : "kyeiornament@gmail.com",
        Subject : "Mail from " + Username+ "",
        Body : body
    }).then(
    message => alert("Mail Sent! Thank You...")
    )

}  




