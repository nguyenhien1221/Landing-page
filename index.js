

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("navbar").style.boxShadow = "0px 2px 5px #9a9a9a"
    
  } else {
    document.getElementById("navbar").style.padding = "20px 0px";
    document.getElementById("navbar").style.boxShadow = "unset"
  }
}



function closeMenu(){
  document.getElementById('sidenav').style.right = '-200px';
}   
function openMenu(){
  document.getElementById('sidenav').style.right = '0px'
}