<?php
$nombre = $_POST['name'];
$last_name = $_POST['last_name'];
$mail = $_POST['email'];
$telefono = $_POST['phone'];
$cliente = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . "".$last_name . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Su telefono es: " . $telefono . " \r\n";
$mensaje .= "Mensaje: " . $_POST['message'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'orgmusto@gmail.com';
$asunto = 'Contactos Musto';

mail($para, $asunto, utf8_decode($mensaje), $header);

?>