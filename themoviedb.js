
//TMDB

const api_key = "api_key=fb61640a6949cbe5abf035a7d4b7a269";
const base_url= "https://api.themoviedb.org/3";
const images_url= "https://image.tmdb.org/t/p/w500";
const timeout= 2000;
const api_url = base_url + "/discover/movie?language=pt-br,sort_by=popularity.desc&"+api_key;
let xhr;
//-------------------------------------------------------------------------------------------------------

function carregaFilmes () {
  xhr = new XMLHttpRequest ();

  xhr.open ('GET', base_url+ '/movie/popular' + '?language=pt-br,api_key=' + api_key, true);
  xhr.onload = exibeFilmes;
  xhr.send();
}

function pesquisaFilmes () {
  xhr = new XMLHttpRequest ();

  query = document.getElementById('pesquisa').value;

  xhr.open ('GET', base_url + '/search/movie' + '?language=pt-br,api_key=' + api_key + '&query=' + query, true);
  xhr.onload = exibeFilmes;
  xhr.send();
}


function exibeFilmes () {
  
  let data = JSON.parse (xhr.responseText);
  let textoHTML = '';

  for (let i = 0; i < data.results.length; i++) {
      let nomeFilme = data.results[i].title;
      let sinopse = data.results[i].overview;
      let imagem = images_url + data.results[i].poster_path;

      textoHTML += `<div class="card col-md-4">
          <img src="${imagem}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${nomeFilme}</h5>
              <p class="card-text">${sinopse}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>`
  }

  document.getElementById('tela').innerHTML = textoHTML;
}

//-------------------------------------------------------------------------------------------------------

