<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $cod_receta_catalogo =$_POST['cod_receta_catalogo'];
    $raciones =$_POST['raciones'];
    $precio =$_POST['precio'];
    $cod_tipo_platillo =$_POST['cod_tipo_platillo'];
    $existencia =$_POST['existencia'];

    $sql = "INSERT INTO `platillo` (`cod_receta_catalogo`, `raciones`, 'precio', 'cod_tipo_platillo', 'existencia') 
    VALUES ('$cod_receta_catalogo', '$raciones', '$precio', '$cod_tipo_platillo', '$existencia')";

    echo mysqli_query($conexion,$sql);

?>