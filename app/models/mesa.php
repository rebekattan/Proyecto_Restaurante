<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $num_mesa =$_POST['num_mesa'];
    $cod_estado =$_POST['cod_estado'];

    $sql = "INSERT INTO `mesa` (`num_mesa`, 'cod_estado') VALUES ('$num_mesa', $cod_estado)";

    echo mysqli_query($conexion,$sql);

?>