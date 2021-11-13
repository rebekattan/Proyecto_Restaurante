<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT p.cod_productos, p.nom_producto, tp.nom_tipo_producto AS cod_tipo_producto, m.nom_marca AS cod_marca, 
    p.precio_unitario 
    FROM productos p
    INNER JOIN tipo_producto tp ON p.cod_tipo_producto=tp.cod_tipo_producto 
    INNER JOIN marca m ON p.cod_marca=m.cod_marca 
    ORDER BY cod_productos ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>