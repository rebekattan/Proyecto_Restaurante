$(document).ready(function(){
    $('#tablaReceta').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarReceta.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_receta'},
            {data: 'cod_receta_catalogo'},
            {data: 'cod_productos'},
            {data: 'cantidad'},
            {data: 'cod_unidad'}
        ]
    })
});