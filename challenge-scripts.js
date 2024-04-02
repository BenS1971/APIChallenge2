var today_date= new Date()
var myyear=today_date.getFullYear()
var mymonth=today_date.getMonth()+1
var myToday=today_date.getDate()


document.write("Today's date:")
document.write(mymonth+"/"+myToday+"/"+myyear)

let PokemonInfoList = document.querySelector("ul");

fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        let pokemon = json.results;
    for (const p of pokemon) {
            let listItem = document.createElement("ul")
            listItem.innerText = p.name;
            PokemonInfoList.appendChild(listItem);
    }
    })

   /* for (const p of pokemon) {
        let listItem = document.createElement("ul")
        listItem.innerText = p.name;
        PokemonInfoList.appendChild(listItem);
    } 
    */

    fetch("https://pokeapi.co/api/v2/type?limit=5&offset=0")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        let pokemon = json.results;
    for (const p of pokemon) {
            let listItem = document.createElement("ul")
            listItem.innerText = p.name;
            PokemonInfoList.appendChild(listItem);
        } })

    
