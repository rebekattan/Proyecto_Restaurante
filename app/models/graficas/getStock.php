<?php
    include("../../../sql/conexion.php");

    $productos =[];
    $existencias=[];
    $maxima=[];

    $sql="SELECT p.nom_producto productos, i.existencia_actual existencias, i.existencia_max maxima 
    FROM inventario i 
    INNER JOIN productos p ON i.cod_productos=p.cod_productos 
    ORDER BY fecha_ingreso;";

    $resultado=mysqli_query($conn, $sql);

    if (mysqli_num_rows($resultado)>0){
        while($fila=mysqli_fetch_array($resultado)){
            array_push($productos, $fila['productos']);
            array_push($existencias,$fila['existencias']);
            array_push($maxima, $fila['maxima']);
        }
        $response=array(
            'success'=>true,
            'maxima'=>$maxima,
            'existencias'=>$existencias,
            'productos'=>$productos,
            'total'=>mysqli_num_rows($resultado)
        );
        mysqli_close($conn);
        unset($productos,$existencias,$maxima,$resultado);
    } else {
        $response=array('success'=>false, 'error'=> 'Operación fallida: No se pudo extraer datos de la BD');
    }
    echo json_encode($response);
?>