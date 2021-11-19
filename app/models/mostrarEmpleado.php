<?php
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $sql="SELECT e.cod_empleado, e.nombres, e.apellidos, e.edad, g.nom_genero AS cod_genero,
    e.fecha_nacimiento, e. direccion, c.cargo AS cod_cargo, e. salario
    FROM empleado e
    INNER JOIN genero g ON e.cod_genero=g.cod_genero 
    INNER JOIN cargo c ON e.cod_cargo=c.cod_cargo 
    ORDER BY cod_empleado ASC";

    $resultado=$conexion->prepare($sql);
    $resultado->execute();
    $mostrar=$resultado->fetchAll(PDO::FETCH_ASSOC);
    
    print json_encode($mostrar, JSON_UNESCAPED_UNICODE);
    $conexion=null;
?>