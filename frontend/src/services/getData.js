
const getData = () => {
    const apiKey = '8f3a14a98cd545ab885a22bc44861818';

    return fetch('https://api.spoonacular.com/recipes/random?apiKey=' + apiKey + '&number=100')
        .then(response => response.json())
        .then(data => {
            return data.recipes;
        })
        .catch(error => {
            console.log(error);
        });
}

export default getData;