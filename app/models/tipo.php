<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nom_tipo =$_POST['nom_tipo'];
    $desc_tipo= $_POST['desc_tipo'];

    $sql = "INSERT INTO `tipo` (`nom_tipo`, `desc_tipo`) VALUES ('$nom_tipo', '$desc_tipo')";

    echo mysqli_query($conexion,$sql);

?>