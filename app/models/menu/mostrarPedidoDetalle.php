<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT pd.cod_pedido_detalle, pd.cod_pedidos, 
    pd.cod_platillo , pd.cantidad, e.estado AS cod_estado 
    FROM pedido_detalle pd
    INNER JOIN estado e ON pd.cod_estado=e.cod_estado 
    ORDER BY cod_pedido_detalle ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>