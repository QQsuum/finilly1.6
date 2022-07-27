import '../scss/style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

document.addEventListener("DOMContentLoaded", function(event) {

const BurgerButtonOpen = document.querySelector('.header__burger')
const BurgerWrapper = document.querySelector('.burger-wrapper')
const BurgerButtonClose = document.querySelector('.burger-header__close')
const Overlay = document.querySelector('.overlay')

const Chat = document.querySelectorAll('.feedback-chat')
const Call = document.querySelectorAll('.feedback-call')
const ModalFeedback = document.querySelector('.modalfeedback')
const ModalCall = document.querySelector('.modalcall')
const CloseFeedback = document.querySelector('.modalfeedback-close ')
const CloseCall = document.querySelector('.modalcall-close')
const ModalOverlay = document.querySelector('.modal-overlay')

const ShowMore = document.querySelector('.show-more-brands');
const ShowMoreText = ShowMore.querySelector('.show-more-brands__text');
const ShowMoreImage = ShowMore.querySelector('.show-more-brands__image');
const BrandsContainer = document.querySelector('.brands__container')


//BURGER
let BurgerOpen = function(){
    BurgerWrapper.classList.toggle('burger-wrapper--active')
    Overlay.classList.toggle('overlay--active')
}

BurgerButtonOpen.addEventListener('click', BurgerOpen)

let BurgerClose = function(){
    BurgerWrapper.classList.toggle('burger-wrapper--active')
    Overlay.classList.toggle('overlay--active')
}

BurgerButtonClose.addEventListener('click', BurgerClose)
Overlay.addEventListener('click', BurgerClose)


//CHAT MODAL
let openModalFeedback = function(){
   
    ModalFeedback.classList.add('modalfeedback--active');
    ModalOverlay.classList.add('modal-overlay--active')
    let t,s;
    s=document.body.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s>0)window.scroll(0,s-=10);else clearInterval(t)},10);

}
for (let i of Chat) {
    i.addEventListener('click', openModalFeedback)
    }


let closeModalFeedback = function(){
    ModalFeedback.classList.remove('modalfeedback--active')
    ModalOverlay.classList.remove('modal-overlay--active')
}

CloseFeedback.addEventListener('click', closeModalFeedback)
ModalOverlay.addEventListener('click', closeModalFeedback)



//CALL MODAL
let openModalCall = function(){
    ModalCall.classList.add('modalcall--active')
    ModalOverlay.classList.add('modal-overlay--active')
    let t,s;
    s=document.body.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s>0)window.scroll(0,s-=10);else clearInterval(t)},10);
}

for (let i of Call) {
    i.addEventListener('click', openModalCall)
}

let closeModalCall = function(){
    ModalCall.classList.remove('modalcall--active')
    ModalOverlay.classList.remove('modal-overlay--active')
}

 CloseCall.addEventListener('click', closeModalCall)
 ModalOverlay.addEventListener('click', closeModalCall)


//INFO  TEXT SHOW MORE
const AboutText = document.querySelector('.about__text')
const AboutButtonText = document.querySelector('.about__button-text')
const AboutMoreImage = document.querySelector('.about__more-image')
const AboutMore = document.querySelector('.about__more')

const AboutMoreText = function() {
if (AboutButtonText.textContent == 'Читать далее') {
    AboutText.classList.add('about__more--active')
    const AboutMoreActive = document.querySelector('.about__more--active')
    AboutMoreActive.style.height = AboutMoreActive.scrollHeight + 'px';
    AboutMoreImage.classList.add('about__more-image--rotate')
    AboutButtonText.textContent= 'Скрыть' 

} else {
    AboutButtonText.innerText = 'Читать далее';
    AboutText.classList.remove('about__more--active')
    AboutText.style.height = null;
    AboutMoreImage.classList.remove('about__more-image--rotate')
};	
}
AboutMore.addEventListener ('click', AboutMoreText)


//BRANDS SHOW MORE
const ShowMoreButton = function() {
	if (ShowMoreText.textContent == 'Показать все') {
        BrandsContainer.classList.add('new-height')

        const NewHeight = document.querySelector('.new-height')
        NewHeight.style.height = NewHeight.scrollHeight + 'px';
        ShowMoreImage.classList.add('show-more-brands__image--rotate')
        ShowMoreText.textContent= 'Скрыть' 

	} else {
		ShowMoreText.innerText = 'Показать все';
        BrandsContainer.classList.remove('new-height')
        BrandsContainer.style.height = null;
      

        ShowMoreImage.classList.remove('show-more-brands__image--rotate')
	};	
}

ShowMore.addEventListener ('click', ShowMoreButton)



//REPAIR SHOW MORE


const ShowMoreRepair = document.querySelector('.show-more-repair');
const ShowMoreTextRepair = document.querySelector('.show-more-repair__text')
const ShowMoreImageRepair = document.querySelector('.show-more-repair__image');
const RepairList = document.querySelector('.repair__list')

const ShowMoreButtonRepair = function() {
	if (ShowMoreTextRepair.textContent == 'Показать все') {
        RepairList.classList.add('new-height-repair')

        const NewHeightRepair = document.querySelector('.new-height-repair')
        NewHeightRepair.style.height = NewHeightRepair.scrollHeight + 'px';
        ShowMoreImageRepair.classList.add('show-more-repair__image--rotate')
        ShowMoreTextRepair.textContent= 'Скрыть' 

	} else {
		ShowMoreTextRepair.textContent = 'Показать все';
        RepairList.classList.remove('new-height-repair')
        RepairList.style.height = null;
        ShowMoreImageRepair.classList.remove('show-more-repair__image--rotate')
	};	
}

ShowMoreRepair.addEventListener ('click', ShowMoreButtonRepair)






//BRANDS SWIPER
const MediaQuery = window.matchMedia('(min-width: 767px)')
const BrandsList = document.querySelector('.brands__list')
const BrandsItem = document.querySelectorAll('.brands__item')


if (!MediaQuery.matches)  {
		BrandsContainer.classList.add('swiper-brands')
		BrandsList.classList.add('swiper-wrapper')

		for (let i of BrandsItem) {
			i.classList.add('swiper-slide');
			}
}

const swiper1 = new Swiper('.swiper-brands', {
    loop: true,
    slidesPerView: 'auto',
    slidesPerColumn: 'auto', // and this
    
    pagination: {
    el: '.swiper-pagination',
    },

    if(MediaQuery)  {
        swiper1.destroy();
    }
})

//REPAIR SWIPER
const RepairItem = document.querySelectorAll('.repair__item')
const RepairContainer =  document.querySelector('.repair__container')

if(!MediaQuery.matches)  {
    RepairContainer.classList.add('swiper-repair')
    RepairList.classList.add('swiper-wrapper')
    
    for (let i of RepairItem) {
        i.classList.add('swiper-slide')
    }
}

const swiper2 = new Swiper('.swiper-repair', {
    loop: true,
    
    slidesPerView: 'auto',
    slidesPerColumn: 'auto', // and this
    
    pagination: {
        el: '.swiper-pagination',
    },

    if(MediaQuery)  {
            swiper2.destroy();
        }
    })
      
//PRICE SWIPER
const swiper3 = new Swiper('.swiper-price', {
loop: true,
slidesPerView: 'auto',
slidesPerColumn: 'auto', // and this
pagination: {
    el: '.swiper-pagination',
},

if(MediaQuery)  {
        swiper3.destroy();
    }
})
})
