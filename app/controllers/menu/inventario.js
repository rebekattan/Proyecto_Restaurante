$(document).ready(function(){
    let $productos = document.querySelector('#cod_productos');
    let $unidad = document.querySelector('#cod_unidad');
    
    function cargarProducto(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarProducto.php",
            success:function(response){
                const productos = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                productos.forEach(productos => {
                    template += `<option value="${productos.cod_productos}">${productos.nom_producto}</option>`
                })
    
                $productos.innerHTML = template;
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

    cargarProducto();
    cargarUnidad();
    
    $('#btn_frm_inventario').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_inventario').serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "app/models/menu/inventario.php",
            data: datos,
            success:function(response){
                console.log(response.respuesta);
                if(response.success==true) {
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