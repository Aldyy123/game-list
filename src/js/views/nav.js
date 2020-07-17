import {Glider} from './carousel.js'
import '../script/script.js'
import {apiUrl, reload} from '../script/script.js'
import $ from 'jquery'
import {getID} from '../script/details.js'

function load(page, id){
    $('nav.nav .nav .nav-item').removeClass('active')

    if (page === 'home' || page === '') {
        $('.home').addClass('active')
        Glider()
    }else if(page === 'games'){
        apiUrl()
        $('.games').addClass('active')
    }else if(page == 'games?page='+id){
        reload(page)
        $('.games').addClass('active')
    }else if(page === 'blog'){
        $('.blog').addClass('active')
    }

}

document.addEventListener('DOMContentLoaded', () => {

    let page = window.location.hash.substr(1)
    let id = window.location.hash.substr(12)
    const detailsID = window.location.hash.substr(14)


    if(page === '' || page === 'home'){
        $('main.main').load('./pages/home.html', function () {
            load(page)
        })
    }else if(page === 'games' || page === 'games?page='+id){
        $('main.main').load('./pages/games.html', function () {
            load(page, id)
        })
    }else if(page === 'blog'){
        $('main.main').load('./pages/blog.html', function () {
            load(page)
        })
    }else if(page === 'game.html?id='+ detailsID){
        $('main.main').load('game.html?id=' + id, function () {
            $('.list-games').html('')
            getID()
        })
    }

    
    

    $('.nav-link').on('click', function (event) {
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
        const page = event.target.getAttribute('href').substr(1)
        

        switch (page) {
        case 'home':
            $('main.main').load('./pages/home.html', () => {
                load(page)
            })
            break
        case 'games':
            $('main.main').load('./pages/games.html', () => {
                load(page, id)
            })
            break
        case 'blog':
            $('main.main').load('./pages/blog.html', () => {
                load(page)
            })
            break
        default:
            $('main.main').html('Halaman tidak ada')
            break
        }
    })
})

