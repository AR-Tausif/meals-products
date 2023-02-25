// const loadMealFish=(searchText)=>{
//     const mealsURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
//     console.log(mealsURL);
//     fetch(mealsURL)
//         .then(response => response.json())
//         .then(data => displayFish(data.meals))
//         .catch(error =>{
//             console.log(error);
//         })
// }

const loadMealFish= async (searchText) => {
    const mealsURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    try {
        const res = await fetch(mealsURL);
        const data = await res.json();
        displayFish(data.meals);
    } catch(error) {
     console.log(error);   
    }
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
                <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <img src="${element.strMealThumb}" class="img-fluid">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">${element.strMeal}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Description: ${element.strInstructions}</p>
                            <span>Category: <b>${element.strCategory}</b></span>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
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