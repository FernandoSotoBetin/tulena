<?php

// Librerías para el envío de mail.
require_once('./phpmailer/class.phpmailer.php'); 
require_once('./phpmailer/class.smtp.php');
 
$mail = new PHPMailer();
 
// Configuramos los datos de sesión para conectarnos al servicio SMTP de Mandrill
$mail->IsSMTP(); // Indicamos que vamos a utilizar SMTP
$mail->Host = 'smtp.live.com'; // El Host de Mandrill               
$mail->Port = 25;  // El puerto que Mandrill nos indica utilizar
$mail->SMTPAuth = true; // Indicamos que vamos a utilizar auteticación SMTP       
$mail->Username = 'fersot_7@hotmail.com'; // Nuestro usuario en Mandrill              
$mail->Password = 'fande3115'; // Key generado por Mandrill 
$mail->SMTPSecure = 'tls'; // Activamos el cifrado tls (también ssl)
 
// Ahora configuraremos los parámetros básicos de PHPMailer para hacer un envío típico
 
$mail->From ="esildays@hotmail.com";
//$mail->From = 'esildays@hotmail.com'; // Nuestro correo electrónico
$mail->FromName = "esildays"; // El nombre de nuestro sitio o proyecto
$mail->IsHTML(true); // Indicamos que el email tiene formato HTML                      
$mail->Subject = 'Soy un asunto!'; // El asunto del email
$mail->Body = 'Hola, soy el cuerpo del mensaje :)'; // El cuerpo de nuestro mensaje
$mail->AddAddress("fersot_7@hotmail.com"); // Email del destinatario


//Recibir todos los parámetros del formulario
//$para = $_POST['email'];
//$asunto = $_POST['asunto'];
//$mensaje = $_POST['mensaje'];
//$archivo = $_FILES['hugo'];
 
 


//$mail->AddAttachment($archivo['tmp_name'], $archivo['name']);
//$mail->MsgHTML($mensaje);
 
//Avisar si fue enviado o no y dirigir al index
if($mail->Send())
{
    echo'<script type="text/javascript">
            alert("Enviado Correctamente");
         </script>';
}
else{
    echo'<script type="text/javascript">
            alert("NO ENVIADO, intentar de nuevo");
            window.location="http://localhost/maillocal/index.php"
         </script>';
}
?>