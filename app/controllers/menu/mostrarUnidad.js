$(document).ready(function(){
    $('#tablaUnidad').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarUnidad.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_unidad'},
            {data: 'nom_unidad'},
            {data: 'abrev_unidad'}
        ]
    })
});