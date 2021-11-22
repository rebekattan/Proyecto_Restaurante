$(document).ready(function(){
    $('#tablaPlatillo').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarPlatillo.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_platillo'},
            {data: 'cod_receta_catalogo'},
            {data: 'raciones'},
            {data: 'precio'},
            {data: 'cod_tipo_platillo'},
            {data: 'existencia'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});