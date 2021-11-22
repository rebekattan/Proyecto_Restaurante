<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $cod_receta_catalogo =$_REQUEST['cod_receta_catalogo'];
    $cod_productos= $_REQUEST['cod_productos'];
    $cantidad= $_REQUEST['cantidad'];
    $cod_unidad =$_REQUEST['cod_unidad'];

    $sql = "INSERT INTO receta (`cod_receta_catalogo`, `cod_productos`, `cantidad`,`cod_unidad`) 
    VALUES ('$cod_receta_catalogo', '$cod_productos', '$cantidad', '$cod_unidad')";
    
    $resultado= mysqli_query($conexion,$sql);

    if($resultado==true){

        $response=array('success'=>true, 'respuesta'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible insertar datos de la bd', 'respuesta'=>$resultado);
    }

    echo json_encode($response);

?>