$(document).ready(function(){
    $('#tablaProductos').DataTable({
        ajax : {
            url: 'app/models/mostrarProducto.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_productos'},
            {data: 'nom_producto'},
            {data: 'cod_tipo_producto'},
            {data: 'cod_marca'},
            {data: 'precio_unitario'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});