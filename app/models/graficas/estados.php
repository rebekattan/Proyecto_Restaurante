<?php

    include("../../../sql/conexion.php");

    $pedidos=[];
    $datos=[];

    $sql="SELECT e.estado pedidos, COUNT(*) total
    FROM pedido_detalle pd
    INNER JOIN estado e ON pd.cod_estado=e.cod_estado 
    GROUP BY e.estado";

    $resultado=mysqli_query($conn, $sql);

    if(mysqli_num_rows($resultado)>0){
        while($fila=mysqli_fetch_array($resultado)){
            array_push($pedidos, $fila['pedidos']);
            array_push($datos, $fila['total']);
        }

        $response=array(
            'success'=>true,
            'datos'=>$datos,
            'pedidos'=>$pedidos,
            'total'=>mysqli_num_rows($resultado)
        );

        mysqli_close($conn);
        unset($pedidos, $datos, $resultado);

    }else{
        $response=array('success'=>false, 'error'=>'No fue posible extraer datos de la base de datos', 'datos'=>$datos,
        'pedidos'=>$pedidos,
        'total'=>mysqli_num_rows($resultado));
    }

    echo json_encode($response);

?>