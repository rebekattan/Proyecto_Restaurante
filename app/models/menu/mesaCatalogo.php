<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $num_mesa =$_POST['num_mesa'];

    $sql = "INSERT INTO `mesa_catalogo` (`num_mesa`) VALUES ('$num_mesa')";

    echo mysqli_query($conexion,$sql);
?>