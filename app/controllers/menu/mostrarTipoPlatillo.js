$(document).ready(function(){
    $('#tablaTipoPlatillo').DataTable({
        ajax : {
            url: 'app/models/menu/mostrarTipoPlatillo.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_tipo_platillo'},
            {data: 'nom_tipo_platillo'}
        ]
    })
});
