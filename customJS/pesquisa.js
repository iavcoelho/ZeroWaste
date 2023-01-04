const dbRef = firebase.database().ref();
restaurantID = []
dbRef.child("restaurants").get().then((snapshot) => {
    if (snapshot.exists()) {
        const restaurants = snapshot.val()
        for (const restaurant in restaurants) {
            dbRef.child("restaurants").child(restaurant).get().then((snapshot) => {
                if (snapshot.exists()) {
                    data = snapshot.val();
                    image = data.image
                    nome = data.name
                    type = data.type
                    HTML = `
                    <button class="card-container" onclick="toggle('${restaurant}')">
                        <div class="bg-accent rounded-3xl text-black flex items-center mx-4" style="height: 100px; border: solid 5px white;">
                            <div class="flex">
                                <img src="${image}" class="m-7" style="max-height: 70px;">
                                <div class="py-4 flex-column justify-between">
                                    <h2 class="text-xl">${nome}</h2>
                                    <img src="images/rating.png" class="my-2" style="margin-left: -6px; width: auto;">
                                    <p class="text-xl text-left">${type}</p>
                                </div>
                            </div>
                        </div>
                    </button>
                    <div id="${restaurant}" class="card hidden" style="width: auto;">
                    <h1 class="text-3xl text-left text-black p-2"><b>Cabazes</b></h1>`

                    if (data.cabazes) {
                        for (cabaz in data.cabazes) {
                            console.log(data.cabazes[cabaz])
                            nomeCabaz = data.cabazes[cabaz].nome
                            preco = data.cabazes[cabaz].preco
                            console.log(nome, preco)
                            randId = Math.random().toString(36).substr(2, 10);
                            HTML += `
                                <button class="bg-accent text-black text-left flex flex-row items-center justify-between p-3 my-3 rounded-3xl" style="width: 100%;" onclick="toggle('${randId}')">
                                    <div class="flex-column">
                                        <h1 class="text-xl"><b>${nomeCabaz}</b> - ${preco}€</h1>
                                    </div>
                                    <div class="img-wrapper bg-white rounded-xl flex items-center justify-center" style="width: 87px;height: 87px;"></div>
                                </button>
                                <div id="${randId}" class="bg-secondary px-5 hidden mt-3 rounded-3xl flex items-center justify-between" style="height: 75px;">
                                    <button class="bg-primary rounded-3xl text-white p-2" onclick="toggle('modal')">Adicionar restrições</button>
                                    <button class="bg-primary rounded-3xl text-white p-2"
                        onclick="addCart('${image}', '${nomeCabaz}', '${preco}',  $('#restricoes input:checked').map(function(){return $(this).val();}))">Adicionar ao
                        carrinho</button>
                </div>`
                        }
                    } else {
                        HTML += `
                                <h3 class="text-black">De momento este restaurante ainda não disponibilizou cabazes</h3>`
                    }

                    HTML += `</div>`
                    document.getElementById("board").innerHTML += HTML
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});

//for restaurantID in restaurantID, get child on db
