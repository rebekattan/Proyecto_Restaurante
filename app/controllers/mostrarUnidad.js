$(document).ready(function(){
    $('#tablaUnidad').DataTable({
        ajax : {
            url: 'app/models/mostrarUnidad.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_unidad'},
            {data: 'nom_unidad'},
            {data: 'abrev_unidad'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});