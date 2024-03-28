let PokemonInfoList = document.querySelector("ul");

fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        let pokemon = json.results;
    })

    for (const p of pokemon) {
        let listItem = document.createElement("ul")
        listItem.innerText = p.name;
        PokemonInfoList.appendChild(listItem);
    }

    fetch("https://pokeapi.co/api/v2/type")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        let pokemon = json.results;
    })

    for (const p of pokemon) {
        let listItem = document.createElement("ul")
        listItem.innerText = p.name;
        PokemonInfoList.appendChild(listItem);
    }
