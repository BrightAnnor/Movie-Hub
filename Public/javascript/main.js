// current movies
const moviesTitle = ['Fast X','John Wick','Merlin','Extraction']

// apiKey
import apiKey from "../javascript/apikey.js"


// generate movie
const movieRequest = async(title)=>{
    return await
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
}
movieRequest()

// Display the moive in the main display
const display = document.getElementById('main')


const movieInMain = async(title)=>{
    const {data} = await movieRequest('Fast X')
    // console.log(data)
    display.style.backgroundImage = `url(${data.Poster})`
    display.style.backgroundRepeat = 'no-repeat'
    display.style.backgroundColor = 'black'
    display.style.backgroundSize= 'contain'
    display.style.backgroundPosition= 'center'

    display.innerHTML = `
    
    
    <div class="title-design fs-1 text-dark position-absolute ">${data.Title}</div>
    <div class="d-flex justify-content-around position-absolute bottom-0 start-50 translate-middle-x w-100 h-50 p-5"id= "moviesContainer"></div>
    `
}
movieInMain()



// create a funtion to display the movies in the array

const generateMovies = async()=>{
    // const moviesContainer = document.getElementById('moviesContainer')
    moviesTitle.forEach(async (title)=>{
        const {data} = await movieRequest(title)
        // console.log(data)
        moviesContainer.innerHTML +=`<div class="col" id="card">
        
        <img src="${data.Poster}" alt="" style="max-width:50% ; border-radius: 7px; box-shadow:inset(0,0.9,0.5) ;">
       <span class="title-design">${data.Title}</span>
       
       </div> 
       `
       const card = document.getElementById('card')

       card.addEventListener('click',()=>{
            movieInMain(title);
       })

    })

}
generateMovies()


// target the container for the movies.
