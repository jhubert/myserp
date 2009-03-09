// ==UserScript==
// @name           Modify the Yahoo SERP
// @namespace      jhubert_0
// @description    Allow the SERP to be modified from the Query String
// @include        http://search.yahoo.com/search*
// @author         Jeremy Hubert @ yahoo-inc dot com
// ==/UserScript==

function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

var modifyFlag = gup('fr');

if (modifyFlag) {
  var objHead = document.getElementsByTagName('head')[0];

  var objJS = document.createElement('script');
  objJS.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js';
  objJS.type = 'text/javascript';
  objHead.appendChild(objJS);
  
  var objJS = document.createElement('script');
  objJS.type = 'text/javascript';
  objJS.src = 'http://jeremyhubert.com/playground/msp/loader.js?flag=' + modifyFlag;
  objHead.appendChild(objJS);
}