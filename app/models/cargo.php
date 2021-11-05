<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $cargo =$_POST['cargo'];

    $sql = "INSERT INTO `cargo` (`cargo`) VALUES ('$cargo')";

    echo mysqli_query($conexion,$sql);

?>