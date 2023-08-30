function display (){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWRmOGI0ODU0Y2FiMDlhMjk4MzM4NTc0YTU0NjA5NiIsInN1YiI6IjY0YzI4NDFmMWNmZTNhMGViMWNjN2MyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OHV3EZCOSxB8Tm2MsrKAwjs-gAnOy2ifltvk2Nx-wVc'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=91df8b4854cab09a298338574a546096', options)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let movies =''
            for (let i = 0; i <data.results.length; i++) {
                movies += `<div class="col-3 ms-4 ">
                <a href="eachmovie.html"><img src="https://www.themoviedb.org/t/p/w440_and_h660_face/${data.results[i].poster_path}" width="100%" height="400px"/></a>
                <h3 class="desc">${data.results[i].original_title}</h3>
                <h3 class="desc">${data.results[i].vote_average}</h3>
                <h3 class="desc">${data.results[i].release_date}</h3>
                </div> `
              }
        
              document.getElementById("over1").innerHTML = movies
        });

}
display ()





function display1 (){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWRmOGI0ODU0Y2FiMDlhMjk4MzM4NTc0YTU0NjA5NiIsInN1YiI6IjY0YzI4NDFmMWNmZTNhMGViMWNjN2MyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OHV3EZCOSxB8Tm2MsrKAwjs-gAnOy2ifltvk2Nx-wVc'
        }
      };
      
      
      fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=91df8b4854cab09a298338574a546096', options)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let movies =''
            for (let i = 0; i <data.results.length; i++) {
                movies += `<div class="col-3 ms-4 ">

                <a href="eachmovie.html"><img src="https://www.themoviedb.org/t/p/w440_and_h660_face/${data.results[i].poster_path}" width="100%" height="400px"/>
                </a>
                <h3 class="desc">${data.results[i].original_title}</h3>
                <h3 class="desc">${data.results[i].vote_average}</h3>
                <h3 class="desc">${data.results[i].release_date}</h3>
                </div> `
              }
        
              document.getElementById("over1").innerHTML = movies
        });

}













function show(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWRmOGI0ODU0Y2FiMDlhMjk4MzM4NTc0YTU0NjA5NiIsInN1YiI6IjY0YzI4NDFmMWNmZTNhMGViMWNjN2MyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OHV3EZCOSxB8Tm2MsrKAwjs-gAnOy2ifltvk2Nx-wVc'
        }
      };fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=91df8b4854cab09a298338574a546096",
    options
  )
  .then((response) => {
    return response.json()
  })

  .then((data)=>{
    let movies =''
    for (let i = 0; i <data.results.length; i++) {
        movies += `<div class="col-3 ms-4 ">
        <a href="eachmovie.html?id=${data.results[i].id}"><img src="https://www.themoviedb.org/t/p/w440_and_h660_face/${data.results[i].poster_path}" width="100%" height="400px"/></a>
        <h3 class="desc">${data.results[i].original_title}</h3>
        <h3 class="desc">${data.results[i].vote_average}</h3>
        <h3 class="desc">${data.results[i].release_date}</h3>
        </div> `
      }

      document.getElementById("over").innerHTML = movies
  })





}



function show1 (){
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
        movies += `<div class="col-3 ms-4 ">
        <a href="eachmovie.html?id=${data.results[i].id}"><img src="https://www.themoviedb.org/t/p/w440_and_h660_face/${data.results[i].poster_path}" width="100%" height="400px"/></a>
        <h3 class="desc">${data.results[i].original_title}</h3>
        <h3 class="desc">${data.results[i].vote_average}</h3>
        <h3 class="desc">${data.results[i].release_date}</h3>
        </div> `
      }

      document.getElementById("over").innerHTML = movies
      console.log(data)
  })
}


show1()



let moviesType = ['Популярное', 'Показывают сейчас','Предстоящие показы','Топ рейтинг']

let text = ''
for(let i = 0; i < moviesType.length; i++){
    text += `<a href="index1.html" > ${moviesType[i]}</a>`
}
document.getElementById('movies').innerHTML = text
