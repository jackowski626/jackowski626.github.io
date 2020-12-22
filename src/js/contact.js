var mediaQuery = window.matchMedia("(max-width: 600px)");

function showDropdown() {
	  var topnav = document.getElementById("myTopnav");
	  var icon = document.getElementById("icon");
	  var home = document.getElementById("home");
	  var contact = document.getElementById("contact");
	  if (topnav.className === "topnav") {
	    topnav.className += " responsive";
	    icon.className += " res";
	    home.innerHTML = "contact";
	    contact.innerHTML = "home";
	    home.className = "active";
	    contact.className = "";
	    home.setAttribute('href', "#");
	    contact.setAttribute('href', "../../index.html");
	  } else {
	    topnav.className = "topnav";
	    icon.className = "icon";
	    home.innerHTML = "home";
	    contact.innerHTML = "contact";
	    home.className = "";
	    contact.className = "active";
	    home.setAttribute('href', "../../index.html");
	    contact.setAttribute('href', "#");
	  }
	  adaptNav(mediaQuery);
	}

function adaptNav(mediaQuery) {
	var home = document.getElementById("home");
	var contact = document.getElementById("contact");
  	if (mediaQuery.matches) { // If media query matches
		home.innerHTML = "contact";
		home.className = "active";
		home.setAttribute('href', "#");
		contact.innerHTML = "home";
		contact.setAttribute('href', "../../index.html");
  	} else {
  		//if (screen.width > 600) {
  			home.innerHTML = "home";
	    	home.className = "";
	    	home.setAttribute('href', "../../index.html");
	    	contact.innerHTML = "contact";
	    	contact.setAttribute('href', "#");
  		//} else {
  		//	alert("hmm");
  		//}
  	}
}

adaptNav(mediaQuery);
mediaQuery.addListener(adaptNav);

function hideTooltip() {
	var tooltip = document.getElementById("mailTooltip");
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = 0;
}

//mail, copy by Dean Taylor, https://stackoverflow.com/a/30810322/10392610
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = "jf@wikiera.net";
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    //console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    //console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyEmail(text) {
	var text = "jackowski626@outlook.com";
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    //console.log('Async: Copying to clipboard was successful!');
    var tooltip = document.getElementById("mailTooltip");
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = 1;
    setTimeout(function(){ var tooltip = document.getElementById("mailTooltip");
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = 0; }, 2000);
  }, function(err) {
    //console.error('Async: Could not copy text: ', err);
  });
}

function copyDiscord(text) {
  var text = "jackowski626#0522";
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    //console.log('Async: Copying to clipboard was successful!');
    var tooltip = document.getElementById("discordTooltip");
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = 1;
    setTimeout(function(){ var tooltip = document.getElementById("discordTooltip");
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = 0; }, 2000);
  }, function(err) {
    //console.error('Async: Could not copy text: ', err);
  });
}
