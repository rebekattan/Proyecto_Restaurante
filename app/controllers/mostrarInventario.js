$(document).ready(function(){
    $('#tablaIventario').DataTable({
        ajax : {
            url: 'app/models/mostrarIventario.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_inventario'},
            {data: 'fecha_ingreso'},
            {data: 'cod_productos'},
            {data: 'existencia_max'},
            {data: 'existencia_min'},
            {data: 'existencia_actual'},
            {data: 'cod_estado'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});