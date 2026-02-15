import Swiper from 'swiper';
import 'swiper/css/bundle';

const featuresLeftArrow = document.getElementById('featuresLeftArrow');
const featuresRightArrow = document.getElementById('featuresRightArrow');

let featuresSwiper;

featuresSwiper = new Swiper('.features-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 20,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      centeredSlides: false,
      allowTouchMove: false,
      grabCursor: false,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.features-swiper-container')
        .classList.add('show');
      updateFeaturesArrows(swiper);
    },
    slideChange(swiper) {
      updateFeaturesArrows(swiper);
    },
  },
});

updateFeaturesArrows(featuresSwiper);

function updateFeaturesArrows(swiper) {
  featuresLeftArrow.disabled = swiper.isBeginning;
  featuresRightArrow.disabled = swiper.isEnd;
}

featuresLeftArrow.addEventListener('click', () => {
  featuresSwiper.slidePrev();
});

featuresRightArrow.addEventListener('click', () => {
  featuresSwiper.slideNext();
});
