<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $num_mesa=$_REQUEST['num_mesa'];
    $cod_estado=$_REQUEST['cod_estado'];

    $sql = "INSERT INTO mesa (`num_mesa`, `cod_estado`) 
    VALUES ('$num_mesa', $cod_estado)";

    $resultado= mysqli_query($conexion,$sql);

    if($resultado==true){

        $response=array('success'=>true, 'respuesta'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible insertar datos de la bd', 'respuesta'=>$resultado);
    }

    echo json_encode($response);
?>