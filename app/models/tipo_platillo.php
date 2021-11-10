<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nom_tipo_platillo =$_POST['nom_tipo_platillo'];

    $sql = "INSERT INTO `tipo_platillo` (`nom_tipo_platillo`) VALUES ('$nom_tipo_platillo')";

    echo mysqli_query($conexion,$sql);

?>