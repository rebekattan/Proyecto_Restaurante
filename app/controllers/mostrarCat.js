$(document).ready(function(){
    $('#tablaCat').DataTable({
        ajax : {
            url: 'app/models/mostrarCat.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_receta_cat'},
            {data: 'receta'},
            {data: 'desc_receta'},
            {data: 'chef'}
        ]
    })
});