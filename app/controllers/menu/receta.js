$(document).ready(function(){
    let $productos = document.querySelector('#cod_productos');
    let $receta_catalogo = document.querySelector('#cod_receta_catalogo');
    let $unidad = document.querySelector('#cod_unidad');
    let $empleado = document.querySelector('#cod_empleado');
    
    function cargarProducto(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarProducto.php",
            success:function(response){
                const producto = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                producto.forEach(productos => {
                    template += `<option value="${productos.cod_productos}">${productos.nom_producto}</option>`
                })
    
                $productos.innerHTML = template;
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

    function cargarUnidad(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarUnidad.php",
            success:function(response){
                const unidades = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                unidades.forEach(unidad => {
                    template += `<option value="${unidad.cod_unidad}">${unidad.nom_unidad}</option>`
                })
    
                $unidad.innerHTML = template;
            }
        });
    }

    function cargarEmpleado(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarEmpleado.php",
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

    cargarProducto();
    cargarRecetaCatalogo();
    cargarUnidad();
    cargarEmpleado();
    
    $('#btn_frm_receta').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_receta').serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "app/models/menu/receta.php",
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