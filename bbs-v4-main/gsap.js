
// FOR NAVIGATION BAR WHEN SCROLL
gsap.to("nav",{
  backgroundColor: "var(--Twhite)",
   y:10,
   scrollTrigger:{
    trigger: "#page2",
    scroller: "body",
    end: "top 80%",
    scrub: true,
   }
})
gsap.to("nav #nav-1 p",{
  duration: 1,
  stagger: 0.4,
  delay: 5,
  yoyo: true,
})


const tl = gsap.timeline()

  tl.to(".loadingPage", {
    display: "none",
  })
 
//NAV INNER CONTENT SHOW AUTOMATIC
tl.from("nav #nav-1 , nav #nav-3",{
  y: -60,
  duration: 1,
  opacity: 0,
  stagger: 0.4,
})
//PAGE 1 HEADING   -   GET READY PORT BBS  SHOW
tl.from(".get p, .ready p", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
})
//PAGE 1 HEADING   -   GET READY PORT BBS  HIDE
tl.to(".get p, .ready p",{
  opacity: 0,
  duration: 0.5,
})

//CARD ANIMATION AUTOMATIC
tl.from("#page1 .box",{
  height: 0,
  duration: 1,
  padding: 0,
})
//CARD INNER CONTENT ANIMATION AUTOMATIC 
const Page1BoxH6 = new SplitType('#page1 .box h6')
tl.from("#page1 .box h6 .char",{
  yPercent: 130,
  duration: 0.2,
  stagger: 0.02,
})

tl.from("#page1 .bottomTag , #page1 .bottomTag p, #page1 .bottomTag i", {
  y : 50,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
})


//PAGE 2 HEADING
const HEADING = new SplitType(".pageHeading")
gsap.from("#page2 .pageNumHead , #page2 .pageHeading .char", {
  yPercent: 130,
  duration: 1,
  stagger: 0.05,
  ease: "back.out",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    end: "top 65%",
    start: "top 70%",
    scrub: 1,
  }
})
//PAGE 2 PARAGRAPH READING ANIMATION 
 const text = new SplitType('#para')
       gsap.from("#para .line .word .char", {
         opacity: 0.2,
         duration: 3,
         stagger: 1,
         scrollTrigger: {
           trigger: "#page2 .char",
           scroller : "body",
           scrub: 1,
           start: "top 60%",
           end: "top -20%",
         }
       })
//PAGE 2 BOTTOM TAG
 gsap.from("#page2 .bottomTag", {
  y: -100,
  opacity: 0,
  padding: 0,
    scrollTrigger: {
    trigger: "#page2 .bottomTag",
    scroller: "body",
    end: "top 70%",
    start: "top 80%",
    scrub: 2,
  }
})
//PAGE 2 MORE PROJECT BUTTON INNER CONTENT 
gsap.from("#page2 .bottomTag p, #page2 .bottomTag i", {
  y: 30,
  opacity: 0,
    scrollTrigger: {
    trigger: "#page2 .bottomTag",
    scroller: "body",
    end: "top 60%",
    start: "top 70%",
    scrub: 2,
  }
})

//PAGE 3 HEADING ANIMATION
gsap.from("#page3 .pageNumHead , #page3 .pageHeading .char", {
  yPercent: 130,
  duration: 1,
  stagger: 0.05,
  ease: "back.out",
  scrollTrigger: {
    trigger: "#page3 .pageNumHead",
    scroller: "body",
    end: "top 60%",
    start: "top 80%",
    scrub: 2,
  }
})
//PAGE 3 LI IMG ANIMATION 
gsap.from("#page3 li img", {
  height: "20%",
  objectFit: "cover",
  objectPosition: "center",
  stagger: 0.6,
  scrollTrigger: {
    trigger: "#page3 .pageNumHead",
    scroller: "body",
    end: "top 0%",
    start: "top 50%",
    scrub: 2,
  }
})

//PAGE 3 MORE PROJECT BUTTON 
gsap.from("#page3 .bottomTag", {
  y: -100,
  opacity: 0,
  padding: 0,
    scrollTrigger: {
    trigger: "#page3 .bottomTag",
    scroller: "body",
    end: "top 70%",
    start: "top 80%",
    scrub: 2,
  }
})
//PAGE 3 MORE PROJECT BUTTON INNER CONTENT 
gsap.from("#page3 .bottomTag p, #page3 .bottomTag i", {
  y: 30,
  opacity: 0,
    scrollTrigger: {
    trigger: "#page3 .bottomTag",
    scroller: "body",
    end: "top 60%",
    start: "top 70%",
    scrub: 2,
  }
})

//PAGE 4 HEADING ANIMATION
gsap.from("#page4 .pageNumHead , #page4 .pageHeading .char", {
  yPercent: 130,
  duration: 1,
  stagger: 0.05,
  ease: "back.out",
  scrollTrigger: {
    trigger: "#page4 .pageNumHead",
    scroller: "body",
    end: "top 60%",
    start: "top 80%",
    scrub: 2,
  }
})
//PAGE 4 IMG ANIMATION 
gsap.from("#page4 .skillDiv img", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page4 .skillDiv img",
    scroller: "body",
    end: "top 60%",
    start: "top 80%",
    scrub: 5,
  }
})

//PAGE 5 HEADING ANIMATION
gsap.from("#page5 .pageNumHead , #page5 .pageHeading .char", {
  yPercent: 130,
  duration: 1,
  stagger: 0.05,
  ease: "back.out",
  scrollTrigger: {
    trigger: "#page5 .pageNumHead",
    scroller: "body",
    end: "top 60%",
    start: "top 80%",
    scrub: 2,
  }
})

//PAGE 6 CARDS ANIMATION 
// gsap.from("#page6 .box",{
//   height: 0,
//   duration: 1,
//   padding: 0,
//   scrollTrigger: {
//     trigger: "#page6 .box",
//     scroller : "body",
//     scrub: 1,
//     start: "top 70%",
//     end: "top 35%",
//   }
// })
// //PAGE 6 CARD INNER CONTENT ANIMATION 
// gsap.from("#page6 .box h6 , #page6 .bottomTag , #page6 .bottomTag p, #page6 .bottomTag i", {
//   y : 50,
//   opacity: 0,
//   duration: 0.6,
//   stagger: 0.3,
//   scrollTrigger: {
//     trigger: "#page6 .box",
//     scroller : "body",
//     scrub: 1,
//     start: "top 50%",
//     end: "top 10%",
//   }
// })


gsap.registerPlugin(ScrollSmoother);
ScrollSmoother.create({
  trigger: "#smooth-wrapper",
  scroller: "#smooth-content",
  smooth: 1,
  effects: true,
});