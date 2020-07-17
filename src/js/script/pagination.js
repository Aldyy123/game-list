import $ from 'jquery'
import { reload } from './script.js'

function pagination(game) {
    let next = game.next.substr(24)
    let previous = game.previous

    if (!previous) {
        next = game.next.substr(24)
        template(next, previous, 'disabled', 'active')
    } else if (next === 'games?page=12') {
        previous = game.previous.substr(24)
        template(next, previous, 'active', 'disabled')
    } else {
        previous = game.previous.substr(24)
        template(next, previous, 'active', 'active')
    }

    pageClick()
}

function template(next, prev, clasPrev, clasNext) {
  

    $('.games-content').append(`
    <nav class="mt-5">
    <ul class="pagination justify-content-center">
      <li class="page-item ${clasPrev}">
        <a class="page-link" href="#games">First</a>
      </li>
      <li class="page-item ${clasPrev}">
        <a class="page-link" href="#${prev}">Previous</a>
      </li>
      <li class="page-item ${clasNext}">
        <a class="page-link" href="#${next}">Next</a>
      </li>
      <li class="page-item ${clasNext}">
        <a class="page-link" href="#games?page=11">Last</a>
      </li>
    </ul>
  </nav>
    `)

    
    nomer()
}

function nomer() {
    $('.games-content').append(`
    <nav class="mt-5">
      <ul class="pagination pagination-two justify-content-center">
      
      </ul>
    </nav>
    `)

    noPage()
}

function noPage() {

    for (let i = 2; i <= 10; i++) {
        $('.pagination-two').append(`
              <li class="page-item nomer"><a class="page-link" href="#games?page=${i}">${i}</a></li>
          `)
    }
    
    clickNoPage()

}

function clickNoPage() {
    $('.nomer').on('click', function () {
        $('.nomer').removeClass('active')
        $(this).addClass('active')
    })
}

function pageClick() {
    $('.page-item').on('click', function (e) {
        const link = e.target.getAttribute('href').substr(1)

        if (link) {
            $('main.main').load('./pages/games.html?' + link, function () {
                reload(link)
            })
        }
    })
}

export { pagination }
