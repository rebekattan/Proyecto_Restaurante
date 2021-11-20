<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT rc.cod_receta_chef, r.nom_receta AS cod_receta_catalogo, 
    e.nombres AS cod_empleado, rc.fecha_asignada 
    FROM receta_chef rc 
    INNER JOIN empleado e ON rc.cod_empleado=e.cod_empleado 
    INNER JOIN receta_catalogo r ON rc.cod_receta_catalogo=r.cod_receta_catalogo 
    ORDER BY cod_receta_chef ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>