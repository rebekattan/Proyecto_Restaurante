<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nom_marca =$_POST['nom_marca'];

    $sql = "INSERT INTO `marca` (`nom_marca`) VALUES ('$nom_marca')";

    echo mysqli_query($conexion,$sql);

?>