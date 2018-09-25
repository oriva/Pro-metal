<?
    $to = 'weelman93@gmail.com';
    $subject = 'Требуется обратный звонок!';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body style="padding: 20px; border: 1px solid #000">
                        <p style="font-size: 2em; color: #333">Какая заявка: '.$_POST['type'].'</p>
                        <p style="font-size: 1.2em; color: #333">Имя: '.$_POST['name'].'</p>
                        <p style="font-size: 1.2em; color: #333">Телефон: '.$_POST['phone'].'</p>
                        <p style="font-size: 1.2em; color: #333">Почта: '.$_POST['email'].'</p>
                        <p style="font-size: 1.2em; color: #333">Сообщение: '.$_POST['msg'].'</p>
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: zim-kolbasi.ru <site@zim-kolbasi.ru>\r\n";
    mail($to, $subject, $message, $headers);
?>