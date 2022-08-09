'use Strict'


const learnBtn = document.querySelector('.learn-btn');

const section1 = document.querySelector('#section-1')


learnBtn.addEventListener('click', function (e) {
    e.preventDefault();
    section1.scrollIntoView({behavior: 'smooth'})
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
