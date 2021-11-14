<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT m.cod_mesa, m.num_mesa, 
    e.estado AS cod_estado 
    FROM mesa m 
    INNER JOIN estado e ON m.cod_estado=e.cod_estado 
    ORDER BY cod_mesa ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>