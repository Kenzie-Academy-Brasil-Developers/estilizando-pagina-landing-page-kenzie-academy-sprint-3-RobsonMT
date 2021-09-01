function menuOpen(){
  if(document.querySelector('#menu').classList.contains('menuClose')){
   document.querySelector('#menu').classList.remove('menuClose')
  }else{
   document.querySelector('#menu').classList.add('menuClose')
  }
}

function topFunction(){
  document.documentElement.scrollTop = 0; 
}

