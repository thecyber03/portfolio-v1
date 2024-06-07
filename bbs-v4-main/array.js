let ProjectBTN = document.querySelector(".page7 .ProjAndLess #proBTN")
let LessonBTN = document.querySelector(".page7 .ProjAndLess #lessBTN")
 

//infoScreen Lesson List 2)
let array = [
    { Lnum : "Lesson 01" , Lname : "Web designing on Mobile" , Ldes : "Latest premium version Acode.apk" , Lsrc : ""},
    { Lnum : "Lesson 02" , Lname : "Multiple Page Switch" , Ldes : "Using JavaScript Doms and addEventListener" , Lsrc : ""},
    { Lnum : "Lesson 03" , Lname : "Page hide and show" , Ldes : "Using Dom And Event" , Lsrc : ""},
    
   ]
//projectScreen PROJECT LIST 1)
 let arr = [
      { img : "src/prj2.jpg",  Pnum : "Project 01", Pname : "Whatsapp clone", Preview : ""},
      { img : "src/prj3.jpg",  Pnum : "Project 02", Pname : "Login Page", Preview :"" },
      { img : "src/prj4.jpg",  Pnum : "Project 03", Pname : "Credit Card", Preview:"" },
      { img : "src/prj5.jpg",  Pnum : "Project 04", Pname : "Portfolio", Preview : ""},
      { img : "src/prj6.jpg",  Pnum : "Project 06", Pname : "E-commerce Store", Preview:""},
      { img : "src/prj7.jpg",  Pnum : "Project 07", Pname : "Programming Web", Preview :"" },
      { img : "src/prj8.jpg",  Pnum : "Project 08", Pname : "Sports Web", Preview : ""},
      { img : "src/prj9.jpg",  Pnum : "Project 09", Pname : "Password Generator", Preview:""},
      { img : "src/prj10.png",  Pnum : "Project 10", Pname : "Designer Theme", Preview:""},
      { img : "src/prj11.png",  Pnum : "Project 11", Pname : "Portfolio V-1", Preview:""},
      { img : "src/prj12.jpg",  Pnum : "Project 12", Pname : "Gym AAA", Preview:""},
      { img : "src/prj1.jpg",  Pnum : "Project 13", Pname : "Nike Shoes Store", Preview : ""},
      { img : "src/prj10.jpg",  Pnum : "Project 14", Pname : "Smooth -scroller", Preview:""},
//       { img : "src/project15.webp",  Pnum : "Project 15", Pname : "Restaurant Menu List with Search", Preview : "https://mukhtaransarii.github.io/restaurant.menulist/", SourceCode : "https://drive.google.com/file/d/1iB6mrd2JAsaX-o-8_VACHOIwtcyyMxqi/view?usp=drivesdk"},
//       { img : "src/project16.webp",  Pnum : "Project 16", Pname : "BBS.COM", Preview : "https://mukhtaransarii.github.io/bbs.com/", SourceCode : "https://t.me/webdesign_bbs/3" , paid : "src/paid.png"},
//       { img : "src/project17.webp",  Pnum : "Project 17", Pname : "Fee Management", Preview : "https://mukhtaransarii.github.io/fee.managment/", SourceCode : "https://drive.google.com/file/d/1kTd8v8Wgvzu10d1j8fuS8stQ3A221lCW/view?usp=drivesdk"},
//       { img : "src/project18.webp",  Pnum : "Project 18", Pname : "Tic Tac Toe", Preview : "https://mukhtaransarii.github.io/tictactoe/", SourceCode : "https://drive.google.com/file/d/1lbs35h3VgUjSkWOgZ3g1zArBLI0fJOMA/view?usp=drivesdk"},
//       { img : "src/project19.webp",  Pnum : "Project 19", Pname : "Fan Speed", Preview : "https://mukhtaransarii.github.io/fan.speed/", SourceCode : "https://drive.google.com/file/d/1loSuJEV72xl9AsvV_Br3BKxPDnkDIm9g/view?usp=drivesdk"},
//       { img : "src/project20.webp",  Pnum : "Project 20", Pname : "LoginPage-V3", Preview : "https://mukhtaransarii.github.io/LoginPage-V3/", SourceCode : "https://drive.google.com/file/d/1ly7oSI8-aoWkpjzldU5bZjw3ItHcUw09/view?usp=drivesdk"},
//       { img : "src/project21.webp",  Pnum : "Project 21", Pname : "Analog Clock", Preview : "https://mukhtaransarii.github.io/analog.clock/", SourceCode : "https://drive.google.com/file/d/1mpxUlBWMoAdH2HRFsCp9uRkWjmBcTDVt/view?usp=drivesdk"},
//       { img : "src/project22.webp",  Pnum : "Project 22", Pname : "LoginPage-V4", Preview : "https://mukhtaransarii.github.io/LoginPage-V4/", SourceCode : "https://drive.google.com/file/d/1oaNiWSz1pEk3TJtKFI_11x3rwQcgJYWt/view?usp=drivesdk"},
//       { img : "src/project23.webp",  Pnum : "Project 23", Pname : "BBS.COM V2", Preview : "https://mukhtaransarii.github.io/bbs/", SourceCode : "https://t.me/webdesign_bbs/3", paid : "src/paid.png"},
//       { img : "src/project24.webp",  Pnum : "Project 24", Pname : "BUBBLE GAME", Preview : "https://mukhtaransarii.github.io/bubble.game/", SourceCode : "https://drive.google.com/file/d/1sR_GJa2Pm8U36mtBU8Qy__u_4sha624X/view?usp=drivesdk"},
//       { img : "src/project25.webp",  Pnum : "Project 25", Pname : "BBS.COM V3", Preview : "https://mukhtaransarii.github.io/bbs-v3/", SourceCode : "https://t.me/webdesign_bbs/3" , paid : "src/paid.png"},
 ]
 arr.reverse();
 
 // Lesson List infoScreen FUNCTION 2)
var plutter = ""
  array.forEach(function(elem,idx){
	   plutter += `<li>
	            <div id="des">
              <h2 id="Pnum">${elem.Lnum}</h2>
              <h2 id="Pname">${elem.Lname}</h2>
              <span>${elem.Ldes}</h2>
              <a href="${elem.Lsrc}"><i class="ri-folder-6-fill"></i> Resources</a> 
             </div>
            </li>`
})
 
// Project List projectScreen FUNCTION 1)
var clutter = ""
arr.forEach(function(elem,idx){
	   clutter += `<li>
	            <img src="${elem.paid}" alt="" id="paid">
	            <img src="${elem.img}" id="Pimg">
              <div id="des">
              <h2 id="Pnum">${elem.Pnum}</h2>
              <h2 id="Pname">${elem.Pname}</h2>
           
              <a  target="_blank" href="${elem.Preview}"><i class="ri-window-fill"></i> Preview website</a> 
              <span>and</span>
              <a  target="_blank" href="${elem.SourceCode}"><i class="ri-folder-6-fill"></i> Source Code</a> 
              </div>
            </li>`
})

document.querySelector(".page7 ul").innerHTML = clutter

ProjectBTN.addEventListener("click", function(){
  document.querySelector(".page7 ul").innerHTML = clutter
  ProjectBTN.style.backgroundColor = "#FFBF2D"
  LessonBTN.style.backgroundColor = "#F4F4F6"
})

LessonBTN.addEventListener("click", function(){
  document.querySelector(".page7 ul").innerHTML = plutter
  LessonBTN.style.backgroundColor = "#FFBF2D"
  ProjectBTN.style.backgroundColor = "#F4F4F6"
})



