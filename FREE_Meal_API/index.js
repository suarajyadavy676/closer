function Throttling(apiCall,delay){
  let btn = document.getElementById('btn')

  btn.disabled = true
  setTimeout(apiCall,delay)
 }

async function apiCall(){
  try{
    let search = document.getElementById('input').value
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
    let data = (await res.json()).meals
    // console.log(data)
    btn.disabled = false
    displayData(data)
  }catch(err){
    console.log(err)
  }
}

function displayData(data){
  // console.log("data",data)
  data.forEach(ele => {
    console.log(ele)
    let itemCard = document.createElement('div')
    itemCard.className = "movie_card"
    let image = document.createElement('img')
    image.src = ele.strMealThumb
    let meal = document.createElement('p')
    meal.textContent = "Meal : " + ele.strMeal

    itemCard.append(image,meal)
    let containers = document.getElementById('container')
    containers.appendChild(itemCard)

    
  });

}