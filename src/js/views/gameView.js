import $ from 'jquery'

class ViewGame{
    constructor(game){
        this._game = game

        this.coloum_1()  
        this.coloum_2()
    }

    coloum_1(){
        const name = this._game.name
        const release = this._game.released
        const clip = this._game.clip.clip

        $('main.details').prepend(`
            <div class="coloumn-1">
                <div class="title">
                    <h2 class="text-light font-weight-bold">${name}</h2>
                    <h5 class="publish"></h5>
                    <h5>
                        <span>Released ${release}</span>
                        <span>
                        <div class="stars-outer">
                            <div class="stars-inner"></div>
                        </div>
                        </span>
                    </h5>
                </div>
            <hr class="bg-light"/>
        
            <div class="video d-flex justify-content-center col-md-12">
                <video class="col-12" src="${clip}" alt="${name}" controls></video>
            </div>
        
            <div class="description mt-5 text-light col-12">
                <h3>Description</h3>
            </div>
        </div>
        `)

        this.publisher(this._game.publishers)
        this.description(this._game.description)
        this.ratings(this._game.rating)
    }

    publisher(publish){
        $.each(publish, function (i, value) { 
            $('.publish').html(`Publish : ${value.name}`)
        })
    }

    description(text){
        $('div.description').append(text)
    }

    ratings(value){

        const total = 5
        const percents = (value / total) * 100
        const roundPercent = (Math.round(percents / 10) * 10) + '%'
        document.querySelector('.details .coloumn-1 .stars-inner').style.width = roundPercent 
    }

    coloum_2(){
        const img = this._game.background_image
        const name = this._game.name

        $('main.details').append(`
            <div class="coloumn-2">
                <div class="card">

                    <img src="${img}" height="100%" alt="${name}" width="100%">
                    <hr class="bg-light">

                    <p>Platform On : </p>
                    <div class="platform list"></div>

                    <p class="mt-3">Store On : </p>
                    <ul class="stores list navbar-nav"></ul>

                    <div class="web mt-3 d-flex justify-content-center">
                        <a href="${this._game.website}" class="text-uppercase text-center btn btn-outline-dark">Official Web ${name}</a>
                    </div>
                    
                </div>
        
                <div class="card bg-dark">
                    <h4 class="text-light">Details</h4>
                    <hr class="bg-light">
            
                    <h5 class="text-light">Genre</h5>
                    <ul class="genre navbar-nav"></ul>

                    <h5 class="text-light mt-2">Tags</h5>
                    <ul class="tags navbar-nav"></ul>
                </div>
            
            </div>
        `)

        this.platform(this._game.platforms)
        this.genre(this._game.genres)
        this.stores(this._game.stores)
        this.tags(this._game.tags)
    }

    platform(platforms){
        $.each(platforms, function (i, value) {
            const playOn = value.platform.name
            $('.platform').prepend(`<span><a href="" class="btn btn-dark">${playOn}</a></span>`)
        })
    }

    genre(genres){
        $.each(genres, function (i, value) { 
            $('.genre').prepend(`<li class="nav-item">${value.name}</li>`)
        })
    }

    stores(stores){
        $.each(stores, function (i, value) { 
            const url = value.url
            const name = value.store.name

            $('.stores').prepend(`
            <li class="nav-item d-flex flex-wrap">
                <a href="${url}" class="btn btn-dark">${name}</a>
            </li>`)
        })
    }

    tags(tags){
        $.each(tags, function (i, value) { 
            $('.tags').prepend(`<li class="nav-item">${value.name}</li>`)
        })
    }

}

export {ViewGame}