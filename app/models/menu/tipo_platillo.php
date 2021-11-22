<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $nom_tipo_platillo =$_POST['nom_tipo_platillo'];

    $sql = "INSERT INTO `tipo_platillo` (`nom_tipo_platillo`) VALUES ('$nom_tipo_platillo')";

    echo mysqli_query($conexion,$sql);

?>