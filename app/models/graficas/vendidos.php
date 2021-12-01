<?php

include("../../../sql/conexion.php");

    $platillo=[];
    $datos1=[];
    

    $fechas=explode(" - ", $_POST['fechas']);

    $sql="SELECT (pt.precio*sum(pd.cantidad)) total_venta, rc.nom_receta AS platillo
        FROM pedido_detalle pd
        INNER JOIN pedidos p ON pd.cod_pedidos = p.cod_pedidos
        INNER JOIN platillo pt ON pd.cod_platillo = pt.cod_platillo
        INNER JOIN receta_catalogo rc ON pt.cod_receta_catalogo = rc.cod_receta_catalogo
        WHERE pd.cod_platillo = pt.cod_platillo AND pd.cod_estado='1' AND p.fecha_pedido BETWEEN STR_TO_DATE('$fechas[0]', '%d/%m/%Y') 
        AND  STR_TO_DATE('$fechas[1]', '%d/%m/%Y')
        GROUP BY pd.cod_pedido_detalle; ";

    $resultado=mysqli_query($conn, $sql);

    if(mysqli_num_rows($resultado)>0){
        while($fila=mysqli_fetch_array($resultado)){
            array_push($datos1, $fila['total_venta']);
            array_push($platillo, $fila['platillo']);
        }

        $response=array(
            'success'=>true,
            'datos1'=>$datos1,
            'platillo'=>$platillo,
            'total'=>mysqli_num_rows($resultado)
        );

        mysqli_close($conn);
        unset($platillo, $datos1, $resultado);

    }else{
        $response=array('success'=>false, 'error'=>'No fue posible extraer datos de la base de datos', 'resultado'=>$resultado);
    }

    echo json_encode($response);

?>