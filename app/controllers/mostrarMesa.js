$(document).ready(function(){
    $('#tablaMesa').DataTable({
        ajax : {
            url: 'app/models/mostrarMesa.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_mesa'},
            {data: 'num_mesa'},
            {data: 'cod_estado'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});