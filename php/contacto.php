<?php

require_once('./phpmailer/class.phpmailer.php'); 

//Creamos una instancia de PHPMailer (Objeto)
$mail = new PHPMailer();

// Obtenemos los datos de formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

//Datos Del Remitente (Correo y Nombre)
//$mail->SetFrom($email,$nombre);
$mail->From = $email;
$mail->FromName = $nombre;

// Correo Del Destinatario
$mail->addAddress("fersot_7@hotmail.com", "Fernando Soto");


// CC and BCC
//-$mail->addCC("cc@example.com");
//-$mail->addBCC("bcc@example.com");

// Formato HTML
$mail->isHTML(true);

// Datos del envio del correo
$mail->Subject = $asunto;
$mail->Body = "<i>$mensaje</i>";
$mail->AltBody = "This is the plain text version of the email content";

// Codificación UTF8. Obligado utilizarlo en aplicaciones en Español
$mail->CharSet = 'UTF-8';

// Envir Correo
if($mail->send()) 
{
     echo "
     <script language='javascript'>
			alert('Correo Enviado Satifactoriamente...');
			window.location.href = 'http://casinoht.tk/contacto.html';
	</script>";
} 
else 
{
    echo "Mailer Error: " . $mail->ErrorInfo;
}