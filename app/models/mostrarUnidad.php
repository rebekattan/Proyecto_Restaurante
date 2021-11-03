<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT * FROM `unidad` ORDER BY `cod_unidad` ASC";
    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>