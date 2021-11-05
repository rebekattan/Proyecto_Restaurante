<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $fecha_ingreso= $_POST['fecha_ingreso'];
    $cod_productos= $_POST['cod_productos'];
    $existencia_max= $_POST['existencia_max'];
    $existencia_min= $_POST['existencia_min'];
    $existencia_actual= $_POST['existencia_actual'];
    $cod_estado= $_POST['cod_estado'];

    $sql = "INSERT INTO `inventario` ('fecha_ingreso', 'cod_productos', 'existencia_max', 'existencia_min', 'existencia_actual', 'cod_estado') 
    VALUES ('$fecha_ingreso', '$cod_productos', '$existencia_max', '$existencia_min', '$existencia_actual', '$cod_estado')";


    echo mysqli_query($conexion,$sql);

?>