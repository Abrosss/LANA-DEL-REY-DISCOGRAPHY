let audio = document.getElementById('my_audio')
window.onload = function() {
    audio.play();
}

const albumArray = [
    {
        name: 'Blue Banisters',
        hash: 'bluebanisters',
        img: '/album covers/blue banisters.webp',
        audio: '/background audio/arcadia.mp3',
        video: '/background videos/blueee.mp4',
        gif: 'bluegif.mp4',
        color: 'blue',
    },
    {
        name: 'Violet Bent Backwards Over the Grass',
        hash: 'violetbentbackwardsoverthegrass',
        img: '/album covers/VBBOTG.webp'
    },
    {
        name: 'Chemtrails over the Country Club',
        hash: 'chemtrails',
        img: '/album covers/chemtrails.webp',
        audio: '/background audio/whitedress.mp3',
        video: '/background videos/chem.mp4',
        color: 'grey'
    },
    {
        name: 'Norman Fucking Rockwell',
        hash: 'normanfuckingrockwell',
        img: '/album covers/NormanFuckingRockwell.webp',
        video: '/background videos/greatt.mp4',
        audio: '/background audio/norman.mp3',
        color: 'green'
    },
    {
        name: 'Lust for Life',
        hash: 'lustforlife',
        img: '/album covers/lust for life.webp',
        audio: '/background audio/whitemustang.mp3',
        video: '/background videos/lust.mp4',
        color: 'white'
    },
    {
        name: 'Ultraviolence',
        hash: 'ultraviolence',
        img: '/album covers/Ultraviolence.webp',
        color: 'black',
        video: '/background videos/ultraviolence.mp4',
        audio: '/background audio/moneypowerglory.mp3'
    },
    {
        name: 'Honeymoon',
        hash: 'honeymoon',
        img: '/album covers/Honeymoon.webp',
        color: 'aqua',
        video: '/background videos/honeymoon.mp4',
        audio: '/background audio/honeymoon.mp3'
    },
    {
        name: 'Born to die',
        hash: 'borntodie',
        img: '/album covers/paradise.jpg',
        color: 'brown',
        video: '/background videos/ride.mp4',
        audio: '/background audio/ride.mp3'
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
        container.setAttribute('data-hash', albumArray[i].hash)
        const name = document.createElement('h1')
        const link = document.createElement('span')
        // const menuLink = document.createElement('li')
        // menuLink.innerHTML=albumArray[i].name
        // menu.appendChild(menuLink)
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
let vid = document.getElementById("myVideo");

swiper.on('transitionStart', function (e) {
    albumArray.forEach((album, index) => {
        if(index==swiper.activeIndex){
        vid.src = album.video
        audio.src = album.audio
        console.log(album.audio)
        audio.play()
        }
        // document.body.style.background=album.color 
    })
});


window.addEventListener('hashchange', function() {
    albumArray.forEach((album, index) =>{
        const hash = this.location.hash.replace('#', '')
        if(hash==album.hash)
        return swiper.slideTo(index)
        })})
        
    
  

        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                swiper.slideNext(800); //whatever you want to do when space is pressed
                // if(swiper.activeIndex==swiper.slides.length-1)
                // console.log('last')
            }
            // if(event.code === 'Space' && swiper.activeIndex===swiper.slides.length-1){
            //     swiper.slideTo(0)
            // }
          })