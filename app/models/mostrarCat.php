<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT receta_catalogo.cod_receta_cat, receta_catalogo.nom_receta AS receta, receta_catalogo.desc_receta, chef.nom_chef AS chef FROM `receta_catalogo` INNER JOIN chef ON receta_catalogo.cod_chef=chef.cod_chef ORDER BY `cod_receta_cat` ASC;";
    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>