<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT p.cod_pedidos, m.num_mesa AS cod_mesa, p.fecha_pedido, 
    e.nombres AS cod_empleado , p.cantidad_personas, p.notas 
    FROM pedidos p
    INNER JOIN mesa m ON p.cod_mesa=m.cod_mesa 
    INNER JOIN empleado e ON p.cod_empleado=e.cod_empleado 
    ORDER BY cod_pedidos ASC";

    //(SELECT nombres FROM empleado WHERE cod_cargo = '1') AS cod_emleado

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>