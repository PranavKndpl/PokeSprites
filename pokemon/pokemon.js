async function fetchpoke(){
    try{

        const pokeName = document.getElementById("Pname").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

        if(!response.ok){
            throw new Error("could not fetch resource");
        }

        const data = await response.json();
        const pokeSprite= data.sprites.front_default;
        const pokeImg = document.getElementById("pokemon");

        pokeImg.src= pokeSprite;
        pokeImg.style.visibility="visible";

    }

    catch(error){
        console.error(error);
    }
}

let pokeSuggestion="";
const randomDisplay = document.getElementById("randomName");

function randomPokemon(){
    const randomPokemon= Math.floor(Math.random()*1302);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${randomPokemon}`)
    .then(Response => Response.json())
    .then(data => {
        pokeSuggestion= data.results[0].name;
    })
    .catch(error => console.error(error));
    console.log(pokeSuggestion);
    randomDisplay.value= pokeSuggestion;
}

function reset(){
    const pokeImg = document.getElementById("pokemon");
    pokeImg.style.visibility="hidden";

    const randomDisplay = document.getElementById("randomName");
    randomDisplay.value= "";

    const pokeName = document.getElementById("Pname");
    pokeName.value="";
}