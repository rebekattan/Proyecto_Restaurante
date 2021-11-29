<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT m.cod_mesa, mc.num_mesa AS cod_mesa_catalogo, 
    e.estado AS cod_estado, m.fecha_mesa, m.hora_mesa 
    FROM mesa m 
    INNER JOIN estado e ON m.cod_estado=e.cod_estado 
    INNER JOIN mesa_catalogo mc ON m.cod_mesa_catalogo=mc.cod_mesa_catalogo 
    WHERE m.cod_estado='3'
    ORDER BY cod_mesa ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>