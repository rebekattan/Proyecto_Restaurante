<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT p.cod_platillo, rc.nom_receta AS cod_receta_catalogo, p.raciones, p.precio, 
    tp.nom_tipo_platillo AS cod_tipo_platillo, p.existencia 
    FROM platillo p
    INNER JOIN receta_catalogo rc ON p.cod_receta_catalogo=rc.cod_receta_catalogo 
    INNER JOIN tipo_platillo tp ON p.cod_tipo_platillo=tp.cod_tipo_platillo 
    ORDER BY cod_platillo ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>