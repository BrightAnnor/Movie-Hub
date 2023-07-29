// current movies
const moviesTitle = ['Fast X','John Wick','Merlin','Extraction']
const moviesContainer = document.getElementById('moviesContainer')
// apiKey
import apiKey from "../javascript/apikey.js"


// generate movie
const movieRequest = async(title)=>{
    return await
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
}
movieRequest()



// create a funtion to display the movies in the array

const generateMovies = async()=>{
    moviesTitle.forEach(async (title)=>{
        const {data} = await movieRequest(title)
        // console.log(movie)
        moviesContainer.innerHTML +=`<div class="col">
        <img src="${data.Poster}" alt="" style="max-width:70% ; border-radius: 7px; box-shadow:inset(0,0.9,0.5) ;">
       <span class="title-design">${data.Title}</span>
       </div> 
       `
    })

}
generateMovies()


// target the container for the movies.
