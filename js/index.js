/// <reference types="../@types/jquery" />
let width=$('.nav').outerWidth()
$('.nav').animate({marginLeft:`-${width}px`},500)

$('.open').on('click',function(){
    let offset= $('.nav').offset().left
    if(offset!='0px')
    {
        $('.nav').animate({marginLeft:`${0}px`},500)
    }
    
    $('.xmark').on('click',function(){
        $('.nav').animate({marginLeft:`-${width}px`},500)

    })
})

var accordionheaders=document.querySelectorAll('.accordion-header')
var accordioncontants=document.querySelectorAll('.accordion-contant')
accordionheaders.forEach(header =>{
   header.addEventListener('click',function(){
    var accordionitem=header.parentElement;
    var accordioncontant=accordionitem.querySelector('.accordion-contant')
    accordioncontants.forEach((contan)=>{
        if(contan!==accordioncontant){
            $(contan).slideUp()

        }
    })
    $(accordioncontant).slideToggle()
   })
}) 

$(window).on('scroll',function(){
    let offset=$('#duration').offset().top
    let scroll=$(window).scrollTop()
    console.log(offset)
 
    if(scroll>=271)
    {
        $('#open').css('display','none')
    }
    else
    {
        $('#open').css('display','inline')
    }
    
})
$('a[href^="#"]').on('click',function(e){
    let x=e.target
    let id=$(x).attr('href')
  let offset=$(id).offset().top

$('body,html').animate({scrollTop:`${offset}px`},1000)

})
////////////////////////////// countttt
let eventdate=new Date("Dec 25, 2024 23:59:59").getTime()
let counter=setInterval(()=>{
let datanaw= new Date().getTime()
let date=eventdate-datanaw;
let days=Math.floor( date/(1000*60*60*24));
let hours= Math.floor((date % (1000*60*60*24))/(1000*60*60))
let mintus=Math.floor(date % (1000*60*60)/(1000*60))
let sec=Math.floor(date % (1000*60)/(1000))
document.querySelector('.day').innerHTML=days+'D'
document.querySelector('.hours').innerHTML=hours+'h'
document.querySelector('.mins').innerHTML=mintus+'m'
document.querySelector('.sac').innerHTML=sec+'s'
if(date<0)
{
    clearInterval(counter)
}

},1000)
////////////////////////tttext area

$('.area').on('keyup',function(e){
    console.log(e)
    let max= $('.area').attr('maxlength')   
    if(e.code!='Backspace')
    {
            max--;
    $('.area').attr('maxlength',`${max}`)
        
    }
    else if(max==100){
        max=100;
        $('.area').attr('maxlength',`${max}`)

        
    }
   else{

     max++;
     $('.area').attr('maxlength',`${max}`)
   }
    
   var contaner=`  <h5 class="mt-2 spa">${max}<span class="text-black"> Characyer Reamining</span></h5>
`
   document.querySelector('.spa').innerHTML=contaner
   console.log(max)
})

