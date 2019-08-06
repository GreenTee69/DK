/* UTILITIES */
function l(s) {console.log(s);}
function qs(s) {return document.querySelector(s);}
function qsA(s) {return document.querySelectorAll(s);}
function cr(s) {return document.createElement(s);}
function isOK(q) {return q && q != null && q != undefined ? true : false;}
function insertBef(newNode, referenceNode) {referenceNode.parentNode.insertBefore(newNode, referenceNode.previousSibling);}
function insertAf(newNode, referenceNode) {referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);}

l("asdqwe");
