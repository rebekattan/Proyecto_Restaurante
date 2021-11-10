<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nom_genero =$_POST['nom_genero'];

    $sql = "INSERT INTO `genero` (`nom_genero`) VALUES ('$nom_genero')";

    echo mysqli_query($conexion,$sql);

?>
