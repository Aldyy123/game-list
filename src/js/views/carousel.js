import Glide from '@glidejs/glide'

function Glider() {
    const selector = document.querySelector('.glide')
    const glide = new Glide(selector, {
        width : 100,
        wrapperWidth : 100,
        autoplay: 2000,
        hoverpause: true,
        perView: 2,
        breakpoints: {
            1024: {
                perView: 2,
            },
            600: {
                perView: 1,
            },
        },
    })

    glide.mount()
}


export { Glider }
