<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $cod_receta_catalogo =$_POST['cod_receta_catalogo'];
    $cod_productos= $_POST['cod_productos'];
    $cantidad= $_POST['cantidad'];
    $cod_unidad =$_POST['cod_unidad'];
    $cod_empleado= $_POST['cod_empleado'];

    $sql = "INSERT INTO `receta` (`cod_receta_catalogo`, `cod_productos`, `cantidad`,'cod_unidad','cod_empleado') 
    VALUES ('$cod_receta_catalogo', '$cod_productos', '$cantidad', '$cod_unidad', '$cod_empleado')";


    echo mysqli_query($conexion,$sql);

?>