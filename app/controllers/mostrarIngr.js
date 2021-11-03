$(document).ready(function(){
    $('#tablaIngr').DataTable({
        ajax : {
            url: 'app/models/mostrarIngr.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_ingredientes'},
            {data: 'nombre_ingrediente'},
            {data: 'Tipo'},
            {data: 'Marca'},
            {data: 'costo_unitario_ingr'}
        ]
    })
});