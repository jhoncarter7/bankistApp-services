'use strict';

const featurelink  = document.querySelectorAll('.feature-links')
const formcontainer = document.querySelector('.form-container')
const closebtn  = document.querySelector('.close-btn')
const blurbody  = document.querySelector('.blur-body')
const learnBtn = document.querySelector('.learn-btn');
const section1 = document.querySelector('#section-1');
const headOptions = document.querySelector('.head-options');
const head = document.querySelector('.head');
const subhead = document.querySelector('.sub-head')
const optionbtn = document.querySelector('.options-btn');
const tabs = document.querySelectorAll('.tabs');
const sameSwap = document.querySelectorAll('.same-swap');



featurelink.forEach(p => p.addEventListener('click', function(){
  formcontainer.classList.remove('hidden')
  blurbody.classList.remove('hidden')

}));

const closedModel = function(e){
  e.preventDefault()
  formcontainer.classList.add('hidden')
  blurbody.classList.add('hidden')
};

closebtn.addEventListener('click', closedModel);

document.addEventListener('keydown', function(e){

  if(e.key === "Escape"){
    formcontainer.classList.add('hidden')
    blurbody.classList.add('hidden')
  }
});







learnBtn.addEventListener('click', function (e) {
    e.preventDefault();
    section1.scrollIntoView({behavior: 'smooth'})
})

//  top botton section


headOptions.addEventListener('click', function (el) {

  if(el.target.classList.contains('head-links')){
    el.preventDefault();
    el.target.getAttribute('href').scrollIntoView({behavior: 'smooth'})
  }
})




// section 2

optionbtn.addEventListener('click', function (e) {
  const target = e.target.closest('.tabs')

  tabs.forEach(t => t.classList.remove('active-tab'))
 sameSwap.forEach(s =>
  s.classList.remove('displays-active')
 );
  target.classList.add('active-tab')
 document.querySelector(`.swap-${target.dataset.tab}`).classList.add('displays-active')


})


// navbar fadding
const navStyling = function (e) {

  if (e.target.classList.contains('feature-link')){
    const click = e.target
     const sibblings = click.closest('.head-options').querySelectorAll('.feature-link');
     const logo = click.closest('.head').querySelector('img');
   
       sibblings.forEach(el => { 
        if(el !== click) el.style.opacity = this; 
      
      })
        logo.style.opacity = this;
     
      }
}


// if we use bind then it create a function in which given value represented by 'this'
head.addEventListener('mouseover', navStyling.bind(0.3));
head.addEventListener('mouseout', navStyling.bind(1));




// making navbar fixed when scroll to certain sections

const header = document.querySelector('.header')
const headHeight = head.getBoundingClientRect().height;
const stickyNav = function(entries){

  const [entry] = entries
 if (!entry.isIntersecting)
  head.classList.add('sticky-nav');
  else   head.classList.remove('sticky-nav');  
}

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headHeight}px`
});
observer.observe(header)


// making all section move little when we scroll
const allsection = document.querySelectorAll('section')
const revealSection = function(entries, observer){
  const [entry] = entries;
  
  if(!entry.isIntersecting) return;
    entry.target.classList.remove('heading-visibility')
    observer.unobserve(entry.target)
  
}


const scrollsection = new IntersectionObserver( revealSection, {
  root: null,
   threshold: 0.1
})
 allsection.forEach(function(section) { 
  scrollsection.observe(section)
   section.classList.add('heading-visibility')
 })



//  lazy image loding

const targetImg = document.querySelectorAll("img[data-src]");
const loadImg = function(entries, observer){
 const [entry] = entries

 if(!entry.isIntersecting) return;

 entry.target.src = entry.target.dataset.src;
 entry.target.classList.remove('lazy-img')
 observer.unobserve(entry.target)

}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.13,
  //  rootMargin: '270px'
})

targetImg.forEach(function(img) {
 imgObserver.observe(img)
})



// sliding in section 3

const targetslide = document.querySelectorAll('.slide')
const buttonR  = document.querySelector('.butt-right')
const buttonL  = document.querySelector('.butt-left')

const dotcontainer = document.querySelector('.dots')

// 
const activeDot = function(slides){
 document.querySelectorAll('.dot').forEach( dot => dot.classList.remove('active-dot'))

document.querySelector(`.dot[data-slide= "${slides}"]`).classList.add('active-dot')
}





const creatDots = function(){
  targetslide.forEach(function(_, i) {
    dotcontainer.insertAdjacentHTML('beforeend',
     `<button class = "dot" data-slide = "${i}"> </button>`)
  })
}
creatDots();


let curslide = 0;
let maxSlide = targetslide.length;

targetslide.forEach((s, i) => 
(s.style.transform = `translateX(${100 * i}%`))

const getSlide = function(curslide){
  targetslide.forEach((s, i) => 
  (s.style.transform = `translateX(${100 * (i - curslide)}%`));
  
  
}
const nextSlide = function () {
  if(curslide === maxSlide - 1){
    curslide = 0;
  }
  else {
    curslide++;
  }
  getSlide(curslide)
  activeDot(curslide)
}
const prevSlide = function(){
  if(curslide === 0){
console.log(ok)
    curslide = maxSlide - 1
  }
  else{

    curslide--;
  }
  getSlide(curslide)
  activeDot(curslide)
}

buttonR.addEventListener('click', nextSlide)

buttonL.addEventListener('click', prevSlide)


document.addEventListener('keydown', function(e){
  if(  e.key === 'ArrowRight' )  nextSlide()
  e.key === 'ArrowLeft'  && prevSlide()
  

})

activeDot(0);
dotcontainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dot')){
    const slides = e.target.dataset.slide
  //   we coan also write like
  // const {slide} =  e.target.dataset
  getSlide(slides)
  activeDot(slides) 
  }
 
})




//  practice of random color generate by child btn are also change parent color by bubbling methode. 

// const randomcl = (min, max) => 
//     Math.floor(Math.random()* (max - min + 1) + min)

// // const randomcl = ( max) => 
// //     Math.floor(Math.random()* max)
 

// const colorvalue = () => 
//     `rgb(${randomcl(6, 255)}, ${randomcl(4, 255)}, ${randomcl(9, 255)})`


// const headLink = document.querySelector('.feature-link');
// const headOption = document.querySelector('.head-options')
// const head = document.querySelector('.head')

// headLink.addEventListener('click', function(e){
//     e.preventDefault()
//     console.log(e.target, e.currentTarget)
//      this.style.background = colorvalue()
// })
// headOption.addEventListener('click', function(e){
//     e.preventDefault()
//     console.log(e.target, e.currentTarget)
//      this.style.background = colorvalue()
// })
// head.addEventListener('click', function(e){
//     e.preventDefault()
//     console.log(e.target, e.currentTarget)
//      this.style.background = colorvalue()
// })


// const subheading = document.querySelector('.sub-head')
// const h4 = document.querySelector('h4')
// console.log(subheading.childNodes)
// console.log(subheading.children)
// console.log(subheading.querySelectorAll('h2'))
// console.log(h4.parentNode)
// console.log(h4.parentElement)
// console.log(h4.previousElementSibling)
// console.log(h4.nextElementSibling)