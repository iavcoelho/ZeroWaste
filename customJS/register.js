const auth = firebase.auth();
const db = firebase.database();
const signupForm = document.getElementById('signup');
const mail = document.getElementById('mailInp');
const pass = document.getElementById('passInp');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = mail.value;
    const password = pass.value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("user", user)
            console.log(user.uid)
            window.location.href = "homepage.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });

});