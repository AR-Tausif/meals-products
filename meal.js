const loadMealFish=(searchText)=>{
    const mealsURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(mealsURL);
    fetch(mealsURL)
        .then(response => response.json())
        .then(data => displayFish(data.meals))
}

const displayFish=(fish)=>{
    const containerMeals =  document.getElementById('container-meal');
    containerMeals.innerText ="";
    // console.log(fish);
    fish.forEach(element => {
    // console.log(element.strInstructions);

        const fishDiv = document.createElement('div');
        fishDiv.classList.add('col');
        fishDiv.innerHTML = `
        <div class="card h-100">
            <img src="${element.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.strMeal}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 5 mins ago</small>
            </div>
        </div>
        `;
        containerMeals.appendChild(fishDiv);
    });
}


const searchBtn = ()=>{
    const inputText = document.getElementById('search-field').value;
    console.log(inputText);
    loadMealFish(inputText);
    inputText.value = "";
};
loadMealFish("fish");