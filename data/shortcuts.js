document.onkeypress = function(e) {

    var searchKey = 45; // -
    var evt = e || window.event;
    var character = evt.charCode;
    var nodeType = evt.target.nodeName.toUpperCase();
   
    if (character === 0 ||
        evt.target.contentEditable.toUpperCase() === "TRUE" ||
        nodeType === "TEXTAREA" ||
        nodeType === "INPUT" && evt.target.type.toUpperCase() === "TEXT") {
      return true; //do not detect the key if it was pressed in a textbox or sth similar
    }
    if (character === searchKey) {
      var searchbar = document.getElementsByClassName("header-search-input js-search-input")[0];
      if (searchbar) {
        searchbar.focus();
      }
    }
    return true;
  };

if (document.getElementsByClassName("shortcut-list")) {
  var keyboardKeys = document.getElementsByClassName("keyboard-key");
  for (var i = keyboardKeys.length - 1; i >= 0; i--) {
    if (keyboardKeys[i].innerHTML === "&lt;") {
      keyboardKeys[i].innerHTML = ",";
    } else if (keyboardKeys[i].innerHTML === "&gt;") {
      keyboardKeys[i].innerHTML = ".";
    } else if (keyboardKeys[i].innerHTML === "/") {
      keyboardKeys[i].innerHTML = "-";
    }
  };
}