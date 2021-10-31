// Show default page at start.
function hideContent(){
	document.getElementById("defaultOpen").click();
};

function openPage(evt, buttonName) {
  // Declare all variables.
  var i, tabcontent, tablinks;

  // Get all elements with class "tab" and hide them.
  tabcontent = document.getElementsByClassName("tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class "nav__tab-links" and remove the class "active".
  tablinks = document.getElementsByClassName("nav__tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab and add an "active" class to the button that opened the tab.
  document.getElementsByClassName(buttonName)[0].style.display = "block";
  evt.currentTarget.className += " active";
};

 // Add active class to 'about me' on logo click.
function addActive(){
  document.getElementById('defaultOpen').classList.add("active");
}

// Header disappears with scroll.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (screen.width > 801 && document.documentElement.scrollTop > 100) {
    document.getElementById("logo").style.display = "none";
} else {
    document.getElementById("logo").style.display = "inline-block";
  }
};
