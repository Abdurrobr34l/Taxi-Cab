// javascript
// 1 - IT IS USED FOR MENU LINK ACTIVE
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('nav a');

  links.forEach(function(link) {
    link.addEventListener('click', function() {
      // Remove active class from all links
      links.forEach(function(innerLink) {
        innerLink.classList.remove('active');
      });

      // Add active class to the clicked link
      link.classList.add('active');
    });
  });
});

// 2 - IT IS USED TO GIVE GO TO TOP BUTTON
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// jquery
$(document).ready(function () {

  $('.testimonial-pic img').click(function () {

    $(this).addClass('active')
    $(this).siblings().removeClass('active')
  
    $('.testimonial .content').removeClass('active')
    $('#' + $(this).attr('data-alt')).addClass('active')
    
  })


});
