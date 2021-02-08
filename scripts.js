const baseURL = 'https://pokeapi.co/api/v2/';
const pokemon = 'pokemon/';
const randomizer = document.querySelector('.random');
const pokeName = document.getElementById('name');

randomizer.addEventListener('click', fetchPoke);

function fetchPoke(e) {
    const number = Math.floor(Math.random() * Math.floor(150));
    e.preventDefault(); 

    fetch(baseURL + pokemon + number) 
        .then(results => {
            return results.json() 
        })
        .then(json => {
            console.log(json);
            displayResults(json);
        });
};

function displayResults(json) {
    let nameData = json.name;
    let hpData = json.stats[0].base_stat;
    let attackData = json.stats[1].base_stat;
    let defenseData = json.stats[2].base_stat;
    let specialAttackData = json.stats[3].base_stat;
    let specialDefenseData = json.stats[4].base_stat;
    let speedData = json.stats[5].base_stat;

    pokeName.innerHTML = nameData;
    hp.innerHTML = hpData;
    attack.innerHTML = attackData;
    defense.innerHTML = defenseData;
    specialAttack.innerHTML = specialAttackData;
    specialDefense.innerHTML = specialDefenseData;
    speed.innerHTML = speedData;
};

