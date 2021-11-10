$(document).ready(function(){
    $('#tablaEstado').DataTable({
        ajax : {
            url: 'app/models/mostrarEstado.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_estado'},
            {data: 'estado'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});