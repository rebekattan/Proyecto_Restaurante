<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $cod_pedidos =$_POST['cod_pedidos'];
    $cod_platillo =$_POST['cod_platillo'];
    $cantidad =$_POST['cantidad'];
    $cod_estado =$_POST['cod_estado'];

    $sql = "INSERT INTO pedido_detalle (`cod_pedidos`, `cod_platillo`, `cantidad`, `cod_estado`) 
    VALUES ('$cod_pedidos', '$cod_platillo', '$cantidad', '$cod_estado')";

    $resultado= mysqli_query($conexion,$sql);

    if($resultado==true){

        $response=array('success'=>true, 'respuesta'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible insertar datos de la bd', 'respuesta'=>$resultado);
    }

    echo json_encode($response);

?>