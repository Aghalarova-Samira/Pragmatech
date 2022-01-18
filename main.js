window.onscroll = function () { myFunction() };

function myFunction() {

    if(window.scrollY > 100){
        document.getElementById('navbar').style.transition="0.5s ease"
        document.getElementById('navbar').style.backgroundColor="#1c1d24"
    }else if(window.scrollY < 100){
        document.getElementById('navbar').style.backgroundColor="transparent"

    }
}


///create pop menu
const boxes = document.querySelectorAll('.filBox')
const images = document.querySelectorAll('.imgboxes')  
const closepopup =document.querySelector('.closepopup')
const popup = document.querySelector('.popup')
const main = document.querySelector('.main')
const mainImg = document.querySelector('.mainImg')
const rightPop = document.getElementById('right');
const leftPop = document.getElementById('left');
const listimage = document.querySelectorAll(".listimg")


for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',showPopup)
    images[i].addEventListener('click', showImg)
      
}

function showImg() {
   
}

function showPopup(){
    popup.classList.add("showpopup")
  
}

closepopup.addEventListener('click',closepopupfun)

function closepopupfun(){
    popup.classList.remove("showpopup")
}





let imgArray=['filterSekil1.jpeg', 'filterSekil2.jpeg', 'filterSekil3.jpeg', 
'filterSekil4.jpeg','filterSekil5.jpeg', 'filterSekil6.jpeg']

    
let curnum = 0

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(){


        curnum = images[i].id
        imgopacity()
        addimg() 
      
    })
    
}
///esas sekil deyissin
function addimg(){

    mainImg.src = imgArray[curnum]

}
////saga basanda sekil deyissin
rightPop.addEventListener('click', function(){
    if(curnum == 5){
        return
    }
    curnum++
    imgopacity()
    addimg()
})

//sola basanda sekil deyissin

leftPop.addEventListener('click', function(){
    if(curnum == 0){
        return
    }
    curnum--
    imgopacity()
    addimg()
})


/// sekil opcitisini deyissin
function imgopacity(){
    for (let i = 0; i < listimage.length; i++) {
       listimage[i].classList.remove('removeopacity')
       listimage[i].classList.remove('addopacity')
        if(listimage[i].id == imgArray[curnum]){
            listimage[i].classList.add('removeopacity')

        }else{
            listimage[i].classList.add('addopacity')

        }
  

    }

}



////////////////////////////////////////////////////////////////////////////////////////////////

//// balaca sekile basanda esas sekil deyissin
for (let i = 0; i < listimage.length; i++) {
    listimage[i].addEventListener('click', function(){
        curnum =  listimage[i].getAttribute("data-number")
        addimg()
        imgopacity()
    
    })
    
}

///////////////////////////////////////////////////////////////////////////////////

//// SABAH BAX .BALACA SEKILE clikc elyinede esas sekil deyisir .Gunuz olmamasinin -
// - sebibi setir 17 dide document.querySelectorAll('img')le yazmisidn  .Sen imageni  classla almaliyidin .Cunki balaca img nen qarisir




///create filter

const FilterList = document.querySelectorAll('.FilterList li');
const portfolio = document.querySelector('.portfolio');


for (let i = 0; i < FilterList.length; i++) {
   FilterList[i].addEventListener('click',function(){

       yoxla(FilterList[i].id)
   })
    
}
function yoxla(a){



    for (let e = 0; e < boxes.length; e++) {
        boxes[e].classList.remove('sil')
        boxes[e].classList.remove('qalsin')
   
        if(boxes[e].className.includes(a) ){
           
            boxes[e].classList.add('qalsin')
            
        }else{
            
            boxes[e].classList.add('sil')
        }

        // portfolio.style.height= '120vh'
        
        

        
    }

   
}



///create scrollbar

let posX = 0;
let scrollContent = document.querySelector('.contentScroll')

let noqteBir = document.getElementById('noqte1');
let noqteIki = document.getElementById('noqte2');


function left() {
   if (posX>=0) {
       posX=0   
   }else {
    posX+=(1200 / 2 );
    scrollContent.style.left =`${posX}px`
   }
    
}

function right() {
   if (posX<=-600) {
       posX=-600  
   }else {
    posX-=(1200 / 2 );
    scrollContent.style.left =`${posX}px`
   }
}

noqteIki.addEventListener('click', function(){
    noqteIki.style.background='#dc965a '
    noqteBir.style.backgroundColor= 'transparent';
})

noqteBir.addEventListener('click', function(){
    noqteBir.style.background='#dc965a '
    noqteIki.style.backgroundColor= 'transparent';
})


///create contact

let errorField1 = document.querySelector(' .small1')
let errorField2 = document.querySelector(' .small2')

function getFormData(e){
    e.preventDefault();
    let nameVlue=e.srcElement.querySelector('[name=name]').value;
    let emailValue=e.srcElement.querySelector('[name=email]').value;
    let subjectValue=e.srcElement.querySelector('[name=subject]').value;
    let commentValue=e.srcElement.querySelector('[name=comment]').value;

    if (nameVlue == ""){
        errorField1.innerHTML='Name is required'
    }

    if (emailValue == ""){
        errorField2.innerHTML='Email is required'
    }
}




///Articles Section

let articleBox = document.querySelectorAll('.articleBox');
let ArticlesPopup = document.querySelector('.ArticlesPopup');

for (let i = 0; i < articleBox.length; i++) {
    articleBox[i].addEventListener('click', showArticles)
        
}

function showArticles() {

    ArticlesPopup.classList.add("ShowArticlesPopup")
}


