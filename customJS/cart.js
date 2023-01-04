$(document).ready( function (){
    //for element in array cart, add it to the cartArea div
    cart.forEach( function (element) {
        restaurante = element.restaurante
        nome = element.nome
        preco = element.preco
        id = element.id
        //create a div
        var div = document.createElement('div')
        div.id = element.id
        //add the class cartItem to
        div.classList.add('cartItem')
        //add the id of the element to the div
        //add the html to the div
        div.innerHTML = `<div class="bg-accent rounded-3xl text-black flex items-center mx-4 mt-2" style="height: auto;>
                    <div class="flex">
                        <img src="images/logo`+ restaurante + `.png" class="m-7" style="max-height: 70px;">
                        <div class="py-4 flex-column justify-between" style="width: 250px;">
                            <h2 class="text-xl">`+nome+` - `+restaurante+`</h2>
                            <table id="table`+ id +`">Alergénios:</table>
                            <div class="flex flex-row justify-between" style="width: 100%;">
                                <p><b>Preço</b>: `+ preco + `</p>
                                <button class="w-5 h-5 rounded-md"><i class="fa text-red-400 fa-trash-can"
                                        onclick="removeCart('`+ id +`')"></i></button>
                            </div>
                        </div>
                    </div>
        `
        //append the div to the cartArea div
        document.getElementById('cartArea').appendChild(div)
        //for each element in the alergénios array, add a table row to the table
        for (var i = 0; i < element.alergénios.length; i++) {
            console.log(element.alergénios[i])
            $("#table" + id).append('<tr><td>' + element.alergénios[i] + '</td></tr>')
        }
    })})

$("#total").text('Preço Total: ' + precoTotal)

function removeCart(id) {
    cart.splice(cart.indexOf(cart.find(element => element.id == id)), 1)
    precoTotal = cart.length > 0 ? cart.reduce((acc, element) => acc + element.preco, 0) : 0
    console.log(cart)
    toggle(id)
    localStorage.setItem('cart', JSON.stringify(cart))
    $("#total").text('Preço Total: ' + precoTotal)
}