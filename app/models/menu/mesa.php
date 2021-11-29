<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $cod_mesa_catalogo=$_REQUEST['cod_mesa_catalogo'];
    $cod_estado=$_REQUEST['cod_estado'];
    $fecha_mesa=$_REQUEST['fecha_mesa'];
    $hora_mesa=$_REQUEST['hora_mesa'];

    $sql = "INSERT INTO mesa (`cod_mesa_catalogo`, `cod_estado`, `fecha_mesa`, `hora_mesa`) 
    VALUES ('$cod_mesa_catalogo', '$cod_estado', '$fecha_mesa', '$hora_mesa')";

    $resultado= mysqli_query($conexion,$sql);

    if($resultado==true){

        $response=array('success'=>true, 'respuesta'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible insertar datos de la bd', 'respuesta'=>$resultado);
    }

    echo json_encode($response);
?>