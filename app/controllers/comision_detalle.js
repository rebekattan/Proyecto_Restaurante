$(document).ready(function(){
    let $empleado = document.querySelector('#cod_empleado');
    let $comision = document.querySelector('#cod_comision');
    
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

    function cargarComision(){
        $.ajax({
            type: "GET",
            url: "app/models/mostrarComision.php",
            success:function(response){
                const comisions = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                comisions.forEach(comision => {
                    template += `<option value="${comision.cod_comision}">${comision.comision}</option>`
                })
    
                $comision.innerHTML = template;
            }
        });
    }
    
    cargarEmpleado();
    cargarComision();
    
    $('#btn_frm_comision_detalle').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_comision_detalle').serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "app/models/comision_detalle.php",
            data: datos,
            success:function(response){
                console.log(response);
                if(response == 1) {
                    alert("Agregado con exito");
                } else {
                    alert("No se agregó");
                }
            }
        });

        return false;
    })
})