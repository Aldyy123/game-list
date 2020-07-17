import $ from 'jquery'
import {ViewGame} from '../views/gameView.js'

const getID = () => {
    const id = window.location.hash.substr(14)

    let settings = {
        async: true,
        crossDomain: true,
        url: 'https://rawg-video-games-database.p.rapidapi.com/games/' + id,
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'dd3f776146mshdd0944a2ff7ceb9p1a4815jsn7a5467fa00d4',
        },
    }

    $.ajax(settings).done(function (response) {
        
        new ViewGame(response)

    })
}


function detail(id) {
    $('#' + id).on('click', function () {
        $('main.main').load('game.html?id=' + id, function () {
            $('.list-games').html('')

            getID()
        })
    })
}

export { getID, detail }
