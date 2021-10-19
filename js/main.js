var movies = [
    {
        rating: 2,
        name: "El Titanic",
        image: "https://m.media-amazon.com/images/I/51mTtUGvUCL.jpg"
    },
    {
        rating: 3,
        name: "Interstellar",
        image: "https://pics.filmaffinity.com/Interstellar-366875261-large.jpg"
    }
]

function filterMovies(){
    const search="Interstellar"
    const moviesFound=movies.filter(movie=>movie.name===search)
    console.log(moviesFound)
}

function showMovies (){
    let moviesList = document.getElementById("movies-list")
    console.log(moviesList)
    for (i=0; i< movies.length; i++){
        console.log(movies[i])
        const movieItem = '<div id="movies-list-movie-container" class="col">'+
        '<div class="list-movie-img">'+
            '<div class="list-stars-container">'+
                '<i id="gray-star" class="fa-solid fa-star"></i>'+
                '<i id="yellow-star" class="fa-solid fa-star"></i>'+
                '<i id="yellow-star" class="fa-solid fa-star"></i>'+
            '</div> <img class="photo" src="'+movies[i].image+'" alt="oxygen-movie">'+
        '</div></div>'
        moviesList.innerHTML+=movieItem
    
    }
    console.log(moviesList)
}
showMovies()