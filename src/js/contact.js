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
function copyText(text, soc) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    //console.log('Async: Copying to clipboard was successful!');
    var tooltip = document.getElementById(soc + "Tooltip");
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = 1;
    setTimeout(function(){ var tooltip = document.getElementById(soc + "Tooltip");
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = 0; }, 2000);
  }, function(err) {
    //console.error('Async: Could not copy text: ', err);
  });
}
