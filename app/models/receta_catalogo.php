<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nom_receta =$_POST['nom_receta'];
    $desc_receta= $_POST['desc_receta'];
    
    $sql = "INSERT INTO `receta_catalogo` (`nom_receta`, `desc_receta`) VALUES ('$nom_receta', '$desc_receta')";

    echo mysqli_query($conexion,$sql);

?>