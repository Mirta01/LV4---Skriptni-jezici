var lib = new _lib("p");
var ul = new _lib(".footer-navigation");
var liElement = new _lib(".item");
var aElement = new _lib("a");

localStorage.setItem("racunarstvo", "http://racunarstvo.vuv.hr");
localStorage.setItem("loomen", "http://loomen.vsmti.hr");
localStorage.setItem("imagine", "http://e5.onthehub.com/d.ashx?s=ui4qkso06k");
localStorage.setItem("studentski_dom", "http://studom.vsmti.hr");
localStorage.setItem("office365", "https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail");

for ( var i = 0; i < localStorage.length; i++)
{
    ul.ubaciElement("li", "item", "", "");
    
    var nthItem = new _lib(".item:nth-child(" + (i+1) + ")");
    nthItem.ubaciElement("a", "", "", localStorage.key(i));

    var nthA = new _lib(".item:nth-child(" + (i+1) + ") a");
    nthA.dodajAtribut("href", localStorage.getItem(localStorage.key(i)));
}
