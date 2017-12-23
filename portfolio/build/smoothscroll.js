/* Smooth scrolling
   Changes links that link to other parts of this page to scroll
   smoothly to those links rather than jump to them directly, which
   can be a little disorienting.
   
   sil, http://www.kryogenix.org/
   
   v1.0 2003-11-11
   v1.1 2005-06-16 wrap it up in an object
*/

var ss = {
  fixAllLinks: function() {
    // Get a list of all links in the page
    var allLinks = document.getElementsByTagName('a');
    // Walk through the list
    for (var i=0;i<allLinks.length;i++) {
      var lnk = allLinks[i];
      if ((lnk.href && lnk.href.indexOf('#') != -1) && 
          ( (lnk.pathname == location.pathname) ||
        ('/'+lnk.pathname == location.pathname) ) && 
          (lnk.search == location.search)) {
        // If the link is internal to the page (begins in #)
        // then attach the smoothScroll function as an onclick
        // event handler
        ss.addEvent(lnk,'click',ss.smoothScroll);
      }
    }
  },

  smoothScroll: function(e) {
    // This is an event handler; get the clicked on element,
    // in a cross-browser fashion
    if (window.event) {
      target = window.event.srcElement;
    } else if (e) {
      target = e.target;
    } else return;

    // Make sure that the target is an element, not a text node
    // within an element
    if (target.nodeName.toLowerCase() != 'a') {
      target = target.parentNode;
    }
  
    // Paranoia; check this is an A tag
    if (target.nodeName.toLowerCase() != 'a') return;
  
    // Find the <a name> tag corresponding to this href
    // First strip off the hash (first character)
    anchor = target.hash.substr(1);
    // Now loop all A tags until we find one with that name
    var allLinks = document.getElementsByTagName('a');
    var destinationLink = null;
    for (var i=0;i<allLinks.length;i++) {
      var lnk = allLinks[i];
      if (lnk.name && (lnk.name == anchor)) {
        destinationLink = lnk;
        break;
      }
    }
    if (!destinationLink) destinationLink = document.getElementById(anchor);

    // If we didn't find a destination, give up and let the browser do
    // its thing
    if (!destinationLink) return true;
  
    // Find the destination's position
    var destx = destinationLink.offsetLeft; 
    var desty = destinationLink.offsetTop;
    var thisNode = destinationLink;
    while (thisNode.offsetParent && 
          (thisNode.offsetParent != document.body)) {
      thisNode = thisNode.offsetParent;
      destx += thisNode.offsetLeft;
      desty += thisNode.offsetTop;
    }
  
    // Stop any current scrolling
    clearInterval(ss.INTERVAL);
  
    cypos = ss.getCurrentYPos();
  
    ss_stepsize = parseInt((desty-cypos)/ss.STEPS);
    ss.INTERVAL =
setInterval('ss.scrollWindow('+ss_stepsize+','+desty+',"'+anchor+'")',10);
  
    // And stop the actual click happening
    if (window.event) {
      window.event.cancelBubble = true;
      window.event.returnValue = false;
    }
    if (e && e.preventDefault && e.stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
    }
  },

  scrollWindow: function(scramount,dest,anchor) {
    wascypos = ss.getCurrentYPos();
    isAbove = (wascypos < dest);
    window.scrollTo(0,wascypos + scramount);
    iscypos = ss.getCurrentYPos();
    isAboveNow = (iscypos < dest);
    if ((isAbove != isAboveNow) || (wascypos == iscypos)) {
      // if we've just scrolled past the destination, or
      // we haven't moved from the last scroll (i.e., we're at the
      // bottom of the page) then scroll exactly to the link
      window.scrollTo(0,dest);
      // cancel the repeating timer
      clearInterval(ss.INTERVAL);
      // and jump to the link directly so the URL's right
      location.hash = anchor;
    }
  },

  getCurrentYPos: function() {
    if (document.body && document.body.scrollTop)
      return document.body.scrollTop;
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    if (window.pageYOffset)
      return window.pageYOffset;
    return 0;
  },

  addEvent: function(elm, evType, fn, useCapture) {
    // addEvent and removeEvent
    // cross-browser event handling for IE5+,  NS6 and Mozilla
    // By Scott Andrew
    if (elm.addEventListener){
      elm.addEventListener(evType, fn, useCapture);
      return true;
    } else if (elm.attachEvent){
      var r = elm.attachEvent("on"+evType, fn);
      return r;
    } else {
      alert("Handler could not be removed");
    }
  } 
}

ss.STEPS = 25;

ss.addEvent(window,"load",ss.fixAllLinks);

// (function (root, smoothScroll) {
//   'use strict';

//   // Support RequireJS and CommonJS/NodeJS module formats.
//   // Attach smoothScroll to the `window` when executed as a <script>.

//   // RequireJS
//   if (typeof define === 'function' && define.amd) {
//     define(smoothScroll);

//   // CommonJS
//   } else if (typeof exports === 'object' && typeof module === 'object') {
//     module.exports = smoothScroll();

//   } else {
//     root.smoothScroll = smoothScroll();
//   }

// })(this, function(){
// 'use strict';

// // Do not initialize smoothScroll when running server side, handle it in client:
// if (typeof window !== 'object') return;

// // We do not want this script to be applied in browsers that do not support those
// // That means no smoothscroll on IE9 and below.
// if(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) { return; }

// // Get the top position of an element in the document
// var getTop = function(element, start) {
//     // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
//     if(element.nodeName === 'HTML') return -start
//     return element.getBoundingClientRect().top + start
// }
// // ease in out function thanks to:
// // http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
// var easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }

// // calculate the scroll position we should be in
// // given the start and end point of the scroll
// // the time elapsed from the beginning of the scroll
// // and the total duration of the scroll (default 500ms)
// var position = function(start, end, elapsed, duration) {
//     if (elapsed > duration) return end;
//     return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
//     // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
// }

// // we use requestAnimationFrame to be called by the browser before every repaint
// // if the first argument is an element then scroll to the top of this element
// // if the first argument is numeric then scroll to this location
// // if the callback exist, it is called when the scrolling is finished
// // if context is set then scroll that element, else scroll window
// var smoothScroll = function(el, duration, callback, context){
//     duration = duration || 500;
//     context = context || window;
//     var start = context.scrollTop || window.pageYOffset;

//     if (typeof el === 'number') {
//       var end = parseInt(el);
//     } else {
//       var end = getTop(el, start);
//     }

//     var clock = Date.now();
//     var requestAnimationFrame = window.requestAnimationFrame ||
//         window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
//         function(fn){window.setTimeout(fn, 15);};

//     var step = function(){
//         var elapsed = Date.now() - clock;
//         if (context !== window) {
//           context.scrollTop = position(start, end, elapsed, duration);
//         }
//         else {
//           window.scroll(0, position(start, end, elapsed, duration));
//         }

//         if (elapsed > duration) {
//             if (typeof callback === 'function') {
//                 callback(el);
//             }
//         } else {
//             requestAnimationFrame(step);
//         }
//     }
//     step();
// }

// var linkHandler = function(ev) {
//     if (!ev.defaultPrevented) {
//         ev.preventDefault();

//         if (location.hash !== this.hash) window.history.pushState(null, null, this.hash)
//         // using the history api to solve issue #1 - back doesn't work
//         // most browser don't update :target when the history api is used:
//         // THIS IS A BUG FROM THE BROWSERS.
//         // change the scrolling duration in this call
//         var node = document.getElementById(this.hash.substring(1))
//         if (!node) return; // Do not scroll to non-existing node

//         smoothScroll(node, 500, function (el) {
//             location.replace('#' + el.id)
//             // this will cause the :target to be activated.
//         });
//     }
// }

// // We look for all the internal links in the documents and attach the smoothscroll function
// document.addEventListener("DOMContentLoaded", function () {
//     var internal = document.querySelectorAll('a[href^="#"]:not([href="#"])'), a;
//     for(var i=internal.length; a=internal[--i];){
//         a.addEventListener("click", linkHandler, false);
//     }
// });

// // return smoothscroll API
// return smoothScroll;

// });
