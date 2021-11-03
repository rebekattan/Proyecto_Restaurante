<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT ingredientes.cod_ingredientes, ingredientes.nom_ingredientes AS nombre_ingrediente, tipo.nom_tipo AS Tipo, marca.nom_marca AS Marca, ingredientes.costo_unitario_ingr FROM `ingredientes` INNER JOIN tipo ON ingredientes.cod_tipo=tipo.cod_tipo INNER JOIN marca ON ingredientes.cod_marca=marca.cod_marca ORDER BY `cod_ingredientes` ASC;";
    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>