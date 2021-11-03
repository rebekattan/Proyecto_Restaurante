<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $nom_receta =$_POST['nom_receta'];
    $desc_receta= $_POST['desc_receta'];
    $cod_chef= $_POST['cod_chef'];
    
    $sql = "INSERT INTO `receta_catalogo` (`nom_receta`, `desc_receta`, `cod_chef`) VALUES ('$nom_receta', '$desc_receta', '$cod_chef')";

    echo mysqli_query($conexion,$sql);

?>