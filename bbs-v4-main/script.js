// LOADING PAGE 
setTimeout( function() {
  document.querySelector("body").classList.add("bodyScroll")
},1200);

//FOR PROGRESS BAR WHEN SCROLL
  document.addEventListener('scroll', (e) => {
   const {scrollTop, scrollHeight} = document.documentElement;
   const scrollPercentage = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
   
   document.querySelector('.prog').style.setProperty('--progress' , scrollPercentage);
  })

//HAMBURG MENU BAR ICON FUNCTION AND SLIDER BARR
function from() {
  gsap.from("slider #slider1 li", {
    y: 90,
    duration: 0.5,
    stagger: 0.1,
  })
  
  gsap.from("slider .madeBy1 ,slider .madeBy", {
    x: -1000,
    duration: 0.5,
    stagger: 0.1,
  })
}
function to() {
  gsap.to("slider #slider1 li", {
    y: 0,
    duration: 0,
  })
  
  gsap.to("slider .madeBy1 ,slider .madeBy", {
    x: 0,
    duration: 0,
  })
}
//GET RANDOM COLOR FOR SLIDER BACKGROUND
let colorArray = [ "#A18BF9", "#FA4A34", "#D0F467", "#FEA8BD", "#7F32F7", "#FF5F38" ]
let min = 0;
let max = colorArray.length;
let random;

let HAMBURGICON = document.querySelector('#nav-3');
let clickTime = 0;
HAMBURGICON.addEventListener('click', (e) => {
  document.querySelector('#nav-3 .line1').classList.toggle("x")
  document.querySelector('#nav-3 .line2').classList.toggle("y")
  document.querySelector('slider').classList.toggle("sliderHidden")
  random = colorArray[(Math.floor(Math.random() * (colorArray.length)))];
  document.querySelector('slider').style.backgroundColor = random;
 
   if( clickTime == 0){
     from();
     clickTime = 1;
   }else{
     to();
     clickTime = 0;
   }

}); 

let SLIDER_LIST = document.querySelector('slider #slider1');
SLIDER_LIST.addEventListener('click', (e) => {
  document.querySelector('#nav-3 .line1').classList.remove("x")
  document.querySelector('#nav-3 .line2').classList.remove("y")
  document.querySelector('slider').classList.remove("sliderHidden")
  clickTime = ""
}); //HAMBURGICON MENU BAR FUNCTION END !!


//PAGE 7 PROJECT PAGE SHOW FUNCTION

let MOREPROJECT = document.querySelector('#page3 .bottomTag');
MOREPROJECT.addEventListener('click', (e) => {
  document.querySelector(".page7").classList.add("page7Show")
  document.querySelector("body").classList.remove("bodyScroll")
  gsap.from("ul li #Pimg ,ul li #paid", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.05,
  })
  gsap.from("ul li #des", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.05,
  })
  gsap.from(".page7 .Pnav-1, .page7 .Pnav-2, .page7 .ProjAndLess", {
    y: -90,
    opacity: 0,
    duration: 1,
    stagger: 0.05,
  })
  
});
//PAGE 7 PROJECT PAGE HIDE FUNCTION
let PROJECT_BACKBUTTON = document.querySelector('.page7 .Pnav-2');
PROJECT_BACKBUTTON.addEventListener('click', (e) => {
  document.querySelector(".page7").classList.remove("page7Show")
  document.querySelector("body").classList.add("bodyScroll")
});
//SLIDER PROJECT BUTTON CLICK TO SHOW SLIDER 
let SLIDERPROJECT = document.querySelector('slider #SlidePr');
SLIDERPROJECT.addEventListener('click', (e) => {
  setTimeout(function() {
   document.querySelector(".page7").classList.add("page7Show")
   document.querySelector("body").classList.remove("bodyScroll")
   gsap.from("ul li #Pimg ,ul li #paid", {
    y: 90,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.05,
  })
  gsap.from("ul li #des", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.05,
  })
  gsap.from(".page7 .projectNav, .page7 .ProjAndLess", {
    y: -90,
    opacity: 0,
    duration: 1,
    stagger: 0.05,
  })
  }, 500);
});

//PAGE 7 CODE OF SEARCH PROJECT 
document.getElementById('srcInput').addEventListener('keyup', function() {
  const filter = this.value.toUpperCase();
  const names = document.querySelector(".page7 ul").getElementsByTagName('li');

  for (let i = 0; i < names.length; i++) {
    const name = names[i].textContent.toUpperCase();
    if (name.indexOf(filter) > -1) {
      names[i].style.display = '';
    } else {
      names[i].style.display = 'none';
    }
  }
});

// FUNCTION OF DARK MODE 
let theme = document.querySelector("#theme")
  let Click = 0;
theme.addEventListener("click",function(){
  if(Click == 0){
    document.querySelector("body").classList.add("darkMode")
    theme.innerHTML = `<p>06</p> <h1><a>DARK MODE</a></h1>`
    Click = 1;
  }else{
    document.querySelector("body").classList.remove("darkMode")
    theme.innerHTML = `<p>06</p> <h1><a>LIGHT MODE</a></h1>`
    Click = 0;
  }
});


 //Get data from user of Message Page 
 let MSGBTN = document.querySelector("#SendMail") 
 MSGBTN.addEventListener("click",function(){
  
   let msgName = document.querySelector("formm #name").value
   let msgEmail = document.querySelector("formm #email").value
   let msgTextArea = document.querySelector("formm #txtArea").value
  
   if( msgName.length == 0 || msgEmail.length == 0 ||  msgTextArea.length == 0){
    swal("ERROR", "Please fill Every Details", "error");
    navigator.vibrate(200)
   }else{
   
    Email.send({
    SecureToken : "5ae85ede-0721-49f6-9dd2-ac4f42182fc7",
    To : 'azizansari8716@gmail.com',
    From : "azizansari8716@gmail.com",
    Subject : "MESSAGE FROM/BBS V4 - Animated Website",
    Body : "Name : " + msgName
          + "<br> Email : " + msgEmail
          + "<br> Message : " + msgTextArea,
}).then(
  message => swal("Message Sent Successfully", "Developer : Mr. Aziz Ansari", "success")
      )
    }
 });
 
 

 //COOKIES FUNCTION
 function cookiesShow() {
   setTimeout( function () {
     document.querySelector('.cookies').style.display = "block"
   }, 8000)
 }
 cookiesShow();
 
 function Insta(){
   location.href = "https://instagram.com/the_cyber_03"
 }
  function cookiesHide(){
   document.querySelector('.cookies').style.display = "none"
   setTimeout( function () {
     document.querySelector('.cookies').style.display = "block"
   }, 120000)
 }