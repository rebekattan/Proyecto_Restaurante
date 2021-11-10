$(document).ready(function(){
    $('#tablaComision').DataTable({
        ajax : {
            url: 'app/models/mostrarComision.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_comision'},
            {data: 'comision'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});