let names =['Blue Banisters', 'Violet Bent Backwards Over the Grass', 'Chemtrails over the Country Club', 'Norman Fucking Rockwell', 'Lust for Life',  'Ultraviolence', 'Honeymoon',  'Born to die']


var swiper = new Swiper('.swiper-container', {
  
  direction: 'vertical',
  speed:800,
  mousewheelControl: true,
  mousewheel: true,
  slidesPerView: 1,
  allowTouchMove: false,
  hashNavigation: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return '\
        <div class="box ' + className + '">\
        <div class="text">' + (names[index]) + '</div>\
        </div>';
    },
  },
  
  // freeMode: true,
  // freeModeSticky: true
});
