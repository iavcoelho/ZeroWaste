const auth = firebase.auth();
const loginForm = document.getElementById('login');
const mail = document.getElementById('mailInp');
const pass = document.getElementById('passInp');

loginForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const email = mail.value;
    const password = pass.value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        window.location.href = "homepage.html";
    }).catch(error => {
        console.log(error)
        alert(error.message)
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            localStorage.setItem("user", user.uid)
        }
    });
});