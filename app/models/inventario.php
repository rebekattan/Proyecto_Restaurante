<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $fecha_ingreso= $_REQUEST['fecha_ingreso'];
    $cod_productos= $_REQUEST['cod_productos'];
    $existencia_max= $_REQUEST['existencia_max'];
    $existencia_min= $_REQUEST['existencia_min'];
    $existencia_actual= $_REQUEST['existencia_actual'];
    $cod_unidad= $_REQUEST['cod_unidad'];

    $sql = "INSERT INTO inventario (`fecha_ingreso`, `cod_productos`, `existencia_max`, `existencia_min`, `existencia_actual`, `cod_unidad`) 
    VALUES ('$fecha_ingreso', '$cod_productos', '$existencia_max', '$existencia_min', '$existencia_actual', '$cod_unidad')";


    $resultado= mysqli_query($conexion,$sql);

    //mysqli_num_rows($resultado)>0
    if($resultado==1){

        $response=array('success'=>true, 'respuesta'=>$resultado);
        mysqli_close($conexion);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible insertar datos de la bd');
    }

    echo json_encode($response);

?>