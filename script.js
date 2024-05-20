// 
dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

function dragElement(terrariumElement){
let despX =0, despY=0, initPositionX=0 , initPositionY=0;
function ElementDrag(){

  despX = e.clientX- initPositionX;
  despY = e.clientY- initPositionY;
//asiganado nueva posicon inicial
despX= e.clientX;
despY= e.clienty;

terrariumElement.style.left ='${terrarium.Element.offsetLeft + despX}px';
terrariumElement.style.left ='${terrarium.Element.offsetLeft + despY}px';
}

function StopElementDrag(){
document.onpointerup= null;
document.onpointermove= null;

}

function pointerDrag(event){

event.preventDefault();
initPositionX= event.clientX;
initPositionY= event.clientY;


document.onpointermove = ElementDrag;
document.onpointerup = StopElementDrag;

}
terrariumElement.pointerDrag= pointerDrag;

}
