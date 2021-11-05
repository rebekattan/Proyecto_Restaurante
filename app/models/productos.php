<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $nom_producto =$_POST['nom_producto'];
    $cod_tipo= $_POST['cod_tipo_producto'];
    $cod_marca= $_POST['cod_marca'];
    $precio_unitario = $_POST['precio_unitario'];

    $sql = "INSERT INTO `productos` (`nom_producto`, `cod_tipo`, `cod_marca`, `precio_unitario`) VALUES ('$nom_producto', '$cod_tipo', '$cod_marca', '$precio_unitario')";

    echo mysqli_query($conexion,$sql);

?>