<?php

header('Content-Type: text/html: charset=ISO-8859-1');
$contexto="";
$correlativo=1;
$condicion="";

$fechas=explode(' - ', $_POST['fechas']);

use Mpdf\Mpdf;

require_once '../../../resources/mpdf/vendor/autoload.php';
require_once '../../../sql/conexion.php';

/*if (isset($_POST['comision'])) {
    $condicion="WHERE c.comision='$_POST[comision]'";
}*/

$sql="SELECT (pt.precio*sum(pd.cantidad)) total_venta, rc.nom_receta AS platillo, p.fecha_pedido AS fecha_pedido
FROM pedido_detalle pd
INNER JOIN pedidos p ON pd.cod_pedidos = p.cod_pedidos
INNER JOIN platillo pt ON pd.cod_platillo = pt.cod_platillo
INNER JOIN receta_catalogo rc ON pt.cod_receta_catalogo = rc.cod_receta_catalogo
WHERE pd.cod_platillo = pt.cod_platillo AND pd.cod_estado='1' AND p.fecha_pedido 
BETWEEN STR_TO_DATE('$fechas[0]', '%d/%m/%Y') AND  STR_TO_DATE('$fechas[1]', '%d/%m/%Y')
GROUP BY pd.cod_pedido_detalle;";

$resultado=mysqli_query($conn, $sql);

if (mysqli_num_rows($resultado)>0) {
    while ($fila=mysqli_fetch_array($resultado)) {
        $contexto = $contexto . '
        <tr>
            <td>'.$correlativo.'</td>
            <td>'.$fila['platillo'].'</td>
            <td>'.$fila['total_venta'].'</td>
            <td>'.$fila['fecha_pedido'].'</td>
        </tr>
        ';
        $correlativo++;
    }

    $tabla_a_imprimir='
    <table border="1" style="width=100%">
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre de Platillo</th>
                <th>Total Vendido</th>
                <th>Fecha</th>
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
                    <h2>Reporte de Ventas por platillo</h2>
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

    $file="../../../media/tmp/reporte_venta.pdf";

    $mpdf->Output($file);

    if (file_exists($file)) {
        mysqli_close($conn);
        unset($correlativo, $contexto, $resultado);

        $response=array('success'=>true, 'url'=>'media/tmp/reporte_venta.pdf', 'resultado'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible crear el archivo pdf');
    }

}else{
    $response=array('success'=>false, 'error'=>'No se encontraron datos en la bd');
}

echo json_encode($response);
?>