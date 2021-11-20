<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $cod_receta_catalogo =$_REQUEST['cod_receta_catalogo'];
    $cod_empleado =$_REQUEST['cod_empleado'];
    $fecha_asignada =$_REQUEST['fecha_asignada'];

    $sql = "INSERT INTO receta_chef (`cod_receta_catalogo`, `cod_empleado`, `fecha_asignada`) 
    VALUES ('$cod_receta_catalogo', '$cod_empleado', '$fecha_asignada')";

    $resultado= mysqli_query($conexion,$sql);

    if($resultado==true){

        $response=array('success'=>true, 'respuesta'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible insertar datos de la bd', 'respuesta'=>$resultado);
    }

    echo json_encode($response);

?>