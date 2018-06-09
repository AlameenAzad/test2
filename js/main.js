const menu = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const about = document.getElementById("about");
const aboutlink = document.getElementById("aboutlink");
const backabout = document.getElementById("backabout");
const form = document.getElementById("form");
const suc = document.getElementById("suc");
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
form.onsubmit = function(){
    suc.classList.toggle("active");
}

	var scroll = new SmoothScroll('a[href*="#"]');

//TODO: See why the menu is not showing up on Android.
//function sub(){
//    XHR = new XMLHttpRequest();
//    XHR.open('GET', 'https://untitled-2pxai0iw14ew.runkit.sh/?'+form.serialize());
//
//  // Send our FormData object; HTTP headers are set automatically
//  XHR.send(null);
//    var ser = XHR.responseText;
//    alert(ser);
//    return false;
//}
//function process()
//{
//var url="https://untitled-2pxai0iw14ew.runkit.sh/" + form.serialize();
//location.href=url;
//return false;
//}
//
//function SubForm(e){
//    var url="https://untitled-2pxai0iw14ew.runkit.sh/" + form.serialize();
//    console.log(url);
//    var ret = postAsync(url) ;
//    // hint: encodeURIComponent()
//
//if (ret.match(/^XHR error/)) {
//    console.log(ret);
//    return;
//    }
////    e.preventDefault();
////    var url="https://untitled-2pxai0iw14ew.runkit.sh/",
////        data=form.serialize();
////    $.ajax({
////        url:url,
////        type:'get',
////        data:data,
////        success:function(result){
////           //whatever you wanna do after the form is successfully submitted
////            alert(result);
////           }
////        });
////    return false;
//    }
//function postAsync(url2get)    {
//    var req;
//    if (window.XMLHttpRequest) {
//        req = new XMLHttpRequest();
//        } else if (window.ActiveXObject) {
//        req = new ActiveXObject("Microsoft.XMLHTTP");
//        }
//    if (req != undefined) {
//        // req.overrideMimeType("application/json"); // if request result is JSON
//        try {
//            req.open("GET", url2get, false); // 3rd param is whether "async"
//            }
//        catch(err) {
//            alert("couldnt complete request. Is JS enabled for that domain?\\n\\n" + err.message);
//            return false;
//            }
//        req.send(); // param string only used for POST
//
//        if (req.readyState == 4) { // only if req is "loaded"
//            if (req.status == 200)  // only if "OK"
//                { return req.responseText ; }
//            else    { return "XHR error: " + req.status +" "+req.statusText; }
//            }
//        }
//    alert("req for getAsync is undefined");
//}
//
////var var_str = "var1=" + var1  + "&var2=" + var2;
