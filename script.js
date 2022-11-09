const apiKey = '10162065155633362';
const baseUrl = 'https://www.superheroapi.com/api.php'

const heroImageDiv = document.getElementById("heroImageContainer")
const randHero = document.getElementById('getRandHero')
const searchHeroButton = document.getElementById('searchHeroButton')
const searchBar = document.getElementById("searchBar")
const searchInput = document.getElementById('searchInput')

const randomHero = () => {
  const numberOfHeros = 732
  return Math.ceil(Math.random() * numberOfHeros)
  // console.log(randomNumber)
}

const getRandomHero = (id, name) => {
  fetch(`${baseUrl}/${apiKey}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      const superHero = json
      showHeroInfo(superHero)
    })
}

  const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡️',
  durability: '🏋️‍♀️',
  power:'🔋',
  combat: '⚔️',
}
  
  const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`
  const img = `<img src= "${character.image.url}" height=300 width=300/>`
  const stats = Object.keys(character.powerstats).map(stat => {
  return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`}).join('')
  heroImageDiv.innerHTML = `${name}${img}${stats}`
  }
const getSearchHero = (name) => {
  console.log(searchInput.value)
  fetch(`${baseUrl}/${apiKey}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const superHero = json.results[0]
      showHeroInfo(superHero)
    })
}

// getSuperHero(prompt("what super hero ID would you like? 1-1000"))
// getRandomHero(randomHero())
getRandomHero(randomHero());
randHero.onclick = () => getRandomHero(randomHero())
searchHeroButton.onclick = () => getSearchHero(searchInput.value)
