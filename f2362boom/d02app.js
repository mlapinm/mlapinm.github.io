
let fishkas = []


$(()=>{
  let log1 = $('.log1')
  let log2 = $('.log2')
  let log3 = $('.log3')
  let grid = $('.grid')
  let max = 64
  let maxRow = 8
  let row = 0
  let maxFishkas = 24

 let figs = {
   name : "peshka",
   svg : '<svg viewBox = "0 0 64 64" ><path class="path4 peshka black" d="m 32.310547,21.8125 c -2.488765,0 -4.505859,2.104549 -4.505859,4.699219 0,1.517659 0.686866,2.836531 1.753906,3.691406 H 29.53125 L 20.090918,46.742188 H 18.216797 V 55.5625 H 45.638672 V 46.742188 H 44.220703 L 35.138672,30.25 h -0.101563 c 1.075556,-0.862489 1.78125,-2.216934 1.78125,-3.738281 0,-2.59467 -2.019047,-4.699219 -4.507812,-4.699219 z" stroke="#000"></path></svg>'
 }

//https://fooobar.com/questions/37963/jquerys-append-not-working-with-svg-element
// Более простой способ - просто сгенерировать SVG в строку, создать HTML-элемент оболочки и вставить строку svg в элемент HTML с помощью $( "# wrapperElement" ). html (svgString). Это прекрасно работает в Chrome и Firefox.





$('.square4').html(figs.svg)
$('.path4').attr('stroke', '#bbb')
//https://developer.mozilla.org/ru/docs/Web/API/Element/classList
$('.square4').click((e) => {
  e.target.classList.add('checked')
  console.log(e.target.classList)
  
})
/////////////////////////
//https://www.motiontricks.com/creating-dynamic-svg-elements-with-javascript/
const svg = document.querySelector("#svg0");

// variable for the namespace 
const svgns = "http://www.w3.org/2000/svg";

// make a simple rectangle
let newRect = document.createElementNS(svgns, "rect");

newRect.setAttribute("x", "150");
newRect.setAttribute("y", "150");
newRect.setAttribute("width", "100");
newRect.setAttribute("height", "100");
newRect.setAttribute("fill", "#5cceee");

// append the new rectangle to the svg
svg.appendChild(newRect);


  $('.cell0').text()



   



   


  log1.text()
  log2.text()
  log3.text()
  

})