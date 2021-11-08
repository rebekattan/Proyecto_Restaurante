$(document).ready(function(){
    $('#tablaEmpleado').DataTable({
        ajax : {
            url: 'app/models/mostrarEmpleado.php',
            dataSrc:''
        },
        columns :[
            {data: 'cod_empleado'},
            {data: 'nombres'},
            {data: 'apellidos'},
            {data: 'edad'},
            {data: 'cod_genero'},
            {data: 'fecha_nacimiento'},
            {data: 'direccion'},
            {data: 'cod_cargo'},
            {data: 'salario'}
        ]
    })
});