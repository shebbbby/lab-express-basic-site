const imgTag = document.querySelector('img');

let isBig = false;

imgTag.onclick = function(){
  if(!isBig){
    imgTag.style.width = '500px';
    isBig = true;
  }
  else{
    imgTag.style.width = '200px';
    isBig = false;
  }
};
