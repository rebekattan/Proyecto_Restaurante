<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nom_unidad =$_POST['nom_unidad'];
    $abrev_unidad= $_POST['abrev_unidad'];

    $sql = "INSERT INTO `unidad` (`nom_unidad`, `abrev_unidad`) VALUES ('$nom_unidad', '$abrev_unidad')";

    echo mysqli_query($conexion,$sql);

?>