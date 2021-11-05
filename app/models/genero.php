<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $nom_genero =$_POST['nom_genero'];

    $sql = "INSERT INTO `genero` (`nom_genero`) VALUES ('$nom_genero')";

    echo mysqli_query($conexion,$sql);

?>