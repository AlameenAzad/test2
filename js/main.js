const menu = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const about = document.getElementById("about");
const aboutlink = document.getElementById("aboutlink");
const backabout = document.getElementById("backabout");

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

//$( "#tip" ).submit(function( e ) {
//    e.preventDefault();
//    $.ajax({
//        url: tip.php,
//        type:'POST',
//        data:
//        {
//            tip_email: $('#tip_email').val(),
//            ad_id: $('#ad_id').val()
//        },
//        success: function(msg)
//        {
//
//            alert('Email Sent');
//        }
//    });
//});
function submit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    var dataString = 'Email from:' + name + 'Email:' + email + '&password1=' + password + '&contact1=' + contact;

        // AJAX code to submit form.
        $.ajax({
            type: "POST",
            url: "http://alameen.rf.gd/mail.php",
            data: {
                name : name,
                email: email,
                msg: msg
            },
            cache: false,
            success: function (html) {
                alert("Email submitted to php");
            }
        });
    }
    return false;
}
