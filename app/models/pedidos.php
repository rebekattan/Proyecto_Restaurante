<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $cod_mesa =$_POST['cod_mesa'];
    $fecha_pedido =$_POST['fecha_pedido'];
    $cod_empleado =$_POST['cod_empleado'];
    $cantidad_personas =$_POST['cantidad_personas'];
    $notas =$_POST['notas'];

    $sql = "INSERT INTO pedidos (`cod_mesa`, `fecha_pedido`, `cod_empleado`, `cantidad_personas`, `notas`) 
    VALUES ('$cod_mesa', '$fecha_pedido', '$cod_empleado', '$cantidad_personas', '$notas')";

    $resultado= mysqli_query($conexion,$sql);

    if($resultado==true){

        $response=array('success'=>true, 'respuesta'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible insertar datos de la bd', 'respuesta'=>$resultado);
    }

    echo json_encode($response);

?>