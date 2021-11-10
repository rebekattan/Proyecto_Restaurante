<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $cargo =$_POST['cargo'];

    $sql = "INSERT INTO `cargo` (`cargo`) VALUES ('$cargo')";

    echo mysqli_query($conexion,$sql);

?>