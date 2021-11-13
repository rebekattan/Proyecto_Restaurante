$(document).ready(function(){
    $('#tablaCat').DataTable({
        ajax : {
            url: 'app/models/mostrarCatalogo.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_receta_catalogo'},
            {data: 'nom_receta'},
            {data: 'desc_receta'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});