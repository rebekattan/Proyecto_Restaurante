$(document).ready(function(){
    $('#tablaMesaCatalogo').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarMesaCatalogo.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_mesa_catalogo'},
            {data: 'num_mesa'}
        ]
    })
});