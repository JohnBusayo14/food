import React from 'react';
import './App.css';

function App() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let useins = usein.value
        let selected = prefer.value
            search.onclick = function(){
              cardList.innerHTML = ""
              fetch(
                `https://edamam-recipe-search.p.rapidapi.com/search?q=${selected} ${useins}&rapidapi-key=d464b6cbaamsh3b3e3fd111ef555p14b10fjsnd04463426571`
              )
                .then((res) => res.json())
                .then((data) => {
                  let result = data.hits;
                  console.log(result);
                  for(var i = 0; i < result.length; i++){
                    cardList.innerHTML += `
                    <div class='card' >
                    <img class='card-image' src=${result[i].recipe.image}>
                     <h1>${result[i].recipe.label}</h1>
                     <p id='summary'>Summary: ${result[i].recipe.healthLabels[0]}, ${result[i].recipe.healthLabels[1]}</p>
                     <div id='more-info' class='more-info'>
                     <p>${result[i].recipe.mealType}</p>
                      <p>${result[i].recipe.dishType}</p>
                      <p> ${result[i].recipe.ingredientLines.map(x => x)}</p>
                     </div>
                   </div>
               `;
               
                  }
                  let details = document.getElementsByClassName('more-info')
                  document.querySelectorAll('.card').forEach((x,index) => {
                    x.addEventListener('click', ()=>{
                      if(details[index].style.display == 'block'){
                        details[index].style.display = 'none'
                      }else{
                        details[index].style.display = 'block'
                      }
                    })
                  })
                })
            }
            
        ;
      })
  return (
    <div className="App">
  <header className=' flex-col items-center justify-between bg-white'>
        <div className="logo">
            <img src="/logo1.png" alt=""/>
        
        </div>
    </header>
 
    <img className=" w-full"src="/croppedpasta.png" alt="first image"/>
    <div className=' flex justify-center'>
        <div className='flex flex-row items-center w-fit rounded-md m-10 h-20 bg-green-400'>
            
            <form  className='flex flex-row gap-5' action="" id="form">

                <select className=' py-5 px-10 rounded-md bg-slate-50 outline-none border-none' name="Preferences" id="Preferences">
                    <option value="">All Categories</option>
                    <option value="Gluten Free">Gluten Free</option>
                    <option value="Ketogenic">Ketogenic</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                </select>
                <input className=' border-none py-2 px-10 w-full outline-none' type="text" placeholder="Search" id="usein"/>
                <input className='w-20 bg-black' type="image" name="search-icon" id="search" src="./assets/iconsearch.svg"/>

            </form>
        </div>
    </div>
    <div className='flex-row justify-center flex-wrap gap-10' id="card-list">

    </div>

      </div>
  );
}

export default App;
