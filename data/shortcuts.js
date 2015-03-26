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