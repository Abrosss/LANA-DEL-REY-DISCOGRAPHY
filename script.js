let audio = document.getElementById('my_audio')
window.onload = function() {
    audio.load()
    audio.play();
}

let lastActiveHash

const albumArray = [
    {
        name: 'Blue Banisters',
        hash: 'bluebanisters',
        img: 'images/blue banisters.webp',
        audio: 'audio/arcadia.mp3',
        video: 'videos/blueee.mp4',
        pic: 'ok.png',
        color: '#c4bb93',
    },
    {
        name: 'Violet Bent Backwards Over the Grass',
        hash: 'violetbentbackwardsoverthegrass',
        video: 'videos/violet.mp4',
        audio: 'audio/violet.mp3',
        color: '#396448',
        img: 'images/VBBOTG.webp'
    },
    {
        name: 'Chemtrails over the Country Club',
        hash: 'chemtrails',
        img: 'images/chemtrails.webp',
        audio: 'audio/whitedress.mp3',
        video: 'videos/chem.mp4',
        color: '#707070'
    },
    {
        name: 'Norman Fucking Rockwell',
        hash: 'normanfuckingrockwell',
        img: 'images/NormanFuckingRockwell.webp',
        video: 'videos/greatt.mp4',
        audio: 'audio/norman.mp3',
        color: '#cdb498'
    },
    {
        name: 'Lust for Life',
        hash: 'lustforlife',
        img: 'images/lust for life.webp',
        audio: 'audio/whitemustang.mp3',
        video: 'videos/lust.mp4',
        color: '#6da7a1'
    },
    {
        name: 'Ultraviolence',
        hash: 'ultraviolence',
        img: 'images/Ultraviolence.webp',
        color: '#242424',
        video: 'videos/ultraviolence.mp4',
        audio: 'audio/moneypowerglory.mp3'
    },
    {
        name: 'Honeymoon',
        hash: 'honeymoon',
        img: 'images/Honeymoon.webp',
        color: '#a8d2e9',
        video: 'videos/honeymoon.mp4',
        audio: 'audio/honeymoon.mp3'
    },
    {
        name: 'Born to die',
        hash: 'borntodie',
        img: 'images/paradise.jpg',
        color: '#e9cd85',
        video: 'videos/ride.mp4',
        audio: 'audio/ride.mp3'
    },
   
]


const wrapper = document.querySelector('.swiper-wrapper')

const menu = document.querySelector('.menu')
function createBoard(){
    for (let i =0; i<albumArray.length;i++){
        const container = document.createElement('div')
        container.classList.add('swiper-slide')
        container.dataset.color = albumArray[i].color
        const info = document.createElement('div')
        info.classList.add('inside')
        const album = document.createElement('img')
        album.classList.add('lol')
        album.setAttribute('src', albumArray[i].img)
        container.setAttribute('data-hash', albumArray[i].hash)
        const name = document.createElement('h1')
        const link = document.createElement('span')
        // const menuLink = document.createElement('li')
        // menuLink.innerHTML=albumArray[i].name
        // menu.appendChild(menuLink)
        link.innerHTML='LISTEN'
        name.innerHTML=albumArray[i].name
        info.appendChild(album)
        info.appendChild(name)
        info.appendChild(link)
        container.appendChild(info)
        wrapper.appendChild(container)
    
        
        
        
    }
    
}





const wrapperMobile = document.querySelector('.mobile')
const lol = wrapperMobile.childNodes
function createMobileBoard(){
    for (let i =0; i<albumArray.length;i++){
        const container = document.createElement('div')
        container.classList.add('swiper-slide')
        container.setAttribute('id',albumArray[i].hash);
        container.dataset.color = albumArray[i].color
        const info = document.createElement('div')
        info.classList.add('inside')
        const album = document.createElement('img')
        album.classList.add('lol')
        album.setAttribute('src', albumArray[i].img)
        container.setAttribute('data-hash', albumArray[i].hash)
        const name = document.createElement('h1')
        const link = document.createElement('span')
        // const menuLink = document.createElement('li')
        // menuLink.innerHTML=albumArray[i].name
        // menu.appendChild(menuLink)
        link.innerHTML='LISTEN'
        name.innerHTML=albumArray[i].name
        info.appendChild(album)
        info.appendChild(name)
        info.appendChild(link)
        container.appendChild(info)
        wrapperMobile.appendChild(container)
        
    }
}
let resizing = []
widthPlus = 'truefalsefalse'
widthMinus = 'falsetruetrue'
decreased = 'truetruetrue'
increased = 'falsefalsefalse'
document.addEventListener('scroll',debounce(checkSlide), { passive: true})
let isMobile

window.addEventListener('resize', () =>{
    if(window.innerWidth<751) {isMobile = true
        audio.pause()}
else {
    isMobile = false
    audio.play()}
console.log(isMobile)
    resizing.push(isMobile)
    resizing.splice(-widthPlus.length - 1, resizing.length - widthPlus.length);
    if (window.innerWidth>751 && (resizing.join('').includes(widthPlus))) {
        window.location.replace('#'+lastmobileHash)
        resizing =[]
        
      }
      if (window.innerWidth<751 && (resizing.join('').includes(widthMinus))) {
       window.location.replace('#'+lastActiveHash)
       resizing = []
        
      }
      if(window.innerWidth<751 && !(resizing.join('').includes(decreased))){
      window.location.replace('#'+lastActiveHash)
    }
    if(window.innerWidth>751 && !(resizing.join('').includes(decreased)) && !(resizing.join('').includes(increased))){
        window.location.replace('#'+lastmobileHash)
      }
    
    // {
       
   
    // 
   
    // }
   
    // else {
        
    //     
    // }
       
    
    
})

createMobileBoard()
createBoard()
let vid = document.getElementById("myVideo");

swiper.on('transitionStart', function (e) {
    albumArray.forEach((album, index) => {
        if(index==swiper.activeIndex){
        vid.src = album.video
        audio.src = album.audio
        audio.volume = 0.2
        console.log(album.audio)
        audio.play()
        lastActiveHash= albumArray[swiper.activeIndex].hash
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

          function debounce(func, wait = 20, immediate = true) {
            var timeout;
            return function() {
              var context = this, args = arguments;
              var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
              };
              var callNow = immediate && !timeout;
              clearTimeout(timeout);
              timeout = setTimeout(later, wait);
              if (callNow) func.apply(context, args);
            };
          };
        //   function isElementVisible(el) {
        //     var rect     = el.getBoundingClientRect(),
        //         vWidth   = window.innerWidth || document.documentElement.clientWidth,
        //         vHeight  = window.innerHeight || document.documentElement.clientHeight,
        //         efp      = function (x, y) { return document.elementFromPoint(x, y) };     
        
        //     // Return false if it's not in the viewport
        //     if (rect.right < 0 || rect.bottom < 0 
        //             || rect.left > vWidth || rect.top > vHeight)
        //         return false;
        
        //     // Return true if any of its four corners are visible
        //     return (
        //           el.contains(efp(rect.left,  rect.top))
        //       ||  el.contains(efp(rect.right, rect.top))
        //       ||  el.contains(efp(rect.right, rect.bottom))
        //       ||  el.contains(efp(rect.left,  rect.bottom))
        //     );
        // }
        let lastmobileHash
          function checkSlide() {
            if(window.innerWidth<=751){
            lol.forEach(sliderImage => {
               
             
              // half way through the image
              const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.clientHeight / 2;
              
              // bottom of the image
              const imageBottom = sliderImage.offsetTop + sliderImage.clientHeight;
              const isHalfShown = slideInAt > sliderImage.offsetTop;
        
           const isNotScrolledPast = window.scrollY < imageBottom;
     
              if (isHalfShown && isNotScrolledPast) {
              lastmobileHash = sliderImage.dataset.hash
         document.body.style.background = sliderImage.dataset.color
            
              } 
            });
        }
        else{
            document.body.style.background = 'black'
        }
          }

         

          