const baseURL = 'https://pokeapi.co/api/v2/';
const pokemon = 'pokemon/';
const maxOptions = '?=150'
const randomizer = document.querySelector('.random');
const number = document.querySelector('.numbers');
let url;

randomizer.addEventListener('click', fetchPoke);
number.addEventListener('click', randomNum);

function fetchPoke(e) {
    e.preventDefault(); 

    url = baseURL + pokemon + randomNum

    fetch(baseURL + pokemon) 
        .then(results => {
            return results.json() 
        })
        .then(json => [
            console.log(json)
    ]);
};

function randomNum() {
    let x = document.getElementById("numberGenerator");
    x.innerHTML = Math.floor((Math.random() * 150) + 1);
};

