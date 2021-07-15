/* super-search
Author: Kushagra Gour (http://kushagragour.in)
MIT Licensed
*/
(function () {
  var searchFile = '/feed.xml',
    searchEl,
    searchInputEl,
    searchResultsEl,
    currentInputValue = '',
    lastSearchResultHash,
    posts = [];

  // Changes XML to JSON
  // Modified version from here: http://davidwalsh.name/convert-xml-json
  function xmlToJson(xml) {
    // Create the return object
    var obj = {};
    if (xml.nodeType == 3) { // text
      obj = xml.nodeValue;
    }

    // do children
    // If all text nodes inside, get concatenated text from them.
    var textNodes = [].slice.call(xml.childNodes).filter(function (node) { return node.nodeType === 3; });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
      obj = [].slice.call(xml.childNodes).reduce(function (text, node) { return text + node.nodeValue; }, '');
    }
    else if (xml.hasChildNodes()) {
      for(var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof(obj[nodeName]) == "undefined") {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof(obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJson(item));
        }
      }
    }
    return obj;
  }

  function getPostsFromXml(xml) {
    var json = xmlToJson(xml);
    return json.channel.item;
  }

  window.toggleSearch = function toggleSearch() {
    searchEl.classList.toggle('devsite-popout-closed');
    if (searchEl.classList.contains('devsite-popout-closed')) {
      // while opening
      searchInputEl.value = '';
    } else {
      // while closing
      searchResultsEl.classList.add('is-hidden');
    }
    setTimeout(function () {
      searchInputEl.focus();
    }, 210);
  }

  function handleInput() {
    var currentResultHash, d;

    currentInputValue = searchInputEl.value;
    if (!currentInputValue || currentInputValue.length < 2) {
      lastSearchResultHash = '';
      searchEl.classList.add('devsite-popout-closed');
      searchResultsEl.innerHTML = '';
      return;
    }
    searchResultsEl.style.offsetWidth;

    var matchingPosts = posts.filter(function (post) {
      if (post.title.indexOf(currentInputValue) !== -1 || post.description.indexOf(currentInputValue) !== -1) {
        return true;
      }
    });

    if (matchingPosts.length) {
      searchEl.classList.remove('devsite-popout-closed');
    }
    currentResultHash = matchingPosts.reduce(function(hash, post) { return post.title + hash; }, '');
    if (matchingPosts.length && currentResultHash !== lastSearchResultHash) {
      searchResultsEl.classList.remove('is-hidden');
      searchResultsEl.innerHTML = matchingPosts.map(function (post) {
        d = new Date(post.pubDate);
        //return '<li><a href="' + post.link + '">' + post.title + ' - <span class="search__result-date">' + d.toUTCString().replace(/.*(\d{2})\s+(\w{3})\s+(\d{4}).*/,'$2 $1, $3') + '</span></a></li>';
        return '<div class="goog-menuitem devsite-suggest-item" role="menuitem" id=":b">'+
        '<div class="goog-menuitem-content">'+
          '<a class="devsite-suggestion" href="' + post.link + '">'+
            '<span class="devsite-suggestion-fragment">' + post.title + '</span><span class="devsite-suggestion-fragment">' + post.category + '</span>'+
          '</a></div></div>'

      }).join('');
    }
    lastSearchResultHash = currentResultHash;
  }

  var focusIndex = -1;
  function keyFocusDown(){
      var items = document.querySelectorAll('.devsite-suggest-item');
      if(!items.length){
        return;
      }

      if(focusIndex>=0 && items[focusIndex])
      {
        items[focusIndex].classList.remove('goog-menuitem-highlight');
      }
      if(items.length-1 <= focusIndex){
        focusIndex = -1;
      }
      console.log(items.length, focusIndex)
      items[++focusIndex].classList.add('goog-menuitem-highlight');
  }
  function keyFocusUp(){
      var items = document.querySelectorAll('.devsite-suggest-item');
      if(!items.length){
        return;
      }

      if(focusIndex>=0 && items[focusIndex])
      {
        items[focusIndex].classList.remove('goog-menuitem-highlight');
      }
      if( focusIndex <= 0){
        focusIndex = items.length;
      }
      console.log(items.length, focusIndex)
      items[--focusIndex].classList.add('goog-menuitem-highlight');
  }
  function keyFocusEnter(){  

    var items = document.querySelectorAll('.devsite-suggest-item');
    if(items[focusIndex])
    {
      var href = items[focusIndex].querySelector('.devsite-suggestion').getAttribute("href");
      location.href = href;
    }
  }

  function init(options) {
    searchFile = options.searchFile || searchFile;
    searchEl = document.querySelector(options.searchSelector || '#js-super-search');
    searchInputEl = document.querySelector(options.inputSelector || '#js-super-search__input');
    searchResultsEl = document.querySelector(options.resultsSelector || '#js-super-search__results');

    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open('GET', searchFile);
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState != 4) return;
      if (xmlhttp.status != 200 && xmlhttp.status != 304) { return; }
      var node = (new DOMParser).parseFromString(xmlhttp.responseText, 'text/xml');
      node = node.children[0];
      posts = getPostsFromXml(node);
    }
    xmlhttp.send();

    // Toggle on ESC key
    window.addEventListener('keyup', function onKeyPress(e) {
      if (e.which === 27) {
        toggleSearch();
      }
    });

    // Open on '/' key
    window.addEventListener('keypress', function onKeyPress(e) {
      if (e.which === 47 && !searchEl.classList.contains('is-active')) {
        toggleSearch();
      }
    });

    searchInputEl.addEventListener('input', function onInputChange(e) {
      handleInput();
    });
    searchInputEl.addEventListener('keydown', function onKeyPress(e) {
      console.log(e.which)
      switch(e.which)
      {
        case 40:
          keyFocusDown();
          break;        
        case 38:
          keyFocusUp();
          break;
          case 13:
          keyFocusEnter();
          break;
      }
    });
  }

  init.toggle = toggleSearch;

  window.superSearch = init;

})();