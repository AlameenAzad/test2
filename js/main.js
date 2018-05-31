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
//function submit() {
//    var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;
//    var msg = document.getElementById("msg").value;
//
//    var dataString = 'Email from:' + name + 'Email:' + email + '&password1=' + password + '&contact1=' + contact;
//
//        // AJAX code to submit form.
//        $.ajax({
//            type: "POST",
//            url: "http://alameen.rf.gd/mail.php",
//            data: {
//                name : name,
//                email: email,
//                msg: msg
//            },
//            cache: false,
//            success: function (html) {
//                alert("Email submitted to php");
//            }
//        });
//    }
//    return false;
//}
function submit(){
    var data = JSON.stringify({
  "personalizations": [
    {
      "to": [
        {
          "email": "alameen.azad@pm.me",
          "name": "John Doe"
        }
      ],
      "subject": "Hello, World!"
    }
  ],
  "from": {
    "email": "sam.smith@example.com",
    "name": "Sam Smith"
  },
  "reply_to": {
    "email": "sam.smith@example.com",
    "name": "Sam Smith"
  },
  "content": [
    {
      "type": "text/plain",
      "value": "this is my text"
    }
  ]
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.sendgrid.com/v3/mail/send");
xhr.setRequestHeader("authorization", "Bearer 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");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);
}
