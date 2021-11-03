$(document).ready(function(){
    $('#tablaCam').DataTable({
        ajax : {
            url: 'app/models/mostrarCam.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_camarero'},
            {data: 'nombre_cam'},
            {data: 'apellido_cam'},
            {data: 'comision'},
            {data: 'salario'}
        ]
    })
});