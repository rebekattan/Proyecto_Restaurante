$(document).ready(function(){
    $('#tablaTipo').DataTable({
        ajax : {
            url: 'app/models/mostrarTipo.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_tipo'},
            {data: 'nom_tipo'},
            {data: 'desc_tipo'}
        ]
    })
});