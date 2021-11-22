$(document).ready(function(){
    $('#tablaRecetaChef').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarRecetaChef.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_receta_chef'},
            {data: 'cod_receta_catalogo'},
            {data: 'cod_empleado'},
            {data: 'fecha_asignada'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});