$(document).ready(function(){
    $('#tablaReceta').DataTable({
        ajax : {
            url: 'app/models/mostraReceta.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_receta'},
            {data: 'cod_receta_catalogo'},
            {data: 'cod_productos'},
            {data: 'cantidad'},
            {data: 'cod_unidad'},
            {data: 'cod_empleado'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});