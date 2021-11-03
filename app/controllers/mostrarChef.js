$(document).ready(function(){
    $('#tablaChef').DataTable({
        ajax : {
            url: 'app/models/mostrarChef.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_chef'},
            {data: 'nom_chef'},
            {data: 'apellido_chef'},
            {data: 'salario'}
        ]
    })
});