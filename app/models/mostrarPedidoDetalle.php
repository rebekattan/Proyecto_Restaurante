<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT p.cod_pedido_detalle, pd.cod_pedidos, 
    pt.nom_platillo AS cod_platillo , pd.cantidad, e.estado AS cod_estado 
    FROM pedido_detalle pd
    INNER JOIN platillo pt ON pd.cod_platillo=pt.cod_platillo 
    INNER JOIN estado e ON pd.cod_estado=e.cod_estado 
    ORDER BY cod_pedido_detalle ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>