var mediaQuery = window.matchMedia("(max-width: 600px)");

categoryName = document.getElementById('articleName').innerText;

function showDropdown() {
    var topnav = document.getElementById("myTopnav");
    var icon = document.getElementById("icon");
    var home = document.getElementById("home");
    var category = document.getElementById(categoryName);
	if (topnav.className === "topnav") {
	    topnav.className += " responsive";
	    icon.className += " res";
	    home.innerHTML = categoryName;
	    category.innerHTML = "home";
	    home.className = "active";
	    category.className = "";
	    home.setAttribute('href', "#");
	    category.setAttribute('href', "../../index.html");
	} else {
	    topnav.className = "topnav";
	    icon.className = "icon";
	    home.innerHTML = "home";
	    category.innerHTML = categoryName;
	    home.className = "";
	    category.className = "active";
	    home.setAttribute('href', "../../index.html");
	    category.setAttribute('href', "#");
	}
	adaptNav(mediaQuery);
}

function adaptNav(mediaQuery) {
	var home = document.getElementById("home");
	var category = document.getElementById(categoryName);
  	if (mediaQuery.matches) { // If media query matches
  		home.innerHTML = categoryName;
  		home.className = "active";
  		home.setAttribute('href', "#");
  		category.innerHTML = "home";
  		category.setAttribute('href', "../../index.html");
  	} else {
  		//if (screen.width > 600) {
			home.innerHTML = "home";
    	home.className = "";
    	home.setAttribute('href', "../../index.html");
    	category.innerHTML = categoryName;
    	category.setAttribute('href', "#");
  		//} else {
  		//	alert("hmm");
  		//}
  	}
}

adaptNav(mediaQuery);
mediaQuery.addListener(adaptNav);