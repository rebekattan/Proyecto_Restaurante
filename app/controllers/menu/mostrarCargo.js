$(document).ready(function(){
    
    $('#tablaCargo').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarCargo.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_cargo'},
            {data: 'cargo'},
            {defaultContent: '<button>Editar</button><button>Eliminar</button>'}
        ]
    });
    editarCargo("#tablaCargo tbody", table);
});

var editarCargo = function(tbody, table){
    $(tbody).on("click","button.editar",function(){
        var data = table.row( $(this).parents("tr")).data();
        var cargo = $("#cargo").val(data.cargo);
    });
}