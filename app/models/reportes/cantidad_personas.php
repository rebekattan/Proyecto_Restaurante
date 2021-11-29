<?php

header('Content-Type: text/html: charset=ISO-8859-1');
$contexto="";
$correlativo=1;
$condicion="";

$fechas=explode(' - ', $_POST['fechas']);

use Mpdf\Mpdf;

require_once '../../../resources/mpdf/vendor/autoload.php';
require_once '../../../sql/conexion.php';

/*if (isset($_POST['genero'])) {
    $condicion="AND g.nom_genero='$_POST[genero]'";
}*/

$sql="SELECT  m.cod_mesa_catalogo AS mesa, p.cantidad_personas AS p_atendidas, CONCAT_WS(
    ' ',
    e.nombres,
    e.apellidos
) camarero, DATE_FORMAT(p.fecha_pedido, '%d/%m/%Y') fecha_pedido
FROM pedidos p
INNER JOIN mesa m ON p.cod_mesa=m.cod_mesa 
INNER JOIN mesa_catalogo mc ON m.cod_mesa_catalogo=mc.cod_mesa_catalogo 
INNER JOIN empleado e ON p.cod_empleado=e.cod_empleado
WHERE p.cod_mesa=m.cod_mesa AND p.fecha_pedido BETWEEN STR_TO_DATE('$fechas[0]', '%d/%m/%Y') 
AND STR_TO_DATE('$fechas[1]', '%d/%m/%Y') 
ORDER BY m.cod_mesa_catalogo ASC;";

$resultado=mysqli_query($conn, $sql);

if (mysqli_num_rows($resultado)>0) {
    while ($fila=mysqli_fetch_array($resultado)) {
        $contexto = $contexto . '
        <tr>
            <td>'.$correlativo.'</td>
            <td>'.$fila['mesa'].'</td>
            <td>'.$fila['p_atendidas'].'</td>
            <td>'.$fila['camarero'].'</td>
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
                <th>Número de Mesa</th>
                <th>Personas Atendidas</th>
                <th>Nombre del Camarero/a</th>
                <th>Fecha de Pedido</th>
            </tr>
        </thead>
        <tbody>'.$ontexto.'</tbody>
    </table>';

    $mpdf=new Mpdf(['mode'=>'utf8', 'format'=>'Letter-P', 'setAutoTopMargin'=>'stretch']);

    $mpdf->allow_charset_conversion=true;

    $mpdf->SetHTMLHeader(
        '
        <table border="1" style="width=100%; text-align:center; color:blue;">
            <tr>
                <td>
                    <h2>Reporte de Personas Atendidas por Mesa</h2>
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

    $file="../../../media/tmp/documento_imprimible.pdf";

    $mpdf->Output($file);

    if (file_exists($file)) {
        mysqli_close($conn);
        unset($correlativo, $contexto, $resultado);

        $response=array('success'=>true, 'url'=>'media/tmp/documento_imprimible.pdf', 'resultado'=>$resultado);
    }else{
        $response=array('success'=>false, 'error'=>'No fue posible crear el archivo pdf');
    }

}else{
    $response=array('success'=>false, 'error'=>'No se encontraron datos en la bd');
}

echo json_encode($response);
?>