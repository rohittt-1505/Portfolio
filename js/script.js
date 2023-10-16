/* ============================== typing animation ============================== */
var typed = new Typed(".typing",{
    String:["Web Designer" , "web Developer" , "Graphic Designer" ],
    typeSpeed:100,
    BackSpeed:100,
    loop:true
})
/*var typed = new Typed(".typing", {
    Strings: ["Frontend Developer", "Web Developer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})*/

/* ============================== Email ============================== */
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rohitrathod2815@gmail.com",
        Password: "44EA63BE1AC9F0D763C3E5F49C2874DC293B",
        To: 'rohitrathod2815@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Contact Mail From Portfolio",
        Body: "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Subject: " + document.getElementById("subject").value + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully")
    );
}