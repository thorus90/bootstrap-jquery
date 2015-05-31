<!DOCTYPE html>
<html>
<head>
        <?php echo $this->Html->charset(); ?>
        <?php
                echo $this->Html->meta('icon');

                echo $this->Html->css(array('bootstrap.min.css','bootstrap-theme.min.css','bootstrap-custom.css'));

                echo $this->Html->script(array('jquery.min.js','bootstrap.min.js','index.js'));
                echo $this->fetch('meta');
                echo $this->fetch('css');
                echo $this->fetch('script');
    if ( isset($javascript) )
    {
        echo '<script type="text/javascript">$(document).ready(function(){
            ' . $javascript . '
        });</script>';
    }
?>
</head>
<body>
<?php 
    if ( !( isset($noNavbar) && $noNavbar ) )
    {
        echo $this->element('navbar');
    }
    $flash = explode('/',$this->Flash->render());
    if( $flash[0] != '0' && $flash[0] != '1' && $flash[0] != '2' && $flash[0] != '3' )
    {
        echo $this->Flash->render();
    }
    else
    {
        echo '<div class="container">';
            echo '<div class="alert alert-';
            if( $flash[0] == "0" ){ echo 'success'; }
            if( $flash[0] == "1" ){ echo 'warning'; }
            if( $flash[0] == "2" ){ echo 'danger'; }
            if( $flash[0] == "3" ){ echo 'info'; }
            echo '">' . $flash[1] . '</div>';
        echo '</div>';
    }
    echo $this->fetch('content');
?>
</body>
</html>
