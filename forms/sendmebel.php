<?
    $to = '';
    $subject = 'Требуется обратный звонок!';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Название мебели: '.$_POST['mebel-name'].'</p>
                        <p>Стоимость: '.$_POST['mebel-price'].'</p>
                        <p>Количество: '.$_POST['mebel-count'].'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Почта: '.$_POST['email'].'</p>
                        <p>Сообщение: '.$_POST['msg'].'</p>
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: prometal.ru <site@prometal.ru>\r\n";
    mail($to, $subject, $message, $headers);
?>