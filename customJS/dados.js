const user = localStorage.getItem('user')
console.log(user)
cart = JSON.parse(localStorage.getItem(user)) || []
id = cart.length > 0 ? cart[cart.length - 1].id + 1 : 0

//if cart is not empty, set preco to the sum of preco of all elements in cart, else set to 0
precoTotal = cart.length > 0 ? cart.reduce((acc, element) => acc + element.preco, 0) : 0


function addCart(restaurante, nome, preco, alergénios) {
    cart.push({id, restaurante, nome, preco, alergénios})
    localStorage.setItem(user, JSON.stringify(cart))
    precoTotal += preco
    id++
}