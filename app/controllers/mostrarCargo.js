$(document).ready(function(){
    $('#tablaCargo').DataTable({
        ajax : {
            url: 'app/models/mostrarCargo.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_cargo'},
            {data: 'cargo'},
        ]
    })
});