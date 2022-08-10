'use strict';


const learnBtn = document.querySelector('.learn-btn');
const section1 = document.querySelector('#section-1');
const headOptions = document.querySelector('.head-options');
const optionbtn = document.querySelector('.options-btn');
const tabs = document.querySelectorAll('.tabs');
const sameSwap = document.querySelectorAll('.same-swap');


learnBtn.addEventListener('click', function (e) {
    e.preventDefault();
    section1.scrollIntoView({behavior: 'smooth'})
})

//  top botton section


headOptions.addEventListener('click', function (el) {

   console.log( el.target)
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


// navbar
const navStyling = function (e) {
  
  if (e.target.classList.contains('head-links')){
    const click = e.target
     const sibblings = click.closest('.head').querySelectorAll('.head-links');
     const logo = click.closest('.head').querySelector('img')
     
       sibblings.forEach(el => { 
        if(el !== click) el.style.opacity = this; })
        logo.style.opacity = this;
        console.log(logo)
      }
}

// if we use bind then it creat a function in which given value represented by 'this'
headOptions.addEventListener('mouseover', navStyling.bind(0.1));

headOptions.addEventListener('mouseout', navStyling.bind(1));

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