
//TMDB

const api_key = "api_key=fb61640a6949cbe5abf035a7d4b7a269";
const base_url= "https://api.themoviedb.org/3";
const images_url= "https://image.tmdb.org/t/p/";
const timeout= 2000;
const api_url = base_url + "/discover/movie?language=pt-br,sort_by=popularity.desc&"+api_key;

const main = document.getElementById(destaAvaliações)

getmovies(api_url);

function getmovies(url){

    fetch(url).then(res=>res.json).then(data=>{
        showMovies(data.results);
    })

}

function showMovies(data){

    main.innerHTML = '';

    data.forEach(movie =>{

        const {title, poste_path, vote_average, overview)=movies }

        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML =
        
    <div class="detaqueAvaliacoes container">
      <!-- Em Destaque -  -->
      <section class="destaques p-2 row">

        <h2 class="col-lg-9 col-md-8 col-sm-6">Em Destaque</h2>

        <div class="dropdown col-lg-3 col-md-4 col-sm-6">

          <button class="text-dark btn btn-lg btn-outline-secondary dropdown-toggle" type="button"
            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categoria: TODOS
          </button>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Aventura</a>
            <a class="dropdown-item" href="#">Romance</a>
            <a class="dropdown-item" href="#">Comédia</a>
          </div>

        </div>

      </section>

      <!-- Em Destaque - Cartazes -->
      <section class="cartazes row row-cols-lg-4 row-cols-md-2 row-cols-sm-1">

        <img src="${images_url+poster_path}" alt="${title}" ></img>
        <img src="/pictures/Destaque/Legado.jfif" alt="" class="img-fluid">
        <img src="/pictures/Destaque/melodia.jpg" alt="" class="img-fluid">
        <img src="/pictures/Destaque/split.jpg" alt="" class="img-fluid">

      </section>";

    main.appendChild(movieE1);
    })
}