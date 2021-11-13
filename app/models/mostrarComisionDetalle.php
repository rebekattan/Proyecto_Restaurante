<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT comision_detalle.cod_comision_detalle, empleado.nombres AS Empleado, 
    comision.comision AS Comisión 
    FROM `comision_detalle` 
    INNER JOIN empleado  ON comision_detalle.cod_empleado=empleado.cod_empleado 
    INNER JOIN comision  ON comision_detalle.cod_comision=comision.cod_comision 
    ORDER BY `cod_comision_detalle` ASC;";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>