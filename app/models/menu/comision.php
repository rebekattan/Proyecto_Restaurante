<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $comision =$_POST['comision'];

    $sql = "INSERT INTO `comision` (`comision`) VALUES ('$comision')";

    echo mysqli_query($conexion,$sql);

?>