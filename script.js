const form = document.querySelector("form");

const fullName= document.getElementById("name");
const phone= document.getElementById("phone");
const email= document.getElementById("email");
const interest= document.getElementById("interest");
const message= document.getElementById("message");

function sendEmail (){
    const bodyMessage = 'Full Name: $(fullName.value) <br> phone:$(phone.value) <br> Email:$(email.value) <br> interest:$(interst.value) <br> message:$(message.value) <br>' ;
    Email.send({
        Host : "s1.maildns.net",
        Username : "kayitarecindy@gmail.com",
        Password : "03FCEF94616B7AF84710343E0546769E2354",
        To : 'kayitarecindy@gmail.com',
        From : "kayitarecindy@gmail.com",
        Subject : subject.value,
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail()
})