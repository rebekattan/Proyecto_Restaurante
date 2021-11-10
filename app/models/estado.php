<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $estado =$_POST['estado'];

    $sql = "INSERT INTO `estado` (`estado`) VALUES ('$estado')";

    echo mysqli_query($conexion,$sql);

?>