
const albumArray = [
    {
        name: 'Blue Banisters',
        img: 'blue banisters.webp',
        color: 'blue'
    },
    {
        name: 'Chemtrails over the Country Club',
        img: 'chemtrails.webp',
        color: 'grey'
    },
    {
        name: 'Norman Fucking Rockwell',
        img: 'NormanFuckingRockwell.webp',
        color: 'green'
    },
    {
        name: 'Lust for Life',
        img: 'lust for life.webp',
        color: 'white'
    },
    {
        name: 'Ultraviolence',
        img: 'Ultraviolence.webp',
        color: 'black'
    },
    {
        name: 'Honeymoon',
        img: 'Honeymoon.webp',
        color: 'aqua'
    },
    {
        name: 'Born to die',
        img: 'BornToDie.webp',
        color: 'brown'
    },
   
]

console.log(albumArray)
const wrapper = document.querySelector('.swiper-wrapper')
const menu = document.querySelector('.menu')
function createBoard(){
    for (let i =0; i<albumArray.length;i++){
        const container = document.createElement('div')
        container.classList.add('swiper-slide')
        const info = document.createElement('div')
        info.classList.add('inside')
        const album = document.createElement('img')
        album.setAttribute('src', albumArray[i].img)
        album.setAttribute('data-index', i)
        const name = document.createElement('h1')
        const link = document.createElement('span')
        const menuLink = document.createElement('li')
        menuLink.innerHTML=albumArray[i].name
        menu.appendChild(menuLink)
        link.innerHTML='BUY HERE'
        name.innerHTML=albumArray[i].name
        info.appendChild(album)
        info.appendChild(name)
        info.appendChild(link)
        container.appendChild(info)
        wrapper.appendChild(container)
        
    }
}
createBoard()

swiper.on('transitionStart', function (e) {
    albumArray.forEach((album, index) => {
        if(index==swiper.activeIndex)
        document.body.style.background=album.color})
});
