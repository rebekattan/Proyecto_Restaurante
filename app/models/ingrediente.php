<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nom_ingredientes =$_POST['nom_ingredientes'];
    $cod_tipo= $_POST['cod_tipo'];
    $cod_marca= $_POST['cod_marca'];
    $costo_unitario_ingr = $_POST['costo_unitario_ingr'];

    $sql = "INSERT INTO `ingredientes` (`nom_ingredientes`, `cod_tipo`, `cod_marca`, `costo_unitario_ingr`) VALUES ('$nom_ingredientes', '$cod_tipo', '$cod_marca', '$costo_unitario_ingr')";

    echo mysqli_query($conexion,$sql);

?>