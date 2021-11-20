$(document).ready(function(){
    let $mesa = document.querySelector('#cod_mesa');
    let $empleado = document.querySelector('#cod_empleado');
    
    function cargarMesa(){
        $.ajax({
            type: "GET",
            url: "app/models/mostrarMesa.php",
            success:function(response){
                const mesas = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                mesas.forEach(mesa => {
                    template += `<option value="${mesa.cod_mesa}">${mesa.num_mesa}</option>`
                })
    
                $mesa.innerHTML = template;
            }
        });
    }

    function cargarEmpleado(){
        $.ajax({
            type: "GET",
            url: "app/models/mostrarCamarero.php",
            success:function(response){
                const empleados = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                empleados.forEach(empleado => {
                    template += `<option value="${empleado.cod_empleado}">${empleado.nombres}</option>`
                })
    
                $empleado.innerHTML = template;
            }
        });
    }

    cargarMesa();
    cargarEmpleado();
    
    $('#btn_frm_pedidos').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_pedidos').serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "app/models/pedidos.php",
            data: datos,
            success:function(response){
                console.log(response.respuesta);
                if(response.success) {
                    alert("Agregado con exito");
                } else {
                    alert("No se agregó");
                }
            },
            error: function(){
                swal('¡Error!','Error de ejecución del Ajax', 'error');
            }
        });

        return false;
    })
})