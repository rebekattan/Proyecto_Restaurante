<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $nom_producto =$_REQUEST['nom_producto'];
    $cod_tipo_producto= $_REQUEST['cod_tipo_producto'];
    $cod_marca= $_REQUEST['cod_marca'];
    $precio_unitario = $_REQUEST['precio_unitario'];

    $sql = "INSERT INTO productos (`nom_producto`, `cod_tipo_producto`, `cod_marca`, `precio_unitario`) 
    VALUES ('$nom_producto', '$cod_tipo_producto', '$cod_marca', '$precio_unitario')";

    $resultado= mysqli_query($conexion,$sql);

    if($resultado==true){

        $response=array('success'=>true, 'respuesta'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible insertar datos de la bd', 'respuesta'=>$resultado);
    }

    echo json_encode($response);

?>