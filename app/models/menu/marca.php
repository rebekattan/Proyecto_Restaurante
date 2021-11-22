<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $nom_marca =$_POST['nom_marca'];

    $sql = "INSERT INTO `marca` (`nom_marca`) VALUES ('$nom_marca')";

    echo mysqli_query($conexion,$sql);

?>