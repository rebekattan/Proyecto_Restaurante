<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $cod_receta_catalogo =$_REQUEST['cod_receta_catalogo'];
    $raciones =$_REQUEST['raciones'];
    $precio =$_REQUEST['precio'];
    $cod_tipo_platillo =$_REQUEST['cod_tipo_platillo'];
    $existencia =$_REQUEST['existencia'];

    $sql = "INSERT INTO platillo (`cod_receta_catalogo`, `raciones`, `precio`, `cod_tipo_platillo`, `existencia`) 
    VALUES ('$cod_receta_catalogo', '$raciones', '$precio', '$cod_tipo_platillo', '$existencia')";

    $resultado= mysqli_query($conexion,$sql);

    if($resultado==true){

        $response=array('success'=>true, 'respuesta'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible insertar datos de la bd', 'respuesta'=>$resultado);
    }

echo json_encode($response);

?>