$(document).ready(function(){
    let $empleado = document.querySelector('#cod_empleado');
    let $receta_catalogo = document.querySelector('#cod_receta_catalogo');
    
    function cargarEmpleado(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarChef.php",
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

    function cargarRecetaCatalogo(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarCatalogo.php",
            success:function(response){
                const receta_catalogos = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                receta_catalogos.forEach(receta_catalogo => {
                    template += `<option value="${receta_catalogo.cod_receta_catalogo}">${receta_catalogo.nom_receta}</option>`
                })
    
                $receta_catalogo.innerHTML = template;
            }
        });
    }
    
    cargarEmpleado();
    cargarRecetaCatalogo();
    
    $('#btn_frm_receta_chef').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_receta_chef').serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "app/models/menu/receta_chef.php",
            data: datos,
            success:function(response){
                console.log(response.respuesta);
                if(response.success) {
                    alert("Agregado con exito");
                } else {
                    alert("Agregado con exito");
                }
            },
            error: function(){
                swal('¡Error!','Error de ejecución del Ajax', 'error');
            }
        });

        return false;
    })
})