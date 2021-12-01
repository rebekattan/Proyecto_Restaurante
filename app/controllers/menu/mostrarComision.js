$(document).ready(function(){
    $('#tablaComision').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarComision.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_comision'},
            {data: 'comision'}
        ]
    })
});