$(document).ready(function(){
    
    $('#tablaGenero').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarGenero.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_genero'},
            {data: 'nom_genero'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});

