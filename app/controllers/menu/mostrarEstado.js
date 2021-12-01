$(document).ready(function(){
    $('#tablaEstado').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarEstado.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_estado'},
            {data: 'estado'}
        ]
    })
});