<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT r.cod_receta, rc.nom_receta AS cod_receta_catalogo, p.nom_producto AS cod_productos, 
    r.cantidad, u.nom_unidad AS cod_unidad
    FROM receta r
    INNER JOIN receta_catalogo rc ON r.cod_receta_catalogo=rc.cod_receta_catalogo
    INNER JOIN productos p ON r.cod_productos=p.cod_productos 
    INNER JOIN unidad u ON r.cod_unidad=u.cod_unidad  
    ORDER BY cod_receta ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>