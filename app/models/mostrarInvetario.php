<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT i.cod_inventario, i.fecha_ingreso, p.nom_producto AS cod_productos, i.existencia_max, 
    i.existencia_min, i.existencia_actual, e.estado AS cod_estado 
    FROM inventario i
    INNER JOIN productos p ON i.cod_productos=p.cod_productos 
    INNER JOIN estado e ON i.cod_estado=e.cod_estado 
    ORDER BY cod_inventario ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>