const paramsString = window.location.href
let id = paramsString.slice(-6)

function show1() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWRmOGI0ODU0Y2FiMDlhMjk4MzM4NTc0YTU0NjA5NiIsInN1YiI6IjY0YzI4NDFmMWNmZTNhMGViMWNjN2MyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OHV3EZCOSxB8Tm2MsrKAwjs-gAnOy2ifltvk2Nx-wVc",
    },
  }
  fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
    .then((response) => {
      return response.json()
    })

    .then((data) => {
      console.log("data", data)
      let movies = ""

      movies += `<div class="ms-4 p-5">
      <a><img src="https://www.themoviedb.org/t/p/w440_and_h660_face/${data.poster_path}" width="100%" height="400px"/style="width: 300px;"></a>    
      </div> `

      document.getElementById("info").innerHTML = movies

      document.getElementById("title").innerHTML = `
      <h3 class="desc">${data.original_title}</h3>
      <h3 class="desc">${data.release_date} </h3>
      <h3 class="desc">${data.vote_average}</h3>
      <h4 style="font-style: italic;">${data.tagline}</h4>
      <h3>Overview</h3>
      <h6>${data.overview}</h6>`

      console.log(data.genres.name)
      document.getElementById("head1").style.backgroundImage = `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path})`;
    })
}

show1()

// backdrop_path

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWRmOGI0ODU0Y2FiMDlhMjk4MzM4NTc0YTU0NjA5NiIsInN1YiI6IjY0YzI4NDFmMWNmZTNhMGViMWNjN2MyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OHV3EZCOSxB8Tm2MsrKAwjs-gAnOy2ifltvk2Nx-wVc",
  },
}

fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
  .then((response) => {
    return response.json()
  })

  .then((data) => {
    console.log("data", data);
    let text = ""

    for (let i = 0; i<data.cast.length; i++) {
      text += `<div class="col-3">
      <img src="https://www.themoviedb.org/t/p/w276_and_h350_face/${data.cast[i].profile_path}">
      <h3>${data.cast[i].name}</h3></div>`
    }
    document.getElementById("cast").innerHTML = text
  })

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWRmOGI0ODU0Y2FiMDlhMjk4MzM4NTc0YTU0NjA5NiIsInN1YiI6IjY0YzI4NDFmMWNmZTNhMGViMWNjN2MyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OHV3EZCOSxB8Tm2MsrKAwjs-gAnOy2ifltvk2Nx-wVc'
//     }
//   };

//   fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
