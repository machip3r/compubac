<?php

  require_once __DIR__."/vendor/autoload.php";
  require_once __DIR__."/functions.php";
  require_once __DIR__."/config.php";

  $name = stripslashes($_POST["name"]);
	$senderEmail = trim($_POST["email"]);
	$message = stripslashes($_POST["message"]);

  $mail = new \PHPMailer\PHPMailer\PHPMailer(true);

  if(!($name) && !($senderEmail) && !($message)) {
		header("Location: https://compubac.cf/");
		die();
	} else {
    try {
        //check query is execute successfully or not
        $email = "braulinusmac@gmail.com";
        //Server settings
        $mail->SMTPDebug = CONTACTFORM_PHPMAILER_DEBUG_LEVEL;
        $mail->isSMTP();
        $mail->Host = CONTACTFORM_SMTP_HOSTNAME;
        $mail->SMTPAuth = true;
        $mail->Username = CONTACTFORM_SMTP_USERNAME;
        $mail->Password = CONTACTFORM_SMTP_PASSWORD;
        $mail->SMTPSecure = CONTACTFORM_SMTP_ENCRYPTION;
        $mail->Port = CONTACTFORM_SMTP_PORT;

        // Recipients
        $mail->setFrom("compubac@gmail.com", "CompuBac");
        $mail->addAddress($email);
        $mail->addReplyTo("compubac@gmail.com");

        // Content
        $mail->isHTML(true); //false if you don"t use html.
        $mail->Subject = "Contacto COMPUBAC";

        //email body
        $mail->Body = "<center><h1>COMPUBAC</h1><h3 style='margin-top: -10px;'>https://compubac.cf/</h3><p><b>$name ($senderEmail)</b> tiene un mensaje para ti: \"<b>$message</b>\".</p></center>";

        if($mail->send()) echo "Done";
        else echo "Fail";


    } catch (Exception $e) {
        redirectWithError("Hubo un error al enviar el correo: ".$mail->ErrorInfo);
    }
  }

?>