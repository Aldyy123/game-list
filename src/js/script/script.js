import $ from 'jquery'
import {pagination} from './pagination.js'
import {detail} from './details.js'

function apiUrl() {
    var settings = {
        async: true,
        crossDomain: true,
        url: 'https://rawg-video-games-database.p.rapidapi.com/games',
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'dd3f776146mshdd0944a2ff7ceb9p1a4815jsn7a5467fa00d4',
        },
    }

    $.ajax(settings).done(function (response) {
        const games = response.results
        $.each(games, function (i, game) {
            overview(game)
        })

        pagination(response)
    })
}

function overview(game) {
    const released = game.released
    const name = game.name
    const photo = game.background_image
    const id = game.id

    $('.list-games').prepend(`
  <a href="#game.html?id=${id}" id="${id}" class="nav-link">
    <div class="card">
      <img src="${photo}" class="img-thumbnail" width="500px" alt="${name}">
      <div class="text-body">
        <h5 class="card-title text-center">${name}</h5>
        <div class="ket">
            <div class="release"></div>
            <div class="stars-outer">
                <div class="stars-inner"></div>
            </div>
        </div>
      </div>
    </div>
  </a>
  `)
  
    ratings(game.rating)
    $('.release').html('Release : ' + new Date(released).getFullYear())
    detail(id)
}

function ratings(value){
    const total = 5
    const percents = (value / total) * 100
    const roundPercent = (Math.round(percents / 10) * 10) + '%'
    document.querySelector('.list-games .card .stars-inner').style.width = roundPercent 
}



function reload(id) {
    let settings = {
        async: true,
        crossDomain: true,
        url: 'https://rawg-video-games-database.p.rapidapi.com/' + id,
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'dd3f776146mshdd0944a2ff7ceb9p1a4815jsn7a5467fa00d4',
        },
    }

    $.ajax(settings).done(function (response) {
        const games = response.results
        pagination(response)
        $.each(games, function (indexInArray, game) {
            overview(game)
        })
    })
}

export { apiUrl, reload , ratings}
