$(document).ready(function(){
    $('#tablaInventario').DataTable({
        ajax : {
            url: 'app/models/mostrarInventario.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_inventario'},
            {data: 'fecha_ingreso'},
            {data: 'cod_productos'},
            {data: 'existencia_max'},
            {data: 'existencia_min'},
            {data: 'existencia_actual'},
            {data: 'cod_unidad'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});