<?php

    include("../../../sql/conexion.php");

    $mesas=[];
    $datos=[];

    $sql="SELECT e.estado mesas, COUNT(*) total
    FROM mesa m
    INNER JOIN estado e ON m.cod_estado=e.cod_estado 
    WHERE m.fecha_mesa= CURDATE()
    GROUP BY e.estado;";

    $resultado=mysqli_query($conn, $sql);

    if(mysqli_num_rows($resultado)>0){
        while($fila=mysqli_fetch_array($resultado)){
            array_push($mesas, $fila['mesas']);
            array_push($datos, $fila['total']);
        }

        $response=array(
            'success'=>true,
            'datos'=>$datos,
            'mesas'=>$mesas,
            'total'=>mysqli_num_rows($resultado)
        );

        mysqli_close($conn);
        unset($mesas, $datos, $resultado);

    }else{
        $response=array('success'=>false, 'error'=>'No fue posible extraer datos de la base de datos');
    }

    echo json_encode($response);

?>