const user = localStorage.getItem('user')
cart = JSON.parse(localStorage.getItem(user)) || []
const db = firebase.database()

function writeToDB(cart) {
    db.ref("users/" + user).set({
        cart: cart
    });
}

function clearCart() {
    cart = []
    localStorage.setItem(user, [])
    writeToDB(JSON.parse(localStorage.getItem(user)))
}