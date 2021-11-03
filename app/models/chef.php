<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nombre =$_POST['nombre'];
    $apellido= $_POST['apellido'];
    $salario = $_POST['salario'];

    $sql = "INSERT INTO `chef` (`nom_chef`, `apellido_chef`, `salario`) VALUES ('$nombre', '$apellido', '$salario')";

    echo mysqli_query($conexion,$sql);

?>