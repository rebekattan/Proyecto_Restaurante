<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $estado =$_POST['estado'];

    $sql = "INSERT INTO `estado` (`estado`) VALUES ('$estado')";

    echo mysqli_query($conexion,$sql);

?>