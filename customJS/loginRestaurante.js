const auth = firebase.auth();
const db = firebase.database();
const signupForm = document.getElementById('signup');
const mail = document.getElementById('mailInp');
const name = document.getElementById('nameInp');
const pass = document.getElementById('passInp');


signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = mail.value;
    const password = pass.value;
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location = "homepageRestaurante.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            alert(errorMessage)
        });

});