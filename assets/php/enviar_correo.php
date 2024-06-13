<?php
  // Configuración del correo electrónico
  $to = "guilleano@gmail.com"; // Dirección de correo electrónico del destinatario
  $subject = "Mensaje desde formulario de contacto"; // Asunto del correo electrónico

  // Recoger los datos del formulario
  $nombre = $_POST['nombre']; // Nombre del remitente
  $email = $_POST['email']; // Correo electrónico del remitente
  $mensaje = $_POST['mensaje']; // Mensaje del remitente

    /* $formcontent= "
        Nombre: $nombre \n
        Correo: $email \n
        Mensaje: $mensaje
    "

    $recipient = "guilleano@gmail.com"

    $subject = "Mensaje desde formulario de contacto" */

  // Crear el cuerpo del correo electrónico
  $body = "Nombre: $nombre\n";
  $body .= "Correo electrónico: $email\n";
  $body .= "Mensaje: $mensaje";

  // Encabezados del correo electrónico
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // Enviar el correo electrónico
  if (mail($to, $subject, $body, $headers)) {
    echo "Correo electrónico enviado con éxito!";
  } else {
    echo "Error al enviar el correo electrónico";
  }

?>