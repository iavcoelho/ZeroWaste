const user = localStorage.getItem('user')
const db = firebase.database()
console.log(user)
cart = JSON.parse(localStorage.getItem(user)) || []
firebase.database().ref().child("users").child(user).get().then((snapshot) => {
  if (snapshot.exists()) {
    cart = snapshot.val().cart;
  } else {
    cart = JSON.parse(localStorage.getItem(user)) || []
}
}).catch((error) => {
  console.error(error);
});

id = cart.length > 0 ? cart[cart.length - 1].id + 1 : 0

//if cart is not empty, set preco to the sum of preco of all elements in cart, else set to 0
precoTotal = cart.length > 0 ? cart.reduce((acc, element) => acc + parseFloat(element.preco), 0) : 0

function writeToDB(cart) {
    db.ref("users/" + user).set({
        cart: cart
    });
}


function addCart(restaurante, nome, preco, alergénios) {
    cart.push({id, restaurante, nome, preco, alergénios})
    localStorage.setItem(user, JSON.stringify(cart))
    console.log(cart)
    precoTotal += preco
    writeToDB(JSON.parse(localStorage.getItem(user)))
    id++
}



