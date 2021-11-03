<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nombre_cam =$_POST['nombre_cam'];
    $apellido_cam= $_POST['apellido_cam'];
    $comision= $_POST['comision'];
    $salario = $_POST['salario'];

    $sql = "INSERT INTO `camareros` (`nombre_cam`, `apellido_cam`, `comision`, `salario`) VALUES ('$nombre_cam', '$apellido_cam', '$comision', '$salario')";


    echo mysqli_query($conexion,$sql);

?>