$(document).ready(function(){
    $('#tablaTipoPlatillo').DataTable({
        ajax : {
            url: 'app/models/mostrarTipoPlatillo.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_tipo_platillo'},
            {data: 'nom_tipo_platillo'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});
