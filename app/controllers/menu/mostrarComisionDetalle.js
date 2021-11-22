$(document).ready(function(){
    $('#tablaComisionDetalle').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarComisionDetalle.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_comision_detalle'},
            {data: 'cod_empleado'},
            {data: 'cod_comision'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});