// Solicitar información al usuario

let nota01html = document.getElementById("nota01html");
let nota02html = document.getElementById("nota02html");
let nota03html = document.getElementById("nota03html");
let promediohtml = document.getElementById("promediohtml");

let html1 = +prompt("Ingrese Nota 01 HTML");
let html2 = +prompt("Ingrese Nota 02 HTML");
let html3 = +prompt("Ingrese Nota 03 HTML");

nota01html.innerHTML = html1
nota02html.innerHTML = html2
nota03html.innerHTML = html3
promediohtml.innerHTML = ((html1 + html2 + html3) / 3).toFixed(1)


let nota01css = document.getElementById("nota01css");
let nota02css = document.getElementById("nota02css");
let nota03css = document.getElementById("nota03css");
let promediocss = document.getElementById("promediocss");

let css1 = +prompt("Ingrese Nota 01 CSS");
let css2 = +prompt("Ingrese Nota 02 CSS");
let css3 = +prompt("Ingrese Nota 03 CSS");

nota01css.innerHTML = css1
nota02css.innerHTML = css2
nota03css.innerHTML = css3
promediocss.innerHTML = ((css1 + css2 + css3) / 3).toFixed(1)


let nota01js = document.getElementById("nota01js");
let nota02js = document.getElementById("nota02js");
let nota03js = document.getElementById("nota03js");
let promediojs = document.getElementById("promediojs");

let js1 = +prompt("Ingrese Nota 01 JS");
let js2 = +prompt("Ingrese Nota 02 JS");
let js3 = +prompt("Ingrese Nota 03 JS");

nota01js.innerHTML = js1
nota02js.innerHTML = js2
nota03js.innerHTML = js3
promediojs.innerHTML = ((js1 + js2 + js3) / 3).toFixed(1)
