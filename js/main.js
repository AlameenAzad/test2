const menu = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const about = document.getElementById("about");
const aboutlink = document.getElementById("aboutlink");
const backabout = document.getElementById("backabout");
const form = document.getElementById("form")
menu.onclick = function () {
    menu.classList.toggle("is-active");
    nav.classList.toggle("nav-active");

}
aboutlink.onclick = function () {
    about.classList.toggle("about-active");
    menu.classList.toggle("is-active");
    nav.classList.toggle("nav-active");
}
backabout.onclick = function () {
    about.classList.toggle("about-active");
    menu.classList.toggle("is-active");
    nav.classList.toggle("nav-active");
}
function sub(){
    XHR = new XMLHttpRequest();
    XHR.open('GET', 'https://untitled-2pxai0iw14ew.runkit.sh/');

  // Send our FormData object; HTTP headers are set automatically
  XHR.send(form.serialize());
    return false;
}
function process()
{
var url="https://untitled-2pxai0iw14ew.runkit.sh/" + form.serialize();
location.href=url;
return false;
}

function SubForm(e){
    e.preventDefault();
    var url="https://untitled-2pxai0iw14ew.runkit.sh/",
        data=form.serialize();
    $.ajax({
        url:url,
        type:'get',
        data:data,
        success:function(result){
           //whatever you wanna do after the form is successfully submitted
            alert(result);
           }
        });
    }
