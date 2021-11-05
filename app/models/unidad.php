<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $nom_unidad =$_POST['nom_unidad'];
    $abrev_unidad= $_POST['abrev_unidad'];

    $sql = "INSERT INTO `unidad` (`nom_unidad`, `abrev_unidad`) VALUES ('$nom_unidad', '$abrev_unidad')";

    echo mysqli_query($conexion,$sql);

?>