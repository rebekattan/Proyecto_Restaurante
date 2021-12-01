<?php

header('Content-Type: text/html: charset=ISO-8859-1');
$contexto="";
$correlativo=1;
$condicion="";

//$fechas=explode(' - ', $_POST['fechas']);

use Mpdf\Mpdf;

require_once '../../../resources/mpdf/vendor/autoload.php';
require_once '../../../sql/conexion.php';

if (isset($_POST['comision'])) {
    $condicion="WHERE c.comision='$_POST[comision]'";
}

$sql="SELECT  concat_ws(
    ' ',
    e.nombres,
    e.apellidos
    ) camarero, c.comision AS comision, SUM(p.cantidad_personas) as cantidad,
    ROUND(((CAST(c.comision AS UNSIGNED)/100)*p.cantidad_personas),2) AS importe_comision,
    (ROUND(((CAST(c.comision AS UNSIGNED)/100)*p.cantidad_personas),2)*e.salario) AS total_comision,e.salario AS salario,
    ((ROUND(((CAST(c.comision AS UNSIGNED)/100)*p.cantidad_personas),2)*e.salario)+e.salario) AS total_salario
    FROM comision_detalle cd
    INNER JOIN empleado e ON cd.cod_empleado=e.cod_empleado
    INNER JOIN comision c ON cd.cod_comision=c.cod_comision
    INNER JOIN pedidos p ON p.cod_empleado=e.cod_empleado
    $condicion
    GROUP BY p.cod_empleado";

$resultado=mysqli_query($conn, $sql);

if (mysqli_num_rows($resultado)>0) {
    while ($fila=mysqli_fetch_array($resultado)) {
        $contexto = $contexto . '
        <tr>
            <td>'.$correlativo.'</td>
            <td>'.$fila['camarero'].'</td>
            <td>'.$fila['comision'].'</td>
            <td>'.$fila['cantidad'].'</td>
            <td>'.$fila['importe_comision'].'</td>
            <td>'.$fila['total_comision'].'</td>
            <td>'.$fila['salario'].'</td>
            <td>'.$fila['total_salario'].'</td>
        </tr>
        ';
        $correlativo++;
    }

    $tabla_a_imprimir='
    <table border="1" style="width=100%">
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre de camarero/a</th>
                <th>Comisión</th>
                <th>N° Personas Atendidas</th>
                <th>Importe Comision</th>
                <th>Total Comision</th>
                <th>Salario</th>
                <th>Total Salario</th>
            </tr>
        </thead>
        <tbody>'.$contexto.'</tbody>
    </table>';

    $mpdf=new Mpdf(['mode'=>'utf8', 'format'=>'Letter-P', 'setAutoTopMargin'=>'stretch']);

    $mpdf->allow_charset_conversion=true;

    $mpdf->SetHTMLHeader(
        '
        <table border="1" style="width=100%; text-align: center; color: blue;">
            <tr>
                <td>
                    <h2>Reporte de Comisión por Camarero</h2>
                </td>
            </tr>
        </table>
        '
    );

    $mpdf->setHTMLFooter(
        '
        <table style="width=100%;">
            <tr>
                <td style="text-align: left;">Página {PAGENO} de {nb}</td>
                <td style="text-align: right;">Fecha de Impresión: '.date('d/m/Y H:i:s').'</td>
            </tr>
        </table>
        '
    );

    $mpdf->charset_in='utf8';

    $mpdf->writeHTML($tabla_a_imprimir);

    $file="../../../media/tmp/reporte_cam.pdf";

    $mpdf->Output($file);

    if (file_exists($file)) {
        mysqli_close($conn);
        unset($correlativo, $contexto, $resultado);

        $response=array('success'=>true, 'url'=>'media/tmp/reporte_cam.pdf', 'resultado'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible crear el archivo pdf');
    }

}else{
    $response=array('success'=>false, 'error'=>'No se encontraron datos en la bd');
}

echo json_encode($response);
?>