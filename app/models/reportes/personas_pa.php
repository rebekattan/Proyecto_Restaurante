<?php
    require_once '../../../sql/conexion.php';
    require_once '../../../resources/fpdf/fpdf.php';

    class PDF extends FPDF{
        function Header(){
            $this->SetFont('Arial', 'B', '12');
            $this->Ln(5);
            $this->Cell(0, 0, utf8_decode('Reporte de Personas Atendidas por Mesa'), 0, 2, 'C');
            $this->Cell(0, 9, utf8_decode('Filtro por rango de fechas'), 0, 2, 'C');
        }
        function Footer(){
            $this->SetY(-15);
            $this->SetFont('Arial', 'I', '8');
            $this->Cell(100, 10, 'Página'.$this->PageNo().'/{nb}', 0, 0, 'L');
            $this->Cell(100, 10, 'Fecha de Impresión: '.date('d/m/Y H:i:s'), 0, 0, 'R');
        }
    }

    $fechas=explode(' - ', $_POST['fechas']);
    
    
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

    $resultado=mysqli_query($conn,$sql);

    if(mysqli_num_rows($resultado)>0){
        $pdf= new PDF("P","mm","Letter");
        $pdf->AliasNbPages();
        $pdf->AddPage();
        $pdf->Ln(15);

        $pdf->Cell(10, 7, 'N°', 1, 0, 'C');
        $pdf->Cell(30, 7, 'Número de Mesa', 1, 0, 'C');
        $pdf->Cell(30, 7, 'Personas Atendidas', 1, 0, 'C');
        $pdf->Cell(90, 7, 'Nombre del Camarero', 1, 0, 'C');
        $pdf->Cell(50, 7, 'Fecha de Pedido', 1, 1, 'C');

        $i=1;

        $pdf->SetFont('Arial', '', 10);

        while ($mysqli_fetch_array($resultado)) {
            $pdf->Cell(10, 7, $i, 1, 0, 'C');
            $pdf->Cell(30, 7, $fila['mesa'], 1, 0, 'L');
            $pdf->Cell(30, 7, $fila['p_atendidas'], 1, 0, 'L');
            $pdf->Cell(90, 7, $fila['camarero'], 1, 0, 'L');
            $pdf->Cell(50, 7, $fila['fecha_pedido'], 1, 1, 'L');
            $i++;
        }

        $file="../../../media/tmp/documento_imprimible.pdf";
        $pdf->Output($file);

        if(file_exists($file)){
            $response=array('success'=>true, 'url'=>'media/tmp/documento_imprimible.pdf', 'resultado'=>$resultado);
        }else{
            $response=array('success'=>false, 'error'=>'No fue posible crear el archivo pdf', 'resultado'=>$resultado);
        }

    }else{
        $response=array('success'=>false, 'error'=>'No se encontraron datos en la bd');
    }

    echo json_encode($response);
?>