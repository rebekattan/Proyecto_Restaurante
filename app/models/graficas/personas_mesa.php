<?php

    include("../../../sql/conexion.php");

    $mesa=[];
    $datos=[];

    $fechas=explode(" - ", $_POST['fechas']);

    $sql="SELECT m.cod_mesa_catalogo AS mesa, SUM(p.cantidad_personas) cantidad
    FROM pedidos p
    INNER JOIN mesa m ON p.cod_mesa=m.cod_mesa 
    INNER JOIN mesa_catalogo mc ON m.cod_mesa_catalogo=mc.cod_mesa_catalogo 
    WHERE p.cod_mesa=m.cod_mesa AND p.fecha_pedido BETWEEN STR_TO_DATE('$fechas[0]', '%d/%m/%Y') 
    AND  STR_TO_DATE('$fechas[1]', '%d/%m/%Y')
    GROUP BY m.cod_mesa_catalogo";

    $resultado=mysqli_query($conn, $sql);

    if(mysqli_num_rows($resultado)>0){
        while($fila=mysqli_fetch_array($resultado)){
            array_push($mesa, $fila['mesa']);
            array_push($datos, $fila['cantidad']);
        }

        $response=array(
            'success'=>true,
            'datos'=>$datos,
            'mesa'=>$mesa,
            'cantidad'=>mysqli_num_rows($resultado)
        );

        mysqli_close($conn);
        unset($mesa, $datos, $resultado);

    }else{
        $response=array('success'=>false, 'error'=>'No fue posible extraer datos de la base de datos');
    }

    echo json_encode($response);

?>