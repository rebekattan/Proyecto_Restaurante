<?php

include("../../../sql/conexion.php");

    $platillos=[];
    $datos=[]; 

    $sql="SELECT rc.nom_receta platillos, SUM(pd.cantidad) vendidos
    FROM platillo p
    INNER JOIN receta_catalogo rc ON p.cod_receta_catalogo = rc.cod_receta_catalogo
    INNER JOIN pedido_detalle pd ON p.cod_platillo=pd.cod_platillo
    GROUP BY rc.nom_receta";

    $resultado=mysqli_query($conn, $sql);

    if(mysqli_num_rows($resultado)>0){
        while($fila=mysqli_fetch_array($resultado)){
            array_push($platillos, $fila['platillos']);
            array_push($datos, $fila['vendidos']);  
        }

        $response=array(
            'success'=>true,
            'datos'=>$datos,
            'platillos'=>$platillos,
            'vendidos'=>mysqli_num_rows($resultado)
        );

        mysqli_close($conn);
        unset($platillos, $datos, $resultado);

    }else{
        $response=array('success'=>false, 'error'=>'No fue posible extraer datos de la base de datos');
    }

    echo json_encode($response);

?>