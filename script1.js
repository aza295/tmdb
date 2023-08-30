
function jump (){
    const options = {method: 'GET', headers: {accept: 'application/json'}};
fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=91df8b4854cab09a298338574a546096",
    options
  )
  .then((response) => {
    return response.json()
  })

  .then((data)=>{
    let movies =''
    for (let i = 0; i <data.results.length; i++) {
        movies += `<div class="cards ms-4 shadow bg-white rounded mb-5" style="width:250px; ">
        <a href=""><img class="card-img-top" src="https://www.themoviedb.org/t/p/w440_and_h660_face/${data.results[i].poster_path}" width="100%" height="300px"/></a>
       <div class="card-body">
       <h3 class="desc">${data.results[i].vote_average}</h3>
       <h3 class="desc">${data.results[i].original_title}</h3>
       <h3 class="desc">${data.results[i].release_date}</h3>
       </div>
        </div> `
      }

      document.getElementById("card").innerHTML = movies
  })
}


jump()




let moviesType = ['Популярное', 'Показывают сейчас','Предстоящие показы','Топ рейтинг']

let text = ''
for(let i = 0; i < moviesType.length; i++){
    text += `<a href="index1.html" > ${moviesType[i]}</a>`
}
document.getElementById('movies').innerHTML = text
