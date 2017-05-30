<?php

	$destino = "fersot_7@hotmail.com";
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$mensaje = $_POST['mensaje'];
	$asunto = "Saludos";
	$msjCorreo = "Nombre: " . $nombre . "\nE-Mail: ". $email . "\n Mensaje: ". $mensaje;
	$cabecera = 'From: '.$_POST['email']."\r\n".
				'Reply-To:'.$_POST['email']."\r\n".
				'X-Mailer:PHP/'.phpversion();
	
	  
	if ($_POST['submit']) 
	{
		if (mail($destino, $asunto, $msjCorreo, $cabecera)) 
		{
			echo "<script language='javascript'>
			alert('Mensaje enviado, muchas gracias.');
			window.location.href = 'http://casinoht.tk/contacto.html';
			</script>";
			//header("location:contacto.html");
		} 
		else 
		{
			echo "no";
		}
	}
?>