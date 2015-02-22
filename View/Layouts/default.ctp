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
    echo $this->Session->flash();
    echo $this->fetch('content');
?>
</body>
</html>
