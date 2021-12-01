<?php

    include("../../../sql/conexion.php");

    $comision=[];
    $datos=[];

    $sql="SELECT c.comision AS comision, COUNT(*) as total
    FROM comision_detalle cd
    INNER JOIN empleado e ON cd.cod_empleado=e.cod_empleado
    INNER JOIN comision c ON cd.cod_comision=c.cod_comision
    GROUP BY c.comision";

    $resultado=mysqli_query($conn, $sql);

    if(mysqli_num_rows($resultado)>0){
        while($fila=mysqli_fetch_array($resultado)){
            array_push($comision, $fila['comision']);
            array_push($datos, $fila['total']);
        }

        $response=array(
            'success'=>true,
            'datos'=>$datos,
            'comision'=>$comision,
            'total'=>mysqli_num_rows($resultado)
        );

        mysqli_close($conn);
        unset($comision, $datos, $resultado);

    }else{
        $response=array('success'=>false, 'error'=>'No fue posible extraer datos de la base de datos', 'resultado'=>$resultado);
    }

    echo json_encode($response);

?>