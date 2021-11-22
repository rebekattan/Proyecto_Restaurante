$(document).ready(function(){
    $('#tablaPedidoDetalle').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarPedidoDetalle.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_pedido_detalle'},
            {data: 'cod_pedidos'},
            {data: 'cod_platillo'},
            {data: 'cantidad'},
            {data: 'cod_estado'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    })
});