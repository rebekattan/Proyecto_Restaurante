$(document).ready(function(){
    $('#tablaMesa').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarMesa.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_mesa'},
            {data: 'cod_mesa_catalogo'},
            {data: 'cod_estado'},
            {data: 'fecha_mesa'},
            {data: 'hora_mesa'}
        ]
    })
});