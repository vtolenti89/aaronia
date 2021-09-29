<?php
      $_POST = json_decode(file_get_contents("php://input"),true);
      
      //echo  json_encode($s);
    if(isset($_POST['specs']) && isset($_POST['form']))  {
        $to         = $_POST['form']['email'];
        $name       = $_POST['form']['name'];
        $comment    = $_POST['form']['comment'];
        $privacy    = $_POST['form']['privacy'];
        $subject = 'Your order';
        
        // subject
        $subject = 'Your order';
        
        // message
        $message = '
        <html>
        <head>
        <title>Order</title>
        </head>
        <body>
        <p>Congratulations ' . $name . ' for your order</p>  
        </body>
        </html>
        ';
        
        // To send HTML mail, the Content-type header must be set
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        
        // Additional headers
        $headers .= 'To: ' . $name . ' <' . $to . '>' . "\r\n";
        $headers .= 'From: AAronia <aaronia@example.com>' . "\r\n";
        $headers .= 'Bcc: victor-ot@hotmail.com' . "\r\n";
        
        mail($to, $subject, $message, $headers);

        http_response_code(200);
        echo "{status: 200, msg: 'Order was processed'}";
    } else {
        http_response_code(500);
        echo "{status: 500, msg: 'Order could not be processed'}";
    }
?>
