<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['msg'];
$formcontent=" From: $name  \n Message: $message";
$recipient = "alameen.azad@pm.me";
$subject = "Contact Form || Website";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>
