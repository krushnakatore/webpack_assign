
import {add} from "./cal"

import("./index.css");
console.log(add(10,10));
console.log(add(60,10));


var navbar1 = document.createElement("div");

navbar1.classList.add("navBar")

document.getElementById("main").appendChild(navbar1);

var a = document.createElement("div");
a.classList.add("a")
a.innerText = "Home"
document.getElementById("navbar").appendChild(a);

var b = document.createElement("input");

b.classList.add("b")
b.placeholder ="search here"
document.getElementById("navbar1").appendChild(b);

var c = document.createElement("div");

c.classList.add("c");
c.innerText = "Sign Up";
document.getElementById("navbar2").appendChild(c);

var d = document.createElement("div");

d.classList.add("d");
d.innerText = "Log In";
document.getElementById("navbar3").appendChild(d);


var e = document.createElement("input")
e.classList.add("e")
e.placeholder ="Jinda Ho Tum "
document.getElementById("m2").appendChild(e);

//----------------------------//-------------------------------//

var f = document.createElement("div")
f.classList.add("f")
f.innerText ="Personal Notes"
document.getElementById("m1").appendChild(f);

var g = document.createElement("div")
g.classList.add("g")
g.innerText ="Educational Imps's"
document.getElementById("m12").appendChild(g);

var h = document.createElement("div")
h.classList.add("h")
h.innerText ="Daily Quates"
document.getElementById("m13").appendChild(h);

var i = document.createElement("div")
i.classList.add("i")
i.innerText ="Daily read"
document.getElementById("m14").appendChild(i);

var j = document.createElement("div")
j.classList.add("j")
j.innerText ="Unexceptional Things to write"
document.getElementById("m15").appendChild(j);

var k = document.createElement("div")
k.classList.add("k")
k.innerText ="Diary"
document.getElementById("m16").appendChild(k);
