$(document).ready(function(){
    $('#tablaTipoProducto').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarTipoProducto.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_tipo_producto'},
            {data: 'nom_tipo_producto'},
            {data: 'desc_tipo_producto'}
        ]
    })
});