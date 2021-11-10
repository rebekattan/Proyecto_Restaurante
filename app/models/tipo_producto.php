<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nom_tipo_producto =$_POST['nom_tipo_producto'];
    $desc_tipo_producto= $_POST['desc_tipo_producto'];

    $sql = "INSERT INTO `tipo_producto` (`nom_tipo_producto`, `desc_tipo_producto`) VALUES ('$nom_tipo_producto', '$desc_tipo_producto')";

    echo mysqli_query($conexion,$sql);

?>