function showDropdown() {
	  var topnav = document.getElementById("myTopnav");
	  var icon = document.getElementById("icon");
	  if (topnav.className === "topnav") {
	    topnav.className += " responsive";
	    icon.className += " res";
	  } else {
	    topnav.className = "topnav";
	    icon.className = "icon";
	  }
	}