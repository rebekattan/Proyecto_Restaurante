<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT cd.cod_comision_detalle, e.nombres AS cod_empleado, 
    c.comision AS cod_comision 
    FROM comision_detalle cd 
    INNER JOIN empleado e ON cd.cod_empleado=e.cod_empleado 
    INNER JOIN comision c ON cd.cod_comision=c.cod_comision 
    ORDER BY cod_comision_detalle ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>