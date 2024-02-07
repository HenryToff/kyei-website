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
 
        const Username = document.getElementById('Username').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('msg').value;

        Email.send ({
            Host : "smtp.elasticemail.com",
            Username : "kyeiornament@gmail.com",
            Password : "48E5181490036E5DCB84F58C2498729295FA",
            To : 'kyeiornament@gmail.com',
            From : "kyeiornament@gmail.com",
            Subject : `${Username} Sent you a Message!`,
            Body : ` Name: ${Username} <br/> Email: ${email} <br/> Message: ${message}`,

        }).then(
           message => alert("Mail sent! Thank You")
        );
    }




