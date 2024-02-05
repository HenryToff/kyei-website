<?php
if(isset($_POST['submit'])){
    $name = $POST['name'];
    $phone = $POST['phone'];
    $email = $POST['email'];
    $msg = $POST['msg'];

    $to = 'henrydetoff@gmail.com';
    $subject = 'Form Submission';
    $message = "Name: ".$name."\n"."Phone: ".$phone."\n". "wrote the following: "."\n\n.$msg;
    $headers = Form: " .$email;

    if (mail($to, $subject, $message, $headers)){
        echo "<h1>Message Sent! Thank you"." ".$name.", We will contact you shortly!</h1>";

        }
        else "Something went wrong";
}


?>