<?php

    include("../../../sql/conexion.php");

    $camarero=[];
    $datos=[];

    //$fechas=explode(" - ", $_POST['fechas']);

    $sql="SELECT e.nombres AS camarero, SUM(p.cantidad_personas) as cantidad
    FROM pedidos p 
    INNER JOIN empleado e ON p.cod_empleado=e.cod_empleado
    GROUP BY p.cod_empleado";

    $resultado=mysqli_query($conn, $sql);

    if(mysqli_num_rows($resultado)>0){
        while($fila=mysqli_fetch_array($resultado)){
            array_push($camarero, $fila['camarero']);
            array_push($datos, $fila['cantidad']);
        }

        $response=array(
            'success'=>true,
            'datos'=>$datos,
            'camarero'=>$camarero,
            'cantidad'=>mysqli_num_rows($resultado)
        );

        mysqli_close($conn);
        unset($camarero, $datos, $resultado);

    }else{
        $response=array('success'=>false, 'error'=>'No fue posible extraer datos de la base de datos', 'resultado'=>$resultado);
    }

    echo json_encode($response);

?>