function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

 document.getElementById("defaultOpen").click();


 

// var menuItems = document.querySelectorAll('.menu_box_item');

// menuItems.forEach(function(item) {
//    item.addEventListener('click', function() { 
//       document.querySelector(".menu__box").style.display = "none";
//       document.querySelector('.ham').classList.remove('active')

//    });
// });
// menuItems.forEach(function(item) {
  
// }); 
// document.querySelector("#burger").addEventListener('click', function() { 
//      document.querySelector(".menu__box").style.display = "block";
//     //  document.querySelector('.ham').classList.add('active')

//   });
