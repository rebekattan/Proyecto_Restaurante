$(document).ready(function(){
    $('#tablaPedidos').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarPedidos.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_pedidos'},
            {data: 'cod_mesa'},
            {data: 'fecha_pedido'},
            {data: 'cod_empleado'},
            {data: 'cantidad_personas'},
            {data: 'notas'}
        ]
    })
});