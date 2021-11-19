<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $nombres =$_REQUEST['nombres'];
    $apellidos= $_REQUEST['apellidos'];
    $edad= $_REQUEST['edad'];
    $cod_genero =$_REQUEST['cod_genero'];
    $fecha_nacimiento= $_REQUEST['fecha_nacimiento'];
    $direccion= $_REQUEST['direccion'];
    $cod_cargo= $_REQUEST['cod_cargo'];
    $salario = $_REQUEST['salario'];

    $sql = "INSERT INTO empleado (`nombres`, `apellidos`, `edad`,`cod_genero`, `fecha_nacimiento`, 
    `direccion`, `cod_cargo`,`salario`) 
    VALUES ('$nombres', '$apellidos', '$edad', '$cod_genero', '$fecha_nacimiento', '$direccion', 
    '$cod_cargo','$salario')";

    $resultado= mysqli_query($conexion,$sql);

    if($resultado==true){

        $response=array('success'=>true, 'respuesta'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible insertar datos de la bd', 'respuesta'=>$resultado);
    }

    echo json_encode($response);

?>