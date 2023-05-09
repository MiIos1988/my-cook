
const getData = () => {
const apiKey = '8f3a14a98cd545ab885a22bc44861818';

fetch('https://api.spoonacular.com/recipes/random?apiKey=' + apiKey + '&number=100')
    .then(response => response.json())
    .then(data => {
        const recipes = data.recipes;
        console.log(recipes);
    })
    .catch(error => {
        console.log(error);
    });
}

export default getData;