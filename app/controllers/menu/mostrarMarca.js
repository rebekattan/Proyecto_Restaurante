$(document).ready(function(){
    $('#tablaMarca').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarMarca.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_marca'},
            {data: 'nom_marca'}
        ]
    })
});