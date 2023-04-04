window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 ) {
    document.getElementById("div1").style.backgroundColor = "green";
  } else {
     document.getElementById("div1").style.backgroundColor="red";
  }
}